import { Loan } from "./loan";
import { LoanOfficer } from "./loan-officer";
import { Status } from "./status";

export class Customer {
    id: number = 0;
    customerName: string = '';
    dateOfBirth: Date = new Date;
    mobileNumber: string = '';
    emailId: string ='';
    address: string='';
    isActive: boolean= false;
    loanId : number = 0;
    loanOfficerId: number = 0;
    statusId : number = 0;
    
    // Object Oriented Model
    loan: Loan = new Loan();
    loanOfficer: LoanOfficer = new LoanOfficer();
    status: Status = new Status();

    

}
