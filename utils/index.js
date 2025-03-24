export const checkImageURL = (url) => {
  if (!url) return false;

  // Strict check: URLs ending with common image file extensions
  const strictPattern = new RegExp(
    "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)(\\?.*)?$",
    "i"
  );

  // Flexible check: URLs containing image-related keywords in the path
  const flexiblePattern = new RegExp(
    "^https?:\\/\\/.+\\/(images|img|photo|photos|picture|pictures|image|imgs|thumbnails|thumbs|thumbnail)(\\?.*)?$",
    "i"
  );

  // Return true if either strict or flexible check passes
  return strictPattern.test(url) || flexiblePattern.test(url);
};
