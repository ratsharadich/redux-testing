import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppDispatch } from 'src/store';
import { addTodo, fetchTodos } from 'src/store/features';
import { ADD_TODO } from './constants';
import './styles.css';
import { TodoList } from './ui';

/** Основная страница приложения */
export const MainPage: FC = () => {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ title: text }));
    setText('');
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <main className="main-page">
      <input
        value={text}
        className="main-page__input"
        onChange={handleChangeText}
      />

      <button className="main-page__button" onClick={handleAddTodo}>
        {ADD_TODO}
      </button>

      <TodoList />
    </main>
  );
};
