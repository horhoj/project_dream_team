import { FC } from 'react';
import classNames from 'classnames';

interface MainPageTourCard {
  imgSrc: string;
  title: string;
  text: string;
  onLike: () => void;
  isLikeActive: boolean;
}

export const MainPageTourCard: FC<MainPageTourCard> = ({
  imgSrc,
  text,
  title,
  onLike,
  isLikeActive,
}) => {
  return (
    <div className={'main-page__tour-card-wrap'}>
      <button
        className={classNames(
          'feedback-form__tour-card-like-button',
          isLikeActive && 'is-active',
        )}
        onClick={onLike}
      />
      <img
        src={imgSrc}
        alt="card image"
        className={'main-page__tour-card-img'}
      />
      <div
        className={classNames(
          'main-page__tour-card-title',
          'app__font card-title',
        )}
      >
        {title}
      </div>
      <div
        className={classNames(
          'main-page__tour-card-text',
          'app__font card-text',
        )}
      >
        {text}
      </div>
    </div>
  );
};
