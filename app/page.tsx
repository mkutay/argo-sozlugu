import SearchDictionary from "@/components/searchDictionary";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 items-center justify-between my-24 mx-8 md:mx-16">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Çevrim İçi Türkçe Argo Sözlüğü
      </h1>
      <SearchDictionary/>
    </main>
  );
}
