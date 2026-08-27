import { useEffect, useState } from 'react';
import styles from './Nft.module.css';
import { asset } from '../../utils/asset';
import FadeImg from '../FadeImg/FadeImg';

const AUCTION_END =
  Date.now() + 59 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000;

function getTimeLeft(end: number) {
  const diff = Math.max(0, end - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

const tags = ['ANIMATION', 'ILLUSTRATION', 'VIDEO', 'MOON'];

const moreNfts = [
  { src: 'nft-product-1.webp', title: 'Foxy Life' },
  { src: 'nft-product-2.webp', title: 'Cat From Future' },
  { src: 'nft-product-3.webp', title: 'Psycho Dog' },
  { src: 'nft-product-4.webp', title: 'Designer Bear' },
  { src: 'nft-product-5.webp', title: 'Dancing Robot 0375' },
  { src: 'nft-product-6.webp', title: 'Dancing Robot 0356' },
  { src: 'nft-product-7.webp', title: 'AstroFiction' },
  { src: 'nft-product-8.webp', title: 'Space Travel' },
  { src: 'nft-product-9.webp', title: 'Sunset Dimension' },
];

function Nft() {
  const [time, setTime] = useState(() => getTimeLeft(AUCTION_END));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(AUCTION_END));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className={styles.nft}>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={asset('/images/nft/nft-desktop-cover.webp')}
          />
          <source
            media="(min-width: 834px)"
            srcSet={asset('/images/nft/nft-tablet-cover.webp')}
          />
          <FadeImg
            className={styles.cover}
            src={asset('/images/nft/nft-mobile-cover.webp')}
            alt="The Orbitians"
            width={375}
            height={320}
            fetchPriority="high"
          />
        </picture>

        <div className={styles.body}>
          <h1 className={styles.heading}>The Orbitians</h1>
          <p className={styles.minted}>Minted on Sep 30, 2022</p>

          <div className={styles.auction}>
            <p className={styles.auctionLabel}>Auction ends in:</p>
            <div className={styles.clock}>
              <p className={styles.unit}>
                <span className={styles.digits}>{pad(time.hours)}</span>
                <span className={styles.caption}>Hours</span>
              </p>
              <span className={styles.colon}>:</span>
              <p className={styles.unit}>
                <span className={styles.digits}>{pad(time.minutes)}</span>
                <span className={styles.caption}>Minutes</span>
              </p>
              <span className={styles.colon}>:</span>
              <p className={styles.unit}>
                <span className={styles.digits}>{pad(time.seconds)}</span>
                <span className={styles.caption}>Seconds</span>
              </p>
            </div>
            <button className={styles.bid} type="button">
              Place Bid
            </button>
          </div>

          <div className={styles.content}>
            <p className={styles.label}>Created By</p>
            <a href="#" className={styles.creator}>
              <img
                src={asset('/images/ava/animakid-ava.webp')}
                width={24}
                height={24}
                alt=""
              />
              <span>Orbitian</span>
            </a>

            <p className={styles.label}>Description</p>
            <div className={styles.description}>
              <p>The Orbitians</p>
              <p>
                is a collection of 10,000 unique NFTs on the Ethereum
                blockchain,
              </p>
              <p>
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are The Orbitians.
              </p>
              <p>
                They live in a pocket universe where they eat, work and drink
                beer together. They are part of a group called the Punks, and
                their leader is called the Orbitian King.
              </p>
              <p>
                With more than 500 unique traits, each NFT is unique and
                special. The Orbitians are a proud race, and they will never
                stop exploring the NFT Universe.
              </p>
              <p>Join them on their journey!</p>
            </div>

            <p className={styles.label}>Details</p>
            <ul className={styles.details}>
              <li>
                <a href="#">
                  <img
                    src={asset('/images/globe.svg')}
                    width={20}
                    height={20}
                    alt=""
                  />
                  View on Etherscan
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={asset('/images/globe.svg')}
                    width={20}
                    height={20}
                    alt=""
                  />
                  View Original
                </a>
              </li>
            </ul>

            <p className={styles.label}>Tags</p>
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag}>
                  <a href="#">{tag}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.more}>
        <h2 className={styles.moreHeading}>More From This Artist</h2>
        <a href="#" className={styles.moreButton}>
          <img
            src={asset('/images/arrow-right.svg')}
            width={20}
            height={20}
            alt=""
          />
          Go To Artist Page
        </a>

        <ul className={styles.moreList}>
          {moreNfts.map((item) => (
            <li key={item.src} className={styles.moreCard}>
              <a href="#">
                <FadeImg
                  className={styles.moreCover}
                  src={asset(`/images/nft/${item.src}`)}
                  alt={item.title}
                  width={330}
                  height={295}
                  loading="lazy"
                />
                <div className={styles.moreInfo}>
                  <p className={styles.moreTitle}>{item.title}</p>
                  <p className={styles.moreAuthor}>
                    <img
                      src={asset('/images/ava/animakid-ava.webp')}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <span>Orbitian</span>
                  </p>
                  <div className={styles.morePrices}>
                    <p className={styles.morePrice}>
                      <span className={styles.moreLabel}>Price</span>
                      <span className={styles.moreValue}>1.63 ETH</span>
                    </p>
                    <p className={styles.moreBid}>
                      <span className={styles.moreLabel}>Highest Bid</span>
                      <span className={styles.moreValue}>0.33 wETH</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Nft;
