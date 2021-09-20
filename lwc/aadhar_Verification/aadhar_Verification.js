import { LightningElement, api, track } from 'lwc';

export default class Aadhar_Verification extends LightningElement {
    @api isLoaded = false;
    @track isModalOpen = false;
    @track aadharnumber;
    @track showUserDetails = false;


    onAadharChange(event) {
        this.aadharnumber = event.detail.value;
    }

    provideAadharOTP() {
        console.log('Method Called')
        const isInputsCorrect = [...this.template.querySelectorAll('lightning-input')]
        .reduce((validSoFar, inputField) => {
            inputField.reportValidity();
            return validSoFar && inputField.checkValidity();
        }, true);
            if (isInputsCorrect) {
            //perform success logic
            console.log('Inside Method Called')
            this.openModal();
            }
        }
    

    openModal() {
       this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
    submitDetails() {
        this.isModalOpen = false;
        this.showUserDetails = true;
    }

}