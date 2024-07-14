import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchDictionary() {
  return (
    <div className="md:w-2/3 w-full flex flex-row gap-2 items-center">
      <Input
        type="search"
        placeholder="Ara..."
        className="py-6 text-md px-4"
      />
      <Button type="submit" className="py-6 md:px-6 px-4 text-md font-bold">
        ARA
      </Button>
    </div>
  );
}