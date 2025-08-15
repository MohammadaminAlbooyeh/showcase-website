import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  const getNavLinkClass = (href) =>
    router.pathname === href ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" className={getNavLinkClass('/')} tabIndex={0} aria-label="Home">Amin Albooyeh</Link>
        </div>
        <div className="navbar-links">
          <Link href="/" className={getNavLinkClass('/')} tabIndex={0}>Home</Link>
          <Link href="/portfolio" className={getNavLinkClass('/portfolio')} tabIndex={0}>Portfolio</Link>
          <Link href="/projects" className={getNavLinkClass('/projects')} tabIndex={0}>Projects</Link>
          <Link href="/resume" className={getNavLinkClass('/resume')} tabIndex={0}>Resume</Link>
          <Link href="/contactus" className={getNavLinkClass('/contactus')} tabIndex={0}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
