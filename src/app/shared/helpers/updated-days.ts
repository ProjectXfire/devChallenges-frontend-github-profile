export function updatedDays(date: string) {
  const newDate = new Date(date);
  const today = Date.now();
  const lastUpdatedInTime = today - newDate.getTime();
  const lastUpdatedInDays = lastUpdatedInTime / (1000 * 3600 * 24);
  return Math.floor(lastUpdatedInDays);
}
