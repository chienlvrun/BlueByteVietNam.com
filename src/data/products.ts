import type { Localized } from '@/i18n/config';

export interface Product {
  name: string;
  url: string;
  domain: string;
  /** Màu chấm nhận diện trên thẻ. */
  color: string;
  tagline: Localized;
  description: Localized;
  tags: Localized<string[]>;
  proof: Localized;
}

// Danh mục sản phẩm của công ty. Thêm sản phẩm mới vào mảng này.
export const products: Product[] = [
  {
    name: 'TranscriptX',
    url: 'https://transcriptx.ai/',
    domain: 'transcriptx.ai',
    color: '#2a9d8f',
    tagline: {
      vi: 'Chuyển giọng nói thành văn bản bằng AI',
      en: 'AI transcription for video and audio',
    },
    description: {
      vi: 'Chép lời video, file âm thanh hoặc link YouTube, TikTok… với phân biệt người nói và mốc thời gian, ngay trên trình duyệt.',
      en: 'Transcribe videos, audio files or YouTube and TikTok links with speaker labels and timestamps, right in the browser.',
    },
    tags: {
      vi: ['Hơn 100 ngôn ngữ', 'Phân biệt người nói', 'Xuất SRT / VTT'],
      en: ['100+ languages', 'Speaker labels', 'SRT / VTT export'],
    },
    proof: {
      vi: 'Miễn phí · Không cần tài khoản',
      en: 'Free · No account needed',
    },
  },
];
