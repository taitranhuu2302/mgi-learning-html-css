const btnNav = document.getElementById("btn-nav");
const navMobile = document.getElementsByClassName("nav-mobile")[0];
const header = document.getElementById("Header");

btnNav.addEventListener("click", () => {
  navMobile.classList.toggle("open");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <div class="${className} pagination__item">
            <img src="https://themesdesign.in/zoric/layout/images/users/img-${
              index + 5
            }.jpg" alt="" />
        </div>      
      `;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", (e) => {
  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  
  if (scrollTop >= 300) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
