import { useState } from 'react';
import styles from './Marketplace.module.css';
import { asset } from '../../utils/asset';
import { nfts } from '../../data/products';

function Marketplace() {
  const [activeTab, setActiveTab] = useState('nfts');

  return (
    <section className={styles.marketplace}>
      <h2 className={styles.heading}>Browse Marketplace</h2>
      <p className={styles.text}>
        Browse through more than 50k NFTs on the NFT Marketplace.
      </p>

      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search your favourite NFTs"
        />
        <svg
          className={styles.searchIcon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="#858584" strokeWidth="2" />
          <path
            d="M20 20L16.5 16.5"
            stroke="#858584"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'nfts' ? styles.tabActive : ''}`}
          type="button"
          onClick={() => setActiveTab('nfts')}
        >
          NFTs
          <span className={styles.badge}>302</span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'collections' ? styles.tabActive : ''}`}
          type="button"
          onClick={() => setActiveTab('collections')}
        >
          Collections
          <span className={styles.badge}>67</span>
        </button>
      </div>

      {activeTab === 'nfts' ? (
        <ul className={styles.cards}>
          {nfts.map((item, index) => (
            <li key={item.srcMobile} className={styles.card}>
              <a href="#">
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet={asset(`/images/products/${item.srcDesktop}`)}
                  />
                  <source
                    media="(min-width: 834px)"
                    srcSet={asset(`/images/products/${item.srcTablet}`)}
                  />
                  <img
                    className={styles.cover}
                    src={asset(`/images/products/${item.srcMobile}`)}
                    alt={item.title}
                    width={330}
                    height={295}
                    sizes="(min-width: 1280px) 330px, (min-width: 834px) calc(50vw - 87px), calc(100vw - 60px)"
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                  />
                </picture>
                <div className={styles.cardInfo}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.author}>
                    <img
                      src={asset(`/images/ava/${item.avatar}`)}
                      width={24}
                      height={24}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{item.author}</span>
                  </p>
                  <div className={styles.prices}>
                    <p className={styles.price}>
                      <span className={styles.label}>Price</span>
                      <span className={styles.value}>{item.price}</span>
                    </p>
                    <p className={styles.bid}>
                      <span className={styles.label}>Highest Bid</span>
                      <span className={styles.value}>{item.bid}</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No collections yet</p>
      )}
    </section>
  );
}

export default Marketplace;
