(function() {
  function myFunc() {
    document.querySelector(".js-my-dropdown").classList.toggle("dropdown1");
    document.querySelector(".js-my-dropdown").classList.toggle("dropdown2");

    document.querySelector(".js-my-button").classList.toggle("button1");
    document.querySelector(".js-my-button").classList.toggle("button2");

    document.querySelector(".js-my-menu").classList.toggle("menu1");
    document.querySelector(".js-my-menu").classList.toggle("menu2");
  }

  $(function() {
    const myButton = document.querySelector(".js-my-button");
    myButton.addEventListener('click',myFunc,false);
  });

}());
