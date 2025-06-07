import { getPublishedPosts } from '@/lib/notion';
import { NextResponse } from 'next/server';

export async function GET() {
  const searchParams = request.nextUrl.searchParams;
  const tag = searchParams.get('tag');
  const sort = searchParams.get('sort');
  const pageSize = searchParams.get('pageSize');
  const startCursor = searchParams.get('startCursor');

  const response = await getPublishedPosts({
    tag,
    sort,
    pageSize,
    startCursor,
  });

  return NextResponse.json(response);
}
