'use client';

import Image from 'next/image';
import logo from '../assets/images/logo192.png';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Projects', href: '/projects', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Resume', href: '/resume', current: false },
  { name: 'Blog', href: '/blog', current: false },
];

export default function AppBar() {
  return (
    <header className="bg-slate-400">
      <div>
        <nav className="flex">
          <Link href="/">
            <Image src={logo} height={36} width={36} alt="logo" />
          </Link>
          <ul className="flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
