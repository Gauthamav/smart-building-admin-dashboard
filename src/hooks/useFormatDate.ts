export default function useFormatDate() {
  const parseDate = (timestamp: number): string => {
    if (!timestamp) return "Invalid Date";

    return new Date(timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return { parseDate };
}