import styles from './Signup.module.css';
import { asset } from '../../utils/asset';

function Signup() {
  return (
    <section className={styles.signup}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={asset('/images/signup-desktop.jpg')}
        />
        <source
          media="(min-width: 834px)"
          srcSet={asset('/images/signup-tablet.jpg')}
        />
        <img
          className={styles.cover}
          src={asset('/images/signup-mobile.jpg')}
          alt=""
        />
      </picture>

      <div className={styles.body}>
        <h1 className={styles.heading}>Create Account</h1>
        <p className={styles.text}>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>

        <form
          className={styles.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <label className={styles.field}>
            <img
              className={styles.icon}
              src={asset('/images/user.svg')}
              width={20}
              height={20}
              alt=""
            />
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
            />
          </label>

          <label className={styles.field}>
            <img
              className={styles.icon}
              src={asset('/images/email.svg')}
              width={20}
              height={20}
              alt=""
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </label>

          <label className={styles.field}>
            <img
              className={styles.icon}
              src={asset('/images/lock.svg')}
              width={20}
              height={20}
              alt=""
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>

          <label className={styles.field}>
            <img
              className={styles.icon}
              src={asset('/images/lock.svg')}
              width={20}
              height={20}
              alt=""
            />
            <input
              className={styles.input}
              type="password"
              name="confirm"
              placeholder="Confirm Password"
            />
          </label>

          <button className={styles.button} type="submit">
            Create account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
