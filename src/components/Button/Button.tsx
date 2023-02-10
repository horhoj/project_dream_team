import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        'app__button',
        'app__font control-element',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
