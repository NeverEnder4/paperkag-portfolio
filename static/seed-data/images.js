const generateImageDataArray = imgArr => {
  const imgixQueryString = '?auto=compress&w=480&';
  const imgixQueryStringSmall = '?auto=compress&w=480& 480w';
  const imgixQueryStringMedium = '?auto=compress&w=1025& 640w';
  const imgixQueryStringLarge = '?auto=compress&w=640& 1025w';

  const imageDataArray = imgArr.map(img => ({
    url: img.url,
    src: img.url + imgixQueryString,
    srcSetSm: img.url + imgixQueryStringSmall,
    srcSetMd: img.url + imgixQueryStringMedium,
    srcSetLg: img.url + imgixQueryStringLarge,
    alt: img.alt,
  }));

  return imageDataArray;
};

const modelingImagesArray = [
  {
    url: `https://apettigrew.imgix.net/static/kag-model.jpg`,
    alt:
      'Kenyatta standing in front of a brick wall with his hands in his pockets and a solemn look on his face.',
  },
  {
    url: `https://apettigrew.imgix.net/static/kag-model-2.jpg`,
    alt: "A close up of Kenyatta's smiling face.",
  },
];

const streetArtImagesArray = [
  {
    url: `https://apettigrew.imgix.net/static/street-art.jpeg`,
    alt:
      "A grayscale image Kenyatta with his signature mask affixed to the second story of a building with a crown and three X's tagged above it.",
  },
  {
    url: `https://apettigrew.imgix.net/static/street-art-2.jpg`,
    alt:
      "An image of Kenyata with his signature paper mask affixed above Mama's Pizza.",
  },
  {
    url: `https://apettigrew.imgix.net/static/street-art-3.jpeg`,
    alt:
      'An image of Kenyata with his signature paper mask affixed to a yellow brick wall.',
  },
  {
    url: `https://apettigrew.imgix.net/static/street-art-4.jpeg`,
    alt:
      'An image of Kenyata with his signature paper mask resting on top of his head.',
  },
];

const paintingsImagesArray = [
  {
    url: `https://apettigrew.imgix.net/static/paintings.jpg`,
    alt:
      'A painting of cartoon dog with a crown smoking a cigarette, painted only using black, yellow and white colors.',
  },
  {
    url: `https://apettigrew.imgix.net/static/paintings-2.jpg`,
    alt:
      'A painting of a dragon-like face with swirls of smoke around its head, painted only using black, yellow and white colors.',
  },
];

const skatingImagesArray = [
  {
    url: `https://apettigrew.imgix.net/static/skating.jpeg`,
    alt:
      'Kenyatta ollying a white cabinet turned on its side at the skate park.',
  },
  {
    url: `https://apettigrew.imgix.net/static/skating-2.jpeg`,
    alt: 'Kenyatta board-sliding a white cabinet at the skate park.',
  },
];

export const modelingImages = generateImageDataArray(modelingImagesArray);
export const streetArtImages = generateImageDataArray(streetArtImagesArray);
export const paintingsImages = generateImageDataArray(paintingsImagesArray);
export const skatingImages = generateImageDataArray(skatingImagesArray);
