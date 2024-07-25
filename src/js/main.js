import * as bootstrap from 'bootstrap';

const demo = () => 'Webpack Boilerplate v5.18.0 - SASS/PostCSS, ES6/7, browser sync.';

// eslint-disable-next-line no-console
console.log(demo());

const getCurrentYear = () => new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  const navigateLedgerApp = document.getElementById('navigateLedgerApp');
  if (navigateLedgerApp) {
    navigateLedgerApp.addEventListener('click', function () {
      window.location.href = 'https://my-ledger.etrivia.app/';
    });
  }

  const learnMore = document.getElementById('learnMore');
  if (learnMore) {
    learnMore.addEventListener('click', function () {
      const sectionId = 'scrollspyFeatures';
      const sectionPosition = document.getElementById(sectionId).offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });
    });
  }

  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = getCurrentYear();
  }
});

// eslint-disable-next-line vars-on-top
// var scrollTimeout;

// window.onscroll = function () {
//   clearTimeout(scrollTimeout);
//   scrollTimeout = setTimeout(scrollFunction, 100); // Adjust the debounce delay as needed
// };

// // function scrollFunction() {
// //   if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 100 || window.innerWidth <= 992) {
// //     document.getElementById('scrollspyNav').style.padding = '20px 10px';
// //   } else {
// //     document.getElementById('scrollspyNav').style.padding = '50px 10px';
// //   }
// // }
