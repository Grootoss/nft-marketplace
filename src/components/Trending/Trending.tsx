import styles from './Trending.module.css';
import { collections } from '../../data/trendings';
import { asset } from '../../utils/asset';

function Trending() {
  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>Trending Collection</h2>
      <p className={styles.text}>
        Checkout our weekly updated trending collection.
      </p>

      <ul className={styles.cards}>
        {collections.map((item) => (
          <li key={item.id} className={styles.card}>
            <ul className={styles.list}>
              <li>
                <a href="#">
                  <img
                    className={styles.cover}
                    src={asset(`/images/trending/${item.cover}`)}
                    alt=""
                  />
                </a>
              </li>
              {item.thumbs.map((src) => (
                <li key={src}>
                  <a href="#">
                    <img
                      className={styles.thumb}
                      src={asset(`/images/trending/${src}`)}
                      alt=""
                    />
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className={styles.more}>
                  {item.extraCount}
                </a>
              </li>
            </ul>
            <p className={styles.category}>{item.title}</p>
            <p className={styles.author}>
              <img
                src={asset(`/images/ava/${item.avatar}`)}
                width={24}
                height={24}
                alt=""
              />
              <span>{item.author}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Trending;
