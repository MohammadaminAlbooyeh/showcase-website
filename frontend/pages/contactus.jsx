import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { alpha, keyframes } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const successAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const sendIconAnimation = keyframes`
  0% { transform: rotate(-10deg) translateX(0); }
  50% { transform: rotate(10deg) translateX(5px); }
  100% { transform: rotate(-10deg) translateX(0); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

const fadeInUp = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(20px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export default function ContactUs() {
	const [form, setForm] = React.useState({ 
		name: '', 
		email: '', 
		subject: '',
		message: '' 
	});
	const [errors, setErrors] = React.useState({});
	const [success, setSuccess] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [submitCount, setSubmitCount] = React.useState(0);
	const [submitAttempted, setSubmitAttempted] = React.useState(false);
	
	// Reset success message after 5 seconds
	React.useEffect(() => {
		let timer;
		if (success) {
			timer = setTimeout(() => {
				setSuccess(false);
			}, 5000);
		}
		return () => clearTimeout(timer);
	}, [success]);

	const validate = () => {
		const errs = {};
		if (!form.name.trim()) errs.name = 'Name is required';
		if (!form.email.trim()) errs.email = 'Email is required';
		else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
		if (!form.subject.trim()) errs.subject = 'Subject is required';
		if (!form.message.trim()) errs.message = 'Message is required';
		return errs;
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitAttempted(true);
		const errs = validate();
		
		if (Object.keys(errs).length) {
			setErrors(errs);
			// Trigger shake animation for form
			const form = e.target;
			form.style.animation = `${shake} 0.5s ease-in-out`;
			setTimeout(() => {
				form.style.animation = '';
			}, 500);
			return;
		}

		setLoading(true);
		setErrors({});
		setSuccess(false);

		try {
			const res = await fetch('http://localhost:8000/api/contact/', {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(form),
			});
			
			const data = await res.json();
			
			if (res.ok) {
				setSuccess(true);
				setForm({ name: '', email: '', subject: '', message: '' });
				setSubmitCount(prev => prev + 1);
				setSubmitAttempted(false);
			} else {
				if (res.status === 429) {
					setErrors({ general: 'Too many messages sent. Please try again later.' });
				} else {
					setErrors(data.errors || { general: 'Failed to send message. Please try again.' });
				}
			}
		} catch (error) {
			setErrors({ general: 'Network error. Please check your connection.' });
		} finally {
			setLoading(false);
		}
	};

	return (
		<Fade in timeout={800}>
			<Box 
				maxWidth={600} 
				mx="auto" 
				mt={4} 
				p={4} 
				borderRadius={3} 
				boxShadow={3} 
				bgcolor="var(--color-nav-bg)"
				sx={{
					transform: 'translateY(0)',
					transition: 'all 0.3s ease-in-out',
					'&:hover': {
						transform: 'translateY(-5px)',
						boxShadow: theme => `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`
					},
					position: 'relative',
					overflow: 'hidden',
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						height: '4px',
						background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-primary) 100%)',
					}
				}}
			>
				<Typography 
					variant="h4" 
					component="h1" 
					color="var(--color-accent)" 
					gutterBottom
					sx={{ 
						fontWeight: 700,
						textAlign: 'center',
						mb: 3,
						fontSize: { xs: '1.8rem', sm: '2.125rem' },
						letterSpacing: '-0.5px',
						animation: `${fadeInUp} 0.6s ease-out`
					}}
				>
					Get in Touch
				</Typography>
				<Typography 
					color="var(--color-primary)" 
					mb={4}
					textAlign="center"
					sx={{ 
						opacity: 0.9,
						fontSize: { xs: '1rem', sm: '1.1rem' },
						maxWidth: '500px',
						mx: 'auto',
						lineHeight: 1.6,
						animation: `${fadeInUp} 0.6s ease-out 0.2s both`
					}}
				>
					Have a question or want to work together? Feel free to reach out! 
					I'll get back to you as soon as possible.
				</Typography>
			
				<Box sx={{ mb: 4, minHeight: '60px' }}>
					<Slide direction="down" in={success} mountOnEnter unmountOnExit>
						<Alert 
							icon={<CheckCircleIcon sx={{ 
								animation: `${successAnimation} 0.5s ease-out`,
								fontSize: '24px'
							}} />}
							severity="success" 
							sx={{ 
								mb: 3,
								alignItems: 'center',
								backgroundColor: alpha('#4caf50', 0.1),
								color: '#2e7d32',
								borderLeft: '4px solid #2e7d32',
								'& .MuiAlert-icon': {
									color: '#2e7d32',
									alignItems: 'center'
								}
							}}
						>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography variant="subtitle1" fontWeight={600} mb={0.5}>
									Message Sent Successfully!
								</Typography>
								<Typography variant="body2">
									Thank you for your message! I'll respond as soon as possible.
								</Typography>
							</Box>
						</Alert>
					</Slide>
					
					<Slide direction="down" in={!!errors.general} mountOnEnter unmountOnExit>
						<Alert 
							icon={<ErrorOutlineIcon sx={{ 
								animation: `${shake} 0.5s ease-in-out`,
								fontSize: '24px'
							}} />}
							severity="error" 
							sx={{ 
								mb: 3,
								alignItems: 'center',
								backgroundColor: alpha('#f44336', 0.1),
								color: '#d32f2f',
								borderLeft: '4px solid #d32f2f',
								'& .MuiAlert-icon': {
									color: '#d32f2f',
									alignItems: 'center'
								}
							}}
						>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography variant="subtitle1" fontWeight={600} mb={0.5}>
									Error Sending Message
								</Typography>
								<Typography variant="body2">
									{errors.general}
								</Typography>
							</Box>
						</Alert>
					</Slide>
				</Box>

				<Box 
					component="form" 
					onSubmit={handleSubmit} 
					noValidate 
					sx={{
						'& .MuiTextField-root': {
							transition: 'transform 0.2s ease-in-out',
							'&:hover': {
								transform: 'translateX(4px)'
							}
						}
					}}
				>
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
						required
						sx={{ 
							mb: 2,
							animation: `${fadeInUp} 0.6s ease-out`,
							'& .MuiInputLabel-root': {
								color: errors.name ? 'error.main' : 'var(--color-primary)',
								transition: 'all 0.2s ease-in-out',
							},
							'& .MuiOutlinedInput-root': {
								'& fieldset': { 
									borderColor: errors.name ? 'error.main' : 'var(--color-primary)',
									borderWidth: '2px',
									transition: 'all 0.3s ease-in-out',
								},
								'&:hover fieldset': { 
									borderColor: errors.name ? 'error.main' : 'var(--color-accent)',
									animation: errors.name ? `${shake} 0.5s ease-in-out` : 'none',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'var(--color-accent)',
									borderWidth: '2px'
								}
							},
							'& .MuiInputLabel-root': { 
								color: 'var(--color-primary)',
								'&.Mui-focused': {
									color: 'var(--color-accent)'
								}
							},
							'& .MuiOutlinedInput-input': { 
								color: 'var(--color-primary)',
								fontSize: '1rem',
								padding: '14px 16px'
							},
							'& .MuiFormHelperText-root': {
								fontSize: '0.875rem',
								marginLeft: '4px'
							}
						}}
					/>
					<TextField
						label="Email"
						name="email"
						type="email"
						value={form.email}
						onChange={handleChange}
						error={!!errors.email}
						helperText={errors.email}
						fullWidth
						margin="normal"
						autoComplete="email"
						required
						sx={{ 
							mb: 2,
							'& .MuiOutlinedInput-root': {
								'& fieldset': { 
									borderColor: 'var(--color-primary)',
									borderWidth: '2px'
								},
								'&:hover fieldset': { 
									borderColor: 'var(--color-accent)',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'var(--color-accent)',
									borderWidth: '2px'
								}
							},
							'& .MuiInputLabel-root': { 
								color: 'var(--color-primary)',
								'&.Mui-focused': {
									color: 'var(--color-accent)'
								}
							},
							'& .MuiOutlinedInput-input': { 
								color: 'var(--color-primary)',
								fontSize: '1rem',
								padding: '14px 16px'
							}
						}}
					/>
					<TextField
						label="Subject"
						name="subject"
						value={form.subject}
						onChange={handleChange}
						error={!!errors.subject}
						helperText={errors.subject}
						fullWidth
						margin="normal"
						required
						sx={{ 
							mb: 2,
							animation: `${fadeInUp} 0.6s ease-out 0.2s both`,
							'& .MuiOutlinedInput-root': {
								'& fieldset': { 
									borderColor: errors.subject ? 'error.main' : 'var(--color-primary)',
									borderWidth: '2px',
									transition: 'all 0.3s ease-in-out',
								},
								'&:hover fieldset': { 
									borderColor: errors.subject ? 'error.main' : 'var(--color-accent)',
									animation: errors.subject ? `${shake} 0.5s ease-in-out` : 'none',
								},
								'&.Mui-focused fieldset': {
									borderColor: errors.subject ? 'error.main' : 'var(--color-accent)',
									borderWidth: '2px',
									background: alpha('#f9c846', 0.02)
								}
							},
							'& .MuiInputLabel-root': { 
								color: errors.subject ? 'error.main' : 'var(--color-primary)',
								transition: 'all 0.2s ease-in-out',
								'&.Mui-focused': {
									color: errors.subject ? 'error.main' : 'var(--color-accent)'
								}
							},
							'& .MuiOutlinedInput-input': { 
								color: 'var(--color-primary)',
								fontSize: '1rem',
								padding: '14px 16px'
							}
						}}
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
						required
						sx={{ 
							mb: 2,
							'& .MuiOutlinedInput-root': {
								'& fieldset': { 
									borderColor: 'var(--color-primary)',
									borderWidth: '2px'
								},
								'&:hover fieldset': { 
									borderColor: 'var(--color-accent)',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'var(--color-accent)',
									borderWidth: '2px'
								}
							},
							'& .MuiInputLabel-root': { 
								color: 'var(--color-primary)',
								'&.Mui-focused': {
									color: 'var(--color-accent)'
								}
							},
							'& .MuiOutlinedInput-input': { 
								color: 'var(--color-primary)',
								fontSize: '1rem',
								padding: '14px 16px'
							},
							'& .MuiOutlinedInput-multiline': {
								padding: '14px'
							}
						}}
					/>

					<Box sx={{ position: 'relative', width: '100%', mt: 4 }}>
						<Button
							type="submit"
							variant="contained"
							fullWidth
							disabled={loading}
							sx={{
								py: 2,
								px: 4,
								fontWeight: 600,
								fontSize: '1.1rem',
								background: 'var(--color-accent)',
								color: 'var(--color-bg)',
								transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
								position: 'relative',
								overflow: 'hidden',
								'&:hover': {
									background: 'var(--color-accent)',
									transform: 'translateY(-2px)',
									boxShadow: theme => `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
									'& .send-icon': {
										animation: `${sendIconAnimation} 1s infinite ease-in-out`,
									},
								},
								'&:active': {
									transform: 'translateY(0)',
								},
								'&:disabled': {
									background: 'var(--color-accent)',
									opacity: 0.7,
								},
								'&::after': {
									content: '""',
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
									background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
									transform: 'translateX(-100%)',
								},
								'&:hover::after': {
									transform: 'translateX(100%)',
									transition: 'transform 0.6s ease-in-out',
								}
							}}
						>
							<Box sx={{ 
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'center', 
								gap: 2,
								position: 'relative',
							}}>
								{loading ? (
									<>
										<CircularProgress 
											size={20} 
											thickness={4} 
											sx={{ 
												color: 'var(--color-bg)',
												animation: 'none',
											}} 
										/>
										<Typography 
											component="span"
											sx={{
												animation: `${successAnimation} 0.3s ease-out`,
											}}
										>
											Sending...
										</Typography>
									</>
								) : (
									<>
										<SendIcon 
											className="send-icon"
											sx={{ 
												fontSize: '1.2rem',
												transition: 'transform 0.3s ease',
												transform: 'rotate(-10deg)',
											}} 
										/>
										<span>Send Message</span>
									</>
								)}
							</Box>
						</Button>
					</Box>
				</Box>
			</Box>
		</Fade>
	);
}