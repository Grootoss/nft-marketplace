import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Artist.module.css';
import { asset } from '../../utils/asset';
import { getArtistById } from '../../data/artists';

function Artist() {
  const { id } = useParams();
  const artist = getArtistById(id ?? '');
  const [activeTab, setActiveTab] = useState('created');

  if (!artist) {
    return (
      <section className={styles.notFound}>
        <p>Artist not found</p>
        <Link to="/">Go Home</Link>
      </section>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(artist.wallet);
    } catch {
      // ignore
    }
  };

  return (
    <section className={styles.artist}>
      <div className={styles.hero}>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={asset(`/images/artist/${artist.coverDesktop}`)}
          />
          <source
            media="(min-width: 834px)"
            srcSet={asset(`/images/artist/${artist.coverTablet}`)}
          />
          <img
            className={styles.cover}
            src={asset(`/images/artist/${artist.coverMobile}`)}
            alt=""
          />
        </picture>
        <img
          className={styles.avatar}
          src={asset(`/images/artist/${artist.avatar}`)}
          width={120}
          height={120}
          alt={artist.name}
          decoding="async"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h1 className={styles.name}>{artist.name}</h1>
          <div className={styles.actions}>
            <button className={styles.copy} type="button" onClick={handleCopy}>
              <img
                src={asset('/images/copy.svg')}
                width={20}
                height={20}
                alt=""
              />
              {artist.wallet}
            </button>
            <button className={styles.follow} type="button">
              <img
                src={asset('/images/plus.svg')}
                width={20}
                height={20}
                alt=""
              />
              Follow
            </button>
          </div>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.statValue}>{artist.volume}</span>
            <span className={styles.statLabel}>Volume</span>
          </li>
          <li>
            <span className={styles.statValue}>{artist.nftsSold}</span>
            <span className={styles.statLabel}>NFTs Sold</span>
          </li>
          <li>
            <span className={styles.statValue}>{artist.followers}</span>
            <span className={styles.statLabel}>Followers</span>
          </li>
        </ul>

        <p className={styles.label}>Bio</p>
        <p className={styles.bio}>{artist.bio}</p>

        <p className={styles.label}>Links</p>
        <ul className={styles.links}>
          {artist.links.website && (
            <li>
              <a href={artist.links.website}>
                <img
                  src={asset('/images/globe.svg')}
                  width={32}
                  height={32}
                  alt="Website"
                />
              </a>
            </li>
          )}
          {artist.links.discord && (
            <li>
              <a href={artist.links.discord}>
                <img
                  src={asset('/images/social/discord.svg')}
                  width={32}
                  height={32}
                  alt="Discord"
                />
              </a>
            </li>
          )}
          {artist.links.youtube && (
            <li>
              <a href={artist.links.youtube}>
                <img
                  src={asset('/images/social/youtube.svg')}
                  width={32}
                  height={32}
                  alt="YouTube"
                />
              </a>
            </li>
          )}
          {artist.links.twitter && (
            <li>
              <a href={artist.links.twitter}>
                <img
                  src={asset('/images/social/twitter.svg')}
                  width={32}
                  height={32}
                  alt="Twitter"
                />
              </a>
            </li>
          )}
          {artist.links.instagram && (
            <li>
              <a href={artist.links.instagram}>
                <img
                  src={asset('/images/social/insta.svg')}
                  width={32}
                  height={32}
                  alt="Instagram"
                />
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className={styles.gallery}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'created' ? styles.tabActive : ''}`}
            type="button"
            onClick={() => setActiveTab('created')}
          >
            Created
            <span className={styles.badge}>{artist.createdCount}</span>
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'owned' ? styles.tabActive : ''}`}
            type="button"
            onClick={() => setActiveTab('owned')}
          >
            Owned
            <span className={styles.badge}>{artist.ownedCount}</span>
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'collection' ? styles.tabActive : ''}`}
            type="button"
            onClick={() => setActiveTab('collection')}
          >
            Collection
            <span className={styles.badge}>{artist.collectionCount}</span>
          </button>
        </div>

        {activeTab === 'created' ? (
          <ul className={styles.cards}>
            {artist.created.map((item) => (
              <li key={item.src} className={styles.card}>
                <a href="#">
                  <img
                    className={styles.cardCover}
                    src={asset(`/images/artist/${item.src}`)}
                    alt={item.title}
                    width={330}
                    height={295}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.cardInfo}>
                    <p className={styles.cardTitle}>{item.title}</p>
                    <p className={styles.cardAuthor}>
                      <img
                        src={asset(`/images/artist/${artist.avatar}`)}
                        width={24}
                        height={24}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{artist.name}</span>
                    </p>
                    <div className={styles.cardPrices}>
                      <p className={styles.cardPrice}>
                        <span className={styles.cardLabel}>Price</span>
                        <span className={styles.cardValue}>{item.price}</span>
                      </p>
                      <p className={styles.cardBid}>
                        <span className={styles.cardLabel}>Highest Bid</span>
                        <span className={styles.cardValue}>{item.bid}</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>No items yet</p>
        )}
      </div>
    </section>
  );
}

export default Artist;
