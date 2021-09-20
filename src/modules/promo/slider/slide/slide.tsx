import { FC } from 'react';

import { SlideLinkStyled } from './slide.styled';

const Slide: FC<ISlide> = ({ link, image }) => {
  return <SlideLinkStyled href={link} target="_blank" background={image} />;
};

export { Slide };
