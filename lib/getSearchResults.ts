import getDictionary from '@/lib/getDictionary';

export default async function getSearchResults(term: string) {
  const dictionary = getDictionary();
  return dictionary;
}