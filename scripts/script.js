document.addEventListener('DOMContentLoaded', () => {
  const pageTop = document.querySelector('.site-wrapper');
  const toTopArrow = document.getElementById('btn-back-to-top');

  // Button Scroll to Top
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500) {
      toTopArrow.classList.add('show-toTopArrow');
    } else {
      toTopArrow.classList.remove('show-toTopArrow');
    }
  });

  // Enable Bootstrap Tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
