export const arrPriceRanges = [
    "0-2000",
    "2000-5000",
    "5000-10000",
    "10000-30000",
    "30000-200000"
]

export const priceRangeToIndex = (priceRange) => {
   const index = arrPriceRanges.findIndex(priceRg => priceRg === priceRange)

   return index
}