---
id: 2b55bfe7-06df-4e71-86da-152e256904ec
blueprint: pages
title: Facharbeit
teaser:
  -
    type: heading
    attrs:
      level: 1
    content:
      -
        type: text
        marks:
          -
            type: textAlign
            attrs:
              align: center
          -
            type: textColor
            attrs:
              color: orange-500
              hex: '#ff6606'
        text: 'Facharbeit schreiben lassen'
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        marks:
          -
            type: textAlign
            attrs:
              align: center
          -
            type: textColor
            attrs:
              color: 'rgb(68, 68, 68)'
              hex: '#000'
        text: 'Mustervorlagen von akademischen Ghostwritern für Ihre'
      -
        type: text
        marks:
          -
            type: textAlign
            attrs:
              align: center
        text: ' Facharbeit'
  -
    type: set
    attrs:
      values:
        type: spacer
        padding-y: '10'
  -
    type: set
    attrs:
      values:
        type: teaser_icon_columns
        columns:
          -
            icon: logo-startseite/icon-datenschutz-anonymitaet.svg
            headline: 'Datenschutz & 100% Anonymität'
            tooltip_infotext: 'Wir schützen Ihre Daten streng gemäß der Vorschriften von DSGVO/GDPR & garantieren Ihre Anonymität zu 100%.'
          -
            icon: logo-startseite/icon-teillieferung.svg
            headline: 'Teillieferungen & kostenlose Änderungen'
            tooltip_infotext: 'Sie erhalten von uns regelmäßig Teillieferung und wir setzen Ihre Feedback kostenfrei um. So können Sie jederzeit Einfluss auf den Prozess nehmen.'
          -
            icon: logo-startseite/icon-schnelle-lieferung2.svg
            headline: 'Schnelle & pünktliche Lieferung'
            tooltip_infotext: 'Wir respektieren Ihre Deadlines! Sie erhalten Ihre bestellte Mustervorlage zum vereinbarten Datum in lektorierter & finaler Form.'
          -
            icon: logo-startseite/icon-akademische-qualitaet4.svg
            headline: 'Top-Qualität von akademischen Experten'
            tooltip_infotext: 'Ihre Mustervorlage wird von akademischen Experten auf höchstem Niveau erstellt, die oft selbst als Doktoren oder Professoren beschäftigt sind.'
  -
    type: set
    attrs:
      values:
        type: spacer
        padding-y: '15'
  -
    type: set
    attrs:
      values:
        type: button
        button_link: /anfrage
        button_text: 'JETZT KOSTENLOS ANFRAGEN'
        color: '#FF6606'
        spacing_top: false
  -
    type: paragraph
