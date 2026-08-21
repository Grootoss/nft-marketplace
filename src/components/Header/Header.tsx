import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/images/logo-mobile.svg" alt="NFT Marketplace" />
      </Link>

      <button className={styles.burgerMenu} type="button">
        <img src="/images/burger-menu.svg" alt="" width={24} height={24} />
      </button>

      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/marketplace">
          Marketplace
        </Link>
        <Link className={styles.navLink} to="/rankings">
          Rankings
        </Link>
        <Link className={styles.navLink} to="/wallet">
          Connect a wallet
        </Link>
        <Link className={styles.signup} to="/signup">
          <img src="/images/user.svg" width={20} height={20} alt="" />
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
