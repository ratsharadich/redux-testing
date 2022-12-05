import { FC } from 'react';
import { UNEXPEXTED_ERROR } from './constants';
import './styles.css';

/** Сообщение с ошибкой */
export const Error: FC<{ text: string | null }> = ({ text }) => {
  return <span className="error">{text ?? UNEXPEXTED_ERROR}</span>;
};
