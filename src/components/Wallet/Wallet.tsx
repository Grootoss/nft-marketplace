import styles from './Wallet.module.css';
import { asset } from '../../utils/asset';

const wallets = [
  { src: 'metamask.svg', name: 'Metamask' },
  { src: 'wallet-connect.svg', name: 'Wallet Connect' },
  { src: 'coinbase.svg', name: 'Coinbase' },
];

function Wallet() {
  return (
    <section className={styles.wallet}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={asset('/images/wallet-desktop.jpg')}
        />
        <source
          media="(min-width: 834px)"
          srcSet={asset('/images/wallet-tablet.jpg')}
        />
        <img
          className={styles.cover}
          src={asset('/images/wallet-mobile.jpg')}
          alt=""
        />
      </picture>

      <div className={styles.body}>
        <h1 className={styles.heading}>Connect a wallet</h1>
        <p className={styles.text}>
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>

        <ul className={styles.list}>
          {wallets.map((wallet) => (
            <li key={wallet.src}>
              <a href="#" className={styles.button}>
                <img
                  src={asset(`/images/${wallet.src}`)}
                  width={32}
                  height={32}
                  alt=""
                />
                {wallet.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Wallet;
