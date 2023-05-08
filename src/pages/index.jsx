import HeroPod from "@/components/HeroPod";
import ProductCategories from "@/components/ProductCategories";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/shop-logo.jpg" />
        <title>Comfortable Clothing</title>
      </Head>
      <HeroPod />
      <ProductCategories productCategories={data} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http:localhost:3000/api/categories/`);
  const data = await res.json();
  return { props: { data } };
}
