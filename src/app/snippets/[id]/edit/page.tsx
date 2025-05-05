import { db } from "@/db"; // Added db import
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippeteditform";

// Updated interface name and wrapped params in Promise
interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Made function async and updated props type
export default async function SnippetEditPage (props: SnippetEditPageProps){
  // Destructured id from awaited params
  const { id } = await props.params;
 
  // Parsed id to integer
  const snippetId = parseInt(id);
  // Fetched snippet from db
  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  // Handle case where snippet is not found (optional but good practice)
  if (!snippet) {
    notFound();
  }

  return (
    <SnippetEditForm snippet={snippet} />
  )
}