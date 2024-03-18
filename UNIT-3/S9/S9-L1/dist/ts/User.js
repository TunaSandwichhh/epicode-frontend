export class User {
    constructor(firstName, lastName, credit) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.credit = credit;
        this.totalCall_mins = 0;
    }
    charge(amount) {
        this.credit += amount;
    }
    call(totalMins) {
        const callCost = totalMins * 0.2;
        if (this.credit >= callCost) {
            this.credit -= callCost;
            this.totalCall_mins += totalMins;
        }
        else {
            console.log("Call Denied: insufficient credit");
        }
    }
    call404() {
        return this.credit;
    }
    getTotalCallMinutes() {
        return this.totalCall_mins;
    }
    resetCallMinutes() {
        this.totalCall_mins = 0;
    }
}
