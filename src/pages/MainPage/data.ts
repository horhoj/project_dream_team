import mainPageSliderImg1 from '@assets/img/main-page__slider-img-1.png';
import mainPageSliderImg2 from '@assets/img/main-page__slider-img-2.png';
import mainPageSliderImg3 from '@assets/img/main-page__slider-img-3.png';
import mainPageSliderImg4 from '@assets/img/main-page__slider-img-4.png';
import { getUUID } from '@utils/getUUID';

import mainPageTourImg1 from '@assets/img/main-page__tour-img-1.png';
import mainPageTourImg2 from '@assets/img/main-page__tour-img-2.png';
import mainPageTourImg3 from '@assets/img/main-page__tour-img-3.png';

interface SliderDataItem {
  id: string;
  imgSrc: string;
}

interface TourDataItem extends SliderDataItem {
  title: string;
  text: string;
}

export const SLIDER_DATA: SliderDataItem[] = [
  { id: getUUID(), imgSrc: mainPageSliderImg1 },
  { id: getUUID(), imgSrc: mainPageSliderImg2 },
  { id: getUUID(), imgSrc: mainPageSliderImg3 },
  { id: getUUID(), imgSrc: mainPageSliderImg4 },
];

export const TOUR_DATA: TourDataItem[] = [
  {
    id: getUUID(),
    imgSrc: mainPageTourImg1,
    title: "St. Isaac's Cathedral in St. Petersburg",
    text: 'One of the highest domed structures in the world.',
  },
  {
    id: getUUID(),
    imgSrc: mainPageTourImg2,
    title: 'The Bridge of Peace, Tbilisi',
    text: 'Arc-shaped pedestrian bridge made of glass and steel',
  },
  {
    id: getUUID(),
    imgSrc: mainPageTourImg3,
    title: 'El Caminito del Rey, Argentina',
    text: 'Tango, Open-air Museum, Painting, Art and History',
  },
];
