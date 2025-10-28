import { style } from '@vanilla-extract/css';

const page = style({
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
});

const h1 = style({
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#333',
});

const nonSearchSession = style({
    textAlign: 'center',
    padding: '40px',
    color: '#999',
});

const nonSessionContainer = style({
    textAlign: 'center',
    padding: '60px 20px',
    color: '#999',
});

const loadingContainer = style({
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '100px',
});

const loading = style({
    fontSize: '18px',
    color: '#666',
});

const errorContainer = style({
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '100px',
});

const error = style({
    backgroundColor: '#FFEBEE',
    color: '#C62828',
    padding: '16px',
    borderRadius: '8px',
});

const index = {
    page,
    h1,
    nonSearchSession,
    nonSessionContainer,
    loadingContainer,
    loading,
    errorContainer,
    error,
};

export default index;