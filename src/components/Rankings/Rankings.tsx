import { useState } from 'react';
import styles from './Rankings.module.css';
import { asset } from '../../utils/asset';
import { rankings } from '../../data/rankings';

const tabs = [
  { id: '1d', mobileLabel: '1d', tabletLabel: 'Today' },
  { id: '7d', mobileLabel: '7d', tabletLabel: 'This Week' },
  { id: '30d', mobileLabel: '30d', tabletLabel: 'This Month' },
  { id: 'all', mobileLabel: 'All Time', tabletLabel: 'All Time' },
];

const emptyMessages: Record<string, string> = {
  '7d': 'Not enough data for this week',
  '30d': 'Not enough data for this month',
  all: 'Not enough data for all time',
};

function Rankings() {
  const [activeTab, setActiveTab] = useState('1d');

  return (
    <section className={styles.rankings}>
      <h2 className={styles.heading}>Top Creators</h2>
      <p className={styles.text}>
        Check out top ranking NFT artists on the NFT Marketplace.
      </p>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
            type="button"
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.tabLabelMobile}>{tab.mobileLabel}</span>
            <span className={styles.tabLabelTablet}>{tab.tabletLabel}</span>
          </button>
        ))}
      </div>

      {activeTab === '1d' ? (
        <>
          <div className={styles.tableHead}>
            <span className={styles.headMobile}># Artist</span>
            <span className={styles.headVolumeMobile}>Volume</span>

            <span className={styles.headRank}>#</span>
            <span className={styles.headArtist}>Artist</span>
            <span className={styles.headChange}>Change</span>
            <span className={styles.headSold}>NFTs Sold</span>
            <span className={styles.headVolume}>Volume</span>
          </div>

          <ul className={styles.list}>
            {rankings.map((item, index) => (
              <li key={item.avatar} className={styles.item}>
                <a href="#" className={styles.link}>
                  <span className={styles.rank}>{index + 1}</span>
                  <img
                    className={styles.avatar}
                    src={asset(`/images/ava/rankings/${item.avatar}`)}
                    width={24}
                    height={24}
                    alt=""
                  />
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.change}>{item.change}</span>
                  <span className={styles.sold}>{item.sold}</span>
                  <span className={styles.volume}>{item.volume}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.empty}>{emptyMessages[activeTab]}</p>
      )}
    </section>
  );
}

export default Rankings;
