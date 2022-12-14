import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>helloworld</h1>
      <p>
        Proident veniam incididunt dolore labore nostrud eu eiusmod pariatur
        laboris id commodo voluptate.
      </p>
      <Link href="/ninjas">list ninjas</Link>
    </div>
  );
}
