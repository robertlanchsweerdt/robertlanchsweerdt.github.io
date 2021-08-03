document.addEventListener('DOMContentLoaded', function () {
  const navBar = document.getElementById('navbar_top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      navBar.classList.add('c__fixed-top');
      // add padding top to show content behind navbar
      let navBar_height = navBar.offsetHeight;
      // console.log(navbar_height);
      // document.body.style.paddingTop = navBar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('c__fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});
