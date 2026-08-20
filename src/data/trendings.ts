export type Picture = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const pictures: Picture[] = [
  {
    src: 'dog-oculus.jpg',
    width: 315,
    height: 315,
    alt: 'Dog oculus.',
  },
  {
    src: 'cat-oculus.jpg',
    width: 95,
    height: 95,
    alt: 'Cat oculus.',
  },
  {
    src: 'bear-oculus.jpg',
    width: 95,
    height: 95,
    alt: 'Bear oculus.',
  },
];
