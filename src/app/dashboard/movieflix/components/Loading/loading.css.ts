import { style, keyframes } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.3 }
});

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: 'hsl(0, 0%, 9%)',
  gap: '24px'
});

const spinner = style({
  width: '52px',
  height: '52px',
  borderRadius: '50%',
  border: '4px solid #333',
  borderTopColor: '#e50914',
  animation: `${spin} 0.9s linear infinite`
});

const label = style({
  color: '#e50914',
  fontSize: '1.1vw',
  fontWeight: 700,
  letterSpacing: '0.2em',
  animation: `${pulse} 1.6s ease-in-out infinite`
});

const styles = {
  wrapper,
  spinner,
  label
};

export default styles;
