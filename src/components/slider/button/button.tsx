import { FC } from 'react';

import { IButtonProps } from './button.types';

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrows/arrow.svg';

import { ButtonStyled } from './button.styled';

const Button: FC<IButtonProps> = ({ className }) => {
  return (
    <ButtonStyled className={className}>
      <ArrowIcon />
    </ButtonStyled>
  );
};

export { Button };
