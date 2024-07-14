export default function getMatches(query: string, dictionary: { [key: string]: { [key: string]: any } }) {
  const entries = [];

  for (const key in dictionary) {
    if (query !== '' && key.indexOf(query) > -1) {
      entries.push(dictionary[key]);
    }
  }

  return entries;
}