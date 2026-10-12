export interface Product {
  name: string;
  url: string;
  domain: string;
  /** Màu chấm nhận diện trên thẻ. */
  color: string;
  tagline: string;
  description: string;
  tags: string[];
  proof: string;
}

// Danh mục sản phẩm của công ty. Thêm sản phẩm mới vào mảng này.
export const products: Product[] = [
  {
    name: 'TranscriptX',
    url: 'https://transcriptx.ai/',
    domain: 'transcriptx.ai',
    color: '#2a9d8f',
    tagline: 'AI transcription for video and audio',
    description: 'Transcribe videos, audio files or YouTube and TikTok links with speaker labels and timestamps, right in the browser.',
    tags: ['100+ languages', 'Speaker labels', 'SRT / VTT export'],
    proof: 'Free · No account needed',
  },
];
