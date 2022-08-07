export default function binaryToDecimal(binary: string): string {
  if (parseInt(binary, 2)) {
    return parseInt(binary, 2).toString();
  } else {
    return "Invalid Binary";
  }
}
