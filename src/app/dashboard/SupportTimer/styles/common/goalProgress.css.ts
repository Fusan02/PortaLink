import { style } from '@vanilla-extract/css';

const container = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const header = style({
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333',
});

const achievementBanner = style({
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    padding: '12px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '16px',
    fontSize: '16px',
});

const stats = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '16px',
});

const current = style({
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2196F3',
});

const separator = style({
    fontSize: '24px',
    color: '#999',
});

const target = style({
    fontSize: '24px',
    color: '#666',
});

const progressBarContainer = style({
    width: '100%',
    height: '24px',
    backgroundColor: '#E0E0E0',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '12px',
});

const progressBarFill = style({
    height: '100%',
    transition: 'width 0.3s ease, background-color 0.3s ease',
    borderRadius: '12px',
});

const progressPercent = style({
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#666',
});

const goalProgress = {
    container,
    header,
    achievementBanner,
    stats,
    current,
    separator,
    target,
    progressBarContainer,
    progressBarFill,
    progressPercent,
};

export default goalProgress;
