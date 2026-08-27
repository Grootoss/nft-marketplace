import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import styles from './FadeImg.module.css';

function FadeImg({ className, onLoad, src, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <img
      {...props}
      ref={ref}
      src={src}
      className={[styles.fade, loaded && styles.visible, className]
        .filter(Boolean)
        .join(' ')}
      decoding={props.decoding ?? 'async'}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
    />
  );
}

export default FadeImg;
