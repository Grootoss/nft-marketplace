export type OtherNft = {
  src: string;
  title: string;
  author: string;
  avatar: string;
  price: number;
  bid: number;
};

export const others: OtherNft[] = [
  {
    src: 'others-1.png',
    title: 'Distant Galaxy',
    author: 'MoonDancer',
    avatar: 'moondancer-ava.webp',
    price: 1.63,
    bid: 0.33,
  },
  {
    src: 'others-2.png',
    title: 'Life On Edena',
    author: 'NebulaKid',
    avatar: 'nebulakid-ava.webp',
    price: 1.63,
    bid: 0.33,
  },
  {
    src: 'others-3.png',
    title: 'AstroFiction',
    author: 'Spaceone',
    avatar: 'spaceone-ava.webp',
    price: 1.63,
    bid: 0.33,
  },
];
