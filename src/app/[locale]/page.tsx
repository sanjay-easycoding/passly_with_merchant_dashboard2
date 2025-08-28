import { getTranslations } from '../lib/translations';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = params;
  const translations = await getTranslations(locale);

  return (
    <div>
      <Navbar translations={translations} />
      <Hero translations={translations} />
    </div>
  );
}
