import styled from 'styled-components';

import { colors } from '@/assets/styles';

const ButtonStyled = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1;

  svg {
    path {
      stroke: ${colors.white};
    }
  }
`;

export { ButtonStyled };
