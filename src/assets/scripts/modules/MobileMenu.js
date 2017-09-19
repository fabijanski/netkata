import $ from 'jquery';

class MobileMenu {
  constructor() { // selecting elements from the DOM
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }

  events() { // event handling
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() { // defining functionality
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;
