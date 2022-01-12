function formatPrice (price: number): string {
  const formatter = Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
}

export {
  formatPrice,
}
