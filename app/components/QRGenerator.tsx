"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRGeneratorProps {
  name: string;
  phone: string;
  email: string;
  size?: number;
}

export default function QRGenerator({ name, phone, email, size = 64 }: QRGeneratorProps) {
  const qrData = [name, phone, email].filter(Boolean).join(" | ") || "Blood Donor Card";

  return (
    <div className="bg-white p-1.5 rounded-xl border border-gray-200">
      <QRCodeSVG
        value={qrData}
        size={size}
        level="M"
        bgColor="#FFFFFF"
        fgColor="#111111"
      />
    </div>
  );
}
