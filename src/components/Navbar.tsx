import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  return (
    <nav className="bg-jayBlack sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-jayYellow">
          Jaybash Customs
        </Link>
        <ul className="flex space-x-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-jayWhite hover:text-jayYellow transition-transform transform hover:scale-105"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}