import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      <div className="md:w-2/3 w-full flex flex-row gap-4 items-center">
        <Input
          type="search"
          placeholder="Ara..."
          className="py-6 text-md px-4"
        />
        <Button className="py-6 md:px-6 px-4 text-md font-bold">
          ARA
        </Button>
      </div>
      <div className="w-full md:w-5/12">
        {children}
      </div>
    </main>
  );
}