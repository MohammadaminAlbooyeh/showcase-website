export default function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} Amin Albooyeh &mdash; Showcase Website
      </div>
      <div>
        <a href="https://github.com/MohammadaminAlbooyeh" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:your@email.com">Email</a>
        {/* Add more social/contact links as needed */}
      </div>
    </footer>
  );
}
