import 'alpinejs'
import './components/cookieconsent/dist/cookieconsent.js'
import { tns } from "tiny-slider"

// utm consts
  const utmGraceMs = 259200000 // 72 hours
  const utmSearchKeys = [
    'utm_medium',
    'utm_source'
  ]

//  nav consts
const body = document.querySelector('.body')
const overlayer = document.querySelector('.menu-overlayer')

const burger = document.querySelector('.menu-opener')
const mobileMenu = document.querySelector('.menu-mobile')
const mobileMenuCloseButton = document.querySelector('.menu-closer')

const megaMenuToggler = document.querySelector('.dropdown')
const megaMenuCloseButton = document.querySelector('.closesub')

const megaMenuOpened = () => !megaMenuToggler.nextElementSibling.classList.contains('hidden')
const mobileMenuOpened = () => !mobileMenu.classList.contains('hidden')

const mobileMailMenu = document.querySelector('#mobileMailMenu')
const mailMenuButton = document.querySelector('#mobileMailMenuBtn')
const mailMenuCloseButton = document.querySelector('#mailMenuCloseBtn')
const mailMenuOpened = () => !mobileMailMenu.classList.contains('hidden')

const setScrolling = (active) => {
  if (!active) {
    body.classList.remove('submenuopen')
    body.classList.add('submenuopen')
    return
  }
  body.classList.remove('submenuopen')
}

const toggleMegaMenu = () => {
  megaMenuToggler.nextElementSibling.classList.toggle('hidden')
  setScrolling(!megaMenuOpened())
}

const closeMegaMenu = () => {
  megaMenuToggler.nextElementSibling.classList.remove('hidden')
  megaMenuToggler.nextElementSibling.classList.add('hidden')
  setScrolling(true)
}

const closeMobileMenu = () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
  overlayer.classList.remove('hidden')
  overlayer.classList.add('hidden')
  setScrolling(true)
}

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('hidden');
  if (mobileMenu.classList.contains('hidden')) {
    overlayer.classList.remove('hidden')
    overlayer.classList.add('hidden')
  } else {
    overlayer.classList.remove('hidden')
  }

  setScrolling(!mobileMenuOpened())
}

const toggleMailMenu = (ev) => {
  mobileMailMenu.classList.toggle('hidden')
  mobileMailMenuBtn.classList.toggle('hidden')
  mailMenuCloseBtn.classList.toggle('hidden')
  setScrolling(!mailMenuOpened())
}

const closeMailMenu = () => {
  mobileMailMenu.classList.remove('hidden')
  mobileMailMenu.classList.add('hidden')
  mobileMailMenuBtn.classList.remove('hidden')
  mailMenuCloseBtn.classList.remove('hidden')
  mailMenuCloseBtn.classList.add('hidden')
  setScrolling(true)
}

const closeAllMenus = () => {
  setScrolling(true)
  closeMegaMenu()
  closeMobileMenu()
  closeMailMenu()
}

const addMegaMenuHandler = () => {
  // submenu content
  const subitemtoggle = document.querySelectorAll('.subitemtoggle');
  const subitems = document.querySelectorAll('.subitem');

  // subnav areas toggle
  subitemtoggle.forEach(element => {
    element.addEventListener('mouseover', e => {
      subitemtoggle.forEach(el => {
        el.classList.remove('active');
      })
      subitems.forEach(item => {
        item.classList.remove('active')
      })
      e.target.classList.add('active')
      document.getElementById(e.target.getAttribute('data-target-tab')).classList.add('active')
    })

  })
}

const addMobileMenuHandler = () => {
  const nextLevelToggle = document.querySelectorAll('.nextlvl-toggle');

  nextLevelToggle.forEach(p => {
    p.addEventListener('click', e => {
      p.classList.toggle('subopen');
      p.nextSibling.nextSibling.classList.toggle('open');
    })
  })
}

const addMobileMailMenuHandler = () => {
  if (!mailMenuButton || !mailMenuCloseButton) return
  mailMenuButton.addEventListener('click', toggleMailMenu)
  mailMenuCloseButton.addEventListener('click', closeMailMenu)
}

