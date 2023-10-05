export function numberWithCommas(x) {
    if (x) return `Rs. ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }