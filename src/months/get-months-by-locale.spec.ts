import { getMonthsByLocale } from './index';

describe('getMonthsByLocale', () => {
  it('should return months in portuguese', () => {
    const locale = 'pt-BR';

    const months = getMonthsByLocale(locale);

    const expectedMonths = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    expect(months).toStrictEqual(expectedMonths);
  });

  it('should return months in english', () => {
    const locale = 'en';

    const months = getMonthsByLocale(locale);

    const expectedMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    expect(months).toStrictEqual(expectedMonths);
  });
});
