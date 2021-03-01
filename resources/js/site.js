function menuOpener() {
    var menu = document.querySelector(".menu-mobile");
    var body = document.querySelector(".body");
    var overlayer = document.querySelector(".menu-overlayer");

    document.querySelector(".menu-opener").addEventListener("click", (e) => {
        body.classList.toggle('overflow-hidden')
        menu.classList.toggle('hidden')
        overlayer.classList.toggle('hidden')
    });

    document.querySelector(".menu-closer").addEventListener("click", (e) => {
        body.classList.toggle('overflow-hidden')
        menu.classList.toggle('hidden')
        overlayer.classList.toggle('hidden')
    });
}

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    menuOpener();
});
