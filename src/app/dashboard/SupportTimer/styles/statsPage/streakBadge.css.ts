import { style } from '@vanilla-extract/css';

const page = style({
    marginTop: '24px',
    padding: '20px',
    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
    textAlign: 'center',
});

const badge = style({
    fontSize: '48px',
    marginBottom: '8px',
});

const streak = style({
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '4px',
});

const message = style({
    fontSize: '14px',
    color: '#666',
});

const streakBadge = {
    page,
    badge,
    streak,
    message,
};

export default streakBadge;