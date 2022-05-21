import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<>
      <Head>
        <title>resume</title>
        <meta name="description" content="resume by ta93abe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
	);
}

export default MyApp;
