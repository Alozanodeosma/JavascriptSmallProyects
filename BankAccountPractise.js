class BankAccount{
  constructor(balance=0){
      this.transactions=[];
      this.balance=balance;
  }

  deposit(amount){
    if(amount>0){ 
      this.transactions.push({type: "deposit",amount: amount})
      this.balance+=amount;
      return `Successfully deposited \$${amount}. New balance: \$${this.balance}`;
    }else{
      return "Deposit amount must be greater than zero.";
    }
  }
    withdraw(amount){
                  console.log(this.balance)
    if(amount<this.balance && amount>0){

      this.transactions.push({type: "withdraw",amount: amount})
      this.balance-=amount;
      return `Successfully withdrew \$${amount}. New balance: \$${this.balance}`;
    }else{
      return "Insufficient balance or invalid amount.";
    }
  }
  checkBalance(){
    return `Current balance: \$${this.balance}`; 
  }

  listAllDeposits(){
    let string = "Deposits: ";
    for(let deposits of this.transactions){
      if(deposits.type == "deposit"){
      string+=deposits.amount+",";
    }
    }
    return string.slice(0, -1);
  }
  listAllWithdrawals(){
    let string = "Withdrawals: ";
    for(let withdrawals of this.transactions){
      if(withdrawals.type == "withdraw"){
      string+=withdrawals.amount+",";
    }
    }
    return string.slice(0, -1);
  }
}


let myAccount = new BankAccount(100);
console.log(myAccount.deposit(10));
console.log(myAccount.deposit(10));
console.log(myAccount.withdraw(10));
console.log(myAccount.withdraw(10));
console.log(myAccount.withdraw(12));
console.log(myAccount.deposit(10));
console.log(myAccount.deposit(3));
console.log(myAccount.listAllWithdrawals());
