import getDictionary from '@/lib/getDictionary';

export default function getMatches(query: string, index?: number) {
  const dictionary = getDictionary();
  const entries = [];

  for (const key in dictionary) {
    if (query !== '' && query !== ' ' && key.indexOf(query) > -1) {
      if (index == 0) {
        return dictionary[key];
      }
      entries.push(dictionary[key]);
    } else if (query == ' ') {
      entries.push(dictionary[key]);
    }
  }

  return typeof index == 'undefined' ? entries : entries[index];
}