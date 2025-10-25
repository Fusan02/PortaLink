import { style } from '@vanilla-extract/css';

const page = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
});

const icon = style({
    fontSize: '32px',
});

const flex = style({
    flex: '1'
});

const label = style({
    fontSize: '14px',
    color: '#666',
    marginBottom: '4px',
});

const value = style({
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
});

const summaryCard = {
    page,
    icon,
    flex,
    label,
    value,
};

export default summaryCard;