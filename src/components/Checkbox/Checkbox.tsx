import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const Checkbox: FC<InputProps> = ({ className, checked, ...props }) => {
  return (
    <span className={'app__checkbox-wrap'}>
      <label
        className={classNames('app__checkbox-label', checked && 'is-checked')}
      >
        <input
          type={'checkbox'}
          className={classNames('app__checkbox-input', className)}
          checked={checked}
          {...props}
        />
      </label>
    </span>
  );
};
