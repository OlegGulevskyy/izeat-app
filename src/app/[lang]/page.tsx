import TranslationsProvider from "~/providers/TranslationProvider";
import { initTranslations } from "../i18n";

const namespaces = ["home"];

export default async function Home({ params }: PageProps) {
  const { t, resources } = await initTranslations(params.lang, namespaces);

  return (
    <TranslationsProvider
      namespaces={namespaces}
      locale={params.lang}
      resources={resources}
    >
      <div className="overflow-y-auto p-4 py-10">
        <h1 className="text-2xl font-semibold">Izeat Home</h1>
        <p className="mt-2">{t("slogan")}</p>
        <p className="mt-2 text-slate-400">#under_construction.</p>
      </div>
    </TranslationsProvider>
  );
}
