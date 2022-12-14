import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      router.push('/');
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="not-found">
      <h1>Oops..</h1>
      <h2>this page cannot be found.</h2>
      <p>
        go back to the <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
