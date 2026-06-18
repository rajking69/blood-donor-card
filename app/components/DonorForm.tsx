"use client";

import { DonorFormData, BLOOD_GROUPS } from "../types";
import PhotoUploader from "./PhotoUploader";

interface DonorFormProps {
  form: DonorFormData;
  photo: string | null;
  onChange: (field: keyof DonorFormData, value: string) => void;
  onPhotoUpload: (dataUrl: string) => void;
  onPhotoRemove: () => void;
}

export default function DonorForm({
  form, photo, onChange, onPhotoUpload, onPhotoRemove,
}: DonorFormProps) {
  const handleChange =
    (field: keyof DonorFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      onChange(field, e.target.value);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">

      {/* Personal Information */}
      <section>
        <h2 className="section-label">Personal Information</h2>

        <div className="space-y-3.5">
          <div>
            <label className="field-label">Full Name</label>
            <input
              className="input-field"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="Sheikh Mohammad Rajking"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="field-label">Blood Group</label>
              <select
                className="input-field cursor-pointer"
                value={form.bloodGroup}
                onChange={handleChange("bloodGroup")}
              >
                {BLOOD_GROUPS.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label">Age</label>
              <input
                className="input-field"
                type="number"
                value={form.age}
                onChange={handleChange("age")}
                placeholder="25"
                min="1"
                max="100"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Mobile Number</label>
            <input
              className="input-field"
              value={form.phone}
              onChange={handleChange("phone")}
              placeholder="+880 1700-000000"
            />
          </div>

          <div>
            <label className="field-label">Email</label>
            <input
              className="input-field"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="field-label">Address</label>
            <input
              className="input-field"
              value={form.address}
              onChange={handleChange("address")}
              placeholder="Chattogram, Bangladesh"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Donation Info */}
      <section>
        <h2 className="section-label">Donation Information</h2>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="field-label">Total Donations</label>
            <input
              className="input-field"
              type="number"
              value={form.totalDonations}
              onChange={handleChange("totalDonations")}
              placeholder="3"
              min="0"
            />
          </div>
          <div>
            <label className="field-label">Last Donation</label>
            <input
              className="input-field"
              type="date"
              value={form.lastDonation}
              onChange={handleChange("lastDonation")}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Photo */}
      <section>
        <h2 className="section-label">Profile Photo</h2>
        <PhotoUploader
          preview={photo}
          onUpload={onPhotoUpload}
          onRemove={onPhotoRemove}
        />
      </section>
    </div>
  );
}
