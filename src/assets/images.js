// src/assets/Images.js

const importAll = (requireContext) => {
    return requireContext.keys().reduce((images, file) => {
      const key = file.replace('./', '').replace(/\.[^/.]+$/, '');
      images[key] = requireContext(file);
      return images;
    }, {});
  };
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  