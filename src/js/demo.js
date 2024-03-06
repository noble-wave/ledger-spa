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

const getCurrentYear = () => {
  return new Date().getFullYear();
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('currentYear').textContent = getCurrentYear();
});
