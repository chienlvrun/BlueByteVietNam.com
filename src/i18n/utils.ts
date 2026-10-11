import { locales, type Locale, type Localized } from './config';
import vi from './locales/vi';
import en from './locales/en';

const dictionaries = { vi, en };

export function useTranslations(lang: Locale) {
  return dictionaries[lang];
}

/** Lấy bản dịch của một trường dữ liệu Localized. */
export function pick<T>(value: Localized<T>, lang: Locale): T {
  return value[lang];
}

/** getStaticPaths dùng chung cho các trang có tham số [lang]. */
export function localeStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
