import { IRespCategory } from './categories.types';

const categoryAdapter = (resp: IRespCategory): ICategory => ({
  id: resp.id,
  image: resp.image,
  title: resp.title,
  description: resp.description,
});

export { categoryAdapter };
