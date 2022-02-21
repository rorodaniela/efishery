export default function formatDate(date) {
  let result;
  let newDate = new Date(date);
  if (newDate) {
    result = newDate.toLocaleDateString("en-GB");
  } else {
    result = "Invalid Date";
  }

  return result;
}
