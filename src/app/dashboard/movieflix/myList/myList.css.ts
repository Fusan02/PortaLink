import { style } from '@vanilla-extract/css';

const wrapper = style({
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '4vw',
    paddingLeft: '3.5vw',
    paddingRight: '3.5vw',
    marginBottom: '14vw'
});

const emptyMessage = style({
    color: '#fff',
    marginTop: '1vw'
});

const inputDiv = style({
    display: 'flex',
    paddingTop: '2vw',
    marginBottom: '1.5vw',
    gap: '0.8vw'
});

const listTabs = style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '2.5vw',
    marginBottom: '2vw'
});

const listTabEntry = style({
    display: 'flex',
    gap: '2.0vw',
    flex: '0 0 auto'
});

const listTabEntryExpanded = style({
    flex: '1 1 100%',
    minWidth: 0
});

const newListInput = style({
    fontSize: '0.95vw',
    padding: '0.45vw 0.9vw',
    borderRadius: '0.4vw',
    border: '0.05vw solid #444',
    background: '#1c1c1c',
    color: '#fff',
    outline: 'none',
    selectors: {
        '&::placeholder': {
            color: '#888'
        },
        '&:focus': {
            borderColor: '#e50914'
        }
    }
});

const newListBtn = style({
    fontSize: '0.95vw',
    fontWeight: 600,
    padding: '0.45vw 1vw',
    borderRadius: '0.4vw',
    border: 'none',
    cursor: 'pointer',
    background: '#444',
    color: '#fff',
    transition: 'background 0.18s',
    selectors: {
        '&:hover': {
            background: '#e50914'
        }
    }
});

const styles = {
    wrapper,
    emptyMessage,
    inputDiv,
    listTabs,
    listTabEntry,
    listTabEntryExpanded,
    newListInput,
    newListBtn
};

export default styles;
