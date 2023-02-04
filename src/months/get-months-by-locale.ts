import { Info } from 'luxon';

export const getMonthsByLocale = (locale: string): string[] =>
  Info.months('long', { locale }).map((month) => month.charAt(0).toUpperCase() + month.slice(1));
