import styles from '../styles/Home.module.css';
import LaunchList from '../components/launch-list';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SpaceX Launch List</title>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.heading}>SpaceX Launch List</h1>
      </header>

      <main className={styles.container}>
        <LaunchList />
      </main>
    </>
  );
}
