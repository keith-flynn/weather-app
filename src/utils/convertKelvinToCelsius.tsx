// Legacy code from tutorial. Converting to Freedom Units(r) for actual program.

export function convertKelvinToCelsius(tempInKelvin: number): number {
  const tempInCelsius = tempInKelvin - 273.15;
  return Math.floor(tempInCelsius); // Removes decimal
}