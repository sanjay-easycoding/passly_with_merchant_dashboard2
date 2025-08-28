import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Passley - Secure Password Management',
  description: 'Your secure password management solution',
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div lang={params.locale}>
      {children}
    </div>
  );
}
