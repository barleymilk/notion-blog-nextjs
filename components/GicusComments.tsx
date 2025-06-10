'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <Giscus
      repo="barleymilk/notion-blog-nextjs-giscus"
      repoId="R_kgDOO5CPug"
      category="Announcements"
      categoryId="DIC_kwDOO5CPus4CrR6O"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="ko"
    />
  );
}
