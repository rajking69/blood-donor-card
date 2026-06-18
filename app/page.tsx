"use client";

import { useState, useCallback } from "react";
import { DonorFormData, DEFAULT_FORM } from "./types";
import DonorForm from "./components/DonorForm";
import CardPreview from "./components/CardPreview";
import DownloadButton from "./components/DownloadButton";

export default function Home() {
  const [form, setForm] = useState<DonorFormData>(DEFAULT_FORM);
  const [photo, setPhoto] = useState<string | null>(null);

  const handleChange = useCallback(
    (field: keyof DonorFormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleExportPNG = useCallback(async () => {
    const { exportPNG } = await import("./utils/exportPNG");
    const filename = `donor-card-${form.name.replace(/\s+/g, "-") || "card"}`;
    await exportPNG("donor-card", filename);
  }, [form.name]);

  const handleExportPDF = useCallback(async () => {
    const { exportPDF } = await import("./utils/exportPDF");
    const filename = `donor-card-${form.name.replace(/\s+/g, "-") || "card"}`;
    await exportPDF("donor-card", filename);
  }, [form.name]);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">

      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <svg width="18" height="22" viewBox="0 0 28 34" fill="none">
              <path
                d="M14 2C14 2 2 14.5 2 21.5C2 28 7.4 33 14 33C20.6 33 26 28 26 21.5C26 14.5 14 2 14 2Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900 leading-tight">
              Blood Donor Card Generator
            </h1>
            <p className="text-xs text-gray-400">
              Create your card in 30 seconds
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-5 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: Form */}
          <div className="animate-fade-in">
            <DonorForm
              form={form}
              photo={photo}
              onChange={handleChange}
              onPhotoUpload={setPhoto}
              onPhotoRemove={() => setPhoto(null)}
            />
          </div>

          {/* Right: Card preview + export */}
          <div className="flex flex-col items-center gap-5 lg:sticky lg:top-24">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Live Preview
            </p>

            <div className="transition-all duration-300 hover:-translate-y-1">
              <CardPreview data={form} photo={photo} />
            </div>

            {/* Export buttons */}
            <div className="flex gap-3 w-full max-w-[340px]">
              <DownloadButton
                label="Download PNG"
                variant="primary"
                onExport={handleExportPNG}
              />
              <DownloadButton
                label="Download PDF"
                variant="outline"
                onExport={handleExportPDF}
              />
            </div>

            <p className="text-xs text-gray-300 text-center">
              PNG exports at 3× resolution for print quality
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
