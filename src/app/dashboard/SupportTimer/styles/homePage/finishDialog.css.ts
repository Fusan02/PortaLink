import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const place = style({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '20px',
});

const container = style({
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
});

const praise = style({
    textAlign: 'center',
    marginBottom: '24px',
    fontSize: '24px',
    color: '#666',
});

const time = style({
    textAlign: 'center',
    marginBottom: '24px',
    fontSize: '18px',
    color: '#666',
});

const memo = style({
    marginBottom: ' 16px',
});

const memoLabel = style({
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#666',
});

const memoTextArea = style({
    width: '100%',
    minHeight: '100px',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    resize: 'vertical',
});

const tag = style({
    marginBottom: '24px',
});

const tagLabel = style({
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#666',
});

const tagInput = style({
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
});

const button = style({
    display: 'flex',
    gap: '12px',
});

const buttonClose = style({
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#8e3e3eff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
});

const buttonSave = recipe({
    base: {
        flex: 1,
        padding: '12px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
    },
    variants: {
        memo: {
            true: {
                backgroundColor: '#4CAF50',
                cursor: 'pointer',
            },
            false: {
                backgroundColor: '#BDBDBD',
                cursor: 'not-allowed',
            },
        },
    },
    defaultVariants: {
        memo: false,
    },
});

const finishDialog = {
    place,
    container,
    praise,
    time,
    memo,
    memoLabel,
    memoTextArea,
    tag,
    tagLabel,
    tagInput,
    button,
    buttonClose,
    buttonSave,
};

export default finishDialog;