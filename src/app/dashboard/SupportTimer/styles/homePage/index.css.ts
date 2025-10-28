import { style } from '@vanilla-extract/css';

const container = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    gap: '30px',
    minHeight: 'calc(100vh - 80px)',
});

const startStopContainer = style({
    display: 'flex',
    gap: '16px',
});

const startButton = style({
    padding: '16px 48px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
    transition: 'transform 0.2s',
});

const stopButton = style({
    padding: '16px 48px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#F44336',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(244, 67, 54, 0.3)',
    transition: 'transform 0.2s',
});

const index = {
    container,
    startStopContainer,
    startButton,
    stopButton,
};

export default index;