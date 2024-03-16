import { FC } from 'react';
import styles from './button.module.css';
import { ButtonProps } from '../model';
import classNames from 'classnames';

export const Button: FC<ButtonProps> = ({ icon, text, alt = text, type }) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.light]: type === 'secondary',
      })}
    >
      <img src={icon} alt={alt} />
      {text}
    </button>
  );
};
