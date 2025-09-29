import { style, keyframes } from '@vanilla-extract/css';

const page = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
});

const container = style({
    width: '400px', 
    padding: '80px',
    borderRadius: '24px',
    background: 'radial-gradient(circle at top left, #8e8b9546, #132343, #8e8b9546)',
});

const title = style({
    marginBottom: '20px',
    fontSize: '40px',
    fontFamily: 'serif',
});

const form = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '10px',
});

const input = style({
    width: '100%',
    padding: '10px',
    color: '#EAEAEA',
    border: '2px solid #333333',
    backgroundColor: '#09171F',
    borderRadius: '5px',
    fontSize: '16px'
});

const button = style({
    width: '100%',
    padding: '10px',
    color: '#FFFFFF',
    border: 'none',
    backgroundColor: '#A47D52',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    selectors: {
        '&:hover': {
            backgroundColor: '#725639ff'
        }
    }
});

const RegisterButton = style({
    display: 'block',
    textAlign: 'right',
    width: '100%',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'underline',
});

const testLoginBox = style({
    marginTop: '20px', 
    padding: '10px', 
    backgroundColor: '#09171F', 
    border: '2px solid #333333',
    borderRadius: '5px' 
});

const pTitle = style({
    fontSize: '14px', 
    color: '#bbb'
});

const testLoginButton = style({
    marginTop: '5px',
    padding: '5px 10px',
    backgroundColor: '#5a442dff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
});

const pAccount = style({
    fontSize: '12px', 
    color: '#aaa', 
    marginTop: '5px'
});

const loadingBox = style({
    display: 'flex',
    position: 'absolute',
    width: '600px',
    height: '300px',
    opacity: '0.8',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
});

const dots = keyframes({
    '0%, 20%': { content: '""' },
    '40%': { content: '"."' },
    '60%': { content: '".."' },
    '80%, 100%': { content: '"..."' },
});

const loadingText = style({
    color: '#FFFFFF',
    fontSize: '18px',
    selectors: {
        '&::after': {
            content: '""',
            animation: `${dots} 1.5s infinite`,
        },
    },
});

const styles = {
    page,
    container,
    title,
    form,
    input,
    button,
    RegisterButton,
    testLoginBox,
    pTitle,
    testLoginButton,
    pAccount,
    
    loadingBox,
    loadingText,
};

export default styles;