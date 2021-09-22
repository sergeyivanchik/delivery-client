interface ICategoryProps extends Omit<ICategory, 'id'> {
  className?: string;
}

interface IImageStyledProps {
  background: string;
}

export { ICategoryProps, IImageStyledProps };
