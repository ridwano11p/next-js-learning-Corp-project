import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const rendersnippets = snippets.map((snippet: { id: number; title: string }) => {
    return (
      <div key={snippet.id} className="border p-4 mb-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">{snippet.title}</h2>
        <Link href={`/snippets/${snippet.id}`} className="text-blue-500 underline">
          View Snippet
        </Link>
        {/* Link moved outside the map */}
      </div>
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Next.js!</h1>
        <p className="text-xl">
          Get started by editing{" "}
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="my-4"> {/* Add margin top and bottom */}
          <Link
            href={"/snippets/new"}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Create Snippet
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Existing Snippets</h2> {/* Added heading for snippets list */}
        {rendersnippets}
      </div>
    </main>
  );
}