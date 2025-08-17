import { useState, useEffect } from 'react';
import styles from './FixedBottomBar.module.css';

export default function FixedBottomBar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.paddingBottom = '0';
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.paddingBottom = '80px'; // Adjust to match bar height
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed-bottom-bar" role="complementary" aria-label="Fixed bottom bar">
      <div className="content">
        <p>Welcome to our website! This is a fixed bottom bar.</p>
        <button className="close-button" onClick={handleClose} aria-label="Close bottom bar">×</button>
      </div>
    </div>
  );
}