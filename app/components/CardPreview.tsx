"use client";

import { DonorFormData } from "../types";
import QRGenerator from "./QRGenerator";

interface CardPreviewProps {
  data: DonorFormData;
  photo: string | null;
}

const BloodDropIcon = () => (
  <svg width="26" height="32" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 2C14 2 2 14.5 2 21.5C2 28 7.4 33 14 33C20.6 33 26 28 26 21.5C26 14.5 14 2 14 2Z"
      fill="white"
    />
    <path
      d="M18 26C18 26 20 24 20 21.5"
      stroke="rgba(217,4,41,0.5)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const HeartbeatLine = () => (
  <svg
    viewBox="0 0 300 40"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: 36 }}
  >
    <polyline
      points="0,20 40,20 55,8 65,32 75,3 85,36 95,20 150,20 165,15 172,25 178,10 185,30 192,20 300,20"
      fill="none"
      stroke="#D90429"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.65"
    />
  </svg>
);

const InfoRow = ({
  emoji,
  label,
  value,
}: {
  emoji: string;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-2.5 mb-2.5">
    <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-sm flex-shrink-0">
      {emoji}
    </div>
    <div className="flex-1 min-w-0">
      <div
        style={{
          fontSize: 9,
          color: "#999",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          lineHeight: 1,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 11.5,
          color: "#222",
          fontWeight: 500,
          marginTop: 2,
          wordBreak: "break-word",
          lineHeight: 1.35,
        }}
      >
        {value}
      </div>
    </div>
  </div>
);

const getDonorOrdinal = (n: string): string => {
  const num = parseInt(n) || 1;
  if (num === 1) return "1ST TIME";
  if (num === 2) return "2ND TIME";
  if (num === 3) return "3RD TIME";
  return `${num}TH TIME`;
};

const formatDate = (dateStr: string): string => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function CardPreview({ data, photo }: CardPreviewProps) {
  return (
    <div
      id="donor-card"
      style={{
        width: 340,
        minHeight: 600,
        background: "#FFFFFF",
        borderRadius: 24,
        boxShadow:
          "0 20px 60px rgba(217,4,41,0.18), 0 4px 20px rgba(0,0,0,0.10)",
        overflow: "hidden",
        fontFamily: "'Poppins', 'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: 5,
          background:
            "linear-gradient(90deg, #D90429 0%, #EF233C 50%, #D90429 100%)",
        }}
      />

      {/* Red header */}
      <div
        style={{
          background: "linear-gradient(135deg, #D90429 0%, #EF233C 100%)",
          padding: "18px 22px 26px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -24,
            right: -24,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 18,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -10,
            left: -16,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />

        <div className="flex justify-center mb-2">
          <BloodDropIcon />
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Blood Donor Card
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: 10.5,
            marginTop: 3,
            letterSpacing: "0.04em",
          }}
        >
          Donate Blood, Save Lives ❤️
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "0 22px 0",
          marginTop: -28,
          textAlign: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Profile photo */}
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            border: "4px solid #FFFFFF",
            boxShadow: "0 4px 20px rgba(217,4,41,0.22)",
            margin: "0 auto 12px",
            overflow: "hidden",
            background: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {photo ? (
            <img
              src={photo}
              alt="Donor"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="15" r="9" fill="#D5D5D5" />
              <path
                d="M4 38C4 28.6 11.2 21 20 21C28.8 21 36 28.6 36 38"
                fill="#D5D5D5"
              />
            </svg>
          )}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#111111",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            lineHeight: 1.2,
            marginBottom: 10,
          }}
        >
          {data.name || "YOUR FULL NAME"}
        </div>

        {/* Blood group + donor badge */}
        <div
          className="flex justify-center gap-2 flex-wrap"
          style={{ marginBottom: 12 }}
        >
          <div
            style={{
              background: "#D90429",
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: 800,
              padding: "5px 20px",
              borderRadius: 999,
              letterSpacing: "0.04em",
              boxShadow: "0 4px 14px rgba(217,4,41,0.38)",
            }}
          >
            {data.bloodGroup || "A+"}
          </div>

          {data.totalDonations && (
            <div
              style={{
                background: "#FFF0F2",
                color: "#D90429",
                fontSize: 10,
                fontWeight: 700,
                padding: "5px 12px",
                borderRadius: 999,
                border: "1.5px solid #EF233C",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              ❤️ {getDonorOrdinal(data.totalDonations)} DONOR
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#EFEFEF", margin: "0 0 12px" }} />

        {/* Info rows */}
        <div style={{ textAlign: "left" }}>
          {data.age && <InfoRow emoji="👤" label="Age" value={`${data.age} years`} />}
          {data.phone && <InfoRow emoji="📱" label="Phone" value={data.phone} />}
          {data.email && <InfoRow emoji="✉️" label="Email" value={data.email} />}
          {data.lastDonation && (
            <InfoRow emoji="📅" label="Last Donation" value={formatDate(data.lastDonation)} />
          )}
          {data.address && <InfoRow emoji="📍" label="Address" value={data.address} />}
        </div>

        {/* Heartbeat line */}
        <div style={{ margin: "6px -8px 0" }}>
          <HeartbeatLine />
        </div>

        {/* Bottom: QR + motto */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 0 18px",
            borderTop: "1px solid #F0F0F0",
            marginTop: 4,
          }}
        >
          <QRGenerator name={data.name} phone={data.phone} email={data.email} size={60} />
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: 13.5,
                fontWeight: 700,
                color: "#D90429",
                letterSpacing: "0.03em",
              }}
            >
              Every Drop Counts
            </div>
            <div
              style={{
                fontSize: 9.5,
                color: "#AAAAAA",
                fontWeight: 600,
                letterSpacing: "0.09em",
                marginTop: 3,
              }}
            >
              BE A HERO • SAVE A LIFE
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          height: 5,
          background:
            "linear-gradient(90deg, #EF233C 0%, #D90429 50%, #EF233C 100%)",
        }}
      />
    </div>
  );
}
