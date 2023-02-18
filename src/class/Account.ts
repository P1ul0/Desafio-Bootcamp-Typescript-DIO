// o metodo readonly deixa o atributo  so pode ser acessado pelo metodo de leitura


export default abstract class Account {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    (this.name = name),
    (this.accountNumber = accountNumber);
  }

  deposit = (value: number): void=> {
    if(value < 0 ) {
      console.log("Valor inválido");
    }

    if (this.validationStatus()) {
      this.balance += value;
      console.log(`${this.getName()} depositou ${value}, o saldo total é ${this.balance}`);
    }
  };

  withDraw = (value: number): void => {
    if(value > this.getBalance() ) {
      throw new Error("Valor inválido")
    }
    this.balance -= value;
    console.log(`${this.getName()} sacou ${value}, o saldo total é ${this.balance}`);
  };
  
  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  setBalance = (value: number) =>{
    this.balance += value
  }

  getBalance = (): number => {
    return this.balance;
  };

  private validationStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta Invalida");
  };

  getValidationStatus = ():boolean =>{
    return this.validationStatus()
  }
}
