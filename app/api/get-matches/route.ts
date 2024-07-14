import { NextRequest, NextResponse } from 'next/server';
import getDictionary from '@/lib/getDictionary';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query') || '';
  const dictionary = getDictionary();
  const entries = [];

  for (const key in dictionary) {
    if (query !== '' && key.indexOf(query) > -1) {
      entries.push(dictionary[key]);
    }
  }

  return NextResponse.json(entries);
}