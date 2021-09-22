import { SwiperSlide } from 'swiper/react';
import { useRequest } from 'ahooks';

import { slides } from '@/api';

import { colors } from '@/assets/styles';

import { LoadingStyled, SliderStyled } from './slider.styled';

import { Slider as Swiper } from '@/components';
import { Slide } from './slide';

const Slider = () => {
  const getSlidersData = async () => slides.getAll();

  const { data, loading } = useRequest(getSlidersData);

  const hasLoading = loading && <LoadingStyled color={colors.black} size={50} />;
  const hasSwiper = !loading && (
    <Swiper>
      {data?.map(({ id, ...rest }) => (
        <SwiperSlide key={id}>
          <Slide id={id} {...rest} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <SliderStyled>
      {hasLoading}
      {hasSwiper}
    </SliderStyled>
  );
};

export { Slider };
