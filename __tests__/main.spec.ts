import { BankAccount } from '../src/main';

let account: BankAccount;

beforeEach(() => {
  account = new BankAccount();
});

test('adds money to account', () => {
  account.addToAccount(10);
  expect(account.balance).toBe(10);
});

test('executes callback with new balance after adding money', () => {
  const callback = jest.fn();
  account.addToAccount(10, callback);
  expect(callback).toBeCalledTimes(1);
  expect(callback).toBeCalledWith(10);
  expect(callback).toBeCalled();
});

test('takes money from account', () => {
  account.addToAccount(10);
  account.takeFromAccount(10);
  expect(account.balance).toBe(0);
});

test('fails when not enough money to take', () => {
  expect(() => account.takeFromAccount(1)).toThrow();
});

function divide(x: number, y: number) {
  if (y === 0) {
    throw new Error('Cannot divide by zero!');
  }

  return x / y;
}

test('divides two numbers', () => {
  expect(divide(6, 3)).toBe(2);
});

test('fails when trying to divide by zero', () => {
  expect(() => divide(4, 0)).toThrow('Cannot divide by zero!');
});
