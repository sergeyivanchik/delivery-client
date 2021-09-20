import { restApi } from '@/api/services';

import { slideAdapter } from './slides.adapters';

import { SLIDES_RESOURCES } from './slides.constants';

import { IRespSlide } from './slides.types';

const getSlides = async (): Promise<ISlide[]> => {
  const resp: IRespSlide[] = await restApi.request({
    method: 'GET',
    url: `/${SLIDES_RESOURCES.ENDPOINT}`,
  });

  return resp && resp.map(slideAdapter);
};

export const slides = { getAll: getSlides };
