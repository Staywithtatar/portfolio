import Image from 'next/image';
import { getImageDimensions, getImageSizes, shouldLoadWithPriority, getPlaceholderType } from '../../utils/imageOptimization';

export default function OptimizedImage({
  src,
  alt,
  usage = 'card',
  index = 0,
  className = '',
  onClick,
  ...props
}) {
  const dimensions = getImageDimensions(usage);
  const sizes = getImageSizes(usage);
  const priority = shouldLoadWithPriority(index);
  const placeholder = getPlaceholderType(usage);

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      sizes={sizes}
      priority={priority}
      placeholder={placeholder}
      className={className}
      onClick={onClick}
      quality={85}
      {...props}
    />
  );
} 