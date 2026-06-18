"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRGeneratorProps {
  name: string;
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;
  size?: number;
}

export default function QRGenerator({
  name,
  bloodGroup,
  phone,
  email,
  address,
  size = 64,
}: QRGeneratorProps) {
  const qrData = [
    name && `Name: ${name}`,
    bloodGroup && `Blood Group: ${bloodGroup}`,
    phone && `Phone: ${phone}`,
    email && `Email: ${email}`,
    address && `Address: ${address}`,
  ]
    .filter(Boolean)
    .join("\n") || "Blood Donor Card";

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
