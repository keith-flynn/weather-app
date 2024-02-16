

export function getDayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours(); // Get hours from the given date and time string

  const isDayTime = hours >= 6 && hours < 19; // Consider daytime from 6 AM to 7 PM 
  // I like 6 PM represented as daytime better

  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}