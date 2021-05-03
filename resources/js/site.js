import 'alpinejs';

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
    for (var i = 0; i < gwritersTabs.length; i++) {
        gwritersTabs[i].addEventListener("click", gwritersTabClicks)
    }
}

function accordionToogle() {
    var accordionTabs = document.querySelectorAll("div.accordion-tab");

    function accordionTabClicks(tabClickEvent) {
        for (var i = 0; i < accordionTabs.length; i++) {
            accordionTabs[i].classList.remove("active");
        }

        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var accordionTabsContent = document.querySelectorAll("div.accordion-tab.content");

        for (i = 0; i < accordionTabsContent.length; i++) {
            accordionTabsContent[i].classList.remove("active");
        }
    }
    for (var i = 0; i < accordionTabs.length; i++) {
        accordionTabs[i].addEventListener("click", accordionTabClicks)
    }
}

function getLocale() {
    const tld = window.location.origin.split('.').pop();
    return tld;
}

function setLocalizedContent () {
    const curr = getLocale();
    const body = document.body;

    if(curr == 'ch') {
        body.classList.add('ch');
    } else {
        body.classList.add('de');
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
    accordionToogle();
    setLocalizedContent();
});
