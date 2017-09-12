function addMargin() {
   window.scrollTo(0, window.pageYOffset - 100);
}

window.addEventListener('hashchange', addMargin);