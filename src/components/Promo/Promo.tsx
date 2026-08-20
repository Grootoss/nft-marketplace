import styles from './Promo.module.css';

function Promo() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Discover digital Art & Collect NFTs</h2>
      <p className={styles.text}>
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.
      </p>
      <article className={styles.card}>
        <img
          className={styles.cover}
          src="/images/promo-cover-mobile.jpg"
          alt=""
        />
        <div className={styles.body}>
          <h3 className={styles.title}>Space Walking</h3>
          <p className={styles.author}>
            <img
              src="/images/ava/animakid-ava.svg"
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
          src="/images/rocket.svg"
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
