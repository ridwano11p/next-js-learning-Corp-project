import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000));
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id, 10) },
  });

  if (!snippet) {
    notFound();
  }

  return (
  <div className="p-4 md:p-8"> {/* Add overall padding */}
    {/* Header section with title and buttons */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{snippet.title}</h1>
      <div className="flex gap-2"> {/* Container for buttons with spacing */}
        <Link href={`/snippets/${snippet.id}/edit`} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Edit
        </Link>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>

    {/* Code block section */}
    <pre className="bg-gray-100 p-4 rounded-md border border-gray-200 overflow-x-auto">
      {/* Added background, padding, border, rounded corners, and horizontal scroll */}
      <code className="font-mono text-sm">{snippet.code}</code> {/* Ensure monospace font and appropriate size */}
    </pre>
  </div>
  );
}