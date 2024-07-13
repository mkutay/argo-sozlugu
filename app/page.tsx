import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 items-center justify-between my-24 mx-8 md:mx-16">
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
    </main>
  );
}
