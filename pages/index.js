import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>helloworld</h1>
      <p className={styles.text}>
        Proident veniam incididunt dolore labore nostrud eu eiusmod pariatur
        laboris id commodo voluptate.
      </p>
      <Link href="/ninjas" className={styles.btn}>
        list ninjas
      </Link>
    </div>
  );
}
