
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default function Resume() {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <div className="resume-box" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          href="/resume.pdf"
          target="_blank"
          sx={{
            backgroundColor: 'yellow',
            color: 'var(--color-bg)',
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#d7ae3eff',
            }
          }}
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
}
