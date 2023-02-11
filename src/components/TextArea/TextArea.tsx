import { FC, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: FC<TextAreaProps> = ({ ...props }) => {
  return (
    <textarea
      className={classNames('app__text-area', 'app__font control-element')}
      {...props}
    />
  );
};
