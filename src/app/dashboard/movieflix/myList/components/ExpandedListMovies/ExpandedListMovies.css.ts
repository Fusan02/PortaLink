import { keyframes, style } from '@vanilla-extract/css';

const expandedLoading = style({
    color: '#aaa',
    fontSize: '0.95vw',
    paddingLeft: '1vw'
});

const emptyMessage = style({
    color: '#fff',
    marginTop: '1vw'
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
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    }
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

const styles = {
    expandedLoading,
    emptyMessage,
    expandedRow,
    cardWrap,
    removeBtn
};

export default styles;
