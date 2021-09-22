import { FC } from 'react';

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrows/arrow.svg';

import { IButtonProps } from './button.types';

import { ButtonStyled } from './button.styled';

const Button: FC<IButtonProps> = ({ className }) => {
  return (
    <ButtonStyled className={className}>
      <ArrowIcon />
    </ButtonStyled>
  );
};

export { Button };
