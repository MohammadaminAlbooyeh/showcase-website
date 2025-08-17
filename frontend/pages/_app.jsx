// frontend/pages/_app.jsx
import '../components/FixedBottomBar.css';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FixedBottomBar from '../components/FixedBottomBar';

export default function MyApp({ Component, pageProps }) {
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