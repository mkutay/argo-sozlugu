import MainTable from '@/components/mainTable';
import SearchDictionary from '@/components/searchDictionary';
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <main className="flex flex-col gap-12 items-center justify-between my-24 mx-8 md:mx-16">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Çevrim İçi Türkçe Argo Sözlüğü
      </h1>
      <Suspense>
        <SearchDictionary/>
      </Suspense>
      <div className="w-full md:w-2/3">
        <MainTable query={query}/>
      </div>
    </main>
  );
}
