import Account from "./Account";

export default class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  deposit = (value: number): void => {
    if (value < 0) {
      throw new Error("Valor inválido");
    }
    this.setBalance(value);
    console.log(`${this.getName()} depositou ${value}, o saldo total é ${this.getBalance()}`);
  };

  getLoan = (value: number): void => {
    this.getValidationStatus();

    this.setBalance(value);
    console.log(`${this.getName()} pegou um emprestimo no valor de ${value}, seu saldo atual é ${this.getBalance()}`);
  };
}
