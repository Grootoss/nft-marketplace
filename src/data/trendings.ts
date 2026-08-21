export type Collection = {
  id: number;
  title: string;
  author: string;
  avatar: string;
  extraCount: string;
  cover: string;
  thumbs: string[];
};

export const collections: Collection[] = [
  {
    id: 1,
    title: 'DSGN Animals',
    author: 'MrFox',
    avatar: 'mrfox-ava.svg',
    extraCount: '1025+',
    cover: 'dog-oculus.jpg',
    thumbs: ['cat-oculus.jpg', 'bear-oculus.jpg'],
  },
  {
    id: 2,
    title: 'Magic Mushrooms',
    author: 'Shroomie',
    avatar: 'shroomie-ava.svg',
    extraCount: '6+',
    cover: 'mashroom-big.jpg',
    thumbs: ['mashroom-little-1.jpg', 'mashroom-little-2.jpg'],
  },
  {
    id: 3,
    title: 'Disco Machines',
    author: 'BeKind2Robots',
    avatar: 'bekind2robots-ava.svg',
    extraCount: '1025+',
    cover: 'disco-big.jpg',
    thumbs: ['disco-little-1.jpg', 'disco-little-2.jpg'],
  },
];
