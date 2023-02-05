document.addEventListener('DOMContentLoaded', () => {
  function openNavigation(menu) {
    const navigation = document.querySelector('.header__navigation');
    const navigationButton = document.querySelector('.navigation-button');
    if (menu.classList.contains('active-nav')) {
      navigation.style.transform = 'translateX(0)';
      navigationButton.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      navigation.removeAttribute('style');
      navigationButton.removeAttribute('style');
      document.body.style.overflow = '';
    }
  }

  const burger = document.querySelector('.burger-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active-nav');

    openNavigation(burger);
  });

  const menuLinks = document.querySelectorAll('.navigation-list');
  console.log(menuLinks);

  menuLinks.forEach((i) => i.addEventListener('click', closeMenu));

  function closeMenu() {
    const navigation = document.querySelector('.header__navigation');

    navigation.removeAttribute('style');
    burger.classList.remove('active-nav');
    document.body.style.overflow = '';
  }

  //slider

  const slides = [...document.querySelectorAll('.slide')];
  const dotsWrapper = document.querySelector('.slider__dots');
  const dots = document.querySelectorAll('.slider__dot');

  function activeDots(e) {
    dots.forEach((dot) => {
      dot.classList.remove('active-dot');
    });

    const sliderDot = e.target.classList;

    if (e.target === dotsWrapper) {
      dots[1].classList.add('active-dot');
      addStylesForSlide(slides[1]);
    } else {
      e.target.classList.add('active-dot');
    }

    switch (sliderDot[1]) {
      case 'first-dot':
        addStylesForSlide(slides[0]);
        break;
      case 'second-dot':
        addStylesForSlide(slides[1]);
        break;
      case 'third-dot':
        addStylesForSlide(slides[2]);
        break;
    }
  }

  function addStylesForSlide(slide) {
    const slideTitle = slide.querySelector('.slide__title');
    const slideDesc = slide.querySelectorAll('.slide__desc');

    slides.forEach((slide) => {
      if (slide.classList.contains('active')) {
        slide.classList.remove('active');
        slide.querySelector('.slide__title').classList.remove('active-title');
        slide
          .querySelectorAll('.slide__desc')
          .forEach((desc) => desc.classList.remove('active-desc'));
      } else {
      }
    });

    slide.classList.add('active');
    slideTitle.classList.add('active-title');
    slideDesc.forEach((desc) => desc.classList.add('active-desc'));
  }

  dotsWrapper.addEventListener('click', activeDots);
});