const addMenuHandler = () => {
  window.addEventListener('resize', closeAllMenus)
  megaMenuToggler.addEventListener('click', toggleMegaMenu)
  megaMenuCloseButton.addEventListener('click', closeMegaMenu)
  burger.addEventListener('click', toggleMobileMenu)
  mobileMenuCloseButton.addEventListener('click', toggleMobileMenu)
  overlayer.addEventListener('click', closeMobileMenu)

  addMegaMenuHandler()
  addMobileMenuHandler()
  addMobileMailMenuHandler()
}

const handleMenuScroll = () => {
  const upperRow = document.querySelector('#menuUpperRow')
  const lowerRow = document.querySelector('#menuLowerRow')
  if (!upperRow || !lowerRow) return
  window.addEventListener('scroll', () => {
    if (upperRow.getBoundingClientRect().bottom < 0) {
      lowerRow.classList.remove('flexible')
    } else {
      lowerRow.classList.add('flexible')
    }
  })
}

const renderContactLists = () => {
  const contactLists = document.querySelectorAll('.contact-list')
  contactLists.forEach((list) => {
    list.classList.remove('hidden')
  })
}

// END Menu

function lazzyVideo () {
  const vidDefer = document.querySelectorAll('.lazy')
  for (const vid of vidDefer) {
    if (vid.getAttribute('data-src')) {
      vid.setAttribute('src', vid.getAttribute('data-src'))
    }
  }
}

function tabToggle() {
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
                readonly: false,
                reload: 'on_disable'
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
                },
                {
                  col1: '_fbp',
                  col2: 'gwriters.de',
                  col3: 'Meta Pixel - to store and count conversions.'
                },
                {
                  col1: 'fbc',
                  col2: 'gwriters.de',
                  col3: 'Meta Pixel - to store and count conversions.'
                },
                {
                  col1: 'fr',
                  col2: 'gwriters.de',
                  col3: 'Meta Pixel - to store and count conversions.'
                },
                {
                  col1: 'datr',
                  col2: 'gwriters.de',
                  col3: 'Meta Pixel - to store and count conversions.'
                }
              ]
            },
            {
              title: "Hinweis",
              description: "Bitte laden Sie im Anschluss an die Änderung die Seite neu, falls sie eine Berechtigung zurückgezogen haben."
            }
          ]
        }
      }
    }
  })
  const consentSettingsLinks = document.querySelectorAll('.cookie-consent-settings')
  for (const link of consentSettingsLinks) {
    link.addEventListener('click', () => cookieconsent.showSettings())
  }
}

if (document.querySelector('.expert-slider')) {
  tns({
    container: '.expert-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsPosition: 'bottom',
    mouseDrag: true,
    controlsContainer: "#customize-controls",
    responsive: {
      1024: {
        items: 2,
        gutter: 55
      }
    }
  })
}

/**
 * Add utm data to localStorage #14116
 */
const handleUTM = () => {
  const now = Date.now()
  const lastData = localStorage.getItem('utm_time')

  if (!lastData && localStorage.getItem('utm')) {
    localStorage.setItem('utm_time', now)
  }

  if (lastData && lastData <= now - utmGraceMs) {
    localStorage.removeItem('utm_time')
    localStorage.removeItem('utm')
  }

  const params = new URLSearchParams(window.location.search)
  const paramsMap = new Map()
  for (const [key, value] of params.entries()) {
    if (utmSearchKeys.includes(key)) {
      paramsMap.set(key, value)
    }
  }

  const paramsSet = Array.from(paramsMap, ([key, value]) => ({
    key,
    value,
  }))

  if (paramsSet.length) {
    localStorage.setItem('utm_time', now)
    localStorage.setItem('utm', JSON.stringify(paramsSet))
  }
}

const ready = callback => {
  if (document.readyState != 'loading') callback()
  else document.addEventListener('DOMContentLoaded', callback)
}

ready(() => {
  handleUTM()
  handleMenuScroll()
  renderContactLists()
  addMenuHandler()
  lazzyVideo()
  tabToggle()
  accordionToogle()
  cookienotice()
  setLocalizedContent()
})
