import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} alt="" />
      </div>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/ninjas">ninja listing</Link>
    </nav>
  );
};

export default Navbar;
