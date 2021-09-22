import { restApi } from '@/api/services';

import { categoryAdapter } from './categories.adapters';

import { CATEGORIES_RESOURCES } from './categories.constants';

import { IRespCategory } from './categories.types';

const getCategories = async (): Promise<ICategory[]> => {
  const resp: IRespCategory[] = await restApi.request({
    method: 'GET',
    url: `/${CATEGORIES_RESOURCES.ENDPOINT}`,
  });

  return resp && resp.map(categoryAdapter);
};

export const categories = { getAll: getCategories };
