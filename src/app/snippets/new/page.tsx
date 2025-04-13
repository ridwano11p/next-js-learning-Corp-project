import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function NewSnippetPage() {
  async function createSnippet(formData: FormData): Promise<void> {
    'use server';
    
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    console.log('Creating snippet with:', { title, code });

    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });

    console.log('Created snippet:', snippet);

    redirect('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Snippet
        </h1>
        
        <form action={createSnippet} className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
          <div className="grid grid-cols-[160px_1fr] gap-4 mb-5">
            <label
              htmlFor="title"
              className="text-gray-700 font-medium self-center text-sm uppercase tracking-wide"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter snippet title"
            />
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 mb-6">
            <label
              htmlFor="code"
              className="text-gray-700 font-medium self-start mt-2 text-sm uppercase tracking-wide"
            >
              Code
            </label>
            <textarea
              id="code"
              name="code"
              rows={4}
              className="border border-gray-200 rounded-lg px-4 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-y"
              placeholder="Enter your code here"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-2.5 rounded-lg font-medium hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Create Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}