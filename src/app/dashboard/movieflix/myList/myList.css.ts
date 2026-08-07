import { style } from '@vanilla-extract/css';

const wrapper = style({
  width: '100%',
  boxSizing: 'border-box',
  marginTop: '4vw',
  paddingLeft: '3.5vw',
  paddingRight: '3.5vw',
  marginBottom: '14vw'
});

const title = style({
  color: '#fff',
  fontSize: '1.56vw',
  fontWeight: '700',
  letterSpacing: '0.1vw'
});

const flexGrid = style({
  marginTop: '1vw',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '3.5vw'
});

const emptyMessage = style({
  color: '#fff',
  marginTop: '1vw'
});

const cardWrap = style({
  position: 'relative',
  minWidth: '13.5vw'
});

const removeBtn = style({
  position: 'absolute',
  top: '0.5vw',
  right: '0.5vw',
  zIndex: '3',
  border: 'none',
  borderRadius: '0.5vw',
  padding: '0.35vw 0.8vw',
  fontSize: '0.85vw',
  fontWeight: '600',
  color: '#fff',
  background: 'rgba(0, 0, 0, 0.65)',
  cursor: 'pointer',
  transition: 'background 0.18s',
  selectors: {
    '&:hover': {
      background: '#e50914'
    }
  }
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
  gap: '0.8vw',
  marginBottom: '2vw'
});

const listTab = style({
  fontSize: '1vw',
  fontWeight: 600,
  borderRadius: '0.4vw',
  padding: '0.5vw 1.2vw',
  border: 'none',
  cursor: 'pointer',
  background: '#333',
  color: '#fff',
  transition: 'background 0.18s',
  selectors: {
    '&:hover': {
      background: '#444'
    }
  }
});

const listTabWrap = style({
  display: 'flex',
  gap: '0.2vw',
  background: '#333',
  borderRadius: '0.4vw'
});

const listTabDelete = style({
  fontSize: '0.9vw',
  color: '#aaa',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0 0.6vw',
  transition: 'color 0.15s',
  selectors: {
    '&:hover': {
      backgroundColor: '#e50914'
    }
  }
});

const listTabActive = style({
  background: '#e50914',
  selectors: {
    '&:hover': {
      background: '#b0060f'
    }
  }
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
  title,
  flexGrid,
  emptyMessage,
  cardWrap,
  removeBtn,
  inputDiv,
  listTabs,
  listTab,
  listTabWrap,
  listTabDelete,
  listTabActive,
  newListInput,
  newListBtn
};

export default styles;
