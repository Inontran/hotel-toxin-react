function formatPrice(price: number): string {
  const formatter = Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
}

/**
 * Функция склонения слов.
 * @param number Количесво чего-либо (например, гостей).
 * @param titles Массив слов, в котором нулевой элемент соответствует слову в единственном числе (например, гость).
 * Первый эелемент соответствует слову, когда 2 шт (например, гостя).
 * Второй эелемент массива - много штук чего-либо (например, гостей).
 * @returns Возвращает слово, которое соответсвует количеству штук согласно правил склонения русского языка.
 * @example declineWord(3, ['гость', 'гостя', 'гостей'])
 */
function declineWord(number: number, titles: string[]) {
  const numberOfEnding = [2, 0, 1, 1, 1, 2];
  const isLastEnding = number % 100 > 4 && number % 100 < 20;
  const correctEnding = (number % 10 < 5) ? number % 10 : 5;
  return titles[isLastEnding ? 2 : numberOfEnding[correctEnding]];
}

export {
  formatPrice,
  declineWord,
};
