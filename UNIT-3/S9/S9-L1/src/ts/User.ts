import { Smartphone } from "./Smartphone";

export class User implements Smartphone {
  firstName!: string;
  lastName!: string;
  credit!: number;
  totalCall_mins!: number;

  constructor(firstName: string, lastName: string, credit: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.credit = credit;
    this.totalCall_mins = 0;
  }

  charge(amount: number): void {
    this.credit += amount;
  }

  call(totalMins: number): void {
    const callCost = totalMins * 0.2;
    if (this.credit >= callCost) {
      this.credit -= callCost;
      this.totalCall_mins += totalMins;
    } else {
      console.log("Call Denied: insufficient credit");
    }
  }

  call404(): number {
    return this.credit;
  }

  getTotalCallMinutes(): number {
    return this.totalCall_mins;
  }

  resetCallMinutes(): void {
    this.totalCall_mins = 0;
  }
}
