# BlueByte Vietnam — Website

Website 1 trang bằng Astro + HTML/CSS thuần (không thư viện, không JavaScript phía client, font hệ thống kiểu Apple). Hỗ trợ vi/en.

```bash
npm install
npm run dev      # chạy thử
npm run build    # xuất ra dist/
```

## Cấu trúc

```
src/
├─ i18n/
│  ├─ config.ts         # danh sách ngôn ngữ
│  ├─ utils.ts          # useTranslations, pick
│  └─ locales/          # vi.ts (gốc), en.ts — toàn bộ chữ trên trang
├─ data/                # products.ts (danh mục sản phẩm), site.ts (thông tin pháp lý, liên hệ)
├─ styles/global.css    # màu sắc, font, class dùng chung
├─ layouts/BaseLayout.astro
├─ components/
│  ├─ Header.astro, Footer.astro, Logo.astro
│  └─ sections/         # Hero, ContributionGraph (biểu đồ kiểu GitHub viết chữ BLUEBYTE VN), Products, Approach, About, Contact
└─ pages/
   ├─ [lang]/index.astro   # /vi/ và /en/
   └─ 404.astro
```

`/` tự chuyển về `/vi/` (cấu hình trong `astro.config.mjs`).

## Sửa nội dung

- Chữ trên trang: `src/i18n/locales/vi.ts` và `en.ts`.
- Sản phẩm: thêm phần tử vào mảng trong `src/data/products.ts`.
- Thông tin pháp lý (MST, địa chỉ, người đại diện), email: `src/data/site.ts`.
- Chữ trên biểu đồ: sửa `TEXT` / `GLYPHS` trong `components/sections/ContributionGraph.astro`.
- Màu sắc: biến ở đầu `src/styles/global.css`.
- Thêm một phần mới: tạo file trong `components/sections/` rồi thêm vào `pages/[lang]/index.astro`.
