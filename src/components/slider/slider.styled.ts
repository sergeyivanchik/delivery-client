import { Swiper } from 'swiper/react';
import styled from 'styled-components';
import { rgba } from 'polished';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { colors } from '@/assets/styles';

const SliderStyled = styled(Swiper)`
  overflow: hidden;
  border-radius: 4px;

  .swiper-button {
    height: 100%;
    width: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    background-color: ${rgba(colors.gray900, 0.3)};
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${rgba(colors.gray900, 0.5)};
    }

    &-next {
      right: 0;

      svg {
        transform: rotate(180deg);
      }
    }

    &-prev {
      left: 0;
    }
  }
`;

export { SliderStyled };
