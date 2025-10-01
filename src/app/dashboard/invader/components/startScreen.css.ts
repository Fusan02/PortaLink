import { style } from '@vanilla-extract/css';

const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '800px',
    height: '600px',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white',
    padding: '40px 20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
});


const title = style({
    fontSize: '56px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#00ff00',
    textShadow: '0 0 20px #00ff00'
});

const instructions = style({
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '16px',
    lineHeight: '1.5',
});

const startButton = style({
    padding: '12px 35px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#00ff00',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'all 0.3s',
    selectors: {
        '&:hover': {
            backgroundColor: '#00cc00',
            transform: 'scale(1.05)',
        },
        '&:active': {
            transform: 'scale(0.95)',
        },
    },
});

const footer = style({
    fontSize: '14px',
    color: '#888',
});

const difficultySection = style({
    marginBottom: '20px',
    textAlign: 'center',
});

const difficultyButtons = style({
    display: 'flex',
    gap: '12px',
    marginTop: '10px',
});

const difficultyButton = style({
    padding: '8px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#333',
    border: '2px solid #666',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    selectors: {
        '&:hover': {
            backgroundColor: '#555',
            borderColor: '#888',
        },
    },
});

const difficultyButtonActive = style({
    padding: '8px 20px',
    fontSize: '16px',
    color: 'black',
    backgroundColor: '#00ff00',
    border: '2px solid #00ff00',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
});

const cheatButton = style({
    padding: '6px 16px',
    fontSize: '14px',
    color: 'white',
    backgroundColor: '#ff4444',
    border: '2px solid #ff6666',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s',
    selectors: {
        '&:hover': {
            backgroundColor: '#ff6666',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(255, 68, 68, 0.3)',
        },
        '&:active': {
            transform: 'translateY(0)',
        },
    },
});

const styles = {
    container,
    title,
    instructions,
    startButton,
    footer,
    difficultySection,
    difficultyButtons,
    difficultyButton,
    difficultyButtonActive,
    cheatButton,
};

export default styles;
