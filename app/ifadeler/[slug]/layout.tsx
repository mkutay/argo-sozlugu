import SearchDictionary from "@/components/searchDictionary";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-12 my-24 mx-8 md:mx-16 justify-center items-center">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Çevrim İçi Türkçe Argo Sözlüğü
      </h1>
      <SearchDictionary/>
      <div className="w-full md:w-2/3">
        {children}
      </div>
    </main>
  );
}