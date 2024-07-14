import Link from 'next/link';

import getMatches from '@/lib/getMatches';
import getDictionary from '@/lib/getDictionary';

export default function MainTable({ query }: { query?: string }) {
  const entries = typeof query == 'undefined' ? getMatches(' ') : getMatches(query);

  const NoResult = () => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {query == '' ? '' : 'Aradığınıza benzer bir ifade bulunamadı.'}
    </h4>
  );

  return (
    <div className="grow flex flex-col place-content-center">
      {entries.length ? (
        <div className="flex flex-col grow border border-border rounded-lg shadow-sm">
          <div className="flex flex-row items-center text-accent-foreground hover:rounded-t-lg md:px-4 px-2">
            <div className="font-extrabold text-xl py-3 w-1/3 md:w-1/4">
              İfade
            </div>
            <div className="font-extrabold text-xl py-3 w-2/3 md:w-3/4">
              Anlam
            </div>
          </div>
          <div className="flex flex-col">
            {entries.map((entry: any) => (
              <Link
                href={`/ifadeler/${entry.slug}`}
                key={entry.slug}
                className="flex flex-row items-center border-t border-border hover:bg-border/50 transition-all md:px-4 px-2"
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