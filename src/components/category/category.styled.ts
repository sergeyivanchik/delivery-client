import styled from 'styled-components';

import { colors } from '@/assets/styles';

import { IImageStyledProps } from './categoty.types';

const CategoryStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ImageStyled = styled.div<IImageStyledProps>`
  min-height: 220px;
  max-height: 220px;
  width: 100%;
  border-radius: 12px;
  background: url(${({ background }) => background}) center/ cover no-repeat;
`;

const TitleWrapperStyled = styled.div`
  width: 100%;
  padding: 15px 20px 24px;
`;

const TitleStyled = styled.div`
  width: 100%;
  color: ${colors.gray900};
  font-size: 30px;
  font-weight: 600;

  ${CategoryStyled}:hover & {
    color: ${colors.red500};
  }
`;

const DescriptionStyled = styled.div`
  width: 100%;
  color: ${colors.gray900};
  font-size: 14px;
`;

export { CategoryStyled, ImageStyled, TitleWrapperStyled, TitleStyled, DescriptionStyled };
