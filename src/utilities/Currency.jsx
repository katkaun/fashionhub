const CURRENCY = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
});

export const formatCurrency = (number) => {
    return CURRENCY.format(number);
}