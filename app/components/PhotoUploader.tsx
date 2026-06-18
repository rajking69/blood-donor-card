"use client";

import { useRef } from "react";
import { Camera, X } from "lucide-react";

interface PhotoUploaderProps {
  preview: string | null;
  onUpload: (dataUrl: string) => void;
  onRemove: () => void;
}

export default function PhotoUploader({ preview, onUpload, onRemove }: PhotoUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) onUpload(ev.target.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />

      {preview ? (
        <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50">
          <img
            src={preview}
            alt="Profile preview"
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800">Photo uploaded</p>
            <p className="text-xs text-gray-400">Click below to change</p>
          </div>
          <button
            onClick={onRemove}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-red-50 text-primary hover:bg-red-100 transition-colors"
            aria-label="Remove photo"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full flex flex-col items-center gap-2 p-5 rounded-xl
                     border-2 border-dashed border-gray-200 bg-gray-50
                     hover:border-primary hover:bg-red-50 transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-full bg-red-50 group-hover:bg-red-100 flex items-center justify-center transition-colors">
            <Camera size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 group-hover:text-primary transition-colors">
              Upload your photo
            </p>
            <p className="text-xs text-gray-400 mt-0.5">JPG, PNG supported</p>
          </div>
        </button>
      )}
    </div>
  );
}
