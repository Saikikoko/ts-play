declare function toString(x: number): string;

const x = toString(1);

declare function toString(x: number) {
  return String(x)
}