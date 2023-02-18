import Account from "./Account";

export default class PeopleAccount extends Account {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
  
  setDoc_id = (doc_id : number): void => {
    this.doc_id = doc_id;
  };

  getDoc_id = (): number => {
    return this.doc_id;
  };
}


