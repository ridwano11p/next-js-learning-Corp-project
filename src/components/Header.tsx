import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full bg-slate-900 bg-opacity-90 z-10">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-center space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/performance" className="text-white hover:text-gray-300 transition-colors">
              Performance
            </Link>
          </li>
          <li>
            <Link href="/reliability" className="text-white hover:text-gray-300 transition-colors">
              Reliability
            </Link>
          </li>
          <li>
            <Link href="/scale" className="text-white hover:text-gray-300 transition-colors">
              Scale
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}