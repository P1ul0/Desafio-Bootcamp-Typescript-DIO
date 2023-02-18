import Account from "./Account";

export default class CurrentAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (value < 0) {
      throw new Error("Valor inválido");
    }
    let depositValue : number = value + 10
    this.setBalance(depositValue);
    console.log(
      `${this.getName()} depositou ${value}, o saldo total é ${this.getBalance()}`
    );
  };
}
