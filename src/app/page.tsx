import Link from "next/link";
import { getServerUser } from "~/utils/auth";

const Homepage = async () => {
  const user = getServerUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-white">Izeat - share good food with good people</h1>
      <div className="flex w-full flex-1 flex-col items-center gap-4">
        {!user && (
          <Link href="/login" className="text-lg text-white">
            Login
          </Link>
        )}
        <Link href="/authenticated" className="text-lg text-white">
          Authenticated Route Example
        </Link>
      </div>
    </main>
  );
};

export default Homepage;
