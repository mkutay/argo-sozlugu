import getDictionary from "@/lib/getDictionary";

export default function getEntry(slug: string) {
  return getDictionary()[slug];
}