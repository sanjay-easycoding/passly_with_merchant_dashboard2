'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

interface NavbarProps {
  translations: {
    navbar: {
      logo: string;
      home: string;
      about: string;
      contact: string;
      language: string;
    };
  };
}

export default function Navbar({ translations }: NavbarProps) {
  const params = useParams();
  const router = useRouter();
  const currentLocale = params.locale as string;

  const switchLanguage = (locale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${currentLocale}`} className="text-2xl font-bold text-blue-600">
              {translations.navbar.logo}
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href={`/${currentLocale}`} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                {translations.navbar.home}
              </Link>
              <Link href={`/${currentLocale}/about`} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                {translations.navbar.about}
              </Link>
              <Link href={`/${currentLocale}/contact`} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                {translations.navbar.contact}
              </Link>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{translations.navbar.language}:</span>
            <select
              value={currentLocale}
              onChange={(e) => switchLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              <option value="de">DE</option>
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

