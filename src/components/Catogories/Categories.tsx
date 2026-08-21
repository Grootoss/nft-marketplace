import styles from './Categories.module.css';
import { categories } from '../../data/categories';
import { asset } from '../../utils/asset';

function Categories() {
  return (
    <section className={styles.categories}>
      <h2 className={styles.heading}>Browse Categories</h2>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.src} className={styles.item}>
            <a href="#">
              <img src={asset(`/images/categories/${category.src}`)} alt="" />
              <div className={styles.body}>
                <h3 className={styles.title}>{category.title}</h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
