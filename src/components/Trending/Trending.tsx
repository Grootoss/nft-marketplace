import styles from './Trending.module.css';
import { pictures } from '../../data/trendings';

function Trending() {
  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>Trending Collection</h2>
      <p className={styles.text}>
        Checkout our weekly updated trending collection.
      </p>
      <ul className={styles.list}>
        {pictures.map((picture) => (
          <li key={picture.src}>
            <a href="#">
              <img
                className={styles.product}
                src={`/images/trending/${picture.src}`}
                width={picture.width}
                height={picture.height}
                alt={picture.alt}
              />
            </a>
          </li>
        ))}
        <li>
          <a href="#" className={styles.more}>
            <span>1025+</span>
          </a>
        </li>
      </ul>
      <div className={styles.body}>
        <p className={styles.category}>DSGN Animals</p>
        <p className={styles.author}>
          <img
            src="/images/ava/mrfox-ava.svg"
            width="24"
            height="24"
            alt="Mrfox ava."
          />
          <span>MrFox</span>
        </p>
      </div>
    </section>
  );
}

export default Trending;
