import '../App.css';
import { NavBar } from '../components';

export default function Layout({ children }) {
  return (
    <div className="App">
      <NavBar />
      <main className="content">{children}</main>
    </div>
  );
}
