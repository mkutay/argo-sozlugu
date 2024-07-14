'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter, redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchDictionary() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    let ret = '';
    for (let i = 0; i < term.length; i++) {
      const a = term[i] == 'İ' ? 'i' : term[i].toLowerCase();
      
      if (a == 'ş') ret += 's';
      else if (a == 'ı') ret += 'i';
      else if (a == 'ğ') ret += 'g';
      else if (a == 'ü') ret += 'u';
      else if (a == 'ö') ret += 'o';
      else if (a == 'ç') ret += 'c';
      else if (a == 'İ') ret += 'i';
      else if (a == ' ') ret += '-';
      else ret += a;
    }

    if (ret) {
      params.set('query', ret);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="md:w-2/3 w-full flex flex-row gap-2 items-center">
      <Input
        type="search"
        placeholder="Ara..."
        className="py-6 text-md px-4"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <Button
        type="submit"
        className="py-6 md:px-6 px-4 text-md font-bold"
        onClick={() => {
          redirect(`${pathname}?${searchParams.toString()}`);
        }}
      >
        ARA
      </Button>
    </div>
  );
}