import styles from './Footer.module.css';
import { asset } from '../../utils/asset';

const socials = [
  { src: 'discord.svg', alt: 'Discord' },
  { src: 'youtube.svg', alt: 'YouTube' },
  { src: 'twitter.svg', alt: 'Twitter' },
  { src: 'insta.svg', alt: 'Instagram' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/" className={styles.logo}>
        <img src={asset('/images/logo-mobile.svg')} alt="NFT Marketplace" />
      </a>
      <p className={styles.text}>
        NFT marketplace UI created with Anima for Figma.
      </p>
      <p className={styles.community}>Join our community</p>
      <ul className={styles.socials}>
        {socials.map((social) => (
          <li key={social.src}>
            <a href="#">
              <img
                src={asset(`/images/social/${social.src}`)}
                width={32}
                height={32}
                alt={social.alt}
              />
            </a>
          </li>
        ))}
      </ul>

      <h2 className={styles.heading}>Explore</h2>
      <ul className={styles.links}>
        <li>
          <a href="#">Marketplace</a>
        </li>
        <li>
          <a href="#">Rankings</a>
        </li>
        <li>
          <a href="#">Connect a wallet</a>
        </li>
      </ul>

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

      <p className={styles.copy}>© NFT Market. Use this template freely.</p>
    </footer>
  );
}

export default Footer;
