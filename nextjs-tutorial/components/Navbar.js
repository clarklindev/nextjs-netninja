import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja list</h1>
      </div>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/ninjas">ninja listing</Link>
    </nav>
  );
};

export default Navbar;
