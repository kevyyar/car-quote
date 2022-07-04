export const BRANDS = [
  { id: 1, name: "American" },
  { id: 2, name: "British" },
  { id: 3, name: "French" },
  { id: 4, name: "German" },
  { id: 5, name: "Italian" },
  { id: 6, name: "Japanese" },
];

const MAX_YEAR = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (value, idx) => MAX_YEAR - idx);

export const INSURANCE_PLANS = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Plus" },
];
