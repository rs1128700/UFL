import { LightningElement, track } from 'lwc';
import fetchLoanDetails from '@salesforce/apex/registerLoanApplicant.getLoanApplication';

export default class TrackLoanAppliation extends LightningElement {

    applicationNumber;
    showLoanApplication = false;
    @track loandetail;
    rowOffset = 0;

    @track columns = [
    {
        label: 'Application Number',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Status',
        fieldName: 'Status__c',
        type: 'text',
        sortable: true
    },
    {
        label: 'Loan Type',
        fieldName: 'Loan_Type__c',
        type: 'text',
        sortable: true
    },
    {
        label: 'Laon Amount',
        fieldName: 'Amount__c',
        type: 'text',
        sortable: true
    },

];

    trackLoanApp() {
        fetchLoanDetails({applicationNumber: this.applicationNumber})
        .then(result => {
            if (result) {
                console.log('RESULT '+ JSON.stringify(result));
                this.displayLoanApplication();
                this.loandetail = result;
            } else {
                console.log('Some Error');
            }
        })
        .catch(error => {
            console.log('error: ', error);
        });
    }

    handleApplicationNumber(event){
        this.applicationNumber = event.target.value;
    }

    displayLoanApplication() {
        this.showLoanApplication = true;
        console.log('SUCCESS'+ this.showLoanApplication);
    }
}