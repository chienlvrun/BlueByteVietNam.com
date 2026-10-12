# BlueByte Vietnam — Website

Website 1 trang bằng Astro + HTML/CSS thuần (không thư viện, không JavaScript phía client, font hệ thống kiểu Apple). Một ngôn ngữ (tiếng Anh), chạy thẳng ở `/`.

```bash
npm install
npm run dev      # chạy thử
npm run build    # xuất ra dist/
```

## Cấu trúc

```
src/
├─ content.ts           # toàn bộ chữ hiển thị trên trang
├─ data/                # products.ts (danh mục sản phẩm), site.ts (thông tin pháp lý, liên hệ), brand.ts (logo)
├─ styles/global.css    # màu sắc, font, nút kiểu Apple
├─ layouts/BaseLayout.astro
├─ components/
│  ├─ Header.astro, Footer.astro, Logo.astro
│  └─ sections/         # Hero, ContributionGraph (biểu đồ kiểu GitHub viết chữ BLUEBYTE VN), Products, Approach, About, Contact
└─ pages/
   ├─ index.astro       # trang chủ (/)
   └─ 404.astro
```

## Sửa nội dung

- Chữ trên trang: `src/content.ts`.
- Sản phẩm: thêm phần tử vào mảng trong `src/data/products.ts`.
- Thông tin pháp lý (MST, địa chỉ, người đại diện), email: `src/data/site.ts`.
- Logo: ma trận trong `src/data/brand.ts`.
- Chữ trên biểu đồ: sửa `TEXT` / `GLYPHS` trong `components/sections/ContributionGraph.astro`.
- Màu sắc: biến ở đầu `src/styles/global.css`.
