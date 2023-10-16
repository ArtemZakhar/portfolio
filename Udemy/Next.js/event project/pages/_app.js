import Head from 'next/head';
import { NotificationContextProvider } from '../store/notification-contex';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
 return (
  <NotificationContextProvider>
   <Layout>
    <Head>
     <title>NextJS events</title>
     <meta name="description" content="NextJS events" />
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
   </Layout>
  </NotificationContextProvider>
 );
}

export default MyApp;
