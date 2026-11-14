// The language menu of the Hue House website: it closes on a tap outside it
// or on Escape, and remembers the language picked in it, which the English
// pages then keep to instead of the browser's (see their head).
(function () {
  const menu = document.querySelector('details.lang');
  if (!menu) {
    return;
  }
  document.addEventListener('click', function (event) {
    if (menu.open && !menu.contains(event.target)) {
      menu.open = false;
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  menu.querySelectorAll('a[data-lang]').forEach(function (link) {
    link.addEventListener('click', function () {
      try {
        localStorage.setItem('hue-house-lang', link.getAttribute('data-lang'));
      } catch {
        // Private browsing: the pick lasts this page only.
      }
    });
  });
})();
