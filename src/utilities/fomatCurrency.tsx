//  this file is use to conertprice into any currrency we specified

const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
// now return the  CURRENCY_FORMATER in our function to use it

export function fomatCurrency(number: number) {
    return CURRENCY_FORMATER.format(number)
}
