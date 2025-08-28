import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Passley - Secure Password Management',
  description: 'Your secure password management solution',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div lang={locale}>
      {children}
    </div>
  );
}
