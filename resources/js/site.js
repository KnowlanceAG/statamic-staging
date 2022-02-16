import 'alpinejs'
import './components/cookieconsent/dist/cookieconsent.js'

function menuOpener () {
  const menu = document.querySelector('.menu-mobile')
  const body = document.querySelector('.body')
  const overlayer = document.querySelector('.menu-overlayer')

  document.querySelector('.menu-opener').addEventListener('click', e => {
    body.classList.toggle('overflow-hidden')
    menu.classList.toggle('hidden')
    overlayer.classList.toggle('hidden')
  })

  document.querySelector('.menu-closer').addEventListener('click', e => {
    body.classList.toggle('overflow-hidden')
    menu.classList.toggle('hidden')
    overlayer.classList.toggle('hidden')
  })
}

function megaMenu(){
  // wrapper consts
  const megaMenuToggler = document.querySelectorAll('.dropdown');
  const megaMenuWrapper = document.querySelectorAll('.megamenu');
  const closeSub = document.querySelector('.closesub');

  // submenu content
  const subitemtoggle = document.querySelectorAll('.subitemtoggle');
  const subitems = document.querySelectorAll('.subitem');
  // let toggleTargets = new Array();

  // open or close menu by mainitem
  megaMenuToggler.forEach(menu => {
    menu.addEventListener('click', e => {
      menu.nextElementSibling.classList.toggle('hidden');
      document.body.classList.toggle('submenuopen');
    });
  });
  // close menu by close button
  closeSub.addEventListener('click', e => {
    megaMenuWrapper.forEach(wrapper => {
      wrapper.classList.add('hidden');
      document.body.classList.toggle('submenuopen');
    });
  });
  
  // subnav areas toggle
  subitemtoggle.forEach(element => {    
    element.addEventListener('mouseover', e => {      
      subitemtoggle.forEach(el => {
        el.classList.remove('active');
      });
      subitems.forEach(item => {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
      document.getElementById(e.target.getAttribute('data-target-tab')).classList.add('active');
    });

  });
}

function lazzyVideo () {
  const vidDefer = document.querySelectorAll('.lazy')
  for (const vid of vidDefer) {
    if (vid.getAttribute('data-src')) {
      vid.setAttribute('src', vid.getAttribute('data-src'))
    }
  }
}

function tabToggle () {
  const gwritersTabs = document.querySelectorAll('div.link-list-header > p')
  function gwritersTabClicks (tabClickEvent) {
    for (const tab of gwritersTabs) {
      tab.classList.remove('active')
    }

    const clickedTab = tabClickEvent.currentTarget
    clickedTab.classList.add('active')
    const gwritersContentPanes = document.querySelectorAll('.link-list-body')

    for (const pane of gwritersContentPanes) {
      pane.classList.remove('active')
    }

    const anchorReference = tabClickEvent.target
    const activePaneId = anchorReference.getAttribute('data-target')
    const activePane = document.querySelector('.' + activePaneId)
    activePane.classList.add('active')
  }

  for (const tab of gwritersTabs) {
    tab.addEventListener('click', gwritersTabClicks)
  }
}

function accordionToogle () {
  const accordionTabs = document.querySelectorAll('div.accordion-tab')

  for (const tab of accordionTabs) {
    tab.addEventListener('click', accordionTabClicks)
  }

  function accordionTabClicks (tabClickEvent) {
    const clickedTab = tabClickEvent.currentTarget
    const active = clickedTab.classList.contains('active')

    for (const tab of accordionTabs) {
      tab.classList.remove('active')
    }

    if (!active) {
      clickedTab.classList.add('active')
    }

    const accordionTabsContent = document.querySelectorAll(
      'div.accordion-tab.content'
    )

    for (const content of accordionTabsContent) {
      content.classList.remove('active')
    }
  }
}

function getLocale () {
  const tld = window.location.origin.split('.').pop()
  return tld
}

function setLocalizedContent () {
  const curr = getLocale()
  const body = document.body

  if (curr == 'ch') {
    body.classList.add('ch')
  } else {
    body.classList.add('de')
  }
}
function cookienotice () {
  const cookieconsent = initCookieConsent()

  cookieconsent.run({
    current_lang: 'de',
    theme_css: '',
    page_scripts: true,

    onAccept: function () {},

    languages: {
      de: {
        consent_modal: {
          title: 'Diese Webseite verwendet Cookies',
          description:
            'Diese Websites verwendet Cookies um Ihnen den bestmöglichen Service bieten zu können – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung. Klicken Sie auf „Ich stimme zu“, um alle Cookies zu akzeptieren und unsere Website uneingeschränkt nutzen zu können.',
          primary_btn: {
            text: 'Ich stimme zu',
            role: 'accept_all' //'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: 'Nur ausgewählte akzeptieren',
            role: 'accept_selected' //'settings' or 'accept_necessary'
          }
        },
        settings_modal: {
          title: 'Cookie Einstellungen',
          save_settings_btn: 'Einstellungen speichern',
          accept_all_btn: 'Alle Akzeptieren',
          close_btn_label: 'Schließen',
          cookie_table_headers: [
            { col1: 'Name' },
            { col2: 'Source' },
            { col3: 'Beschreibung' }
          ],
          blocks: [
            {
              title: 'Cookies',
              description: ''
            },
            {
              title: 'Notwendige',
              description: 'Cookienotice',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true
              },
              cookie_table: [
                {
                  col1: 'cc_cookie',
                  col2: 'gwriters.de',
                  col3: ''
                }
              ]
            },
            {
              title: 'Statistiken',
              description: '',
              toggle: {
                value: 'analytics',
                enabled: false,
                readonly: false
              },
              cookie_table: [
                {
                  col1: '_gat_gtag_UA_30152060_1',
                  col2: 'gwriters.de',
                  col3: 'Google Analytics - to store a unique user ID'
                },
                {
                  col1: '_ga',
                  col2: 'gwriters.de',
                  col3: 'Google Analytics - to store and count pageviews'
                },
                {
                  col1: '_gid',
                  col2: 'gwriters.de',
                  col3: 'Google Analytics - to store and count pageviews.'
                }
              ]
            }
          ]
        }
      }
    }
  })
}

const ready = callback => {
  if (document.readyState != 'loading') callback()
  else document.addEventListener('DOMContentLoaded', callback)
}

ready(() => {
  menuOpener()
  lazzyVideo()
  tabToggle()
  accordionToogle()
  cookienotice()
  setLocalizedContent()
  megaMenu()
})
