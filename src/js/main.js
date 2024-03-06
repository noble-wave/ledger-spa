const demo = () => 'Webpack Boilerplate v5.18.0 - SASS/PostCSS, ES6/7, browser sync.';

// eslint-disable-next-line no-console
console.log(demo());

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('navigateLedgerApp').addEventListener('click', function () {
    window.location.href = 'https://my-ledger.etrivia.app/';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('learnMore').addEventListener('click', function () {
    const sectionId = 'scrollspyFeatures';
    const sectionPosition = document.getElementById(sectionId).offsetTop;
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  });
});

const getCurrentYear = () => new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('currentYear').textContent = getCurrentYear();
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 100 || window.innerWidth <= 992) {
    document.getElementById('scrollspyNav').style.padding = '20px 10px';
  } else {
    document.getElementById('scrollspyNav').style.padding = '50px 10px';
  }
}

// window.scroll(function () {
//   if (document.scrollTop() > 50) {
//     'navbar'.addClass('shrink');
//   } else {
//     'navbar'.removeClass('shrink');
//   }
// });
