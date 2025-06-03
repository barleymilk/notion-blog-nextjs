'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { TagFilterItem } from '@/types/blog';
import { cn } from '@/lib/utils';

interface TagSectionProps {
  tags: TagFilterItem[];
  selectedTag: string;
}

export function TagSection({ tags, selectedTag }: TagSectionProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (tagName: string) => {
    const params = new URLSearchParams(searchParams);
    if (tagName === '전체') {
      params.delete('tag');
    } else {
      params.set('tag', tagName);
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>태그 목록</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {tags.map((tag) => (
            <Link href={createPageURL(tag.name)} key={tag.name} scroll={false} shallow={true}>
              <div
                className={cn(
                  'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors',
                  selectedTag === tag.name && 'bg-muted-foreground/10 text-foreground font-medium'
                )}
              >
                <span>{tag.name}</span>
                <span>{tag.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
