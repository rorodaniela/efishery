export default function formatIDR(number) {
  if (Number(number)) {
    const format = number.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");
    return rupiah;
  }
  return "Rp -";
}
