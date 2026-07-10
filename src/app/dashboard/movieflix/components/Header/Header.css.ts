import { style } from '@vanilla-extract/css';

const headerListWrap = style({
  display: 'flex',
  gap: '1.8vw',
  fontSize: '1.5vw',
  color: 'white',
  paddingLeft: '2.0vw'
});

const appHeader = style({
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%)',
  boxSizing: 'border-box',
  width: '100%',
  opacity: 0.8,
  paddingLeft: '3.5vw',
  height: '4.0vw',
  position: 'sticky',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  marginBottom: '-4.0vw',
  zIndex: 9999
});

const appTitle = style({
  color: '#e50914',
  fontSize: '1.8vw',
  fontWeight: 'bold',
  margin: 0
});

const appSearchWrap = style({
  marginLeft: 'auto',
  paddingRight: '3.5vw'
});

const appSearch = style({
  width: '17vw',
  fontSize: '0.8vw',
  padding: '0.3vw 1vw',
  borderRadius: '0.7vw',
  border: 'none',
  outline: 'none',
  background: '#232323',
  color: '#fff',
  boxShadow: '0 0.18vw 1.5vw #0006',
  fontWeight: 500,
  letterSpacing: '0.025vw',
  transition: 'box-shadow 0.2s, background 0.2s',
  selectors: {
    '&:focus': {
      background: '#333',
      boxShadow: '0 0.37vw 3.0vw #000a'
    }
  }
});

const styles = {
  appTitle,
  appSearchWrap,
  appSearch,
  headerListWrap,
  appHeader
};

export default styles;
