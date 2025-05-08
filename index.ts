function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true || toUpper === undefined
    ? input.toLocaleUpperCase()
    : input;
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return [...arrays].flat();
}

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  return typeof value === 'string' ? value.length : value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((prev, curr) =>
    curr.price >= prev.price ? curr : prev
  );
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? 'Weekend' : 'Weekday';
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) throw new Error('Error: Negative number not allowed');
  const promise = new Promise((resolve, rejct) =>
    setTimeout(() => resolve(n ** 2), 1000)
  );
  return promise as Promise<number>;
}
