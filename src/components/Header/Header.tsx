import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { asset } from '../../utils/asset';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={asset('/images/logo-mobile.svg')} alt="NFT Marketplace" />
      </Link>

      <button
        className={styles.burgerMenu}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <img
            src={asset('/images/burger-menu.svg')}
            alt=""
            width={24}
            height={24}
          />
        )}
      </button>

      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/marketplace">
          Marketplace
        </Link>
        <Link className={styles.navLink} to="/rankings">
          Rankings
        </Link>
        <Link className={styles.navLink} to="/nft">
          Nft
        </Link>
        <Link className={styles.navLink} to="/wallet">
          Connect a wallet
        </Link>
        <Link className={styles.signup} to="/signup">
          <img src={asset('/images/user.svg')} width={20} height={20} alt="" />
          Sign Up
        </Link>
      </nav>

      <nav
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <Link className={styles.mobileLink} to="/marketplace">
          Marketplace
        </Link>
        <Link className={styles.mobileLink} to="/rankings">
          Rankings
        </Link>
        <Link className={styles.mobileLink} to="/nft">
          Nft
        </Link>
        <Link className={styles.mobileLink} to="/wallet">
          Connect a wallet
        </Link>
        <Link className={styles.mobileSignup} to="/signup">
          <img src={asset('/images/user.svg')} width={20} height={20} alt="" />
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
