import { style } from '@vanilla-extract/css';

const container = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const title = style({
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginBottom: '12px' ,
    color: '#333',
});

const nonTag = style({
    fontSize: '14px',
    color: '#666'
});

const tags = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
});

const tagContainer = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '12px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
});

const tag = style({
    padding: '6px 12px',
    color: 'white',
    borderRadius: '16px',
    fontSize: '14px',
    minWidth: '80px',
    textAlign: 'center',
});

const input = style({
    width: '50px',
    height: '40px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
});

const span = style({
    fontSize: '14px',
    color: '#666'
});

const tagColorEditor = {
    container,
    title,
    nonTag,
    tags,
    tagContainer,
    tag,
    input,
    span,
};

export default tagColorEditor;