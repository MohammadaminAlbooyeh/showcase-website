
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

export default function ContactUs() {
	const [form, setForm] = React.useState({ name: '', email: '', message: '' });
	const [errors, setErrors] = React.useState({});
	const [success, setSuccess] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const validate = () => {
		const errs = {};
		if (!form.name.trim()) errs.name = 'Name is required';
		if (!form.email.trim()) errs.email = 'Email is required';
		else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
		if (!form.message.trim()) errs.message = 'Message is required';
		return errs;
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errs = validate();
		if (Object.keys(errs).length) {
			setErrors(errs);
			return;
		}
		setLoading(true);
		setErrors({});
		setSuccess(false);
		try {
			const res = await fetch('/api/contact/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			if (res.ok && data.success) {
				setSuccess(true);
				setForm({ name: '', email: '', message: '' });
			} else {
				setErrors(data.errors || { general: 'Something went wrong.' });
			}
		} catch (err) {
			setErrors({ general: 'Network error. Please try again.' });
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box maxWidth={500} mx="auto" mt={4} p={3} borderRadius={3} boxShadow={3} bgcolor="var(--color-nav-bg)">
			<Typography variant="h4" component="h1" color="var(--color-accent)" gutterBottom>Contact</Typography>
			<Typography color="var(--color-primary)" mb={2}>
				Feel free to reach out via this form. Your message will be sent directly to my email.
			</Typography>
			{success && <Alert severity="success" sx={{ mb: 2 }}>Message sent successfully!</Alert>}
			{errors.general && <Alert severity="error" sx={{ mb: 2 }}>{errors.general}</Alert>}
			<form onSubmit={handleSubmit} noValidate>
				<TextField
					label="Name"
					name="name"
					value={form.name}
					onChange={handleChange}
					error={!!errors.name}
					helperText={errors.name}
					fullWidth
					margin="normal"
					autoComplete="name"
				/>
				<TextField
					label="Email"
					name="email"
					value={form.email}
					onChange={handleChange}
					error={!!errors.email}
					helperText={errors.email}
					fullWidth
					margin="normal"
					autoComplete="email"
				/>
				<TextField
					label="Message"
					name="message"
					value={form.message}
					onChange={handleChange}
					error={!!errors.message}
					helperText={errors.message}
					fullWidth
					margin="normal"
					multiline
					minRows={4}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					disabled={loading}
					sx={{ mt: 2, fontWeight: 600, background: 'var(--color-accent)', color: 'var(--color-bg)' }}
				>
					{loading ? 'Sending...' : 'Send Message'}
				</Button>
			</form>
		</Box>
	);
}
