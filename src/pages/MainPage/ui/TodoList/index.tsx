import { FC } from 'react';
import { Spinner, Error } from 'src/shared';
import { useAppDispatch, useAppSelector } from 'src/store';
import { removeTodo, STATUSES } from 'src/store/features';

/** Список тудушек */
export const TodoList: FC = () => {
  const { todos, status, error } = useAppSelector(({ todos }) => todos);
  const isLoading = status === STATUSES.LOADING;
  const isError = status === STATUSES.REJECTED;

  console.log('status', status);
  console.log('error', error);

  const dispatch = useAppDispatch();
  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo({ id }));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {isError ? (
        <Error text={error} />
      ) : (
        todos.map(({ id, title, color }) => (
          <div className="main-page__todo" style={{ backgroundColor: color }}>
            <span className="main-page__todo-title">{title}</span>
            <button
              className="main-page__todo-close-button"
              onClick={() => handleRemoveTodo(id)}
            >
              &times;
            </button>
          </div>
        ))
      )}
    </>
  );
};
