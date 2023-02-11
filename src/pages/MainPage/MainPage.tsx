import { FC, useState } from 'react';

import mainPageBannerImg from '@assets/img/main-page__banner.png';
import { Button } from '@components/Button';
import classNames from 'classnames';

import { SLIDER_DATA, TOUR_DATA } from '@pages/MainPage/data';
import { MainPageSlider } from '@components/MainPageSlider';
import { MainPageTourCard } from '@components/MainPageTourCard';
import { Modal } from '@components/Modal';
import { FeedbackForm } from '@components/FeedbackForm';

export const MainPage: FC = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState<boolean>(false);

  const handleCloseFeedbackForm = () => {
    setShowFeedbackForm(false);
  };

  return (
    <>
      <Modal isOpen={showFeedbackForm} onClose={handleCloseFeedbackForm}>
        <FeedbackForm onClose={handleCloseFeedbackForm} />
      </Modal>
      <div className={'main-page__wrap'}>
        <div>
          <img
            src={mainPageBannerImg}
            alt="banner"
            className={'main-page__banner'}
          />
        </div>
        <div
          className={classNames(
            'main-page__description-block-wrap',
            'app__container',
          )}
        >
          <div className={'main-page__description-block-head'}>
            <div
              className={classNames(
                'main-page__description-block-title',
                'app__font title',
              )}
            >
              Walking in Old Tallinn
            </div>
            <div className={'main-page__description-block-feedback-wrap'}>
              <Button
                className={'main-page__description-block-feedback-button'}
                onClick={() => setShowFeedbackForm(true)}
              >
                Feedback
              </Button>
            </div>
          </div>
          <div
            className={classNames(
              'main-page__description-block-content',
              'app__font text',
            )}
          >
            <p>
              Welcome to Old Tallinn, the heart of the Estonian capital! The
              history of the settlement once began from here, and today it is
              one of the best preserved medieval cities in Europe.
            </p>
            <p>
              I will take you through the streets and doorways and show you
              where they traded, what they ate, what they sued about and what
              our Estonian ancestors aspired to.
            </p>
            <p>
              You will visit the oldest pharmacy, get acquainted with the royal
              privileges, see firsthand a real {'"'}gingerbread{'"'} house, look
              into an old tavern, walk along the widest and longest streets of
              the city and even find out that Tallinn is a lame city!
            </p>
            <p>
              And you will also find beautiful and interesting souvenirs, of
              course!
            </p>
          </div>
        </div>
        <MainPageSlider>
          <div className={'main-page__slider-element-list'}>
            {SLIDER_DATA.map((img, index) => (
              <img
                src={img.imgSrc}
                key={img.id}
                alt={`slider img ${index + 1}`}
                className={'main-page_slider-element'}
              />
            ))}
          </div>
        </MainPageSlider>
        <MainPageSlider>
          <div className={'main-page__tour-element-list'}>
            {TOUR_DATA.map((tour) => (
              <MainPageTourCard
                imgSrc={tour.imgSrc}
                title={tour.title}
                text={tour.text}
                key={tour.id}
              />
            ))}
          </div>
        </MainPageSlider>
        <div className={'main-page__footer'} />
      </div>
    </>
  );
};
