import { FC } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import { ISliderProps } from './slider.types';

import { SliderStyled } from './slider.styled';

import { Button } from './button';

SwiperCore.use([Navigation, Autoplay]);

const Slider: FC<ISliderProps> = ({ children, ...swiperOptions }) => {
  return (
    <SliderStyled {...swiperOptions}>
      {children}
      <Button className="swiper-button swiper-button-next" />
      <Button className="swiper-button swiper-button-prev" />
    </SliderStyled>
  );
};

Slider.defaultProps = {
  slidesPerView: 1,
  allowTouchMove: false,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 4000,
  },
  loop: true,
};

export { Slider };
