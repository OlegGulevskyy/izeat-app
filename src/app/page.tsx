import { LoremIpsumLongText } from "~/utils/dummy/loads-of-text";

export default function Home() {
  return (
    <div className="overflow-y-auto p-4 py-10">
      <h1 className="text-2xl font-semibold">Izeat Home</h1>
      <p className="mt-2">Welcome to Izeat home page.</p>
      <p className="mt-2 text-slate-400">#under_construction.</p>
      {LoremIpsumLongText}
    </div>
  );
}
