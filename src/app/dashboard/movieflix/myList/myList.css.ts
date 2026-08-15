import { keyframes, style } from '@vanilla-extract/css';

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
  marginTop: '3vw',
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
  gap: '2.5vw',
  marginBottom: '2vw'
});

const listTabEntry = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1vw',
  flex: '0 0 auto'
});

const listTabEntryExpanded = style({
  flex: '1 1 100%',
  minWidth: 0
});

const expandOpen = keyframes({
  from: { transform: 'scaleX(0.3)', opacity: 0 },
  to: { transform: 'scaleX(1)', opacity: 1 }
});

const expandedRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1vw',
  flex: '1 1 auto',
  overflowX: 'auto',
  transformOrigin: 'left center', // カード側（左端）を軸に広がる
  animation: `${expandOpen} 0.25s ease-out`,
  scrollbarWidth: 'none',
  selectors: {
    '&:=webkit-scrollbar': {
      display: 'none'
    }
  }
});

const expandedLoading = style({
  color: '#aaa',
  fontSize: '0.95vw',
  paddingLeft: '1vw'
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
  listTabEntry,
  listTabEntryExpanded,
  expandedRow,
  expandedLoading,
  newListInput,
  newListBtn
};

export default styles;
