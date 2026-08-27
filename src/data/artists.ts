export type ArtistNft = {
  src: string;
  title: string;
  price: string;
  bid: string;
};

export type Artist = {
  id: string;
  name: string;
  avatar: string;
  coverMobile: string;
  coverTablet: string;
  coverDesktop: string;
  wallet: string;
  volume: string;
  nftsSold: string;
  followers: string;
  bio: string;
  createdCount: number;
  ownedCount: number;
  collectionCount: number;
  links: {
    website?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
  };
  created: ArtistNft[];
};

export const artists: Artist[] = [
  {
    id: 'animakid',
    name: 'Animakid',
    avatar: 'animakid-ava.webp',
    coverMobile: 'artist-mobile-cover.jpg',
    coverTablet: 'artist-tablet-cover.jpg',
    coverDesktop: 'artist-desktop-cover.jpg',
    wallet: '0xc0E3...B79C',
    volume: '250k+',
    nftsSold: '50k+',
    followers: '3000+',
    bio: "The internet's friendliest designer kid.",
    createdCount: 302,
    ownedCount: 67,
    collectionCount: 4,
    links: {
      website: '#',
      discord: '#',
      youtube: '#',
      twitter: '#',
      instagram: '#',
    },
    created: [
      {
        src: 'animakid-product-1.jpg',
        title: 'Distant Galaxy',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-2.jpg',
        title: 'Life On Edena',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-3.jpg',
        title: 'AstroFiction',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-4.jpg',
        title: 'CryptoCity',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-5.jpg',
        title: 'ColorfulDog 0524',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-6.jpg',
        title: 'Space Tales',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-7.jpg',
        title: 'Cherry Blossom Girl',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-8.jpg',
        title: 'Robotica',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
      {
        src: 'animakid-product-9.jpg',
        title: 'Sunset Dimension',
        price: '1.63 ETH',
        bid: '0.33 wETH',
      },
    ],
  },
];

export function getArtistById(id: string) {
  return artists.find((artist) => artist.id === id);
}
