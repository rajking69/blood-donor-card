"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

interface DownloadButtonProps {
  label: string;
  variant: "primary" | "outline";
  onExport: () => Promise<void>;
}

export default function DownloadButton({
  label,
  variant,
  onExport,
}: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onExport();
    } catch (err) {
      console.error("Export failed:", err);
      alert("Export failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={variant === "primary" ? "btn-primary" : "btn-outline"}
    >
      <span className="flex items-center justify-center gap-2">
        {loading ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Download size={15} />
        )}
        {loading ? "Exporting…" : label}
      </span>
    </button>
  );
}
