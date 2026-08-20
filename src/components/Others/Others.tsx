import styles from './Others.module.css';
import { others } from '../../data/others';

function Others() {
  return (
    <section className={styles.others}>
      <h2 className={styles.heading}>Discover More NFTs</h2>
      <p className={styles.text}>Explore new trending NFTs</p>

      <ul className={styles.list}>
        {others.map((item) => (
          <li key={item.src} className={styles.item}>
            <a href="#">
              <img src={`/images/others/${item.src}`} alt={item.title} />
              <div className={styles.body}>
                <p className={styles.work}>{item.title}</p>
                <p className={styles.author}>
                  <img src={`/images/ava/${item.avatar}`} alt="" />
                  {item.author}
                </p>
                <div className={styles.prices}>
                  <p className={styles.price}>
                    <span className={styles.label}>Price</span>
                    <span className={styles.value}>{item.price} ETH</span>
                  </p>
                  <p className={styles.bid}>
                    <span className={styles.label}>Highest Bid</span>
                    <span className={styles.value}>{item.bid} wETH</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a href="#" className={styles.button}>
        <img src="/images/eye.svg" width={20} height={20} />{' '}
        <span>See All</span>
      </a>
    </section>
  );
}

export default Others;
