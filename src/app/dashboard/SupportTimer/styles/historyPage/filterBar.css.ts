import { style } from '@vanilla-extract/css';

const container = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
});

const searchBar = style({
    display: 'block',
    fontSize: '12px',
    color: '#666',
    marginBottom: '6px',
});

const input = style({
    width: '100%',
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    outline: 'none',
});

const tagLabel = style({
    display: 'block',
    fontSize: '12px',
    color: '#666',
    marginBottom: '6px'
});

const tagSelect = style({
    width: '100%',
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    outline: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
});

const filterBar = {
    container,
    searchBar,
    input,
    tagLabel,
    tagSelect,
};

export default filterBar;