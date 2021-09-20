import {
  LightningElement
} from 'lwc';
import cssFolder from '@salesforce/resourceUrl/PortalCSS';
import {
  loadScript,
  loadStyle
} from 'lightning/platformResourceLoader';


export default class Homepagefooter extends LightningElement {
  constructor() {
    super();
    Promise.all([
        loadStyle(this, cssFolder + '/css/bootstrap.min.css'),
        loadStyle(this, cssFolder + '/css/flaticon.css'),
        loadStyle(this, cssFolder + '/css/font-awesome.min.css'),
        loadStyle(this, cssFolder + '/css/fontello.css'),
        loadStyle(this, cssFolder + '/css/jquery-ui.css'),
        loadStyle(this, cssFolder + '/css/magnific-popup.css'),
        loadStyle(this, cssFolder + '/css/owl.carousel.css'),
        loadStyle(this, cssFolder + '/css/owl.theme.css'),
        loadStyle(this, cssFolder + '/css/simple-slider.css'),
        loadStyle(this, cssFolder + '/css/style.css'),
        loadScript(this, cssFolder + '/js/'),
      ])
      .then(() => {
        console.log('Files loaded.');
      })
      .catch(error => {
        console.log('Failed to load the JQuery Home: ' + error);
      });
  }
}