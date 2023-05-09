import Layout from "@/components/Layout.jsx";
import "@/styles/globals.css";
import { ProvideContext } from "@/utils";

export default function App({ Component, pageProps }) {
  return (
    <ProvideContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideContext>
  );
}
