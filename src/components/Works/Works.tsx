import styles from './Works.module.css';
import { works } from '../../data/works';
import { asset } from '../../utils/asset';

function Works() {
  return (
    <section className={styles.works}>
      <h2 className={styles.heading}>How It Works</h2>
      <p className={styles.text}>Find out how to get started</p>
      <ul className={styles.list}>
        {works.map((work) => (
          <li key={work.src} className={styles.item}>
            <div className={styles.iconWrap}>
              <img className={styles.icon} src={asset(`/images/${work.src}`)} alt="" />
            </div>
            <div>
              <h3 className={styles.title}>{work.title}</h3>
              <p className={styles.description}>{work.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Works;
