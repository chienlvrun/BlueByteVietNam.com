// Logo BlueByte: hai chữ "B" chồng lên nhau, lệch chéo 1 ô, ghép từ các ô commit kiểu GitHub (lưới 6×6).
// B phía sau = "Blue" (xanh nhạt), B phía trước = "Byte" (xanh đậm), chỗ giao nhau đổi màu như hai lớp kính.
// Mỗi ký tự là một mức màu: 0 = nền, 2 = B sau, 4 = B trước, 3 = chỗ giao.
// public/favicon.svg và public/brand/bluebyte-mark.svg được vẽ từ cùng ma trận này.
export const LOGO_MATRIX = ['222000', '244300', '232040', '244300', '232040', '044400'];

export const LOGO_COLORS: Record<string, string> = {
  '0': '#dbe9fd',
  '2': '#79b5f7',
  '3': '#0071e3',
  '4': '#0050a6',
};

export const LOGO_CELL = 10;
export const LOGO_GAP = 2;
export const LOGO_RADIUS = 2.5;
export const LOGO_SIZE = LOGO_MATRIX.length * LOGO_CELL + (LOGO_MATRIX.length - 1) * LOGO_GAP;

export interface LogoCell {
  x: number;
  y: number;
  fill: string;
}

export const logoCells: LogoCell[] = LOGO_MATRIX.flatMap((row, r) =>
  [...row].map((level, c) => ({
    x: c * (LOGO_CELL + LOGO_GAP),
    y: r * (LOGO_CELL + LOGO_GAP),
    fill: LOGO_COLORS[level],
  })),
);
