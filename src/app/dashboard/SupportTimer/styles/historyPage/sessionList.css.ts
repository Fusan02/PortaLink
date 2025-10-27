import { style } from '@vanilla-extract/css';

const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '16px',
});

const sessions = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const date = style({
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
});

const mainInfo = style({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
});

const time = style({
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
});

const tag = style({
    fontSize: '12px',
    padding: '4px 12px',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
});

const memo = style({
    fontSize: '15px',
    color: '#333',
    marginBottom: '8px',
});

const comment = style({
    fontSize: '13px',
    color: '#FF9800',
    fontStyle: 'italic',
});

const sessionList = {
    container,
    sessions,
    date,
    mainInfo,
    time,
    tag,
    memo,
    comment,
};

export default sessionList;