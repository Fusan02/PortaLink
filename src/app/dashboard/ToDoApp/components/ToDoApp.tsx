import React from 'react';
import { page } from '../../styles/view.css';
import { extends_view, input } from '../styles/todoapp.css';
page;

const ToDoApp = () => {
  return (
    <section className={`${page} ${extends_view}`}>
        <h3>Supabase ToDo App</h3>
        <form >
            <input type="text" className={input} />
        </form>
    </section>
  );
};

export default ToDoApp;
