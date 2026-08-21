import styles from './Creator.module.css';
import { creators } from '../../data/creators';
import { asset } from '../../utils/asset';

function Creator() {
  return (
    <section className={styles.creator}>
      <h2 className={styles.heading}>Top Creators</h2>
      <p className={styles.text}>
        Checkout Top Rated Creators On The NFT
        <br />
        Marketplace
      </p>
      <ul className={styles.list}>
        {creators.map((creator) => (
          <li className={styles.item} key={creator.alt}>
            <a href="#" className={styles.link}>
              <img
                src={asset(`/images/creators/${creator.src}`)}
                width={60}
                height={60}
                alt={creator.alt}
              />
              <div>
                <p className={styles.bodyauthor}>{creator.name}</p>
                <p className={styles.bodytext}>
                  <span className={styles.decor}>Total Sales:</span>
                  &nbsp;{creator.price} ETH
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a href="#" className={styles.button}>
        <img
          src={asset('/images/rocket.svg')}
          width="20"
          height="20"
          alt="Decor rocket."
        />
        <span>View Rankings</span>
      </a>
    </section>
  );
}

export default Creator;
