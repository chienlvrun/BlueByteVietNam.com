// Thêm ngôn ngữ mới: thêm mã vào `locales`, khai báo `localeLabels`,
// tạo file trong ./locales và bổ sung bản dịch cho các trường Localized trong src/data.
export const locales = ['vi', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'vi';

export const localeLabels: Record<Locale, string> = {
  vi: 'VI',
  en: 'EN',
};

/** Một giá trị có bản dịch cho mọi ngôn ngữ. */
export type Localized<T = string> = Record<Locale, T>;
