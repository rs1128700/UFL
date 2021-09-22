import { LightningElement, api, track } from 'lwc';
import {
    ShowToastEvent
  } from 'lightning/platformShowToastEvent';
  
export default class Aadhar_Verification extends LightningElement {
    @track isLoaded = false;
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

    aadharValidate(event) {
        let adharcardTwelveDigit = /^\d{12}$/;
        if ( this.aadharnumber.match(adharcardTwelveDigit)) {
                this.isLoaded = !this.isLoaded;
                setTimeout(() => {
                    this.isLoaded = false;
                    this.openModal();
                }, 3000);
            }
            else {
                const event = new ShowToastEvent({
                    message: 'Please enter valid 12 digit aadhar number .',
                    variant: 'Error'
                  });
                  this.dispatchEvent(event);
            }
    }

    
}
