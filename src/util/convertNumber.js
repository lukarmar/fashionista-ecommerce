/* eslint radix: ["error", "as-needed"] */

export function converNumber(string) {
  return parseInt(string.slice(2, string.length + 1));
}
