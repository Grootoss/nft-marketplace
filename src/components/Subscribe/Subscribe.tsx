import styles from './Subscribe.module.css';
import { asset } from '../../utils/asset';

function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <article className={styles.card}>
        <img
          className={styles.cover}
          src={asset('/images/spaceman-mobile.jpg')}
          width={315}
          height={255}
          alt=""
        />
        <div className={styles.body}>
          <h2 className={styles.heading}>Join Our Weekly Digest</h2>
          <p className={styles.text}>
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <form
            className={styles.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
            />
            <button className={styles.button} type="submit">
              <img src={asset('/images/envelope.svg')} width={20} height={20} alt="" />
              Subscribe
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Subscribe;
