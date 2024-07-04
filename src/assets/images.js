// src/assets/Images.js

// Dynamic import function to load all images from the 'images' directory
const importAll = (requireContext) => {
  return requireContext.keys().reduce((images, file) => {
      const key = file.replace('./', '').replace(/\.[^/.]+$/, '');
      images[key] = requireContext(file);
      return images;
  }, {});
};

// Import all images from the 'images' directory
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

// Export the images object
export default images;
