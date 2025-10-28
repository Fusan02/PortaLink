import { style } from '@vanilla-extract/css';

const container = style({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const notificationTime = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
});

const presets = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});

const presetStartLabel = style({
    display: 'block',
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
});

const startTimeInput = style({
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    outline: 'none',
});

const presetEndLabel = style({
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    outline: 'none',
});

const endTimeInput = style({
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    outline: 'none',
});

const notification = style({
    fontSize: '13px',
    color: '#666',
    backgroundColor: '#F5F5F5',
    padding: '12px',
    borderRadius: '8px',
});


const notificationSelector = {
    container,
    notificationTime,
    presets,
    presetStartLabel,
    startTimeInput,
    presetEndLabel,
    endTimeInput,
    notification,
};

export default notificationSelector;