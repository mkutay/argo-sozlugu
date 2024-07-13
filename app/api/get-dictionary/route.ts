import { NextResponse } from 'next/server';
import getDictionary from '@/lib/getDictionary';

export async function GET() {
  const dictionary = getDictionary();

  return NextResponse.json(dictionary);
}