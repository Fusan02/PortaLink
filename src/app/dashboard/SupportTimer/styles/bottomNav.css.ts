import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const container = style({
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    height: '70px',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #E0E0E0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
    zIndex: '1000',
});

const button = recipe({
    base: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        padding: '8px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transition: 'color 0.2s',
    },
    variants: {
        isActive: {
            true: {
                color: '#4CAF50',
            },
            false: {
                color: '#757575',
            },
        },
    },
});

const icon = recipe({
    base: {
        fontSize: '20px',
    },
    variants: {
        isActive: {
            true: {
                opacity: '1',
            },
            false: {
                opacity: '0.6',
            },
        }
    },
});

const span = recipe({
    base: {
        fontSize: '11px',
    },
    variants: {
        isActive: {
            true: {
                fontWeight: 'bold',
            },
            false: {
                fontWeight: 'normal',
            },
        }
    },
});

const bottomNav = {
    container,
    button,
    icon,
    span,
};

export default bottomNav;