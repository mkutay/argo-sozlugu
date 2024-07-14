import { NextRequest, NextResponse } from 'next/server';
import getMatches from '@/lib/getMatches';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query') || '';
  const index = Number(request.nextUrl.searchParams.get('index')) || 0;
  
  return NextResponse.json(getMatches(query, index));
}