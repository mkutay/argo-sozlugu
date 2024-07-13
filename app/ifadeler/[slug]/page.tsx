import getDictionary from "@/lib/getDictionary";
import getEntry from "@/lib/getEntry";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = getEntry(slug);

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {entry.phrase}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
        {entry.meaning}
      </p>
    </div>
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