import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src="/images/logo-mobile.svg" alt="Logo NFT Marketplace" />
      </a>
      <button className={styles.burgerMenu}>
        <img
          src="/images/burger-menu.svg"
          alt="Open menu image"
          width="24px"
          height="24px"
        />
      </button>
    </header>
  );
}

export default Header;
