export type Work = {
  src: string;
  title: string;
  text: string;
};

export const works: Work[] = [
  {
    src: 'works-1.svg',
    title: 'Setup Your wallet',
    text: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
  },
  {
    src: 'works-2.svg',
    title: 'Create Collection',
    text: 'Upload your work and setup your collection. Add a description, social links and floor price.',
  },
  {
    src: 'works-3.svg',
    title: 'Start Earning',
    text: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
  },
];
