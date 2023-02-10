import { RefObject } from 'react';

export const useSlider = (step: number) => {
  const handlePrevBtnClk = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({
        behavior: 'smooth',
        left: -step,
      });
    }
  };
  const handleNextBtnClk = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({
        behavior: 'smooth',
        left: step,
      });
    }
  };

  return { handleNextBtnClk, handlePrevBtnClk };
};
