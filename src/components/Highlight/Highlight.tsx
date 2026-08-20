import { useEffect, useState } from 'react';
import styles from './Highlight.module.css';

const AUCTION_END =
  Date.now() + 59 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000;

function getTimeLeft(end: number) {
  const diff = Math.max(0, end - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

function Highlight() {
  const [time, setTime] = useState(() => getTimeLeft(AUCTION_END));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(AUCTION_END));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.highlight}>
      <a href="#" className={styles.author}>
        <img src="/images/ava/shroomie-ava.svg" width={24} height={24} alt="" />
        <span>Shroomie</span>
      </a>

      <h2 className={styles.heading}>Magic Mashrooms</h2>

      <div className={styles.timer}>
        <p className={styles.timerLabel}>Auction ends in:</p>
        <div className={styles.clock}>
          <p className={styles.unit}>
            <span className={styles.digits}>{pad(time.hours)}</span>
            <span className={styles.caption}>Hours</span>
          </p>
          <span className={styles.colon}>:</span>
          <p className={styles.unit}>
            <span className={styles.digits}>{pad(time.minutes)}</span>
            <span className={styles.caption}>Minutes</span>
          </p>
          <span className={styles.colon}>:</span>
          <p className={styles.unit}>
            <span className={styles.digits}>{pad(time.seconds)}</span>
            <span className={styles.caption}>Seconds</span>
          </p>
        </div>
      </div>

      <a href="#" className={styles.button}>
        <img src="/images/eye.svg" width={20} height={20} alt="" />
        See NFT
      </a>
    </section>
  );
}

export default Highlight;
