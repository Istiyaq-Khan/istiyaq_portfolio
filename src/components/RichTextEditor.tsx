'use client';

import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
    };

    // Cast to any to avoid type errors with dynamic import
    const RQ = ReactQuill as any;

    return (
        <div className="bg-white text-black rounded-lg overflow-hidden">
            <RQ
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                className="h-64 mb-12"
            />
        </div>
    );
}
