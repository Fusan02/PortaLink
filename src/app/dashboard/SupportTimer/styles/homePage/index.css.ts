import { style } from '@vanilla-extract/css';

const container = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    gap: '30px',
    
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

const description = style({
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    color: '#333',
    lineHeight: '1.8',
});

const descriptionTitle = style({
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#1E362D',
    textAlign: 'center',
});

const descriptionSection = style({
    marginBottom: '30px',
});

const descriptionSectionTitle = style({
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#1E362D',
    borderLeft: '4px solid #4CAF50',
    paddingLeft: '12px',
});

const descriptionText = style({
    fontSize: '16px',
    color: '#555',
    marginBottom: '8px',
});

const descriptionList = style({
    listStyle: 'none',
    padding: '0',
    margin: '0',
});

const descriptionListItem = style({
    fontSize: '16px',
    color: '#555',
    marginBottom: '12px',
    paddingLeft: '20px',
    position: 'relative',
    selectors: {
        '&::before': {
            content: '•',
            position: 'absolute',
            left: '0',
            color: '#4CAF50',
            fontWeight: 'bold',
            fontSize: '20px',
        }
    }
});

const index = {
    container,
    startStopContainer,
    startButton,
    stopButton,

    description,
    descriptionTitle,
    descriptionSection,
    descriptionSectionTitle,
    descriptionText,
    descriptionList,
    descriptionListItem,
};

export default index;