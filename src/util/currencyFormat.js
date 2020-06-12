export function currencyFormat(data) {
  return data.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
