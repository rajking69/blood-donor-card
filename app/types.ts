export interface DonorFormData {
  name: string;
  bloodGroup: string;
  age: string;
  phone: string;
  email: string;
  address: string;
  totalDonations: string;
  lastDonation: string;
}

export const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] as const;

export type BloodGroup = (typeof BLOOD_GROUPS)[number];

export const DEFAULT_FORM: DonorFormData = {
  name: "",
  bloodGroup: "A+",
  age: "",
  phone: "",
  email: "",
  address: "",
  totalDonations: "",
  lastDonation: "",
};
