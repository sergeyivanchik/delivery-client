import styled from 'styled-components';

import { ISlideStyled } from './slide.types';

const SlideLinkStyled = styled.a<ISlideStyled>`
  display: block;
  background: url(${({ background }) => background}) center/cover no-repeat;

  :before {
    content: '';
    display: block;
    padding-bottom: calc(1.88 / 7 * 100%);
  }
`;

export { SlideLinkStyled };