teaser_bg: seiten/arbeiten/header-so-funktionierts.jpg.jpg
replicator:
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: insert_html
                    html: |-
                      <p style="font-size:18px" align="center">
                      Bei GWriters erhalten Sie kompetente Unterstützung bei Ihrer wissenschaftlichen Facharbeit. Bei uns finden Sie exakt den <b>akademischen Ghostwriter für Ihre Facharbeit</b>, der zu Ihren individuellen Anforderungen passt. Sie möchten Ihr akademisches Projekt in sichere Hände geben und eine Ghostwriter Facharbeit als Mustervorlage für Ihre Facharbeit schreiben lassen? Dann wenden Sie sich an eine seriöse Ghostwriting Agentur, die ausschließlich mit erfahrenen Akademikern, Doktoren und Professoren arbeitet.
                      </p>
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '30'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: true
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: false
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Überzeugen Sie sich von der Qualität unseres Ghostwriter'
                  -
                    type: hard_break
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Services anhand unserer Kundenstimmen'
              -
                type: heading
                attrs:
                  level: 4
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Basierend auf den Bewertungen bei ProvenExpert. Lesen Sie hier eine Auswahl:'
              -
                type: set
                attrs:
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
    remove_spacing: false
    is-full: true
    bg-toggle: true
    bg-color: '#F9F9F9'
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
    bg-image: seiten/ghostwriting-agentur/ghostwriting-agentur.jpg
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Facharbeit schreiben - Ghostwriter unterstützen Sie!'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Obwohl für die Facharbeit einige Wochen Bearbeitungszeit vorgesehen sind, kommen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Schüler häufig in Zeitnot'
                  -
                    type: text
                    text: ', weil sie mit der ungewohnten Art zu arbeiten nicht umgehen können bzw. diese sehr aufwendig ist. Außerdem müssen Schüler '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'gleichzeitig für andere Klausuren und Abiturprüfungen lernen'
                  -
                    type: text
                    text: ' - das führt auch zu zeitlichen Problemen. Um bei der Fragestellung ,,Wie schreibe ich eine Facharbeit?“ nicht alleine zu stehen, können Sie sich als Schüler während des Schreibprozesses an einen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'akademischen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: link
                        attrs:
                          href: /ghostwriter
                          target: null
                          rel: null
                    text: Ghostwriter
                  -
                    type: text
                    text: ', '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /lektorat/lektor
                          target: null
                          rel: null
                    text: Lektor
                  -
                    type: text
                    text: ' oder Korrektor von unserem Schreibservice wenden. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Besonders weil die Facharbeit auf das Studium vorbereiten soll und als Übungsmöglichkeit steht, ist es wichtig, '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Schüler zu unterstützen'
                  -
                    type: text
                    text: ', ihr Interesse am Studieren zu wecken und sie nicht unnötig zu demotivieren.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Eine Arbeit über einen spezifischen '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /fachrichtungen
                          target: null
                          rel: null
                    text: Fachbereich
                  -
                    type: text
                    text: ' zu verfassen ist eine gute '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Vorbereitung für das Studium'
                  -
                    type: text
                    text: ', wenn Sie als Studierende weitere wissenschaftliche Arbeiten schreiben müssen, wie Ihre erste '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/hausarbeit-schreiben-lassen
                          target: null
                          rel: null
                    text: Hausarbeit
                  -
                    type: text
                    text: ' oder '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /arbeiten/seminararbeit-schreiben-lassen
                          target: null
                          rel: null
                    text: Seminararbeit
                  -
                    type: text
                    text: '. Jedoch werden die wissenschaftlichen Arbeiten von Schullehrern und Dozenten unterschiedlich bewertet. Ein Schullehrer bewertet eine wissenschaftliche Arbeit oberflächlicher, während ein Professor es strenger bewertet.'
            show_as_card: false
        type: row
        enabled: true
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '20'
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Unsere Leistungen im Überblick'
              -
                type: set
                attrs:
                  values:
                    type: leistungen_uebersicht_4-spaltig
                    grid:
                      -
                        image:
                          - logo-startseite/icon-ghostwriting.svg
                        headline: GHOSTWRITING
                        hover_content: 'Lassen Sie Ihre wissenschaftliche Arbeit von erfahrenen Autoren erstellen - schnell, diskret und mehrfach geprüft auf Qualität & Plagiate.'
                        link:
                          - 0328a685-5f37-4f91-bd4b-79c53adaea8d
                      -
                        image:
                          - logo-startseite/icon-lektorat.svg
                        headline: LEKTORAT
                        hover_content: 'Lassen Sie Ihre Arbeit nicht nur auf sprachliche Fehler, sondern auch auf wissenschaftliche & fachliche Korrektheit prüfen.'
                        link:
                          - 659e7e81-6d07-4eea-9ef2-325e72618036
                      -
                        image:
                          - leistung/icons/search-book.png
                        headline: 'MAXQDA AUSWERTUNG'
                        hover_content: 'Unsere erfahrenen Experten führen Ihre qualitative Inhaltsanalyse mittels einer professionellen MAXQDA Auswertung durch.'
                        link:
                          - dafbcd3b-fd08-4c5b-94be-f2a80c140953
                      -
                        image:
                          - leistung/icons/hat.svg
                        headline: PROMOTIONSBERATUNG
                        hover_content: 'Verlassen Sie sich auf unsere umfassende und seriöse Promotionsberatung und führen Sie Ihre Promotion zum Erfolg.'
                        link: null
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: false
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Fordern Sie jetzt kostenlos Ihr unverbindliches Angebot an!'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Wenn Sie bei Ihrer Facharbeit Unterstützung benötigen, dann können Sie uns gerne sofort eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: link
                        attrs:
                          href: /anfrage
                          target: null
                          rel: null
                    text: 'unverbindliche Anfrage'
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: ' an unseren Schreibservice schicken. Wir melden uns innerhalb weniger Stunden mit einem kostenlosen Angebot bei Ihnen zurück und rufen Sie auch gerne an, falls Sie eine kostenlose telefonische Beratung wünschen.'
            show_as_card: false
        type: row
        enabled: true
      -
        responsive_columns: 1
        columns_per_row: '2'
        single-col: false
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: phone_cta
                    cta_text: 'Fragen? Rufen Sie uns einfach an:'
                    open: 'Mo.-Fr. 9:00-18:00'
            show_as_card: true
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '12'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: "Unsere Preise für medizinisches, Jura- oder BWL-Ghostwriting sowie für andere Fachbereiche beginnen ab\_"
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: '80,- € pro Normseite.'
              -
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT KOSTENLOS ANFRAGEN'
                    button_align: justify-start
                    spacing_top: true
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
            show_as_card: true
        type: row
        enabled: true
    remove_spacing: false
    is-full: true
    bg-toggle: false
    bg-color: '#D6D6D6'
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Welche Arten von Hilfe bei der Facharbeit gibt es?'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Neben der schulischen Hilfe durch einen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Lehrer als Betreuer der Facharbeit'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ', können Sie ein '
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                      -
                        type: link
                        attrs:
                          href: /blog/gwriters-coaching
                          target: null
                          rel: null
                    text: Coaching
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' durch einen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'akademischen Ghostwriter'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' in Anspruch nehmen. Dieser beschäftigt sich hauptberuflich mit wissenschaftlichen Texten und Arbeiten und besitzt zudem zahlreiche Kenntnisse in seinem Fachgebiet. Sie können diesen daher ohne Schwierigkeiten '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'zu jedem Zeitpunkt und Problem des Schreibprozesses beauftragen'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Besonders hilfreich für Sie ist das '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'akademische '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: link
                        attrs:
                          href: /ghostwriting
                          target: null
                          rel: null
                    text: Ghostwriting
                  -
                    type: text
                    text: ', wobei Sie sich von einem erfahrenen Akademiker eine Mustervorlage für Ihre '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Facharbeit schreiben lassen'
                  -
                    type: text
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Auch können wir Sie bereits zu '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Beginn der Texterstellung im Vorbereitungsprozess professionell unterstützen'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: '. '
                  -
                    type: text
                    text: 'Ghostwriter können einen Gliederungsentwurf für Ihre Gliederung schreiben oder bei der Themenwahl eine Liste von Themen erstellen.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Darüber hinaus können wir auch die Literaturrecherche (Fachliteratur), die Strukturierung, die Gliederung und den Aufbau der fachbezogenen Arbeit (Einleitung, Kernteil, Hauptteil, Fazit, Formalitäten) übernehmen. Ebenfalls können Sie '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'bei Zeitnot einen Freelancer zum Coaching bei Ihrer Facharbeit heranziehen'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' und ihn während des gesamten Schreibprozesses unterstützend agieren lassen.'
              -
                type: paragraph
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: false
    bg-toggle: true
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
    bg-image: seiten/arbeiten/hilfmoglichkeiten-ghostwriter.jpg
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: '2'
        single-col: false
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Unsere professionellen Leistungen für Ihre Facharbeit durch Experten'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Selbst wenn Sie als Schüler eigenständig arbeiten, ist es ratsam, die Facharbeit von einer '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: seriösen
                  -
                    type: text
                    text: ' '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Ghostwriting-Agentur '
                  -
                    type: text
                    text: 'Korrekturlesen und lektorieren zu lassen. Denn die Verbesserungen zur formalen und inhaltlichen Gestaltung einer wissenschaftlichen Arbeit haben einen großen Einfluss auf dessen Erfolg. Daher bieten wir Studenten/Schülern  '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'spezialisierte Fachautoren'
                  -
                    type: text
                    text: ', die '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'viele Jahre Erfahrungen'
                  -
                    type: text
                    text: ' in Ihrem individuellen Themenfeld  haben.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Unsere akademischen Ghostwriter sind zertifizierte '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Dozenten, Doktoren und Professoren'
                  -
                    type: text
                    text: '. In unserer Schreibagentur finden Sie für nahezu alle Fachrichtungen professionelle Fachautoren. Diese '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'unterstützen Sie bei verschiedensten Aufgaben'
                  -
                    type: text
                    text: ' im Bereich des wissenschaftlichen Arbeitens'
                  -
                    type: hard_break
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: video
                    video: 'https://youtu.be/OZ8ZEHZkeb0'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: true
    bg-toggle: false
    bg-color: '#F2F2F2'
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Wir unterstützen Sie bei nahezu allen akademischen Fachbereichen & Arbeiten!'
              -
                type: set
                attrs:
                  values:
                    type: link_liste
                    raster:
                      -
                        text: Fachrichtungen
                        eintraege:
                          - a66a5239-e3b6-4216-9286-fbd0c5b5d98b
                          - f6b25bd5-5d78-4383-94fb-61ced5ca56ed
                          - 780fbc21-db68-45f0-a0c9-bb6dbb99cb8f
                          - 1390d32b-dd5d-49d2-85ff-21833c97c8ed
                          - 9944d809-005e-4651-bf9b-5555f0229245
                          - 9232eaf7-a636-467d-9699-5e34e4a7c4a9
                          - a8ea4ded-d453-4bd5-94e7-2249ccf8f0de
                          - 1bcd3fce-dda5-4bdb-9752-44e657ae9eb0
                          - 4476be29-c55a-45b7-ac4a-0e300dfdb8b6
                          - 522e26b9-451d-43a8-a204-2e0f75b87f4b
                          - 45680fad-6f7a-437f-88c2-23e0bc080818
                          - 34f7528d-839e-4ef6-b735-627084dba887
                          - 6289a93f-9eb2-4372-9d3b-b7c28a5cfb5f
                          - d72509d7-bb3a-40dd-a757-3317732e2a57
                          - dc0c7edd-0724-4454-9525-49b8f9065f16
                          - 1363a62f-c0e9-4dba-aa09-d331c4fa8260
                          - a9561621-8360-4ecf-855c-753f4a217c5a
                          - 84a37239-87ee-45fb-b2d1-058a86fecfbb
                          - f501c52c-7217-448e-bb53-d6f84c7e51c8
                          - 28557c4d-68d4-424e-8bfd-c6f2c3306e8a
                          - b850974c-8d2d-4448-b168-3dccef384025
                          - 051a1060-2c31-4edd-af39-c44fe3842526
                          - 21aff10c-582a-440f-9f50-1af525566292
                          - 839e6791-eebd-4bc8-8975-a278836a9c05
                          - f07c0010-40dd-407e-bf32-a1a260b5016b
                          - b8930678-fff6-4d7a-8ae8-056605f303f2
                          - 925eedca-5fbe-4da9-a307-807426feaeeb
                          - 6edcba2a-9fcc-4d8d-80ea-dbc325dc8332
                          - 06fbb3f4-51c2-4f11-832e-9b72a495857d
                          - 89bfdf0d-d156-4ee5-9575-09e85f7e3655
                          - 1de3d76b-f23a-41a8-a629-15b48a07223e
                          - fdd3c9ae-df0d-43d8-a0d3-d8652e6d301c
                          - 1f00cb9f-f41d-4dec-b33f-df5243fa7c17
                      -
                        text: Arbeiten
                        eintraege:
                          - 99cd8e42-b21c-4cea-a162-a9454db2375f
                          - 5659593d-2756-4e9f-a5b3-b391103d9886
                          - 425234fd-eb40-4dab-bb3d-95bbac5948eb
                          - d6ded6ab-aa50-4da5-8d05-d8e5cb8330b6
                          - 134ba799-3362-4166-86f7-bba4e992d7d7
                          - 5c6db140-ee4a-4a88-bf56-4153664421d4
                          - 5c64ba80-4fb2-4d8e-bff7-27f6d912fb22
                          - b6ee03ca-ecab-4749-ade4-45ff821b748d
                          - 68b88fd1-ec03-4ea8-9292-431555e47744
                          - 0481728e-d2e2-4b99-9a9e-8e5bca901d14
                          - cb0a74d3-ed84-4dad-b3a7-c368aec13800
                          - 52f5092f-800b-4742-8636-a840b9ab1ddb
                          - 2931f444-5e22-4860-8f40-a41821377b93
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Weitere professionelle Leistungen'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Neben einem '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /korrektorat
                          target: null
                          rel: null
                    text: Korrekturlesen
                  -
                    type: text
                    text: ' und '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /lektorat
                          target: null
                          rel: null
                    text: Lektorat
                  -
                    type: text
                    text: ' der Facharbeit, bietet Ihnen unsere '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: Ghostwriting-Agentur
                  -
                    type: text
                    text: ' auch als zusätzliche Leistung eine umfassende '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen/plagiatspruefung
                          target: null
                          rel: null
                    text: Plagiatsprüfung
                  -
                    type: text
                    text: '. Diese ist zu empfehlen, da besonders aus mangelnder Erfahrung mit wissenschaftlichen Texten und dem Umgang mit Fachliteratur, ungewollte Fehler passieren können. Um von unserer Unterstützung als Schüler optimal zu profitieren, empfehlen wir Ihnen, dass Sie sich eine Mustervorlage für Ihre '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Facharbeit schreiben lassen'
                  -
                    type: text
                    text: ' und diese Ghostwriter-Facharbeit als Vorlage für Ihre eigene Arbeit nutzen.'
              -
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT UNTERSTÜTZUNG ERHALTEN'
                    color: '#FF6606'
                    button_align: justify-center
                    spacing_top: false
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '40'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: true
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: false
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Was erwartet Sie bei einer Ghostwriter Facharbeit?'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Einen Ghostwriter die Facharbeit schreiben zu lassen ist vollkommen legal. Dabei ist jedoch zu beachten, dass die '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Ghostwriting-Facharbeit lediglich als Vorlage'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' genutzt werden sollte, da sie nicht als eigene Prüfungsleistung ausgegeben werden darf.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Das ausgewählte Thema für eine fachbezogene Arbeit zeigt, dass der Schüler sich in diesem Themenfeld vertiefen möchten. Daher wählen viele Studenten nach dem Abitur die Fachrichtung aus, mit der sie sich schon während der Facharbeit auseinandergesetzt haben.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Die '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Aktualität des Themas'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' ist wichtig für Ihre wissenschaftliche Arbeit, um eine erfolgreiche Abiturnote zu erzielen. Vor dem Schreiben kann ein akademischer Ghostwriter auch bei der Themensuche eine hervorragende Hilfe sein. Denn Ghostwriter kennen den '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'aktuellen Forschungsstand'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ', haben auf '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'alle relevanten Datenbanken Zugriff'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' und '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'alle notwendigen'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Forschungsmaterialien '
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'zur Verfügung.'
            show_as_card: false
        type: row
        enabled: true
      -
        responsive_columns: 1
        columns_per_row: '2'
        single-col: false
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: example_work
                    ex_img_right: false
                    ex_image: seiten/beispielarbeiten-3.JPG
                    ex_title: 'Sexuelle und Reproduktive Rechte'
                    ex_fachbereich:
                      - f07c0010-40dd-407e-bf32-a1a260b5016b
                    ex_type: Facharbeit
                    ex_pages: '10'
                    ex_zitation: 'Deutsche Zitierweise (Zitieren mit Fußnoten)'
                    ex_button_link: 'entry::f206afbb-bc01-48a0-bedb-ac88f20e776e'
                    ex_button_text: WEITERLESEN
                    ex_color: '#FF6606'
                    ex_spacing_top: false
                    ex_button_align: justify-start
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '20'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Über den Autor'
              -
                type: set
                attrs:
                  values:
                    type: floating-img
                    dateien:
                      - team/wittkamp_gwriters_ghostwriter_rund.png
                    img_size: w-1/2
                    float: mx-auto
                    image_options:
                      - no_upscale
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Diplom Betriebswirt Marcus Wittkamp'
                  -
                    type: hard_break
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Senior Ghostwriter & Supervisor'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: true
    bg-toggle: false
    bg-color: '#F7F7F7'
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(68,68,68,var(--tw-text-opacity))'
                          hex: '#000'
                    text: "Mustervorlage für Facharbeit\_schreiben\_lassen\_– Wie funktioniert die Kooperation mit einem Ghostwriter?"
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
              -
                type: set
                attrs:
                  values:
                    type: img-text-ce
                    bild:
                      - seiten/arbeiten/anfrage.png
                    vertical_alignment-img: self-center
                    text: |-
                      ### Kostenlose Anfrage
                      Senden Sie uns eine kostenlose Anfrage. Wir melden uns innerhalb kürzester Zeit mit einem unverbindlichen Angbeot zurück. Der Auftrag startet, nach dem Sie und Angebot angenommen haben. Je nach Komplexität des Themas, werden mehrere **Teillieferungen** geplant.
                    vertical_alignment-text: self-center
                    reverse-columns: bild-text
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '1'
              -
                type: set
                attrs:
                  values:
                    type: img-text-ce
                    bild:
                      - logo-startseite/icon-anonymitat.png
                    vertical_alignment-img: self-center
                    text: |-
                      ### Persönlicher Projektmanager
                      Während der Erstellung Ihrer Mustervorlage durch einen erfahrenen Ghostwriter läuft die **gesamte Kommunikation anonym** in schriftlicher oder telefonischer Form ab. Da der Datenschutz für unsere Agentur besonders wichtig ist, wird Ihre Anonymität strengstens geschützt und nach Auftragsabschluss und der Übermittlung der wissenschaftlichen Ergebnisse gelöscht.
                    vertical_alignment-text: self-center
                    reverse-columns: text-bild
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '1'
              -
                type: set
                attrs:
                  values:
                    type: img-text-ce
                    bild:
                      - seiten/arbeiten/feedbackumsetzen.png
                    vertical_alignment-img: self-center
                    text: |-
                      ### Kostenlose Änderungen 
                      Ihre Arbeit wird nach der Fertigstellung von einem unabhängigen Autor **lektoriert** und **korrigiert**. Abschließend wird eine **Plagiatskontrolle** durchgeführt, um die Arbeit plagiatfrei zu halten. Nach dem Plagiatstest erhalten Sie eine Quellenauswertung zu Ihrem Text, die genau zeigt, ob alle Textteile zitiert worden sind.
                    vertical_alignment-text: self-center
                    reverse-columns: bild-text
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '1'
              -
                type: set
                attrs:
                  values:
                    type: img-text-ce
                    bild:
                      - logo-startseite/icon-skills-ghostwriter-1641576328.png
                    vertical_alignment-img: self-center
                    text: |-
                      ### Kompetente & erfahrene Ghostwriter
                      Alle akademischen Ghostwriter unserer Ghostwriting-Agentur weisen hervorragende **fachliche Kompetenzen** und **methodische Erfahrung** im Hinblick auf wissenschaftliches Arbeiten und Auftragsschreiben nach Kundenvorgaben vor.
                    vertical_alignment-text: self-center
                    reverse-columns: text-bild
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '20'
              -
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT KOSTENLOS ANFRAGEN!'
                    color: '#FF6606'
                    button_align: justify-center
                    spacing_top: false
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: false
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Ausgewählte Experten aus unserer Agentur'
            show_as_card: false
        type: row
        enabled: true
      -
        responsive_columns: 1
        columns_per_row: '3'
        single-col: false
        grid:
          -
            bard:
              -
                type: paragraph
              -
                type: set
                attrs:
                  values:
                    type: floating-img
                    dateien:
                      - team/svetlana_patrikeewa_ghostwriter_gwriters.png
                    img_size: w-1/2
                    float: mx-auto
                    image_options:
                      - no_upscale
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(68,68,68,var(--tw-text-opacity))'
                          hex: '#000'
                    text: 'M. A. Swetlana Patrikeewa'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(68,68,68,var(--tw-text-opacity))'
                          hex: '#000'
                    text: 'Senior Ghostwriterin'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '15'
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating-img
                    dateien:
                      - team/kahl_gwriters_ghostwriter-1.png
                    img_size: w-1/2
                    float: mx-auto
                    image_options:
                      - no_upscale
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(68,68,68,var(--tw-text-opacity))'
                          hex: '#000'
                    text: 'Susanne Kahl'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(68,68,68,var(--tw-text-opacity))'
                          hex: '#000'
                    text: 'Senior Ghostwriterin'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '15'
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating-img
                    dateien:
                      - team/wittkamp_gwriters_ghostwriter_rund.png
                    img_size: w-1/2
                    float: mx-auto
                    image_options:
                      - no_upscale
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(68,68,68,var(--tw-text-opacity))'
                          hex: '#000'
                    text: 'Dipl.-Betriebswirt Marcus Wittkamp'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(68,68,68,var(--tw-text-opacity))'
                          hex: '#000'
                    text: 'Supervisor & Senior Ghostwriter'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '15'
            show_as_card: false
        type: row
        enabled: true
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: false
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '30'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: true
    is-full: true
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Zur Facharbeit'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Die Facharbeit ist für viele die'
                  -
                    type: text
                    text: ' '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'erste Etappe in Richtung wissenschaftlicher Arbeiten'
                  -
                    type: text
                    text: '. Hier müssen Sie als Schüler erstmals zeigen, dass Sie, nach vorheriger Anleitung durch den Lehrer, eigenständig eine schriftliche Ausarbeitung zu einem Thema anfertigen können. Die Themenwahl wird in Zusammenarbeit m'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'it einem Lehrer erarbeitet.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Facharbeiten werden in der reformierten Oberstufe verfasst und sollen ber'
                  -
                    type: text
                    text: 'eits einigen Anforderungen der Universität entsprechen.'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' Unterstützung wird dabei seitens der Schule geboten durch den Lehrer bzw. Betreuer, zum anderen durch einen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'akademischen Freelancer, der als Lektor oder Korrektor die Facharbeit optimiert'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: .
            show_as_card: true
        type: row
        enabled: true
    remove_spacing: false
    is-full: true
    bg-toggle: true
    bg-image: seiten/arbeiten/seminararbeit/seminararbeit-plan.jpg
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Wie schreibt man eine Facharbeit?'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Wie eine Facharbeit angefertigt werden soll, ist in Deutschland nicht einheitlich geregelt. Da Bildungspolitik im Verantwortungsbereich der Länder liegt, gibt es zur Facharbeit unterschiedliche Anforderungen in Bezug auf Niveau, Umfang und Abgabezeitpunkt. Jedoch gibt es kaum gymnasiale Schulen, die von den Schülern keine Facharbeit schreiben lassen.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Allgemein lässt sich sagen, dass die Facharbeit in der Oberstufe angefertigt werden sollte, sie kann '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'eine Klausur im jeweiligen Fach ersetzen'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ', additional sein oder zu besonderen Leistungen in die Abiturnote einfließen. Der Schüler wählt zumeist ein Fach aus, in dem er die Arbeit schreiben möchte, dabei gibt es zur Auswahl verschiedene Ansätze.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Zum Beispiel sucht der Schüler ein Fach aus, in welchem er gewöhnlich besonders schlecht abschneidet um seine Note gezielt zu verbessern, er kann aber auch ein Fachgebiet wählen, welches ihm besonders liegt um seine Kenntnisse in einem'
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' speziellen Interessengebiet zu vertiefen'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Bei der letzten Variante wird die '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Themenfindung der Facharbeit'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' meist erleichtert, da durch das vorhandene Interesse auch oft schon Quellen zum Thema bekannt sind. Sowohl in den '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: Fußnoten
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' als auch im '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: Literaturverzeichnis
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' sollten die '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: Zitierregeln
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ' beachtet werden, um die richtige Zitierweise anzuwenden. Großer Wert wird darauf gelegt, dass die Facharbeit nicht einfach abgeschrieben wurde. Häufig überprüfen die Schulen dies auch mit einer '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: Plagiatsprüfung
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: ', die auch an Hochschulen zum Einsatz kommt.'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Leitfaden für eine Facharbeit'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Der Umfang einer Facharbeit variiert, liegt aber durchschnittlich bei '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: '7-15 einseitig beschriebenen DIN-A4 Seiten'
                  -
                    type: text
                    text: ', ein Deckblatt und ein Inhaltsverzeichnis müssen meist auch angefertigt werden und gewisse Formalismen in den Seitenangaben eingehalten werden. Manchmal veröffentlichen Schulen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Muster einer Facharbeit um ihre Schüler zu unterstützen'
                  -
                    type: text
                    text: '. Ist diese nicht vorhanden, können Sie als Schüler einen Ghostwriter von einer seriösen Schreibagentur ihre Facharbeit schreiben lassen und diese '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: Ghostwriting-Facharbeit
                  -
                    type: text
                    text: ' als Orientierungshilfe nutzen.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Zwar sind die Formalie von der jeweiligen Schule, oftmals auch vom Lehrer abhängig, es haben sich jedoch einige als gängig erwiesen:'
            show_as_card: true
        type: row
        enabled: true
    remove_spacing: false
    is-full: true
    bg-toggle: false
    bg-image: seiten/arbeiten/seminararbeit/seminararbeit_schreiben_lassen_professoren_doktoren_.jpg
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
    bg-color: '#F9F9F9'
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: '2'
        single-col: true
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Gliederungsebenen der Fachrarbeit:'
              -
                type: bullet_list
                content:
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/deckblatt-vorlage
                                  target: null
                                  rel: null
                            text: Deckblatt
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/inhaltsverzeichnis-vorlage
                                  target: null
                                  rel: null
                            text: 'Inhaltsverzeichnis (Kapitel, Unterkapitel)'
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/abbildungsverzeichnis
                                  target: null
                                  rel: null
                            text: Abbildungs
                          -
                            type: text
                            marks:
                              -
                                type: textColor
                                attrs:
                                  color: '#000!important'
                                  hex: '#000'
                            text: '- und '
                          -
                            type: text
                            marks:
                              -
                                type: textColor
                                attrs:
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/tabellenverzeichnis-beispiel
                                  target: null
                                  rel: null
                            text: Tabellenverzeichnis
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/abkuerzungsverzeichnis
                                  target: null
                                  rel: null
                            text: Abkürzungsverzeichnis
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /blog/bachelorarbeit-einleitung
                                  target: null
                                  rel: null
                            text: Einleitung
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                            text: Hauptteil
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                            text: Schlussteil/Fazit
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/literaturverzeichnis-beispiel
                                  target: null
                                  rel: null
                            text: Literaturverzeichnis
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/anhangsverzeichnis
                                  target: null
                                  rel: null
                            text: Anhang
                  -
                    type: list_item
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
                                  color: '#000!important'
                                  hex: '#000'
                              -
                                type: link
                                attrs:
                                  href: /gwriters-akademie/eidesstattliche-erklaerung-muster
                                  target: null
                                  rel: null
                            text: 'Eidesstattliche Erklärung/ Eigenständigkeitserklärung'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '48'
              -
                type: paragraph
            show_as_card: true
          -
            bard:
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Formatierungsrichtlinien einer Facharbeit'
              -
                type: bullet_list
                content:
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Schriftart: Times New Roman (oder Arial Größe 11)'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Schriftgröße und –Art im Fließtext: 12 Pt, Blocksatz'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Zeilenabstand: 1,5'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Seitenrand: oben und unten je 2,5cm, links 5cm, rechts 1,5cm'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Seitenzahlen: unten zentriert/rechts'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Kapitelüberschriften: 14 Pt Fettdruck'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Unterkapitelüberschriften: 12 Pt Fettdruck'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Fußnotentext: 10 Pt Blocksatz, 1,0-zeilig, Fußnoten werden hoch gestellt'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Nummerierung: alle Seiten nummeriert, außer Deckblatt, Inhaltsverzeichnis, Literaturverzeichnis und Anhang'
            show_as_card: true
        type: row
        enabled: true
    remove_spacing: false
    is-full: true
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
    bg-color: '#F9F9F9'
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: true
        grid:
          -
            bard:
              -
                type: blockquote
                content:
                  -
                    type: heading
                    attrs:
                      level: 3
                    content:
                      -
                        type: text
                        text: Disclaimer
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        marks:
                          -
                            type: textColor
                            attrs:
                              color: '#000!important'
                              hex: '#000'
                        text: "Der guten Ordnung halber weisen wir Sie darauf hin, dass jegliche von uns erstellten Ausarbeitungen auf der Annahme basieren, dass Sie eine Lösungsskizze für interne Zwecke wünschen. Die weitere Verwendung ist allenfalls zur eigenen gedanklichen Auseinandersetzung gedacht, nicht aber für die Übernahme als eigenes Werk.\_"
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: 1
        single-col: false
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Einige unserer Blogartikel zur Facharbeit & Mustervorlage für Facharbeit schreiben lassen'
              -
                type: set
                attrs:
                  values:
                    type: blog_entries
                    entries:
                      - 4d7354a8-4ed6-4ec0-8433-6f8921b4edd8
                      - 5187b076-6402-4ce5-a509-9b507d9f773c
                      - 4148325d-d0d4-4055-9104-c4cb39f5a282
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '40'
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                    text: 'Nützliche Weblinks & Referenzen'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: link
                        attrs:
                          href: 'https://wiki.zum.de/wiki/Facharbeiten'
                          target: _blank
                          rel: 'noopener noreferrer nofollow'
                    text: 'Facharbeiten - ZUM Wiki'
                  -
                    type: hard_break
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: link
                        attrs:
                          href: 'https://abi.unicum.de/schule-a-z/lernen/eine-facharbeit-schreiben'
                          target: _blank
                          rel: 'noopener noreferrer nofollow'
                    text: 'Facharbeit schreiben - Hilfe zur Planung und Erstellung'
                  -
                    type: hard_break
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: link
                        attrs:
                          href: 'https://www.studienkreis.de/deutsch/facharbeit-schreiben-anleitung-tipps/'
                          target: _blank
                          rel: 'noopener noreferrer nofollow'
                    text: 'Facharbeit schreiben - Anleitung und Tipps'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: center
                      -
                        type: link
                        attrs:
                          href: /wiki
                          target: null
                          rel: null
                    text: '< zurück zur Wiki Übersicht'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '40'
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: true
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
parent: d118c7b2-141d-4bac-972d-c1502381a340
updated_by: 94ade404-9791-479c-a67d-f792aa146207
updated_at: 1646930794
template: default
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: '0.5'
sitemap_changefreq: daily
override_twitter_settings: false
override_twitter_card_settings: false
twitter_card_type_page: summary
meta_title: 'Facharbeit schreiben lassen • Mustervorlage von GWriters'
meta_description: 'Mustervorlage für Facharbeit schreiben lassen – schnell, diskret und mehrfach geprüft auf Qualität & Plagiate.'
og_title: 'Facharbeit schreiben lassen • Mustervorlage von GWriters'
og_description: 'Mustervorlage für Facharbeit schreiben lassen – schnell, diskret und mehrfach geprüft auf Qualität & Plagiate.'
og_image: GWriters-Logo.png
arbeitsgruppe: a_studienarbeiten
schema_objects: |-
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Welche Qualifikationen hat mein akademischer Ghostwriter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir garantieren, dass es sich bei Ihrem Ghostwriter um einen absoluten Experten in Ihrem Fachgebiet handelt. In unserer Agentur setzen wir mindestens einen Masterabschluss voraus. Bei vielen unserer Ghostwriter handelt es sich aber um Doktoren und auch Professoren, die selbst noch in der Wissenschaft aktiv sind."
      }
    },{
      "@type": "Question",
      "name": "Wie wird bei GWriters meine Anonymität sichergestellt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durch Ihren persönlichen Projektmanager wird Ihre Anonymität zu jeder Zeit gesichert. Niemand außer diesem erfährt Ihren Namen. Er übernimmt die gesamte Kommunikation zwischen Ihnen und Ihrem Ghostwriter und organisiert anonyme Telefonkonferenzen. Darüber hinaus schützen wir alle Ihre Daten gemäß der DSGVO/GDPR und löschen alle auftragsrelevanten Details nach Abschluss Ihres Projekts."
      }
    },{
      "@type": "Question",
      "name": "Was kostet eine Mustervorlage für meine Hausarbeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Mustervorlage für eine 10-seitige Hausarbeit erhalten Sie bereits ab 800 €. Die Preise pro Seite können aber noch variieren, abhängig vom Anspruch des Projekts und etwaiger empirischer Analysen."
      }
    },{
      "@type": "Question",
      "name": "Darf ich die erstellte Mustervorlage als eigene Hausarbeit abgeben?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der guten Ordnung halber weisen wir Sie darauf hin, dass jegliche von uns erstellten Ausarbeitungen auf der Annahme basieren, dass Sie eine Lösungsskizze für interne Zwecke wünschen. Die weitere Verwendung ist allenfalls zur eigenen gedanklichen Auseinandersetzung gedacht, nicht aber für die Übernahme als eigene Leistungen. Eine Mustervorlagen für eine Hausarbeit schreiben zu lassen ist also hinsichtlich der Legalität unproblematisch."
      }
    }]
  }
  </script>
sitemap_active: true
---
