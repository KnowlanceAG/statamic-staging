---
id: cb0a74d3-ed84-4dad-b3a7-c368aec13800
blueprint: pages
title: Hausarbeit
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
        text: 'Hausarbeit schreiben lassen'
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
              align: center
        text: 'Mustervorlage '
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
        text: 'von akademischen Ghostwritern für Ihre Hausarbeit'
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
            headline: 'Datenschutz &amp; 100% Anonymität'
            tooltip_infotext: 'Wir schützen Ihre Daten streng gemäß der Vorschriften von DSGVO/GDPR &amp; garantieren Ihre Anonymität zu 100%.'
          -
            icon: logo-startseite/icon-teillieferung.svg
            headline: 'Teillieferungen &amp; kostenlose Änderungen'
            tooltip_infotext: 'Sie erhalten von uns regelmäßig Teillieferung und wir setzen Ihre Feedback kostenfrei um. So können Sie jederzeit Einfluss auf den Prozess nehmen.'
          -
            icon: logo-startseite/icon-schnelle-lieferung2.svg
            headline: 'Schnelle &amp; pünktliche Lieferung'
            tooltip_infotext: 'Wir respektieren Ihre Deadlines! Sie erhalten Ihre bestellte Mustervorlage zum vereinbarten Datum in lektorierter &amp; finaler Form.'
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
    type: set
    attrs:
      values:
        type: spacer
        padding-y: '20'
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
        text: 'Oder rufen Sie uns einfach an, wir beraten Sie gerne & kostenlos:'
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
              color: orange-500
              hex: '#ff6606'
          -
            type: link
            attrs:
              href: 'tel:+49 (0) 30 809 332 339'
              target: null
              rel: null
        text: '+49 (0) 30 809 332 339'
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
                      Bei GWriters erhalten Sie kompetente Unterstützung bei Ihrer wissenschaftlichen Hausarbeit. Bei uns finden Sie exakt den <b>akademischen Ghostwriter für Ihre Hausarbeit</b>, der zu Ihren individuellen Anforderungen passt. Sie möchten Ihr akademisches Projekt in sichere Hände geben und eine GHostwriter Hausarbeit als Mustervorlage für Ihre Hausarbeit schreiben lassen? Dann wenden Sie sich an eine seriöse Ghostwriting Agentur, die ausschließlich mit erfahrenen Akademikern, Doktoren und Professoren arbeitet.
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
                type: paragraph
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
                    text: 'Unsere Ghostwriter unterstützen Sie beim Schreiben Ihrer Hausarbeit'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Sind sie mit der Studien- und Privatplanung regelmäßig überfordert? Möchten Sie sich als Student eon einem erfahrenen Autor eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mustervorlage für ihre wissenschaftliche Hausarbeit schreiben lassen'
                  -
                    type: text
                    text: '? Bereits zu Beginn Ihrer wissenschaftlichen Arbeit, bei der Strukturierung, bestehend aus dem Aufbau einer Hausarbeit, der Gliederung oder dem Exposé, können Sie sich durch '
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
                    text: ' Hilfe holen indem Sie eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mustervorlage für Ihre Hausarbeit kaufen'
                  -
                    type: text
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Zudem können Sie einen '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter
                          target: null
                          rel: null
                    text: Ghostwriter
                  -
                    type: text
                    text: ' (dt.: Geisterschreiber) zur '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Betreuung der Hausarbeit einzusetzen'
                  -
                    type: text
                    text: ' und ihn während des gesamten Prozesses bei Ihren Aufgaben unterstützend agieren lassen. Selbst wenn Sie sich dazu entscheiden eigenständig zu arbeiten, ist es ratsam, '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'die Hausarbeit Korrekturlesen zu lassen'
                  -
                    type: text
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Neben dem Korrektorat und Lektorat der wissenschaftlichen Arbeit, können Sie auch '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'eine umfassende Plagiatsprüfung von Ihrem Text und Literaturverzeichnis '
                  -
                    type: text
                    text: 'mit Plagiatssoftware in Auftrag geben. Wir nutzen hierfür die renommierte Software '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Turnitin '
                  -
                    type: text
                    text: 'und überprüfen damit die Einhaltung aller Vorgaben an Quellen und die Zitation'
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Eine professionelle Unterstützung durch einen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Hausarbeit Ghostwriter'
                  -
                    type: text
                    text: ' empfehlen wir Ihnen besonders zum Studienbeginn. Auch wenn eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Hilfestellung bei der Hausarbeit'
                  -
                    type: text
                    text: ' seitens der Betreuer, Professoren und Universitäten fehlt und der Abgabetermin näher rückt, macht die Unterstützung durch ein Schreibbüro Sinn.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Mit unseren Dienstleistungen können Sie Flüchtigkeitsfehler beim Schreiben Ihres Textes oder im Umgang mit wissenschaftlichen Quellen aufgrund mangelnder Erfahrung vermeiden.'
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
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Unsere Garantien für Sie'
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
        columns_per_row: '4'
        single-col: true
        grid:
          -
            bard:
              -
                type: paragraph
              -
                type: set
                attrs:
                  values:
                    type: custom-svg-width
                    svg_file: leistung/icons/security.svg
                    custom-svg-width: '65'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Datenschutz & 100% Anonymität'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Wir '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'garantieren Ihre Anonymität '
                  -
                    type: text
                    text: 'zu 100% und schützen Ihren Daten gemäß GDPR/DSGVO. Auch eine anonyme Zahlung über Freunde oder Verwandte ist möglich.'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
            show_as_card: false
          -
            bard:
              -
                type: paragraph
              -
                type: set
                attrs:
                  values:
                    type: custom-svg-width
                    svg_file: leistung/icons/icon-kostenloses-feedback.svg
                    custom-svg-width: '65'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Kostenlose Änderung nach Ihrem Feedback'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Wir passen Ihre Ausarbeitung gemäß Ihrer Wünsche und Anmerkungen ohne lange Diskussionen an - und zwar unbegrenzt, bis '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Sie zufrieden sind!'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
            show_as_card: false
          -
            bard:
              -
                type: paragraph
              -
                type: set
                attrs:
                  values:
                    type: custom-svg-width
                    svg_file: leistung/icons/stopwatch.svg
                    custom-svg-width: '65'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
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
                          align: start
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'Schnelle & pünktliche Lieferung'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Wir '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'garantieren die pünktliche Lieferung'
                  -
                    type: text
                    text: ' Ihrer Ausarbeitung! Sie erhalten Ihre bestellte Mustervorlage zum vereinbarten Datum in lektorierter & finaler Form.'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
            show_as_card: false
          -
            bard:
              -
                type: paragraph
              -
                type: set
                attrs:
                  values:
                    type: custom-svg-width
                    svg_file: leistung/icons/magistrate.svg
                    custom-svg-width: '65'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '10'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Top-Qualität von Experten'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Akademischen Experten die sonst als '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Doktoren & Professoren'
                  -
                    type: text
                    text: ' arbeiten, erstellen Ihre Mustervorlage. So garantieren wir die Qualität Ihrer Ausarbeitung.'
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
                    text: 'Wenn Sie Unterstützung durch einen Hausarbeit Ghostwriter benötigen, dann können Sie unseren professionellen Schreibservice sofort anfordern und uns eine '
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
                    text: ' schicken. Wir melden uns innerhalb weniger Stunden mit einem kostenlosen Angebot bei Ihnen zurück und rufen Sie auch gerne an, falls Sie eine kostenlose telefonische Beratung zu Ihren Vorteilen bei GWriters wünschen.'
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
                    text: 'Akademische Experten schreiben Ihre Hausarbeit'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'GWriters bietet Ihnen einen professionellen Schreibservice durch erfahrene akademische Ghostwriter. Dank ihrer weitreichenden Erfahrung und Kompetenz können unsere Experten Sie in jeder Projektphase effektiv beim '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Schreiben Ihrer Hausarbeit unterstützen'
                  -
                    type: text
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Bei den Ghostwritern von GWriters handelt es sich um erfahrene Akademiker, die häufig selbst als '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Forscher, Doktoren und Professoren aktiv'
                  -
                    type: text
                    text: ' sind. Sie profitieren daher von deren Fachwissen auf dem neuesten Stand der Forschung.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Von diesen können Sie sich nicht nur eine Mustervorlage für Ihre Hausarbeit schreiben lassen, sondern sich auch bei der Themenfindung oder der Entwicklung der Forschungsfrage beraten lassen oder Ihr Literaturverzeichnis überprüfen lassen. Im Fachbereich Jura übernehmen wir bspw. auch die Korrektur von Inhalt und Argumentationsstruktur.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Darüber hinaus schützen wir als Ghostwriting Agentur verlässlich Ihre Anonymität während der Erstellung der Mustervorlage für Ihre Hausarbeit. So stehen Sie jederzeit in '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'anonymen Kontakt zu Ihrem Ghostwriter'
                  -
                    type: text
                    text: ' und behalten die volle Kontrolle über Ihren Auftrag.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Weil wir um Ihre hohen Anforderungen wissen, unterliegt jede Leistung die Sie von unseren Ghostwritern erhalten der GWriters Qualitätsgarantie. Ob Sie sich durch ein Lektorat, ein Korrektorat oder eine Plagiatsprüfung unterstützen lassen wollen oder eine Mustervorlage für Ihre Hausarbeit kaufen möchten - jede Lieferung wird unabhängig vom Umfang von Anfang bis Ende durch einen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'erfahrenen Supervisor auf Qualität geprüft'
                  -
                    type: text
                    text: .
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
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgba(0,0,0,var(--tw-text-opacity)) !important'
                          hex: '#000'
                    text: 'Warum sollten Sie sich unterstützen lassen?'
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
                                type: bold
                            text: 'Wir lösen Schreibblockaden'
                          -
                            type: text
                            text: ' bei fehlender Unterstützung durch Betreuer & Professoren sowie knappen Deadlines'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Wir lösen Ihre Zeitprobleme mit Ihrer '
                          -
                            type: text
                            marks:
                              -
                                type: bold
                            text: Hausarbeit
                          -
                            type: text
                            text: ' während der Klausurphase und bei mehreren Abgaben, so vermeiden wir Stress und Druck bei Ihnen'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Mit den relevanten Datenbanken, Quellen und wissenschaftlichen Arbeitsmethoden '
                          -
                            type: text
                            marks:
                              -
                                type: bold
                            text: 'helfen wir auch Studienanfängern effektiv und vermeiden Fehler'
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
                                type: bold
                            text: 'Akademische Ghostwriter'
                          -
                            type: text
                            text: ' helfen nicht nur im Schreibprozess, sondern auch bei der '
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /blog/literaturrecherche-datenbanken-quellen
                                  target: null
                                  rel: null
                            text: Literaturrecherche
                          -
                            type: text
                            text: ', der Forschungsfrage oder geben Tipps und Erklärungen zur Prüfung Ihrer Argumentation.'
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
                    video: 'https://youtu.be/BFHgSZP9rCE'
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
                    text: "Mustervorlage für Hausarbeit\_schreiben\_lassen\_– Wie funktioniert die Kooperation mit einem Ghostwriter?"
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
                      Senden Sie uns einfach & schnell über unser Bestellformular eine kostenlose Anfrage. Von unserer Schreibagentur erhalten Sie innerhalb weniger Stunden ein **unverbindliches Leistungsangebot und eine individuelle Beratung** zu Ihrem Auftrag. Wir beginnen sofort nach Ihrer Zusage und einer Anzahlung.
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
                      - seiten/arbeiten/termineplanen.png
                    vertical_alignment-img: self-center
                    text: |-
                      ### Projektmanager & Teillieferungen
                      Für Sie werden einzelne Teillieferungen bzw. Termine geplant. Diese Teillieferungen dienen dazu, Sie über den **aktuellen Stand der Arbeit** zu informieren und Ihre Feedbacks kostenlos umzusetzen. Je nach Komplexität des Themas werden mehrere Fachautoren für die Arbeit eingesetzt.
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
                      - seiten/arbeiten/lieferung-der-mustervorlage.png
                    vertical_alignment-img: self-center
                    text: |-
                      ### Abschlusslieferung & Qualitätsgarantie
                      Sie erhalten die fertige Mustervorlage zu Ihrer Hausarbeit zum vereinbarten Termin. Vorab wird diese von einem **unabhängigen Lektor aus Ihrem Fachbereich korrektur gelesen**. Hier werden Verbesserungen an Sprachstil, Satzbau, Fachbegriffen und Inhalt vorgenommen. Unser bewährtes 4-Augen-Prinzip ist selbstverständlich im Preis inklusive. Darüber hinaus wird Ihre Hausarbeit mit der Plagiatserkennungssoftware **Turnitin** auf Plagiate geprüft.
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
                      - seiten/arbeiten/feedbackumsetzen.png
                    vertical_alignment-img: self-center
                    text: |-
                      ### Kostenlose Änderungswünsche
                      Bei der Endlieferung erhalten Sie eine hochqualitative und von Experten auf Qualität geprüfte Musterarbeit als PDF Datei zur Unterstützung bei der Erstellung Ihrer eigenen wissenschaftlichen Hausarbeit. Falls Sie hierzu Änderungswünsche haben, setzen wir diese auch nach dem Abgabetermin selbstverständlich **kostenfrei** um.
                    vertical_alignment-text: self-center
                    reverse-columns: text-bild
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Wenn Sie bei Ihrer Bachelorarbeit Hilfe oder wissenschaftliche Texterstellung benötigen, wenden Sie sich gerne an unser Schreibbüro. Über '
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
                    text: 'unser Kontaktformular'
                  -
                    type: text
                    text: ' erhalten Sie jederzeit eine kostenlose Beratung. Möchten Sie ein Coaching bestellen oder eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Mustervorlage für Ihre Seminararbeit schreiben lassen'
                  -
                    type: text
                    text: '? Unsere Kundenberater beraten Sie gerne zur Ihren Vorteilen bei uns! '
              -
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT KOSTENLOSE ANFRAGE SCHICKEN!'
                    color: '#FF6606'
                    button_align: justify-center
                    spacing_top: false
              -
                type: paragraph
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
                          - 2931f444-5e22-4860-8f40-a41821377b93
                          - 2b55bfe7-06df-4e71-86da-152e256904ec
                          - 52f5092f-800b-4742-8636-a840b9ab1ddb
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
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT KOSTENLOS ANFRAGEN'
                    color: '#FF6606'
                    spacing_top: false
            show_as_card: false
        type: row
        enabled: true
    remove_spacing: false
    is-full: true
    bg-toggle: false
    bg-image-fixed: false
    border: true
    type: add_section
    enabled: true
  -
    columns-replicator:
      -
        responsive_columns: 1
        columns_per_row: '1'
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
                    text: 'Wie lässt sich eine erfolgreiche Hausarbeit schreiben?'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Eine Hausarbeit wird von Studierenden, im Gegensatz zur Klausur, wie jede akademische Arbeit zu Hause selbständig angefertigt. Es muss eine Argumentation entwickelt werden, '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'die allen wissenschaftlichen Standards entspricht'
                  -
                    type: text
                    text: '. Dies soll die Fähigkeiten des Studenten oder der Studentin hinsichtlich der Konzeption und Organisation von wissenschaftlichen Arbeitsprozessen fördern.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Es muss eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'wissenschaftliche Forschungsfrage'
                  -
                    type: text
                    text: ' definiert und eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'tief gehende Literaturrecherche'
                  -
                    type: text
                    text: ' mit richtiger Zitierweise durchgeführt werden. Diese Forschungsfrage muss innerhalb der gegebenen Vorgaben anhand der für den Hauptteil recherchierten Informationen entsprechend der zuvor erstellten Gliederung im Fazit beantwortet werden. Ein schlüssige Argumentation mit rotem Faden ist hierbei essentiell.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'In einigen Fachbereichen, wie der Medizin, Biologie und Chemie, wird zusätzlich zum schriftlichen Teil oftmals die Durchführung einer Untersuchung oder eines Experiments erwartet. Gerne geben wir Ihnen auch hier Tipps zur Gestaltung dieser.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Die Zitierweise, Formatierungsrichtlinien und Kriterien werden durch die jeweiligen Lehrstühle oder Professoren vorgegeben, allerdings haben sich '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'einige Formatvorgaben als gängig erwiesen'
                  -
                    type: text
                    text: '. Laut Prüfungsordnung bzw. Hochschulgesetz:'
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
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Gliederung einer Hausarbeit'
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
                            text: 'Titelblatt / Deckblatt'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Inhaltsverzeichnis Hausarbeit'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: Einleitung
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: Hauptteil
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Schluss / Fazit'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: Bildverzeichnis
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Literatur- und Quellenverzeichnis'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: Anhang
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: Selbstständigkeitserklärung
            show_as_card: false
          -
            bard:
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Formatierungsrichtlinien einer Hausarbeit'
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
                            text: 'Umfang: 10 - 20 Seiten exkl. Deckblatt und Verzeichnisse'
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
                            text: 'Schriftgröße: 12 Punkt'
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
                            text: 'Ränder: oben und unten jeweils 2,5 cm, links und rechts jeweils 3 cm'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Absatzformat: Blocksatz (auf Trennung achten)'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Fußnoten: Schriftgröße 10'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Nummerierung: alle Seiten nummeriert, außer Titelblatt, Inhaltsverzeichnis einer Hausarbeit, Literaturverzeichnis und Anhang'
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
                    text: 'Was erwartet Sie bei einer Ghostwriter Hausarbeit?'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Häufig veröffentlichen Lehrstühle Muster einer wissenschaftlichen Arbeit um Studenten Hilfe zu leisten. Wird Ihnen diese Hilfe im Studium nicht geboten, können Sie sich als Studierende eine Mustervorlage von einem Ghostwriter für ihre Hausarbeit schreiben lassen. Diese Ghostwriting-Hausarbeit können Sie anschließend als Beispiel unterstützend nutzen. Um Ihnen eine bessere Vorstellung davon zu geben, was Sie von unserer Schreibagentur erhalten, stellen wir Ihnen im Folgenden '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'ein Ghostwriting Beispiel zum kostenlosen Download bereit:'
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
                    ex_image: seiten/beispielarbeiten-1.JPG
                    ex_title: 'Weiterentwicklung der Baseler Eigenmittelübereinkunft'
                    ex_fachbereich:
                      - 06fbb3f4-51c2-4f11-832e-9b72a495857d
                    ex_type: Hausarbeit
                    ex_pages: '10'
                    ex_zitation: 'Harvard Style'
                    ex_button_link: 'entry::21ef3416-f1fd-43eb-8e38-ec597763c45f'
                    ex_button_text: WEITERLESEN
                    ex_color: '#FF6606'
                    ex_spacing_top: false
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
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '30'
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Wann sollten Sie sich unterstützen lassen?'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Die Ansprüche an eine wissenschaftliche Arbeit sind hoch und Abgabetermine sind oft knapp. Eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'gute Hausarbeit zu schreiben'
                  -
                    type: text
                    text: ' setzt eine gründliche und tief gehende Literaturrecherche voraus. Hierbei ist es wichtig, dass Sie die relevanten Informationen und Literaturquellen aus verschiedenen Datenbanken herausfiltern. Anschließend gilt es, diese Ergebnisse zusammenzuführen, zu analysieren und zu interpretieren. So soll sich eine gesamthafte Analyse entwickeln.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Zudem müssen Sie die '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'zentrale Forschungsfrage mit Würdigung des aktuellen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: link
                        attrs:
                          href: /blog/wie-schreibe-ich-einen-forschungsstand
                          target: null
                          rel: null
                    text: Forschungsstands
                  -
                    type: text
                    text: ' auf wenigen Seiten erforschen. Unerfahrene Studienanfänger sind oftmals mit dem Komprimieren der Informationsmenge und aufgrund der hohen akademischen Ansprüche überfordert. Auch die korrekte Zitierweise kann Schwierigkeiten verursachen. Dadurch stoßen Studierende auf Schreibblockaden und andere Probleme, besonders wenn diese ihre erste Hausarbeit schreiben.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'In solchen Fällen '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'helfen Ihnen unsere akademischen Ghostwriter von GWriters'
                  -
                    type: text
                    text: '. Alle Autoren unserer Schreibagentur verfügen über einen ausgedehnten Erfahrungsschutz im Verfassen wissenschaftlicher Arbeiten. Sie besitzen darüber hinaus auch das notwendige methodische und fachliche Wissen für das Verfassen akademischer Texte.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Unsere Experten kennen in ihrem Fachbereich immer den aktuellen Forschungsstand'
                  -
                    type: text
                    text: ' und haben Zugriff auf die notwendigen Literatur-Datenbanken. Wir arbeiten zudem mit modernster Analyse Software wie SPSS, Stata oder R für statistische Analysen sowie '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen/maxqda-auswertung
                          target: _blank
                          rel: null
                    text: 'MAXQDA für qualitative Analysen'
                  -
                    type: text
                    text: '. Dies zeichnet eine '
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
                        type: bold
                      -
                        type: link
                        attrs:
                          href: /ghostwriting/ghostwriting-agentur
                          target: null
                          rel: null
                    text: 'Ghostwriting Agentur'
                  -
                    type: text
                    text: ' aus.'
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
                    button_text: 'JETZT KOSTENLOS ANFRAGEN'
                    color: '#FF6606'
                    button_align: justify-center
                    spacing_top: false
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '30'
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Hausarbeit schreiben lassen: Kosten & Preise'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Wenn Sie über eine seriöse Agentur für Ghostwriting eine '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /blog/ghostwriter-mustervorlage
                          target: null
                          rel: null
                    text: Mustervorlage
                  -
                    type: text
                    text: ' für Ihre Hausarbeit kaufen möchten, dann erwarten Sie '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'faire aber auch angemessene Preise'
                  -
                    type: text
                    text: '. Seien Sie daher vorsichtig: Wenn Sie Ihre '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Hausarbeit günstig'
                  -
                    type: text
                    text: ' schreiben lassen wollen, erwarten Sie häufig Lockangebote von unseriösen '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /achtung-ghostwriter-betrug
                          target: null
                          rel: null
                    text: Ghostwriting-Betrügern
                  -
                    type: text
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Jeder Kostenvoranschlag von GWriters enthält die Kosten für:'
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
                            text: 'die fachliche und wissenschaftliche Kompetenz unserer Agentur'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'die professionelle Betreuung durch individuelle Projektmanager'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'die Bearbeitung durch erfahrene akademische Ghostwriter'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Literaturverzeichnis und andere Verzeichnisse'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'und schließlich die Kosten für ein abschließendes Lektorat.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Aufgrund dieser Leistungsbestandteile können wir nur durch ein angemessenes Honorar die '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'hohe Qualität Ihrer Hausarbeit garantieren'
                  -
                    type: text
                    text: '. Diese Leistungen können selbstständige Ghostwriter oder Billig-Ghostwriter-Agenturen, die mit günstigen Preisen werben, oftmals nicht bieten.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Je nach Anfrage variieren die Kosten für Hausarbeiten in verschiedenen Fachbereichen. Welche Hausarbeit günstig und welche teuer ist, liegt somit auch an den Ansprüchen an die Mustervorlage. Details hierzu können in einem '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'kostenlosen Erstgespräch'
                  -
                    type: text
                    text: ' geklärt werden. Vorläufige Informationen zu anfallenden Kosten bietet auch unser Rechner für '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /preise
                          target: null
                          rel: null
                    text: Ghostwriter-Preise
                  -
                    type: text
                    text: .
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
                    text: 'Häufig gestellte Fragen'
              -
                type: set
                attrs:
                  values:
                    type: accordion-custom-wrapper
                    items:
                      -
                        headline:
                          -
                            type: heading
                            attrs:
                              level: 3
                            content:
                              -
                                type: text
                                text: 'Welche Qualifikationen hat mein akademischer Ghostwriter?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Wir garantieren, dass es sich bei Ihrem Ghostwriter um einen absoluten Experten in Ihrem Fachgebiet handelt. In unserer Agentur setzen wir mindestens einen Masterabschluss voraus. Bei vielen unserer Ghostwriter handelt es sich aber um Doktoren und auch Professoren, die selbst noch in der Wissenschaft aktiv sind.'
                        active: false
                      -
                        headline:
                          -
                            type: heading
                            attrs:
                              level: 3
                            content:
                              -
                                type: text
                                text: 'Wie wird bei GWriters meine Anonymität sichergestellt?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Durch Ihren persönlichen Projektmanager wird Ihre Anonymität zu jeder Zeit gesichert. Niemand außer diesem erfährt Ihren Namen. Er übernimmt die gesamte Kommunikation zwischen Ihnen und Ihrem Ghostwriter und organisiert anonyme Telefonkonferenzen. Darüber hinaus schützen wir alle Ihre Daten gemäß der DSGVO/GDPR und löschen alle auftragsrelevanten Details nach Abschluss Ihres Projekts.'
                        active: false
                      -
                        headline:
                          -
                            type: heading
                            attrs:
                              level: 3
                            content:
                              -
                                type: text
                                text: 'Was kostet eine Mustervorlage für meine Hausarbeit?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Eine Mustervorlage für eine 10-seitige Hausarbeit erhalten Sie bereits ab 800 €. Die Preise pro Seite können aber noch variieren, abhängig vom Anspruch des Projekts und etwaiger empirischer Analysen.'
                        active: false
                      -
                        headline:
                          -
                            type: heading
                            attrs:
                              level: 3
                            content:
                              -
                                type: text
                                text: 'Darf ich die erstellte Mustervorlage als eigene Hausarbeit abgeben?'
                        accordion_content:
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
                                text: 'Der guten Ordnung halber weisen wir Sie darauf hin, dass jegliche von uns erstellten Ausarbeitungen auf der Annahme basieren, dass Sie eine Lösungsskizze für interne Zwecke wünschen. Die weitere Verwendung ist allenfalls zur eigenen gedanklichen Auseinandersetzung gedacht, nicht aber für die Übernahme als eigene Leistungen. Eine Mustervorlagen für eine Hausarbeit schreiben zu lassen ist also hinsichtlich der Legalität unproblematisch.'
                        active: false
              -
                type: paragraph
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
    remove_spacing: true
    is-full: false
    bg-toggle: false
    bg-image-fixed: false
    border: false
    type: add_section
    enabled: true
  -
    bard:
      -
        type: set
        attrs:
          values:
            type: spacer
            padding-y: '30'
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
            text: 'Einige unserer Blogartikel zum Thema Hausarbeit'
      -
        type: set
        attrs:
          values:
            type: blog_entries
            entries:
              - 8f956f01-0057-4727-86bd-227150d4d7c9
              - d61b6932-74b9-4ece-9da6-a54a1265c9a3
              - 3f184e1e-936d-431a-811d-566210ffea43
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
            text: 'Weitere Links & Referenzen'
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
                  href: 'https://www.germanistik.uni-bonn.de/institut/abteilungen/vergleichende-literaturwissenschaft-komparatistik/studium/studienberatung/leitfaden-zum-verfassen-einer-wissenschaftlichen-hausarbeit/view'
                  target: _blank
                  rel: 'noopener noreferrer nofollow'
            text: 'Leitfaden zum Verfassen einer wissenschaftlichen Hausarbeit - Universität Bonn'
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
                  href: 'https://www.jura.uni-frankfurt.de/90083151/Erstellung_von_Hausarbeiten_Leitfaden_fuer_Studierende_2020_07_WEB.pdf'
                  target: _blank
                  rel: 'noopener noreferrer nofollow'
            text: 'Leitfaden für das Verfassen von Jura Hausarbeiten - Goethe Universität Frankfurt am Main'
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
                  href: 'https://www.uni-potsdam.de/fileadmin/projects/schulpaedagogik/Dokumente/Hausarbeit_Anleitung.pdf'
                  target: _blank
                  rel: 'noopener noreferrer nofollow'
            text: 'Leitfaden zum Verfassen einer Hausarbeit - Uni Potsdam'
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
                  href: 'https://geschichte.uni-greifswald.de/institut/mitarbeitende/fachschaftsrat/fsr-tipps/tipps-zum-schreiben-von-hausarbeiten/'
                  target: _blank
                  rel: 'noopener noreferrer nofollow'
            text: 'Tipps zum Schreiben von Hausarbeiten - Uni Greifswald'
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
    type: editor
    enabled: true
    show_as_card: false
parent: d118c7b2-141d-4bac-972d-c1502381a340
updated_by: 94ade404-9791-479c-a67d-f792aa146207
updated_at: 1652438480
template: default
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: '0.5'
sitemap_changefreq: daily
override_twitter_settings: false
override_twitter_card_settings: false
twitter_card_type_page: summary
meta_title: 'Hausarbeit schreiben lassen • Ghostwriter-Mustervorlage von GWriters'
meta_description: 'Mustervorlage für Hausarbeit schreiben lassen & Hilfe vom akademischen Ghostwriter – schnell, diskret und geprüft auf Qualität & Plagiate.'
og_title: 'Hausarbeit schreiben lassen • Ghostwriter-Mustervorlage von GWriters'
og_description: 'Mustervorlage für Hausarbeit schreiben lassen & Hilfe vom akademischen Ghostwriter – schnell, diskret und geprüft auf Qualität & Plagiate.'
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
