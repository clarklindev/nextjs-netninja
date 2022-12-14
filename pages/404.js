import Link from 'next/link';

const NotFound = () => {
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
