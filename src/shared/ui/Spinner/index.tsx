import { FC } from 'react';
import './styles.css';

/** Спиннер загрузки */
export const Spinner: FC = () => (
  <div className="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
