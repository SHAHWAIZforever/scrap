const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    header.classList.toggle('active');
    content.classList.toggle('show');
  });
});




// >>>>>>>>>>>>>>>>>>>>>>


function route(event) {
  window.location.href = '<?= $nextPage ?>' + window.location.search;
}


// >>>>>>>>>>>>>>>>>>>>

// const scrollContent = document.getElementById('sec1in2');
// const fixedBox = document.querySelector('.fixed-box');

// window.addEventListener('scroll', () => {
//   const maxScroll =
//     scrollContent.scrollHeight - fixedBox.clientHeight;
//   const inverseScroll = Math.min(window.scrollY, maxScroll);

//   // Clamp to zero if scroll is negative
//   scrollContent.style.top = -Math.max(0, inverseScroll) + 'px';
// });


// window.addEventListener('scroll', function () {
//   const box = document.querySelector('.fixed-box');
//   if (window.scrollY > 100) {
//     box.classList.add('fixed');
//   } else {
//     box.classList.remove('fixed');
//   }
//   if (window.scrollY > 900) {
//     box.classList.add('fixed2');
//   } else {
//     box.classList.remove('fixed2');
//   }
//   if (document.documentElement.scrollHeight - window.scrollY - window.innerHeight <= 600) {
//     box.classList.add('fixed3');
//   } else {
//     box.classList.remove('fixed3');
//   }
// });


const scrollContent = document.getElementById('sec1in2');
const fixedBox = document.querySelector('.fixed-box');

// Disable behavior for screens <= 768px
function isDesktop() {
  return window.innerWidth > 1025;
}

window.addEventListener('scroll', () => {
  if (!isDesktop()) return;

  const maxScroll = scrollContent.scrollHeight - fixedBox.clientHeight;
  const inverseScroll = Math.min(window.scrollY, maxScroll);

  // Clamp to zero if scroll is negative
  scrollContent.style.top = -Math.max(0, inverseScroll) + 'px';
});

window.addEventListener('scroll', () => {
  if (!isDesktop()) return;

  const box = document.querySelector('.fixed-box');
  if (window.scrollY > 100) {
    box.classList.add('fixed');
  } else {
    box.classList.remove('fixed');
  }
  if (window.scrollY > 900) {
    box.classList.add('fixed2');
  } else {
    box.classList.remove('fixed2');
  }
  if (
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight <= 600
  ) {
    box.classList.add('fixed3');
  } else {
    box.classList.remove('fixed3');
  }
});


