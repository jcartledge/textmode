export default function numberInRange (num, max, min = 0) {
  return Math.min(Math.max(parseInt(num, 10) || 0, min), max);
}
