"use client";
import { useState } from 'react';
import Editor from '@monaco-editor/react';
interface SnippetEditFormProps {
    snippet: {
        id: number;
        title: string;
        code: string;
    };
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string | undefined) => {
        setCode(value || "");
    };

    return (
        <div>
            <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={snippet.code}
                options={{ minimap: { enabled: false } }}
                onChange={handleEditorChange}
            />
        </div>
    );
}
