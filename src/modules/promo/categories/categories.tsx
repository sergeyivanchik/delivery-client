import { useRequest } from 'ahooks';

import { categories as categoriesApi } from '@/api';

import { Category } from '@/components';

import { CategoriesStyled } from './categories.styled';

const Categories = () => {
  const { data, loading } = useRequest(categoriesApi.getAll);

  const hasCategories =
    !loading &&
    !!data?.length &&
    data.map(({ id, title, image, description }) => (
      <Category key={id} image={image} title={title} description={description} />
    ));

  return <CategoriesStyled>{hasCategories}</CategoriesStyled>;
};

export { Categories };
