import 'alpinejs';
import './components/cookieconsent/dist/cookieconsent.js'

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
function cookienotice () {
    var cookieconsent = initCookieConsent();

    cookieconsent.run({
        current_lang : 'de',
        theme_css : '',

        onAccept : function(){
            if(cookieconsent.allowedCategory('analytics')){
                cookieconsent.loadScript('https://www.googletagmanager.com/gtag/js?id=UA-30152060-1', function(){
                    window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
                    gtag("js", new Date());
                    gtag("set", "developer_id.dZTNiMT", true);
                    gtag("config", "UA-30152060-1", {"anonymize_ip":true});
                });
            }
        },

        languages : {
            de : {
                consent_modal : {
                    title :  "Diese Webseite verwendet Cookies",
                    description :  'Diese Websites verwendet Cookies um Ihnen den bestmöglichen Service bieten zu können – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung. Klicken Sie auf „Ich stimme zu“, um alle Cookies zu akzeptieren und unsere Website uneingeschränkt nutzen zu können.',
                    primary_btn: {
                        text: 'Ich stimme zu',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Nur ausgewählte akzeptieren',
                        role : 'accept_selected'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Cookie Einstellungen',
                    save_settings_btn : "Einstellungen Speichern",
                    accept_all_btn : "Alle Akzeptieren",
                    close_btn_label: "Schließen",
                    cookie_table_headers : [
                        {col1: "Name" },
                        {col2: "Source" },
                        {col3: "Beschreibung" },
                    ],
                    blocks : [
                        {
                            title : "Cookies",
                            description: ''
                        },{
                            title : "Notwendige",
                            description: 'Cookienotice',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true
                            },
                            cookie_table: [
                                {
                                    col1: 'cc_cookie',
                                    col2: 'gwriters.de',
                                    col3: '',
                                },
                            ]
                        },{
                            title : "Statistiken",
                            description: '',
                            toggle : {
                                value : 'analytics',
                                enabled : false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '_gat_gtag_UA_30152060_1',
                                    col2: 'gwriters.de',
                                    col3: 'Google Analytics - to store a unique user ID',
                                },
                                {
                                    col1: '_ga',
                                    col2: 'gwriters.de',
                                    col3: 'Google Analytics - to store and count pageviews',
                                },
                                {
                                    col1: '_gid',
                                    col2: 'gwriters.de',
                                    col3: 'Google Analytics - to store and count pageviews.',
                                }
                            ]
                        },
                    ]
                }
            }
        }
    });
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
    cookienotice();
    setLocalizedContent();
});
