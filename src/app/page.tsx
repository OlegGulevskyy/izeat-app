import { LoremIpsumLongText } from "~/utils/dummy/loads-of-text";

export default function Home() {
  return (
    <div className="p-4 overflow-y-auto">
      <h1 className="text-2xl font-semibold">Izeat Home</h1>
      <p className="mt-2">Welcome to Izeat home page.</p>
      <p className="mt-2 text-slate-400">#under_construction.</p>
      {LoremIpsumLongText}
    </div>
  );
}
