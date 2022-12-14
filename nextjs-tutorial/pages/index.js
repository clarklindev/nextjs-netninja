import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>helloworld</h1>
      <p>
        Proident veniam incididunt dolore labore nostrud eu eiusmod pariatur
        laboris id commodo voluptate.
      </p>
      <Link href="/ninjas">list ninjas</Link>
      <Footer />
    </div>
  );
}
