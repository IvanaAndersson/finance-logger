import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  //normal way of declaring the properties of this class
  // client: string,
  // details: string,
  // amount: number

  constructor(
    // we can declare the propertes this way only when we use access modifiers
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
