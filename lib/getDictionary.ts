import path from 'path';
import fs from 'fs';

export default function getDictionary() {
  const dictionary = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/dictionary.json'), 'utf-8'));
  
  return dictionary;
}