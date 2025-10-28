import { style } from '@vanilla-extract/css';

const container = style({
    width: '100%',
    maxWidth: '500px',
    padding: '24px',
    background: 'linear-gradient(135deg, #FFE8CC 0%, #FFD4A3 100%)',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
});

const title = style({
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
    fontWeight: 'bold',
});

const message = style({
    fontSize: '16px',
    color: '#333',
    lineHeight: '1.6',
});

const motivationCard = {
    container,
    title,
    message,
};

export default motivationCard;