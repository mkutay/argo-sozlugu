import getDictionary from '@/lib/getDictionary';
import MainTable from '@/components/mainTable';

export default function Page() {

  return (
    <main className="flex flex-col gap-12 my-24 mx-8 md:mx-16 justify-center items-center">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Çevrim İçi Türkçe Argo Sözlüğü
      </h1>
      <div className="w-full md:w-2/3">
        <MainTable/>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const dictionary = getDictionary();
  let ret: { slug: string }[] = [];

  for (const key in dictionary) {
    ret.push({ slug: key });
  }

  return ret;
}