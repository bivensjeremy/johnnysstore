import Layout from '../components/Layout';
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CartProvider } from '../context/loadCartData';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'

nprogress.configure({ showSpinner: true });

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
  },
  palette: {
    primary: {
      main: '#F05454'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root:{
          backgroundColor: '#fff'
        }
      }
    }
  }
})

function MyApp({ Component, pageProps: { ...pageProps} }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      nprogress.start();
    });

    router.events.on('routeChangeComplete' || 'routeChangeError', () => {
      nprogress.done();
    });
    return () => {
      nprogress.done();
    };
  }, [router.events]);


  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
          <Layout>
            <Head>
              {/* Meta Tags */}
                <meta name="description" content="Johnny's random clothes and thrift shop items!" />
                <meta name="keywords" content="Bivens Blueprint LLC, web design and development, thrift shop in Albany GA, ecommerce" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="canonical" href="https://bivensblueprint.com" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Component {...pageProps} />
          </Layout>
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp