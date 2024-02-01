---
id: home
blueprint: pages
title: Startseite
template: default
teaser:
  -
    type: heading
    attrs:
      textAlign: center
      level: 1
    content:
      -
        type: text
        marks:
          -
            type: textColor
            attrs:
              color: orange-500
        text: 'Akademische Ghostwriter helfen.'
      -
        type: hardBreak
      -
        type: text
        text: 'Einfach & schnell.'
  -
    type: paragraph
    attrs:
      textAlign: center
    content:
      -
        type: text
        marks:
          -
            type: bold
        text: 'Über 3000 akademische Ghostwriter & Autoren aus den verschiedenen Fachbereichen!'
  -
    type: set
    attrs:
      id: UJbxVM4g
      values:
        type: button
        button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
        button_text: 'JETZT KOSTENLOS ANFRAGEN'
        color: '#FF6606'
        spacing_top: false
  -
    type: set
    attrs:
      id: LwiBW6u1
      values:
        type: spacer
        padding-y: 20
  -
    type: paragraph
    attrs:
      textAlign: center
    content:
      -
        type: text
        marks:
          -
            type: bold
        text: 'Oder rufen Sie uns einfach an, wir beraten Sie gerne & kostenlos:'
  -
    type: heading
    attrs:
      textAlign: center
      level: 2
    content:
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'tel:##phone##'
              rel: null
              target: null
              title: null
          -
            type: textColor
            attrs:
              color: orange-500
        text: '##phone##'
teaser_bg: seiten/home/gwrites-headervisual-1.jpg
updated_by: 94ade404-9791-479c-a67d-f792aa146207
updated_at: 1706793698
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: '0.5'
sitemap_changefreq: daily
override_twitter_settings: false
page_title: 'GWriters • Akademische Ghostwriter Agentur'
replicator:
  -
    id: Qd1ld6MY
    columns_replicator:
      -
        id: Toot2GxV
        single_col: false
        grid:
          -
            id: niawatby
            bard:
              -
                type: set
                attrs:
                  id: V1wldAYb
                  values:
                    type: numbers_home
                    grid:
                      -
                        id: EPdkq4Wd
                        zahl: '18.698'
                        beschreibung: 'Kunden seit 2011'
                      -
                        id: UMncx2ir
                        zahl: '4,8/5'
                        beschreibung: 'Trustscore auf Provenexpert'
                      -
                        id: F9sa2WeD
                        zahl: '3.203'
                        beschreibung: 'Akademische Experten'
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
    is_full: false
    type: add_section
    enabled: true
    remove_spacing: false
    border: false
  -
    id: gvPIxIyu
    columns_replicator:
      -
        id: AKPket9U
        single_col: false
        grid:
          -
            id: 7CZuUYL6
            bard:
              -
                type: heading
                attrs:
                  textAlign: center
                  level: 2
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                    text: 'Kundenurteil: "Sehr Gut"'
              -
                type: heading
                attrs:
                  textAlign: center
                  level: 4
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                    text: 'Basierend auf den Bewertungen bei ProvenExpert. Lesen Sie hier eine Auswahl:'
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        id: gWsXmss9
        single_col: false
        grid:
          -
            id: ZWGJI63j
            bard:
              -
                type: set
                attrs:
                  id: ZmPZeoYT
                  values:
                    type: insert_html
                    html: |-
                      <!-- ProvenExpert Bewertungssiegel -->
                      <div id="pewl"></div>
                      <script type="text/javascript" src="https://www.provenexpert.com/widget/landing_gwriters.js?feedback=1&avatar=0&competence=0&style=white" async></script>
                      <link rel="stylesheet" type="text/css" href="https://www.provenexpert.com/css/widget_landing.css" media="screen,print">
                      <!-- ProvenExpert Bewertungssiegel Ende -->
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
    remove_spacing: false
    is_full: true
    bg_toggle: false
    bg_color: '#F9F9F9'
    border: false
    type: add_section
    enabled: true
  -
    id: jhK1jT4U
    columns_replicator:
      -
        id: qvdd1izc
        grid:
          -
            id: dZRYndHZ
            bard:
              -
                type: heading
                attrs:
                  level: 2
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                    text: 'Unsere Leistungen im Überblick'
            show_as_card: false
        type: row
        enabled: true
        single_col: false
        responsive_columns: 0
        columns_per_row: 0
      -
        id: 9NSAk5RI
        grid:
          -
            id: 9dHOXQFJ
            bard:
              -
                type: set
                attrs:
                  id: y1UJe9nz
                  values:
                    type: leistungen_uebersicht_4_spaltig
                    grid:
                      -
                        id: MMCrtzgW
                        image:
                          - logo-startseite/icon-ghostwriting.svg
                        headline: GHOSTWRITING
                        hover_content: 'Lassen Sie Ihre wissenschaftliche Arbeit von erfahrenen Autoren erstellen - schnell, diskret und mehrfach geprüft auf Qualität & Plagiate.'
                        link:
                          - 0328a685-5f37-4f91-bd4b-79c53adaea8d
                      -
                        id: yRAG8kQU
                        image:
                          - logo-startseite/icon-lektorat.svg
                        headline: LEKTORAT
                        hover_content: 'Lassen Sie Ihre Arbeit nicht nur auf sprachliche Fehler korrigieren, sondern auch auf wissenschaftliche & fachliche Korrektheit prüfen.'
                        link:
                          - 659e7e81-6d07-4eea-9ef2-325e72618036
                      -
                        id: lhyUFf1W
                        image:
                          - logo-startseite/icon-plagiat.svg
                        headline: PLAGIATSPRÜFUNG
                        hover_content: 'Schliessen Sie Flüchtigkeitsfehler bei der Zitation oder andere böse Überraschungen aus & beauftragen Sie eine Plagiatsprüfung Ihrer wissenschaftlichen Texte.'
                        link:
                          - fcace45e-9b8e-4a54-a74a-4d1a09a0cfc8
                      -
                        id: anP59cCr
                        image:
                          - logo-startseite/icon-uebersetzung.svg
                        headline: ÜBERSETZUNG
                        hover_content: 'Überwinden Sie sprachliche Barrieren: Unser Team erstellt hochwertige, fachspezifische Übersetzungen von akademischen Texten, Arbeiten, usw.'
                        link:
                          - 7cad538c-ad74-4617-825e-bbac46ebf310
              -
                type: set
                attrs:
                  id: jvWnKZZT
                  values:
                    type: button
                    button_text: 'ALLE LEISTUNGEN IM ÜBERBLICK'
                    color: '#3F3F3F'
                    button_link: 'entry::849140c8-c582-4340-a2bc-446126149c9f'
                    spacing_top: false
              -
                type: paragraph
            show_as_card: false
        type: row
        enabled: true
        single_col: false
        responsive_columns: 0
        columns_per_row: 0
    is_full: false
    type: add_section
    enabled: true
    remove_spacing: false
    border: false
  -
    id: 7o740Xhv
    columns_replicator:
      -
        id: y6o5Luvt
        grid:
          -
            id: ZCqPpuC6
            bard:
              -
                type: heading
                attrs:
                  level: 2
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: inherit
                          hex: '#000'
                      -
                        type: link
                        attrs:
                          href: /presse
                          target: null
                          rel: null
                    text: 'GWriters & Team in der Presse'
            show_as_card: false
        type: row
        enabled: true
        single_col: false
        responsive_columns: 0
        columns_per_row: 0
      -
        id: csVveP5h
        single_col: false
        grid:
          -
            id: ppuA4EPj
            bard:
              -
                type: set
                attrs:
                  id: Dw1bh9ws
                  values:
                    type: logo_list
                    dateien:
                      - presse/logo-brandeins.png
                      - presse/logo-finicial.png
                      - presse/logo-neon.png
                      - presse/logo-waz.png
                      - presse/logo-die-welt.png
                      - presse/logo-businesspunk.png
              -
                type: paragraph
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
    is_full: true
    bg_toggle: false
    bg_color: '#D6D6D6'
    type: add_section
    enabled: true
    remove_spacing: false
    border: false
  -
    id: GxYGcwbh
    columns_replicator:
      -
        id: P4sX3Wft
        single_col: false
        grid:
          -
            id: 7R9mbG3x
            bard:
              -
                type: heading
                attrs:
                  level: 2
                  textAlign: center
                content:
                  -
                    type: text
                    marks: {  }
                    text: 'Mustervorlagen für wissenschaftliche Arbeiten'
              -
                type: set
                attrs:
                  id: yCAoWOuJ
                  values:
                    type: spacer
                    padding-y: 20
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        id: IEdW0aRs
        columns_per_row: 3
        single_col: true
        grid:
          -
            id: 8fysSzJ1
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: M1LtK1Uu
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/facharbeit-schreiben-lassen.svg
                    custom_svg_width: 65
                    link_field: 'entry::2b55bfe7-06df-4e71-86da-152e256904ec'
              -
                type: set
                attrs:
                  id: KTauobhP
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/facharbeit
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Facharbeit schreiben lassen'
              -
                type: set
                attrs:
                  id: Utd4OYKM
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: wn0YkwAm
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: bT7i9M4V
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/hausarbeit-schreiben-lassen.svg
                    custom_svg_width: 65
                    link_field: 'entry::cb0a74d3-ed84-4dad-b3a7-c368aec13800'
              -
                type: set
                attrs:
                  id: 62ErP5s6
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/hausarbeit-schreiben-lassen
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Hausarbeit schreiben lassen'
              -
                type: set
                attrs:
                  id: MEfnTT4r
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: eIMazvoc
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: WieX2T28
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/seminararbeit-schreiben-lassen.svg
                    custom_svg_width: 65
                    link_field: 'entry::2931f444-5e22-4860-8f40-a41821377b93'
              -
                type: set
                attrs:
                  id: CchHmAk1
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/seminararbeit-schreiben-lassen
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Seminararbeit schreiben lassen'
              -
                type: set
                attrs:
                  id: IDVrCT5x
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
      -
        id: lQdldmK2
        columns_per_row: 3
        single_col: true
        grid:
          -
            id: 4Z8URaTL
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: QWvZKjp4
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/bachelorarbeit-schreiben-lassen.svg
                    custom_svg_width: 65
                    link_field: 'entry::68b88fd1-ec03-4ea8-9292-431555e47744'
              -
                type: set
                attrs:
                  id: bXgHqpq8
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/bachelorarbeit-schreiben-lassen
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Bachelorarbeit schreiben lassen'
              -
                type: set
                attrs:
                  id: ccZfGdJG
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: u3zeE8Ar
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: KJ71rPxc
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/masterarbeit-schreiben-lassen.svg
                    custom_svg_width: 65
                    link_field: 'entry::52f5092f-800b-4742-8636-a840b9ab1ddb'
              -
                type: set
                attrs:
                  id: trvfxJXO
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/masterarbeit-schreiben-lassen
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Masterarbeit schreiben lassen'
              -
                type: set
                attrs:
                  id: DbqAYQdc
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: 3oVwIZ1t
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: 0DsOZrv6
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/doktorarbeit-schreiben-lassen.svg
                    custom_svg_width: 65
                    link_field: 'entry::0481728e-d2e2-4b99-9a9e-8e5bca901d14'
              -
                type: set
                attrs:
                  id: XTn1BYP6
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/doktorarbeit
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Doktorarbeit schreiben lassen'
              -
                type: set
                attrs:
                  id: MxuESYTx
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
      -
        id: Hh8QwTcO
        single_col: false
        grid:
          -
            id: yVNfbdej
            bard:
              -
                type: heading
                attrs:
                  level: 2
                  textAlign: center
                content:
                  -
                    type: text
                    marks: {  }
                    text: 'Wichtige akademische Fachbereiche'
              -
                type: set
                attrs:
                  id: uldeaAUI
                  values:
                    type: spacer
                    padding-y: 20
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        id: sueUxEsc
        columns_per_row: 3
        single_col: true
        grid:
          -
            id: lClc9ioB
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: vfUIsEOF
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/ghostwriter-jura.svg
                    custom_svg_width: 65
                    link_field: 'entry::fdd3c9ae-df0d-43d8-a0d3-d8652e6d301c'
              -
                type: set
                attrs:
                  id: qtCxLEKJ
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter/jura
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Jura Ghostwriter'
              -
                type: set
                attrs:
                  id: PWRuVKWd
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: EtbBesAy
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: PoKfSYNJ
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/ghostwriter-bwl.svg
                    custom_svg_width: 65
                    link_field: 'entry::89bfdf0d-d156-4ee5-9575-09e85f7e3655'
              -
                type: set
                attrs:
                  id: tucbfqIN
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter/bwl
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'BWL Ghostwriter'
              -
                type: set
                attrs:
                  id: yMNxj3Ch
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: ElN4hP2J
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: JUzo7KUl
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/ghostwriter-medizin.svg
                    custom_svg_width: 65
                    link_field: 'entry::b850974c-8d2d-4448-b168-3dccef384025'
              -
                type: set
                attrs:
                  id: zGKQPeLq
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter/medizin
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Medizin Ghostwriter'
              -
                type: set
                attrs:
                  id: tP3zMZOY
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
      -
        id: EEVzWQco
        columns_per_row: 3
        single_col: true
        grid:
          -
            id: QKxrVCsa
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: lVnrQPqn
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/ghostwriter-sozialwissenschaften.svg
                    custom_svg_width: 65
                    link_field: 'entry::6edcba2a-9fcc-4d8d-80ea-dbc325dc8332'
              -
                type: set
                attrs:
                  id: km26UXZW
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter/sozialwissenschaften
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Sozialwissenschaften Ghostwriter'
              -
                type: set
                attrs:
                  id: Hz3yO6b9
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: BiE6UV70
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: UgksTpKG
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/ghostwriter-psychologie.svg
                    custom_svg_width: 65
                    link_field: 'entry::839e6791-eebd-4bc8-8975-a278836a9c05'
              -
                type: set
                attrs:
                  id: 0XdyiKWm
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter/psychologie
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Psychologie Ghostwriter'
              -
                type: set
                attrs:
                  id: IMr0YtCH
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
          -
            id: at1gp8NF
            bard:
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: set
                attrs:
                  id: Ku4ClFuC
                  values:
                    type: custom_svg_width
                    svg_file: logo-startseite/ghostwriter-zahnmedizin.svg
                    custom_svg_width: 65
                    link_field: 'entry::780fbc21-db68-45f0-a0c9-bb6dbb99cb8f'
              -
                type: set
                attrs:
                  id: YHaziZa9
                  values:
                    type: spacer
                    padding-y: 10
              -
                type: paragraph
                attrs:
                  textAlign: center
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mehr erfahren:'
                  -
                    type: hardBreak
                    marks:
                      -
                        type: bold
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter/zahnmedizin
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Zahnmedizin Ghostwriter'
              -
                type: set
                attrs:
                  id: tlIgDyI5
                  values:
                    type: spacer
                    padding-y: 15
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
      -
        id: u1egwK22
        single_col: false
        grid:
          -
            id: 4DiflwkU
            bard:
              -
                type: heading
                attrs:
                  textAlign: center
                  level: 2
                content:
                  -
                    type: text
                    text: 'Weitere wichtigen Fachbereiche & Arbeiten'
              -
                type: set
                attrs:
                  id: ljoh1u6i
                  values:
                    type: custom_link_list
                    raster:
                      -
                        id: ljoh22s8
                        text: Fachrichtungen
                        eintraege:
                          -
                            id: ljoh2bsp
                            headline: 'Technische Fachrichtungen'
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/architektur
                                          target: null
                                          rel: null
                                    text: 'Architektur Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/bauingenieurwesen
                                          target: null
                                          rel: null
                                    text: 'Bauingenieurwesen Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/elektrotechnik
                                          target: null
                                          rel: null
                                    text: 'Elektrotechnik Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/maschinenbau
                                          target: null
                                          rel: null
                                    text: 'Maschinenbau Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/informatik
                                          target: null
                                          rel: null
                                    text: 'Informatik Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: '/ghostwriter/informatik#Softwarelokalisierung'
                                          target: null
                                          rel: null
                                    text: 'Softwarelokalisierung Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: '/ghostwriter/biologie#biotechnologie'
                                          target: null
                                          rel: null
                                    text: 'Biotechnologie Ghostwriter'
                                  -
                                    type: text
                                    text: ' '
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/technomathematik
                                          target: null
                                          rel: null
                                    text: 'Ghostwriter Technomathematik'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/ingenieurwissenschaften
                                          target: null
                                          rel: null
                                    text: 'Ghostwriter Ingenieurwissenschaften'
                          -
                            id: ljoh2wxw
                            headline: Naturwissenschaften
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/biologie
                                          target: null
                                          rel: null
                                    text: 'Biologie Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/chemie
                                          target: null
                                          rel: null
                                    text: 'Chemie Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/geologie
                                          target: null
                                          rel: null
                                    text: 'Geologie Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/geowissenschaften
                                          target: null
                                          rel: null
                                    text: 'Geowissenschaften Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/mathematik
                                          target: null
                                          rel: null
                                    text: 'Mathematik Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/agrarwissenschaften
                                          target: null
                                          rel: null
                                    text: 'Ghostwriter Agrarwissenschaften'
                          -
                            id: ljoh3l91
                            headline: Sozialwissenschaften
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/erziehungswissenschaften-ghostwriter
                                          target: null
                                          rel: null
                                    text: 'Erziehungswissenschaften Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/kommunikationswissenschaften
                                          target: null
                                          rel: null
                                    text: 'Kommunikationswissenschaften Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/soziale-arbeit
                                          target: null
                                          rel: null
                                    text: 'Soziale Arbeit Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/soziologie
                                          target: null
                                          rel: null
                                    text: 'Soziologie Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/sprachwissenschaften
                                          target: null
                                          rel: null
                                    text: 'Sprachwissenschaften Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: '/ghostwriter/kommunikationswissenschaften#kommunikationsdesign'
                                          target: null
                                          rel: null
                                    text: 'Ghostwriter Kommunikationsdesign'
                                  -
                                    type: text
                                    text: ' '
                          -
                            id: ljoh3x4b
                            headline: 'Wirtschaftliche Fachbereiche'
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/finanzwissenschaften
                                          target: null
                                          rel: null
                                    text: 'Finanzwissenschaften Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/medienwissenschaften
                                          target: null
                                          rel: null
                                    text: 'Medienwissenschaften Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/marketing
                                          target: null
                                          rel: null
                                    text: 'Marketing Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/wirtschaftsinformatik
                                          target: null
                                          rel: null
                                    text: 'Wirtschaftsinformatik Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/wirtschaftswissenschaften
                                          target: null
                                          rel: null
                                    text: 'Wirtschaftswissenschaften Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/personalmanagement
                                          target: null
                                          rel: null
                                    text: 'Personalmanagement Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: '#Internationale'
                                          target: null
                                          rel: null
                                    text: 'Internationale BWL Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: hardBreak
                          -
                            id: ljoh4b21
                            headline: Geisteswissenschaften
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/germanistik-ghostwriter
                                          target: null
                                          rel: null
                                    text: 'Germanistik Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/anglistik
                                          target: null
                                          rel: null
                                    text: 'Anglistik Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/geschichte
                                          target: null
                                          rel: null
                                    text: 'Geschichte Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/kunst
                                          target: null
                                          rel: null
                                    text: 'Kunst Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/literatur
                                          target: null
                                          rel: null
                                    text: 'Literatur Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/philosophie
                                          target: null
                                          rel: null
                                    text: 'Philosophie Ghostwriter'
                                  -
                                    type: hardBreak
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: '/ghostwriter/kunst#kunstgeschichte'
                                          target: null
                                          rel: null
                                    text: 'Ghostwriter Kunstgeschichte'
                          -
                            id: ljoh4l6j
                            headline: 'Medizinische Fachrichtungen'
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: link
                                        attrs:
                                          href: /ghostwriter/pflegewissenschaften
                                          target: null
                                          rel: null
                                    text: 'Pflegewissenschaften Ghostwriter'
                      -
                        id: ljoh1weq
                        text: Arbeiten
                        eintraege:
                          -
                            id: ljoh5n3s
                            headline: Abschlussarbeiten
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/diplomarbeit
                                          target: null
                                          rel: null
                                    text: 'Diplomarbeit schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/examensarbeit
                                          target: null
                                          rel: null
                                    text: 'Examensarbeit schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/magisterarbeit
                                          target: null
                                          rel: null
                                    text: 'Magisterarbeit schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: '/arbeiten/masterarbeit-schreiben-lassen/#masterthesis-schreiben-lassen'
                                          target: null
                                          rel: null
                                    text: 'Masterthesis schreiben lassen'
                                attrs:
                                  textAlign: start
                          -
                            id: ljoh8o20
                            headline: 'Sonstige Arbeiten'
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/ebook
                                          target: null
                                          rel: null
                                    text: 'eBook schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/lernskript
                                          target: null
                                          rel: null
                                    text: 'Lernskript schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/praesentationen
                                          target: null
                                          rel: null
                                    text: 'Präsentationen erstellen lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/statistische-analysen
                                          target: null
                                          rel: null
                                    text: 'Ghostwriter Statistik'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /expose
                                          target: null
                                          rel: null
                                    text: 'Exposé schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/referat
                                          target: null
                                          rel: null
                                    text: 'Referat schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                attrs:
                                  textAlign: start
                          -
                            id: ljoh9nu0
                            headline: Studienarbeiten
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/essay
                                          target: null
                                          rel: null
                                    text: 'Essay schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/studienarbeit
                                          target: null
                                          rel: null
                                    text: 'Studienarbeit schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/fallstudie
                                          target: null
                                          rel: null
                                    text: 'Fallstudie schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/praktikumsbericht
                                          target: null
                                          rel: null
                                    text: 'Praktikumsbericht schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/projektarbeit
                                          target: null
                                          rel: null
                                    text: 'Projektarbeit schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/summary
                                          target: null
                                          rel: null
                                    text: 'Summary schreiben lassen'
                                  -
                                    type: hardBreak
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: textColor
                                        attrs:
                                          color: 'rgba(255,102,6,var(--tw-text-opacity)) !important'
                                          hex: '#000'
                                      -
                                        type: link
                                        attrs:
                                          href: /arbeiten/protokoll
                                          target: null
                                          rel: null
                                    text: 'Protokoll schreiben lassen'
                                attrs:
                                  textAlign: start
              -
                type: paragraph
                attrs:
                  textAlign: left
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
    remove_spacing: false
    is_full: false
    type: add_section
    enabled: true
    border: false
  -
    id: eQJpoTDa
    columns_replicator:
      -
        id: SkZJlGeJ
        columns_per_row: 2
        grid:
          -
            id: DzcRZAEq
            show_as_card: false
          -
            id: wWsJI7jq
            bard:
              -
                type: heading
                attrs:
                  textAlign: left
                  level: 3
                content:
                  -
                    type: text
                    text: 'GWriters auf einen Blick'
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    text: 'Wenn Sie beim Verfassen Ihrer wissenschaftlichen Arbeit Hilfe benötigen, können akademische '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'https://ghostwriter.de/'
                          rel: null
                          target: null
                          title: null
                    text: Ghostwriter
                  -
                    type: text
                    text: ' und erfahrene Autoren Ihnen helfen. Zögern Sie nicht uns mit einer '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /anfrage
                          rel: null
                          target: _blank
                          title: null
                    text: 'kostenlosen Anfrage'
                  -
                    type: text
                    text: ' zu kontaktieren und uns alle Ihre Wünsche und Anforderungen mitzuteilen, als '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'seriöse '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriting/ghostwriting-agentur
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                    text: 'Ghostwriting Agentur'
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: ' unterstützen wir Sie professionell & diskret!'
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    text: 'Gerne unterstützen wir Sie auf dem Weg zur Fertigstellung Ihrer wissenschaftlichen Arbeit bei der Ideensuche, beim Schreibprozess sowie durch ein Korrekturlesen oder Lektorat. Wir ermöglichen Ihnen den einfachen, schnellen und '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'sicheren Zugang zu über 3000 akademischen Ghostwritern'
                  -
                    type: text
                    text: '. '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Bei allen Dienstleistungen unserer akademischen Ghostwriting Agentur legen wir höchsten Wert auf Diskretion und Qualität.'
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    text: 'Bei GWriters finden Sie sowohl erfahrene '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter
                          rel: null
                          target: null
                          title: null
                    text: Ghostwriter
                  -
                    type: text
                    text: ' und Autoren, als auch '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /korrektorat/korrektor
                          rel: null
                          target: null
                          title: null
                    text: Korrektoren
                  -
                    type: text
                    text: ', Übersetzer und Coaches. Diese unterstützen Sie bei der Korrektur und Bearbeitung sowie der '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Erstellung von akademischen Texten'
                  -
                    type: text
                    text: ' jeder Art, z.B. '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/doktorarbeit
                          rel: null
                          target: null
                          title: null
                    text: Doktorarbeiten
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/magisterarbeit
                          rel: null
                          target: null
                          title: null
                    text: Magisterarbeiten
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/masterarbeit-schreiben-lassen
                          rel: null
                          target: null
                          title: null
                    text: Masterarbeiten
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/bachelorarbeit-schreiben-lassen
                          rel: null
                          target: null
                          title: null
                    text: Bachelorarbeiten
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/diplomarbeit
                          rel: null
                          target: null
                          title: null
                    text: Diplomarbeiten
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/facharbeit
                          rel: null
                          target: null
                          title: null
                    text: Facharbeiten
                  -
                    type: text
                    text: ', Projektarbeiten und '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/hausarbeit-schreiben-lassen
                          rel: null
                          target: null
                          title: null
                    text: Hausarbeiten
                  -
                    type: text
                    text: .
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    text: 'Insbesondere ist unser Team bei GWriters spezialisiert auf folgende Leistungen: '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriting
                          rel: null
                          target: null
                          title: null
                    text: Ghostwriting
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /lektorat
                          rel: null
                          target: null
                          title: null
                    text: Lektorat
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /korrektorat
                          rel: null
                          target: null
                          title: null
                    text: Korrektorat
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen/formatierung
                          rel: null
                          target: null
                          title: null
                    text: Formatierung
                  -
                    type: text
                    text: ' und '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen/uebersetzung
                          rel: null
                          target: null
                          title: null
                    text: Übersetzung
                  -
                    type: text
                    text: ' von akademischen Texten. Unsere Ghostwriter sind akademische Experten mit ausgezeichneten Fachkenntnissen und hervorragender Erfahrung, die häufig selbst als '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Doktoren & Professoren'
                  -
                    type: text
                    text: ' an Universitäten in der Forschung tätig sind. So garantieren wir Ihnen eine qualitativ hochwertige Dienstleistung zu einem fairen Preis.'
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    text: 'Die akademische Ghostwriter Agentur GWriters legt Wert auf höchste Qualität bei jedem Auftrag und prüft sowohl die Qualifikationen unserer akademischen Ghostwriter, als auch jeden einzelnen Text durch ein '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'mehrstufiges Qualitätssicherungssystem'
                  -
                    type: text
                    text: ', dabei sind selbstverständlich ein Lektorat und eine umfassende '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen/plagiatspruefung
                          rel: null
                          target: null
                          title: null
                    text: Plagiatsprüfung
                  -
                    type: text
                    text: ' '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: inklusive
                  -
                    type: text
                    text: '. Jeder Auftrag wird von einem erfahrenen Supervisor überwacht und die gesamte Zusammenarbeit wird von Ihrem persönlichen, jederzeit ansprechbaren Projektkoordinator betreut.'
              -
                type: paragraph
                attrs:
                  textAlign: left
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Rechtliche Hintergründe und Legalität'
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    text: 'Bei der Inanspruchnahme von Ghostwritern im akademischen Umfeld, also beispielsweise bei der Unterstützung von Bachelor- und Masterarbeiten, Dissertationen, Habilitationen sowie anderen akademischen Arbeiten muss zwingend der rechtliche Rahmen eingehalten werden. Dies bedeutet, dass weiterhin eine eigenständige Erstellungen der Arbeiten der Studierenden, Doktoranden oder Habilitanden zum Erreichen des gewünschten Abschlusses stattfinden muss.'
              -
                type: paragraph
                attrs:
                  textAlign: left
                content:
                  -
                    type: text
                    text: 'Da Studierende diese Zusicherung gegenüber Universitäten bindend eingehen, verstehen unsere Texte sich dem Grunde nach nur als Vorlagen und hilfreiche Leitfäden sowie als Unterstützung für das Verfassen einer eigenen Arbeit. GWriters hält sich strikt an europäische Gesetzgebungen. Dadurch steht Ihre Zusammenarbeit mit uns von Anfang an auf einem sicheren Fundament, '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Legalität und Diskretion sind gewährleistet'
                  -
                    type: text
                    text: ' und Plagiatsvorwürfe können ausgeschlossen werden.'
            show_as_card: false
        type: row
        enabled: true
        single_col: false
        responsive_columns: 0
    is_full: true
    bg_toggle: true
    bg_image: seiten/full-scaled.jpg
    bg_image_fixed: false
    type: add_section
    enabled: true
    remove_spacing: false
    border: false
meta_title: 'GWriters • Akademische Ghostwriter aus allen Fachbereichen'
meta_description: 'Ghostwriter & akademische Experten ✔︎ Erfahrung als Doktoren & Professoren ✔︎ 100% Qualität & Vertrauen ✔︎ 18.000 zufriedene Kunden ✔︎ seit 2012!'
image_field: seiten/home/gwrites-headervisual-1.jpg
image_field_xs: seiten/home/gwrites-headervisual-mobile.jpg
teaser_bg_xs: seiten/home/gwrites-headervisual-mobile.jpg
og_title: 'GWriters • Akademische Ghostwriter aus allen Fachbereichen'
og_description: 'Ghostwriter & akademische Experten ✔︎ Erfahrung als Doktoren & Professoren ✔︎ 100% Qualität & Vertrauen ✔︎ 18.000 zufriedene Kunden ✔︎ seit 2012!'
og_image: GWriters-Logo.png
sitemap_active: true
breadcrumbs_active: false
---
