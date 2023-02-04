import { DateTime } from 'luxon';

export type ACCEPTED_FORMAT_TYPES = 'DATE_SHORT' | 'ISO';
export type ACCEPTED_LOCALES = 'pt-BR' | 'en';

export const getMonthDaysByLocale = (
  monthNum: number,
  year: number,
  formatConfig?: {
    locale: ACCEPTED_LOCALES;
    format: ACCEPTED_FORMAT_TYPES;
  },
) => {
  if (monthNum < 1 || monthNum > 10) {
    throw new Error('Month num should be a number between 1 and 12');
  }

  if (year < 1970 || year > new Date().getFullYear() + 100) {
    throw new Error('Year should be between 1970 and the actual year + 100');
  }

  const lastDayInMonth = DateTime.fromObject({
    month: monthNum,
  }).daysInMonth;

  return [...Array(lastDayInMonth).keys()]
    .map((elem) => elem + 1)
    .map((day) => {
      if (formatConfig) {
        const dateTime = DateTime.fromObject({
          month: monthNum,
          day,
          year: year,
        }).setLocale(formatConfig.locale);

        let returnedDate: string;

        switch (formatConfig.format) {
          case 'DATE_SHORT':
            returnedDate = dateTime.toFormat('DATE_SHORT');
            break;
          case 'ISO':
            returnedDate = dateTime.toISODate({
              format: 'extended',
            });
            break;
        }
        return returnedDate.split('A')[0];
      }
      return day;
    });
};
