import { useState } from 'react';
import { Button, Box, Stepper, Step, StepLabel, Container, CircularProgress } from '@mui/material';
import Shipping from './Shipping';
import Payment from './Payment';
import Review from './Review';
import { useFormik } from 'formik';
import { shippingAddressValidationSchema } from '../../../Validations/shippingAddressValidation';

import Link from 'next/link';
import commerce from '../../../lib/commerce';
import { useStripe, useElements,  CardNumberElement } from "@stripe/react-stripe-js";
import { CartDispatch } from '../../../context/loadCartData';
import { useRouter } from 'next/router';
const checkoutComponents = ({activeStep, formik, checkoutToken}) => {
    switch (activeStep) {
        case 0:
        return <Shipping formik={formik} />
		case 1:
        return <Review 
                    checkoutToken={checkoutToken}
                    formik={formik.values}
                />
        case 2:
        return <Payment />
        default:
        return 'unknown step'
    }
}

const CheckoutProcess = ({checkoutToken}) => {
	const elements= useElements();
	const stripe = useStripe();
	const router = useRouter();
	const { setCart } = CartDispatch();
	const [customer, setCustomerShippingDetails] = useState(null)
	const [orderProcessing, setOrderProcessing] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	
	const nextStep = () => { setActiveStep((currentStep) => currentStep + 1) }
	const previousStep = () => { setActiveStep((currentStep) => currentStep - 1) }

	const progressSteps = () => {
		switch (activeStep) {
			case 0:
			return <Button
						onClick={() => formik.handleSubmit()}
						variant='contained'
					> 
					 Continue to Review
					</Button> 
			case 1:
			return <Button
						onClick={() => nextStep()}
						variant='contained'
					> 
					Continue to Payment 
					</Button> 
			case 2:
			return <Button
						onClick={() => handleSubmit()}
						variant='contained'
						disabled={orderProcessing}
					> 
					{ orderProcessing ? <CircularProgress size={24} /> : 'Submit Order' } 
					</Button> 
			default:
			return 'Unknown step'
		}
	};

	const refreshCart = async () => {
		const {cart} = await commerce.cart.refresh();
		setCart(cart);
	};

	const handleOrderCaptured = () => {
		try {
			setOrderProcessing(false);
			refreshCart();
			router.push('/ordercomplete');
		} catch (error) {
			alert('Something went wrong, but rest assured, your order was processed! Check your email for a receipt.')
		}
	};

	const handleSubmit = async () => {
		setOrderProcessing(true);
		const orderData = {
			customer: {
				name: customer.name,
				email: customer.email,
				phone: customer.phone,
			},
			shipping: {
				name: customer.name,
				street: customer.street,
				town_city: customer.city,
				county_state: customer.state,
				postal_zip_code: customer.zip,
				country: 'US'
			  },
			line_items: checkoutToken.live.line_items,
		};
		const paymentMethodResponse = await stripe.createPaymentMethod({
		  type: 'card',
		  card: elements.getElement(CardNumberElement),
		});
		if (paymentMethodResponse.error) {
			alert("There was an error processing the payment. Please check the information and try again.", paymentMethodResponse.error.message);
			setOrderProcessing(false);
			return;
		};
		try {
			const order = await commerce.checkout.capture(checkoutToken.id, {
				...orderData,
				payment: {
					gateway: 'stripe',
					stripe: {
						payment_method_id: paymentMethodResponse.paymentMethod.id,
					}
				}
			})
			.then(handleOrderCaptured);
		} catch (response) {
			if (response.statusCode !== 402 || response.data.error.type !== 'requires_verification') {
				alert("Your order could not be processed. Contact Johnny's for assistance", response);
				return;
			}
			const cardActionResult = await stripe.handleCardAction(response.data.error.param)
			if (cardActionResult.error) {
				alert("Your order could not be processed. Contact Johnny's for assistance", cardActionResult.error.message);
				setOrderProcessing(false);
				return;
			}
			try {
				const order = await commerce.checkout.capture(checkoutToken.id,{
					...orderData,
					payment: {
						gateway: 'stripe',
						stripe: {
							payment_intent_id: cardActionResult.paymentIntent.id,
						},
					},
				})
				.then(handleOrderCaptured);
				return;
			} catch (response) {
				console.log(response);
				alert("Your order could not be processed. Contact Johhny's for assistance", response.message);
				setOrderProcessing(false);
			}
		}
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			street: '',
			city: '',
			state: '',
			zip: '',
			phone: ''
		},
		validationSchema: shippingAddressValidationSchema,
		onSubmit: async(values) => {
			setCustomerShippingDetails(values)
			nextStep();
		}
	});

	const props = {activeStep, formik, checkoutToken};

  	return (
		<div>
			<form onClick={() => {handleSubmit}}>
				<Container sx={{ paddingTop: 5, mx: 'auto' }}>
					<Box sx={{ width: '100%' }}>
						<Stepper activeStep={activeStep} alternativeLabel>
							<Step>
								<StepLabel>Shipping Address</StepLabel>
							</Step>

							<Step>
								<StepLabel>Review Order</StepLabel>
							</Step>

							<Step>
								<StepLabel>Payment & Confirm</StepLabel>
							</Step>
						</Stepper>

						{checkoutComponents({...props})}
							
						<Box sx={{ 
							padding: 3, 
							justifyContent: 'space-evenly', 
							display: 'flex'
						}}>
							<Box>
								{activeStep === 0 ? (
									<Link href='/shoppingcart'><a>
										<Button 
											variant='contained' 
											color='info'>Return to Cart
										</Button>
									</a></Link>
								) : (
									<Button 
										variant='outlined'
										color='info'
										onClick={() => previousStep()}>Go Back</Button>
								)}
							</Box>

							<Box>
								{progressSteps({activeStep, nextStep})}
							</Box>
						</Box>	
					</Box>
				</Container>
			</form>
		</div>
    );
}

export default CheckoutProcess;