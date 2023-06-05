export default class FizzBuzz {
  array: string[];

  constructor(n: number) {
    this.array = [...Array(n).keys()].map((index) => {
      const number = index + 1;

      if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
      if (number % 3 === 0) return "Fizz";
      if (number % 5 === 0) return "Buzz";
      return number.toString();
    });
  }

  getValueByPosition(position: number): string {
    return this.array[position - 1];
  }
}
