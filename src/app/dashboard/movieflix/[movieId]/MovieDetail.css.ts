import { style } from '@vanilla-extract/css';

const movieDetailRoot = style({
    minHeight: '100vh',
    background: '#111',
    color: '#fff',
    position: 'relative'
});

const movieDetailBackdrop = style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70vh',
    zIndex: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.4
});

const movieDetailBackdropGradient = style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70vh',
    zIndex: 1,
    background: 'linear-gradient(to top, #111 60%, transparent 100%)'
});

const movieDetailContainer = style({
    position: 'relative',
    zIndex: 2,
    width: '100vw',
    maxWidth: '100vw',
    margin: 0,
    padding: '6.0vw 6.0vw',
    boxSizing: 'border-box'
});

const movieDetailBacklink = style({
    display: 'inline-flex',
    alignItems: 'center',
    color: '#fff8',
    fontSize: '1.2vw',
    marginBottom: '2.2vw',
    textDecoration: 'none',
    transition: 'color 0.2s',
    background: 'none',
    border: 'none',
    padding: '0',
    selectors: {
        '&:hover': {
            color: '#fff'
        }
    }
});

const movieDetailBacklinkIcon = style({
    marginRight: '0.7vw'
});

const movieDetailGrid = style({
    display: 'grid',
    gridTemplateColumns: '25.0vw 1fr',
    alignItems: 'start'
});

const movieDetailPosterWrap = style({
    position: 'relative',
    width: '22.0vw',
    borderRadius: '1.1vw',
    overflow: 'hidden',
    boxShadow: '0 0.42vw 1.67vw #000a'
});

const movieDetailPosterImg = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
});

const movieDetailDetails = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25vw',
    paddingLeft: '2vw'
});

const movieDetailTitle = style({
    fontSize: '1.5vw',
    fontWeight: 600,
    marginBottom: '0.42vw'
});

const movieDetailBadges = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.42vw',
    marginTop: '0.63vw'
});

const badgesIconSvg = style({
    marginRight: '0.10vw',
    verticalAlign: 'middle'
});

const badgesStar = style({
    color: '#ffb400',
    fill: '#ffb400'
});

const movieDetailOverview = style({
    fontSize: '1.2vw',
    color: '#ccc',
    lineHeight: 1.4
});

const movieDetailGenres = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.42vw'
});

const badgesOutline = style({
    display: 'inline-block',
    border: '0.05vw solid #444',
    borderRadius: '0.31vw',
    padding: '0.10vw 0.52vw',
    fontSize: '1.0vw',
    color: '#fff',
    background: 'transparent'
});

const badgesGenre = style({
    display: 'inline-block',
    background: '#222',
    borderRadius: '0.31vw',
    padding: '0.10vw 0.52vw',
    fontSize: '1.0vw',
    color: '#fff'
});

const movieDetailActions = style({
    display: 'flex',
    gap: '0.83vw',
    paddingTop: '0.42vw'
});

const movieDetailBtn = style({
    fontSize: '1.2vw',
    borderRadius: '0.31vw',
    padding: '0.52vw 1.15vw',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    background: '#444',
    color: '#fff',
    transition: 'background 0.2s, color 0.2s',
    selectors: {
        '&:hover': {
            background: '#232323',
            color: '#fff'
        }
    }
});

const movieDetailBtnPrimary = style({
    background: '#e50914',
    color: '#fff',
    selectors: {
        '&:hover': {
            background: '#b0060f',
            color: '#fff'
        }
    }
});

const icon = style({
    color: '#fff',
    paddingRight: '0.5vw'
});

const addToListWrap = style({
    display: 'flex',
    position: 'relative'
});

const listPicker = style({
    position: 'absolute',
    top: 'calc(100% + 0.5vw)',
    left: 0,
    zIndex: 10,
    minWidth: '14vw',
    background: '#232323',
    border: '0.05vw solid #444',
    borderRadius: '0,42vw',
    boxShadow: '0 0.42vw 1.67vw #000a',
    padding: '0.6vw',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2vw'
});

const listPickerItem = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.6vw',
    padding: '0.5vw 0.6vw',
    borderRadius: '0.31vw',
    fontSize: '1.0vw',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0,15s',
    selectors: {
        '&:hover': {
            background: '#333'
        }
    }
});

const listPickerCheckbox = style({
    accentColor: '#e50914'
});

const listPickerEmpty = style({
    fontSize: '0.9vw',
    color: '#aaa',
    padding: '0.5vw 0.6vw',
    maxWidth: '13vw'
});

const styles = {
    movieDetailRoot,
    movieDetailBackdrop,
    movieDetailBackdropGradient,
    movieDetailContainer,
    movieDetailBacklink,
    movieDetailBacklinkIcon,
    movieDetailGrid,
    movieDetailPosterWrap,
    movieDetailPosterImg,
    movieDetailDetails,
    movieDetailTitle,
    movieDetailBadges,
    badgesIconSvg,
    badgesStar,
    movieDetailOverview,
    movieDetailGenres,
    badgesOutline,
    badgesGenre,
    movieDetailActions,
    movieDetailBtn,
    movieDetailBtnPrimary,
    icon,
    addToListWrap,
    listPicker,
    listPickerItem,
    listPickerCheckbox,
    listPickerEmpty
};

export default styles;
