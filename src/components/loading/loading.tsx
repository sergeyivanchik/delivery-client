import { FC } from 'react';

import { colors } from '@/assets/styles';
import { ReactComponent as LoadingIcon } from '@/assets/images/loading/loading.svg';

import { ILoadingProps } from './loading.types';

const Loading: FC<ILoadingProps> = ({ size = 20, color = colors.black, className }) => {
  return <LoadingIcon width={size} height={size} fill={color} className={className} />;
};

export { Loading };
