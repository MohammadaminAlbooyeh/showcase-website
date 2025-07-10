import React from 'react';

const ContactLinks = () => (
  <div style={{color:'#fff', padding:'2rem', maxWidth: 500, margin: '0 auto', textAlign:'center'}}>
    <h2>Contact Links</h2>
    <ul style={{listStyle:'none',padding:0,fontSize:'1.2rem'}}>
      <li style={{margin:'1rem 0'}}>
        <strong>Gmail:</strong> amin.albooyeh@gmail.com
      </li>
      <li style={{margin:'1rem 0'}}>
        <strong>Telegram:</strong> <span style={{color:'#90caf9'}}>No Telegram username set</span>
      </li>
      <li style={{margin:'1rem 0'}}>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/amin-albooyeh" target="_blank" rel="noopener noreferrer" style={{color:'#90caf9'}}>https://www.linkedin.com/in/amin-albooyeh</a>
      </li>
    </ul>
  </div>
);

export default ContactLinks;
