import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const page = style({
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const container = style({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '200px',
    gap: '16px',
});

const itemDay = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
});

const time = style({
    fontSize: '12px',
    color: '#666',
    minHeight: '16px',
});

const bar = recipe({
    base: {
        width: '100%',
        borderRadius: '8px 8px 0 0',
        transition: 'height 0.3s ease',
    },
    variants: {
        hasData: {
            true: {
                minHeight: '8px',
                backgroundColor: '#4CAF50',
                opacity: 1,
            },
            false: {
                minHeight: '0',
                backgroundColor: '#E0E0E0',
                opacity: 0.3,
            },
        },
    },
    defaultVariants: {
        hasData: false,
    },
});

const day = style({
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
});

const dailyBarChart = {
    page,
    container,
    itemDay,
    time,
    bar,
    day,
};

export default dailyBarChart;