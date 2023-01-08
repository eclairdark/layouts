document.addEventListener('DOMContentLoaded', () => {
  function openNavigation(menu) {
    const navigation = document.querySelector('.header__navigation');
    const navigationButton = document.querySelector('.navigation-button');
    if (menu.classList.contains('active')) {
      navigation.style.transform = 'translateX(0)';
      navigationButton.style.display = 'block';
    } else {
      navigation.removeAttribute('style');
      navigationButton.removeAttribute('style');
    }
  }

  const burger = document.querySelector('.burger-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');

    openNavigation(burger);
  });
});
