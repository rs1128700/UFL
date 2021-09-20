import {
  LightningElement,
  api
} from 'lwc';

import createLoanApplicant from '@salesforce/apex/registerLoanApplicant.createLoanApplicant';

import {
  ShowToastEvent
} from 'lightning/platformShowToastEvent';
import {
  NavigationMixin
} from 'lightning/navigation';
export default class UserDetails extends LightningElement {
  firstName = 'JOHN';
  lastName = 'DOE';
  phoneNo = '9898989898';
  emailId = 'JD@gmail.com';
  dob = '25 AUGUST 1885';
  postalcode = '12345';
  address = 'ABC Street';
  company = 'Salesforce';
  salary = 'USD 20000';
  companyPhone = '6767676767';
  bank = 'American Express';
  gender = 'Male';
  incomeType = 'Self Employed';
  paycheck = 'Online Transfer';
  loanType = '';
  loanDuration = '';
  loadAmount = 0;
  dataTobeInserted = {};
  @api userAccountDetails;
  @api userContactDetails;
  @api userOppDetails;

  message;
  errorOnUpdate;


  get options() {
    return [{
        label: 'Self Employed',
        value: 'Self Employed'
      },
      {
        label: 'Unemployed',
        value: 'inProUnemployedgress'
      },
    ];
  }

  get genderOptions() {
    return [{
        label: 'Male',
        value: 'Male'
      },
      {
        label: 'Femal',
        value: 'Female'
      },
      {
        label: 'Other',
        value: 'Other'
      },
    ];
  }

  get payCheckOptions() {
    return [{
        label: 'Online Transfer',
        value: 'Online Transfer'
      },
      {
        label: 'Cash',
        value: 'Cash'
      },
      {
        label: 'Cheque',
        value: 'Cheque'
      },
    ];
  }

  get loanOptions() {
    return [{
        label: 'Home Loan',
        value: 'Home Loan'
      },
      {
        label: 'Car Loan',
        value: 'Car Loan'
      },
      {
        label: 'Personal Loan',
        value: 'Personal Loan'
      },
      {
        label: 'Business Loan',
        value: 'Busness Loan'
      },
      {
        label: 'Loan on Credit Card',
        value: 'Loan on Credit Card'
      },
      {
        label: 'Education Loan',
        value: 'Education Loan'
      },
    ];
  }

  contactChangeVal(event) {
    console.log(event.target.label);
    console.log(event.target.value);
    if (event.target.label == 'First Name') {
      this.firstName = event.target.value;
    }
    if (event.target.label == 'Last Name') {
      this.lastName = event.target.value;
    }
    if (event.target.label == 'Phone') {
      this.phoneNo = event.target.value;
    }
    if (event.target.label == 'Email') {
      this.emailId = event.target.value;
    }
    if (event.target.label == 'Date of Birth') {
      this.dob = event.target.value;
    }
    if (event.target.label == 'Gender') {
      this.gender = event.target.value;
    }
    if (event.target.label == 'Postal Code') {
      this.postalcode = event.target.value;
    }
    if (event.target.label == 'Street Address') {
      this.address = event.target.value;
    }

    if (event.target.label == 'Employer') {
      this.company = event.target.value;
    }
    if (event.target.label == 'Income Type') {
      this.incomeType = event.target.value;
    }
    if (event.target.label == 'Employer Phone') {
      this.companyPhone = event.target.value;
    }
    if (event.target.label == 'Monthly Salary') {
      this.salary = event.target.value;
    }
    if (event.target.label == 'How do your recieve your Paycheck?') {
      this.paycheck = event.target.value;
    }
    if (event.target.label == 'Bank Name') {
      this.bank = event.target.value;
    }
    if (event.target.label == 'Loan Type?') {
      this.loanType = event.target.value;
    }
    if (event.target.label == 'Loan Duration') {
      this.loanDuration = event.target.value;
    }
    if (event.target.label == 'Loan Amount') {
      this.loanAmount = event.target.value;
    }
  }

  activeSectionMessage = '';

  handleToggleSection(event) {
    this.activeSectionMessage =
      'Open section name:  ' + event.detail.openSections;
  }

  handleSetActiveSectionC() {
    const accordion = this.template.querySelector('.example-accordion');

    accordion.activeSectionName = 'C';
  }


  createUserRecord() {
    console.log('# getting called');
    this.dataTobeInserted = {
      "FirstName": this.firstName,
      "LastName": this.lastName,
      "Email": this.emailId,
      "Phone": this.phoneNo,
      "DOB": this.dob,
      "PostalCode": this.postalcode,
      "Bank": this.bank,
      "Gender": this.gender,
      "IncomeType": this.incomeType,
      "Paycheck": this.paycheck,
      "Salary": this.salary,
      "LoanType": this.loanType,
      "Duration": this.loanDuration,
      "company": this.company,
      "LoanAmount": this.loanAmount
    };

    console.log(' #JSON.stringify(userDetails) ', this.dataTobeInserted);
    let dataToBeInserted = JSON.stringify(this.dataTobeInserted);
    createLoanApplicant({
        loanData: dataToBeInserted
      })
      .then((result) => {
        console.log(result);
        if (result) {
          let applicationSuccessMessage = 'Thanks for apply for loan with us. Please note Application Number ' + result + ' Our Loan officer will connect with you for further process.'
          const event = new ShowToastEvent({
            title: 'Application Submitted Successfully',
            message: applicationSuccessMessage,
            variant: 'Success',
            mode: 'dismissable'
          });
          this.dispatchEvent(event);
        } else {
          const event = new ShowToastEvent({
            title: 'Application Submission Failed',
            message: 'Please submit a support request if you see this error again. Our representative will connect with you.',
            variant: 'Error'
          });
          this.dispatchEvent(event);
        }
      })
      .catch((error) => {
        console.log('FALSE');
        this.message = "";
        this.error = error;
        console.log('ERROR' + JSON.stringify(this.error));
        const event = new ShowToastEvent({
          title: 'Application Submission Failed',
          message: 'Please submit a support request if you see this error again. Our representative will connect with you.',
          variant: 'Error'
        });
        this.dispatchEvent(event);
      });
  }

}