// frontend/pages/_app.jsx
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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