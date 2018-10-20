export class BankAccount {
  private _balance: number = 0;

  public get balance() {
    return this._balance;
  }

  public sayHello() {
    return 'hello';
  }

  public addToAccount(amount: number, callback?: (newBalance: number) => any) {
    this._balance += amount;
    if (callback) {
      callback(this._balance);
    }
  }

  public takeFromAccount(amount: number) {
    const newBalance = this._balance - amount;
    if (newBalance < 0) {
      throw new Error('Balance cannot be negative!');
    } else {
      this._balance = newBalance;
    }
  }
}
