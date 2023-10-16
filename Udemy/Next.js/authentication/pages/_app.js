import { SessionProvider } from 'next-auth/react';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
 return (
  <SessionProvider session={session}>
   {Component.auth ? (
    <Auth>
     <Layout>
      <Component {...pageProps} />
     </Layout>
    </Auth>
   ) : (
    <Layout>
     <Component {...pageProps} />
    </Layout>
   )}
  </SessionProvider>
 );
}

function Auth({ children }) {
 // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
 const { status } = useSession({ required: true });

 if (status === 'loading') {
  return <div>Loading...</div>;
 }

 return children;
}

export default MyApp;
