import Link from 'next/link';

import getDictionary from '@/lib/getDictionary';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { redirect } from 'next/navigation';

export default function MainTable({ query }: { query: string }) {
  const dictionary = getDictionary();
  const entries = [];

  for (const key in dictionary) {
    if (query !== '' && key.indexOf(query) > -1) {
      entries.push(dictionary[key]);
    }
  }

  const NoResult = () => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {query == '' ? '' : 'Aradığınıza Benzer Bir İfade Bulunamadı'}
    </h4>
  );

  return (
    <div className="grow flex flex-col place-content-center">
      {entries.length ? (
        <div className="flex flex-col grow rounded-lg bg-secondary shadow-md">
          <div className="flex flex-row items-center hover:bg-border/50 text-muted-foreground hover:rounded-t-lg px-2">
            <div className="font-extrabold text-xl py-3 w-1/3 md:w-1/4">
              İfade
            </div>
            <div className="font-extrabold text-xl py-3 w-2/3 md:w-3/4">
              Anlam
            </div>
          </div>
          <div className="flex flex-col">
            {entries.map((entry) => (
              <Link
                href={`/ifadeler/${entry.slug}`}
                key={entry.slug}
                className="flex flex-row items-center border-t hover:bg-border/50 transition-all last:hover:rounded-b-lg px-2"
              >
                <div className="italic font-semibold sm:text-lg text-md py-2 w-1/3 md:w-1/4">
                  {entry.phrase}
                </div>
                <div className="sm:text-lg text-md py-2 w-2/3 md:w-3/4">
                  {entry.meaning}
                </div>
              </Link>
            ))}
          </div>
        </div>
        ) : (
          <NoResult/>
        )
      }
    </div>
  );
}