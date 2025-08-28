export async function getTranslations(locale: string) {
  try {
    const translations = await import(`../../localization/${locale}/common.json`);
    return translations.default;
  } catch (error) {
    // Fallback to German if translation file not found
    const fallback = await import('../../localization/de/common.json');
    return fallback.default;
  }
}

