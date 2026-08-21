import styles from './Promo.module.css';
import { asset } from '../../utils/asset';

function Promo() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Discover
        <br />
        Digital Art & Collect NFTs
      </h2>
      <p className={styles.text}>
        NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell
        Art From More Than 20k NFT Artists.
      </p>
      <article className={styles.card}>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={asset('/images/promo-cover-desktop.jpg')}
          />
          <img
            className={styles.cover}
            src={asset('/images/promo-cover-mobile.jpg')}
            alt=""
          />
        </picture>
        <div className={styles.body}>
          <h3 className={styles.title}>Space Walking</h3>
          <p className={styles.author}>
            <img
              src={asset('/images/ava/animakid-ava.svg')}
              width="24"
              height="24px"
              alt=""
            />
            <span>Animakid</span>
          </p>
        </div>
      </article>

      <a href="#" className={styles.started}>
        <img
          src={asset('/images/rocket.svg')}
          width="20"
          height="20"
          alt="Decor icon Rocket"
        />
        Get Started
      </a>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.value}>240k+</span>
          <span className={styles.label}>Total sale</span>
        </li>
        <li className={styles.item}>
          <span className={styles.value}>100k+</span>
          <span className={styles.label}>Auctions</span>
        </li>
        <li className={styles.item}>
          <span className={styles.value}>240k+</span>
          <span className={styles.label}>Artists</span>
        </li>
      </ul>
    </section>
  );
}

export default Promo;
