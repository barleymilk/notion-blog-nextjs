import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
      {
        hostname: 'www.notion.so',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // 필요한 마크다운 플러그인을 여기에 추가하세요
  options: {
    remarkPlugins: [remarkGfm],
    // @ts-expect-error remark-gfm 타입 충돌 문제 해결
    // remarkPlugins: [['remark-gfm']],
  },
});

// MDX 설정을 Next.js 설정과 병합
export default withMDX(nextConfig);
