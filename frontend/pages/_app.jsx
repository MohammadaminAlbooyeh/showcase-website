import App from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../components/FixedBottomBar.css';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FixedBottomBar from '../components/FixedBottomBar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Pre-fetch all routes for instant navigation
    ['/', '/portfolio', '/projects', '/resume', '/contactus'].forEach(route => {
      router.prefetch(route);
    });
  }, []);
  return (
    <>
      <NavBar />
      <main className="content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

// Add getInitialProps to handle server-side props
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;