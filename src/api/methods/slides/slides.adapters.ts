import { IRespSlide } from './slides.types';

const slideAdapter = (resp: IRespSlide): ISlide => ({
  id: resp.id,
  image: resp.image,
  link: resp.link,
  title: resp.title,
  description: resp.description,
});

export { slideAdapter };
