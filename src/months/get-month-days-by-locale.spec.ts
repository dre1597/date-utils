import { DateTime } from 'luxon';
import { ACCEPTED_FORMAT_TYPES, ACCEPTED_LOCALES, getMonthDaysByLocale } from './get-month-days';

describe('GetMonthDaysByLcale', () => {
  it('should throw if the param monthNum is invalid', () => {
    const invalidMonth1 = 0;
    const invalidMonth2 = 13;

    expect(() => getMonthDaysByLocale(invalidMonth1, new Date().getFullYear())).toThrow(
      'Month num should be a number between 1 and 12',
    );
    expect(() => getMonthDaysByLocale(invalidMonth2, new Date().getFullYear())).toThrow(
      'Month num should be a number between 1 and 12',
    );
  });

  it('should throw if the param year is invalid', () => {
    const invalidYear = 1969;
    const invalidYear2 = new Date().getFullYear() + 101;

    expect(() => getMonthDaysByLocale(1, invalidYear)).toThrow(
      'Year should be between 1970 and the actual year + 100',
    );
    expect(() => getMonthDaysByLocale(1, invalidYear2)).toThrow(
      'Year should be between 1970 and the actual year + 100',
    );
  });

  it('should return a list of a number days in month if there is no formatConfig param', () => {
    const expectedMonth = 1;

    const expectedResult = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 31,
    ];

    const result = getMonthDaysByLocale(expectedMonth, DateTime.now().toJSDate().getFullYear());

    expect(result).toStrictEqual(expectedResult);
  });

  it('should return a short date with correct locale if the format os DATE_SHORT', () => {
    const format: ACCEPTED_FORMAT_TYPES = 'DATE_SHORT';
    const locales: ACCEPTED_LOCALES[] = ['pt-BR', 'en'];

    const expectedResult1 = [
      '01/01/2023',
      '02/01/2023',
      '03/01/2023',
      '04/01/2023',
      '05/01/2023',
      '06/01/2023',
      '07/01/2023',
      '08/01/2023',
      '09/01/2023',
      '10/01/2023',
      '11/01/2023',
      '12/01/2023',
      '13/01/2023',
      '14/01/2023',
      '15/01/2023',
      '16/01/2023',
      '17/01/2023',
      '18/01/2023',
      '19/01/2023',
      '20/01/2023',
      '21/01/2023',
      '22/01/2023',
      '23/01/2023',
      '24/01/2023',
      '25/01/2023',
      '26/01/2023',
      '27/01/2023',
      '28/01/2023',
      '29/01/2023',
      '30/01/2023',
      '31/01/2023',
    ];
    const expectedResult2 = [
      '1/1/2023',
      '1/2/2023',
      '1/3/2023',
      '1/4/2023',
      '1/5/2023',
      '1/6/2023',
      '1/7/2023',
      '1/8/2023',
      '1/9/2023',
      '1/10/2023',
      '1/11/2023',
      '1/12/2023',
      '1/13/2023',
      '1/14/2023',
      '1/15/2023',
      '1/16/2023',
      '1/17/2023',
      '1/18/2023',
      '1/19/2023',
      '1/20/2023',
      '1/21/2023',
      '1/22/2023',
      '1/23/2023',
      '1/24/2023',
      '1/25/2023',
      '1/26/2023',
      '1/27/2023',
      '1/28/2023',
      '1/29/2023',
      '1/30/2023',
      '1/31/2023',
    ];

    const result1 = getMonthDaysByLocale(1, DateTime.now().toJSDate().getFullYear(), {
      locale: locales[0],
      format,
    });
    const result2 = getMonthDaysByLocale(1, DateTime.now().toJSDate().getFullYear(), {
      locale: locales[1],
      format,
    });

    expect(result1).toStrictEqual(expectedResult1);
    expect(result2).toStrictEqual(expectedResult2);
  });

  it('', () => {
    const format: ACCEPTED_FORMAT_TYPES = 'ISO';
    const locales: ACCEPTED_LOCALES[] = ['pt-BR', 'en'];

    const expectedResult = [
      '2023-01-01',
      '2023-01-02',
      '2023-01-03',
      '2023-01-04',
      '2023-01-05',
      '2023-01-06',
      '2023-01-07',
      '2023-01-08',
      '2023-01-09',
      '2023-01-10',
      '2023-01-11',
      '2023-01-12',
      '2023-01-13',
      '2023-01-14',
      '2023-01-15',
      '2023-01-16',
      '2023-01-17',
      '2023-01-18',
      '2023-01-19',
      '2023-01-20',
      '2023-01-21',
      '2023-01-22',
      '2023-01-23',
      '2023-01-24',
      '2023-01-25',
      '2023-01-26',
      '2023-01-27',
      '2023-01-28',
      '2023-01-29',
      '2023-01-30',
      '2023-01-31',
    ];

    const result1 = getMonthDaysByLocale(1, DateTime.now().toJSDate().getFullYear(), {
      locale: locales[0],
      format,
    });
    const result2 = getMonthDaysByLocale(1, DateTime.now().toJSDate().getFullYear(), {
      locale: locales[1],
      format,
    });

    expect(result1).toStrictEqual(expectedResult);
    expect(result2).toStrictEqual(expectedResult);
  });
});
