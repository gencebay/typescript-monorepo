export function isInteger(arg: unknown): boolean {
  if (typeof arg === "number") {
    return Math.floor(arg) === arg;
  }
  return String(Math.floor(Number(arg))) === arg;
}

export default isInteger;
