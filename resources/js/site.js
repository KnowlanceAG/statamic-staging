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

function lazzyVideo() {
    var vidDefer = document.querySelectorAll(".lazy");
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'))
        }
    }
}

function tabToggle() {
    var gwritersTabs = document.querySelectorAll("div.link-list-header > p");
    function gwritersTabClicks(tabClickEvent) {
        for (var i = 0; i < gwritersTabs.length; i++) {
            gwritersTabs[i].classList.remove("active");
        }

        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var gwritersContentPanes = document.querySelectorAll(".link-list-body");

        for (i = 0; i < gwritersContentPanes.length; i++) {
            gwritersContentPanes[i].classList.remove("active");
        }

        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("data-target");
        var activePane = document.querySelector('.'+activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < gwritersTabs.length; i++) {
        gwritersTabs[i].addEventListener("click", gwritersTabClicks)
    }
}

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    menuOpener();
    lazzyVideo();
    tabToggle();
});
