import { FC, useRef } from 'react';
import classNames from 'classnames';
import { useSlider } from '@components/MainPageSlider/hooks';

export const MainPageSlider: FC = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slider = useSlider(300);

  const handleSliderNext = () => {
    slider.handleNextBtnClk(sliderRef);
  };

  const handleSliderPrev = () => {
    slider.handlePrevBtnClk(sliderRef);
  };
  return (
    <div>
      <div className={classNames('main-page__slider-wrap')} ref={sliderRef}>
        <div className={classNames('app__container')}>{children}</div>
      </div>
      <div className={'main-page__slider-navigation-wrap'}>
        <button
          className={'main-page__slider-navigation-button prev'}
          onClick={handleSliderPrev}
        />
        <button
          onClick={handleSliderNext}
          className={'main-page__slider-navigation-button'}
        />
      </div>
    </div>
  );
};
