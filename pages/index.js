import Head from 'next/head'
import Categories from '../components/Landing Page/Categories'
import FeaturedSection from '../components/Landing Page/FeaturedSection'
import SplashPage from '../components/Landing Page/SplashPage'
import TaglineSection from '../components/Landing Page/TaglineSection'
import AboutProjectSection from '../components/Landing Page/AboutProjectSection'
import styles from '../styles/Home.module.css'
import KeyItemsSection from '../components/Landing Page/KeyItemsSection'

import commerce from '../lib/commerce';

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    limit: 100,
  });

  return { props: { products }, };
};


export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johnny{`'`}s | for Bivens Blueprint, LLC.</title>
      </Head>

      <main >
      
        <SplashPage />

        <Categories />

        <TaglineSection />

        <FeaturedSection products={products} />

        {/* <AboutProjectSection /> */}

        <KeyItemsSection />
        
      </main>
    </div>
  )
}
