import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import inputIconStatusError from '@assets/img/input-icon__status-error.svg';
import inputIconStatusSuccess from '@assets/img/input-icon__status-success.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: 'error' | 'success';
}

export const Input: FC<InputProps> = ({ className, status, ...props }) => {
  return (
    <span className={'app__input-wrap'}>
      <input
        className={classNames(
          'app__input',
          'app__font control-element',
          status === 'success' && 'app__input status-success',
          status === 'error' && 'app__input status-error',
          status && 'app__input is-show-icon',
          className,
        )}
        {...props}
      />
      {status === 'success' && (
        <img
          src={inputIconStatusSuccess}
          alt="input status success icon"
          className={'app__input-status-icon'}
        />
      )}

      {status === 'error' && (
        <img
          src={inputIconStatusError}
          alt="input status error icon"
          className={'app__input-status-icon'}
        />
      )}
    </span>
  );
};
