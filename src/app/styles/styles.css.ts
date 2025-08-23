import { style } from '@vanilla-extract/css';

export const app = style({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
});

export const inputText = style({
  padding: '10px',
});

export const submitButton = style({
  padding: '8px 15px',
  cursor: 'pointer',
});

export const todoItem = style({
  width: '10%',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

export const todoItemInput = style({
  padding: '7px',
});