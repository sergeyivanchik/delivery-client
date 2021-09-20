import { FC } from 'react';

import { ILoadingProps } from './loading.types';

import { colors } from '@/assets/styles';
import { ReactComponent as LoadingIcon } from '@/assets/images/loading/loading.svg';

const Loading: FC<ILoadingProps> = ({ size = 20, color = colors.black, className }) => {
  return <LoadingIcon width={size} height={size} fill={color} className={className} />;
};

export { Loading };
