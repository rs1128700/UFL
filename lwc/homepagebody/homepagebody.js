import {
  LightningElement
} from 'lwc';
import cssFolder from '@salesforce/resourceUrl/PortalCSS';
import {
  loadScript,
  loadStyle
} from 'lightning/platformResourceLoader';
import PROJECT_IMAGE1 from '@salesforce/resourceUrl/ProjectImage1';
import PROJECT_IMAGE2 from '@salesforce/resourceUrl/ProjectImage2';
import PROJECT_IMAGE3 from '@salesforce/resourceUrl/ProjectImage3';
import PROJECT_IMAGE4 from '@salesforce/resourceUrl/ProjectImage4';
import PROJECT_IMAGE5 from '@salesforce/resourceUrl/ProjectImage5';


export default class Homepagebody extends LightningElement {
  slider1 = PROJECT_IMAGE3 + "/slider-1.jpg";
  slider2 = PROJECT_IMAGE3 + "/slider-2.jpg";
  slider3 = PROJECT_IMAGE3 + "/slider-3.jpg";
  mortgage = PROJECT_IMAGE3 + "/mortgage.svg";
  car = PROJECT_IMAGE1 + "/car.svg";
  loan = PROJECT_IMAGE2 + "/loan.svg";
  creditcard = PROJECT_IMAGE1 + "/credit-card.svg";
  piggybank = PROJECT_IMAGE3 + "/piggy-bank.svg";
  testimonial = PROJECT_IMAGE5 + "/testimonial-img.jpg";
  testimonial1 = PROJECT_IMAGE5 + "/testimonial-img-1.jpg";
  testimonial2 = PROJECT_IMAGE5 + "/testimonial-img-2.jpg";
  logo1 = PROJECT_IMAGE2 + "/logo-1.jpg";
  logo2 = PROJECT_IMAGE2 + "/logo-2.jpg";
  logo3 = PROJECT_IMAGE2 + "/logo-3.jpg";
  logo4 = PROJECT_IMAGE2 + "/logo-4.jpg";
  logo5 = PROJECT_IMAGE2 + "/logo-5.jpg";
  blog = PROJECT_IMAGE1 +"/blog-img.jpg";
  blog1 = PROJECT_IMAGE1 +"/blog-img-1.jpg";
  blog2 = PROJECT_IMAGE1 +"/blog-img-2.jpg";



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
        loadScript(this, cssFolder + '/js/jquery.min.js'),
        loadScript(this, cssFolder + '/js/bootstrap.min.js'),
        loadScript(this, cssFolder + '/js/menumaker.js'),
        loadScript(this, cssFolder + '/js/jquery.sticky.js'),
        loadScript(this, cssFolder + '/js/sticky-header.js'),
        loadScript(this, cssFolder + '/js/owl.carousel.min.js'),
        loadScript(this, cssFolder + '/js/slider-carousel.js'),
        loadScript(this, cssFolder + '/js/js/service-carousel.js'),
      ])
      .then(() => {
        console.log('Files loaded.');
      })
      .catch(error => {
        console.log('Failed to load the JQuery Home: ' + error);
      });
  }
}