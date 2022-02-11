import { useEffect, useState } from 'react';
import Head from 'next/head';
import commerce from '../lib/commerce';
import { CartState } from '../context/loadCartData';
import CheckoutProcess from '../components/Checkout/Process/CheckoutProcess';
import { CircularProgress, Container, Typography } from '@mui/material';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
	const cart = CartState();
    const [checkoutToken, setCheckoutToken] = useState(null);

	useEffect(() => {
		const generateCheckoutToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
				setCheckoutToken(token);
			} catch (error) {
				console.log('There was an error generating checkout', error)
			}
		};
		generateCheckoutToken();
	}, [cart]);

  	return (
	  	<div>
			<Head>
				<title>Checkout | Johnny&apos;s</title>
			</Head>
			
			<Container sx={{ paddingY: 5 }}>
				<div align='center'>
					<Typography variant='h2'>
						Checkout
					</Typography>
				</div>

				{!checkoutToken ? (
					<div align='center'>
						<CircularProgress />
					</div> 
				) : (
					<Elements stripe={stripePromise}>
						{checkoutToken && (
							<CheckoutProcess 
								checkoutToken={checkoutToken}
							/>
						)}
					</Elements>
				)}
			</Container>
		</div>	
	);
};