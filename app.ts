/* Aula 1 "O que é POO"
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name,
    this.age = age;
  }
  showname = () => {
    console.log(this.name);
  };
}

const user : User = new User('Paulo',17);
user.showname();

const otherUser : User = new User('Ryan',22);
otherUser.showname();*/

/* Aula 2 "Classes e tipos" á Aula 6 "Readonly" */

import PeopleAccount from "./src/class/PeopleAccount";
import CompanyAccount from "./src/class/CompanyAccount";
import CurrentAccount from "./src/class/CurrentAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Paulo", 1);
peopleAccount.deposit(300);
peopleAccount.withDraw(300);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 2);
companyAccount.deposit(300);
companyAccount.withDraw(300);
companyAccount.getLoan(300);

const currentAccount: CurrentAccount = new CurrentAccount("BuyCar", 3);
currentAccount.deposit(300);
currentAccount.withDraw(300);
