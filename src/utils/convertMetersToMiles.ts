

export function convertMetersToMiles(visibilityInMeters: number): string {
  const visibilityInMiles = visibilityInMeters / 1609.34;
  return `${visibilityInMiles.toFixed(0)}mi`; // Round to 0 decimal and add 'mi' unit
}