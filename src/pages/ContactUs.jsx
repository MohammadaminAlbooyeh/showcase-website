
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div style={{color:'#fff', padding:'2rem', maxWidth: 500}}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1rem',background:'#222',padding:'1.5rem',borderRadius:'1rem'}}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={{padding:'0.5rem',borderRadius:'0.5rem',border:'1px solid #444'}} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required style={{padding:'0.5rem',borderRadius:'0.5rem',border:'1px solid #444'}} />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required rows={8} style={{padding:'1rem',borderRadius:'0.7rem',border:'1px solid #444', fontSize:'1.1rem', minHeight:'140px', resize:'vertical'}} />
        <button type="submit" style={{padding:'1rem',borderRadius:'0.7rem',background:'#ff3571',color:'#fff',border:'none',fontWeight:'bold', fontSize:'1.1rem'}}>Send</button>
      </form>
      {status && <div style={{marginTop:'1rem'}}>{status}</div>}
      <div style={{display:'flex',gap:'2rem',marginTop:'2.5rem'}}>
        {/* Gmail Icon (circle, modern) */}
        <span style={{cursor:'pointer'}} title="Show Gmail address" onClick={()=>navigate('/contact/links')}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#23242a"/>
            <path d="M8 12.5V20a2 2 0 002 2h12a2 2 0 002-2v-7.5l-8 5.25-8-5.25z" fill="#fff"/>
            <path d="M24 12.5V20a2 2 0 01-2 2H10a2 2 0 01-2-2v-7.5l8 5.25 8-5.25z" fill="#fff" fillOpacity=".1"/>
            <path d="M8 12.5l8 5.25 8-5.25" stroke="#fff" strokeWidth="2"/>
            <path d="M8 12.5V20a2 2 0 002 2h12a2 2 0 002-2v-7.5" stroke="#fff" strokeWidth="2"/>
          </svg>
        </span>
        {/* Telegram Icon (dark, bold) */}
        <span style={{cursor:'pointer'}} title="Show Telegram username" onClick={()=>navigate('/contact/links')}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#23242a"/>
            <path d="M9.04 13.47l-.36 3.13c.52 0 .75-.22 1.03-.48l2.48-2.23 5.15 3.77c.94.52 1.62.25 1.86-.87l3.38-15.87c.3-1.36-.5-1.9-1.38-1.57L1.6 9.47c-1.33.53-1.31 1.28-.23 1.62l4.1 1.28 9.52-6.01c.45-.28.87-.13.53.18l-7.7 6.93z" fill="#fff"/>
          </svg>
        </span>
        {/* LinkedIn Icon (dark, bold) */}
        <span style={{cursor:'pointer'}} title="Show LinkedIn profile" onClick={()=>navigate('/contact/links')}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#23242a"/>
            <path d="M6.94 19.5V9.5H4.5v10h2.44zm-1.22-11.25a1.41 1.41 0 110-2.82 1.41 1.41 0 010 2.82zM20 19.5h-2.44v-5.13c0-1.22-.02-2.8-1.71-2.8-1.71 0-1.97 1.34-1.97 2.7v5.23H11.5v-10h2.34v1.36h.03c.33-.62 1.13-1.27 2.33-1.27 2.5 0 2.96 1.65 2.96 3.8v6.11z" fill="#fff"/>
          </svg>
        </span>
      </div>
      {/* Removed direct links, now shown only on the new page */}
    </div>
  );
};

export default ContactUs;
