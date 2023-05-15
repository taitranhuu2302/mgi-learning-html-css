const swiper = new Swiper('.swiper', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <div class="${className} pagination__item">
            <img src="https://themesdesign.in/zoric/layout/images/users/img-${index + 5}.jpg" alt="" />
        </div>      
      `
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
