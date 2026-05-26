import Image from "next/image";
import {
  getImageDimensions,
  getImageSizes,
  shouldLoadWithPriority,
  getPlaceholderType,
} from "../../utils/imageOptimization";

export default function OptimizedImage({
  src,
  alt,
  usage = "card",
  index = 0,
  className = "",
  onClick,
  fill = false,
  ...props
}) {
  const dimensions = getImageDimensions(usage);
  const sizes = getImageSizes(usage);
  const priority = shouldLoadWithPriority(index);
  const placeholderFromUsage = getPlaceholderType(usage);
  const canUseBlurPlaceholder =
    typeof src !== "string" && Boolean(src?.blurDataURL);
  const placeholder =
    placeholderFromUsage === "blur" && !canUseBlurPlaceholder
      ? "empty"
      : placeholderFromUsage;

  return (
    <Image
      src={src}
      alt={alt}
      {...(fill
        ? { fill: true }
        : { width: dimensions.width, height: dimensions.height })}
      sizes={sizes}
      priority={priority}
      {...props}
      placeholder={placeholder}
      className={className}
      onClick={onClick}
      quality={85}
    />
  );
}
