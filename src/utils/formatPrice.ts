export function formatPrice(price: number) {
  return Number(price).toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
  });
}
