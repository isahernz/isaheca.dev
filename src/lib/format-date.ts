import { format } from "@formkit/tempo";

export const formatDate = (startDate: string, endDate: string | undefined) => {
  const start = format(startDate, "MMMM YYYY", "en-US");
  const end = endDate ? format(endDate, "MMMM YYYY", "en-US") : "Present";

  return `${start} - ${end}`;
};
