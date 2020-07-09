export class Invoice {
    //normal way of declaring the properties of this class
    // client: string,
    // details: string,
    // amount: number
    constructor(
    // we can declare the propertes this way only when we use access modifiers
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
