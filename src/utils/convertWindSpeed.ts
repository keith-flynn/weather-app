

export function convertWindSpeed(speedInMetersPerSecond: number): string {
  const speedInMilesPerHour = speedInMetersPerSecond * 2.23694; // Conversion from m/s to mph
  return `${speedInMilesPerHour.toFixed(0)}mph`;
}


// export function convertWindSpeed(speedInMetersPerSecond: number): string {
//   const speedInKilometersPerHour = speedInMetersPerSecond * 3.6; // Conversion from m/s to km/h
//   return `${speedInKilometersPerHour.toFixed(0)}km/h`;
// }