import { FC } from 'react';

import { ICategoryProps } from './categoty.types';

import {
  CategoryStyled,
  ImageStyled,
  TitleWrapperStyled,
  TitleStyled,
  DescriptionStyled,
} from './category.styled';

const Category: FC<ICategoryProps> = ({ className, title, image, description }) => {
  return (
    <CategoryStyled className={className}>
      <ImageStyled background={image} />
      <TitleWrapperStyled>
        <TitleStyled>{title}</TitleStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
      </TitleWrapperStyled>
    </CategoryStyled>
  );
};

export { Category };
