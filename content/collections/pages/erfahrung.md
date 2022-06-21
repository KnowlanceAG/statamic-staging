---
id: 99e9f612-67c8-4ec9-be24-baf8402dbc36
published: false
blueprint: pages
title: Erfahrung
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
            type: bold
          -
            type: textAlign
            attrs:
              align: center
          -
            type: textColor
            attrs:
              color: orange-500
              hex: '#ff6606'
        text: 'GWriters Erfahrung'
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
        text: 'Vertrauen Sie beim akademischen Ghostwriting auf einen seriösen Partner'
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
            tooltip_infotext: 'Die Mustervorlage für Ihre Arbeit wird von akademischen Experten auf höchstem Niveau erstellt, die oft selbst als Doktoren oder Professoren beschäftigt sind.'
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
                      Akademisches Ghostwriting ist eine sensible Sphäre und ein undurchsichtiger Markt: sensibel, da Anonymität und Vertrauen in Ghostwriter Erfahrungen essenziell sind, und umkämpft, da es in Deutschland und weltweit unzählige Anbieter gibt, die sich im Markt durchsetzen wollen. Wenn Sie bereits mit GWriters Erfahrung gemacht haben, wissen Sie, dass die Wahl eines zuverlässigen und seriösen Ghostwriting-Anbieters essentiell für Ihren Erfolg ist.
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
                    text: 'Lesen Sie die Stimmen vieler zufriedener Kunden, die bereits mit GWriters Erfahrung gemacht haben'
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
                    type: insert_html
                    html: |-
                      <!-- ProvenExpert Bewertungssiegel -->
                      <div id="pewl"></div>
                      <script type="text/javascript" src="https://www.provenexpert.com/widget/landing_gwriters.js?feedback=1&avatar=0&competence=0&style=white" async></script>
                      <link rel="stylesheet" type="text/css" href="https://www.provenexpert.com/css/widget_landing.css" media="screen,print">
                      <!-- ProvenExpert Bewertungssiegel Ende -->
              -
                type: paragraph
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
                    marks:
                      -
                        type: bold
                    text: 'Wie macht man eine gute Ghostwriter Erfahrung?'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Die Garantie für eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'positive Erfahrung mit Ghostwritern'
                  -
                    type: text
                    text: " ist ein kompetentes und erfahrenes Ghostwriting-Unternehmen. Im Internet gibt es eine Vielzahl von Ghostwriting Agenturen mit verschiedensten Dienstleistungen und Angeboten. Aber wie können Sie beurteilen, dass es sich tatsächlich um einen zuverlässigen Anbieter handelt? Auf den ersten Blick ist es einfach: Man muss lediglich Erfahrungsberichte auf Bewertungsportalen lesen. In der Tat reicht dies allerdings leider nicht aus. \_"
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Wir bei GWriters wissen, dass die Erfahrungsberichte zu mit Ghostwritern gemachten Erfahrungen nicht immer ein verlässlichen Qualitätszeichen ist, da es unzählige unechte Bewertungen im Internet gibt, die von Ghostwriting-Betrügern gekauft oder sogar selbst geschrieben werden.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Diese Erfahrungsberichte zeichnen sich durch eine Reihe von Merkmalen aus, anhand derer sie sich leicht erkennen lassen. Schauen wir uns am Beispiel der GWriters Erfahrung an, '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'wie man echte von unechten Bewertungen unterscheidet'
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
                        type: bold
                    text: 'GWriters Erfahrung – wie Sie echte Bewertungen erkennen'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Als ein hervorragendes Beispiel kann das bekannte Bewertungsportal ProvenExpert herangezogen werden. Dort finden Sie '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Bewertungen zu allen führenden Ghostwriting-Agenturen'
                  -
                    type: text
                    text: .
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'An den Kommentaren zu den Bewertung wird ersichtlich, dass es sich tatsächlich um echte Kunden unserer Ghostwriting-Agentur handelt, die eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'positive Erfahrung mit GWriters'
                  -
                    type: text
                    text: ' gemacht haben. So werden konkrete Details zum Ablauf, zur Auftragsabwicklung und zu unserem hervorragenden Qualitätssicherungsprozess genannt.'
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating-img
                    dateien:
                      - gwriters-erfahrung.png
                    img_size: w-full
                    float: mx-auto
                    image_options:
                      - no_upscale
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
                    text: 'GWriters - Erfahrung & Kompetenz für Ihre Zufriedenheit'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'An den obigen Bewertungen merkt man sofort, dass die Autoren der Bewertung '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'tatsächlich mit GWriters Erfahrungen gemacht'
                  -
                    type: text
                    text: ' haben und nicht einfach Textbausteine zusammengefügt haben, die auf jede Agentur zutreffen könnten.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Bei GWriters wird jeder Kunde individuell von einem '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'persönlichen Projektmanager betreut'
                  -
                    type: text
                    text: ' – unabhängig davon, ob es um eine Bachelorarbeit, Masterarbeit oder eine Doktorarbeit geht. Der Projektmanager übernimmt die Abwicklung des gesamten Projektes und steht Ihnen bei jeglichen Fragen und Anliegen zur Verfügung. Wir legen viel Wert auf eine enge Kommunikation und Zusammenarbeit, sodass Sie selbständig entscheiden können, wie stark Sie in den Prozess der Projektabwicklung involviert sein wollen.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Im Laufe der Projektabwicklung erhalten sie in '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'regelmäßigen Abständen Teillieferungen'
                  -
                    type: text
                    text: ' und stehen mit Ihrem persönlichen Projektmanager stets im Kontakt. Wie in der obigen Bewertung erwähnt wurde, steht Ihnen auch die Möglichkeit eines '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'direkten Austausches mit Ihrem persönlichen Ghostwriter'
                  -
                    type: text
                    text: ' im Rahmen von Telefonkonferenzen zur Verfügung. In dessen Verlauf können Sie die Richtung der Projektabwicklung steuern, Feedback zu den Teillieferungen äußern und sämtliche offenen Fragen abklären.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Um die hohe Qualität unserer Dienstleistungen sicherzustellen, wird die erstellte wissenschaftliche Mustervorlage mehrmals durch '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'qualifizierte Lektoren und Supervisor überprüft'
                  -
                    type: text
                    text: '. Zudem haben Sie jederzeit die Möglichkeit, '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Änderungswünsche zu äußern, die von Ihrem zuständigen Ghostwriter kostenfrei in Ihrer Arbeit umgesetzt werden'
                  -
                    type: text
                    text: '. Alle diese Voraussetzungen stellen sicher, dass Sie eine optimale Erfahrung mit GWriters machen und hochqualitative Leistungen von erfahrenen Experten aus Ihrem Fachbereich erhalten.'
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
                    text: 'Wenn Sie bei Ihrer wissenschaftlichen Arbeit professionelle Unterstützung oder akademisches '
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
                    marks:
                      -
                        type: bold
                    text: ' benötigen, dann senden Sie uns eine '
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
                    text: '. Wir melden uns innerhalb weniger Stunden mit einem kostenlosen Leistungsangebot und allen wichtigen Informationen bei Ihnen zurück. Auch rufen wir Sie gerne an, falls Sie eine kostenlose telefonische Beratung wünschen.'
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
                    text: 'Wie schreibt man eine Bachelorarbeit?'
              -
                type: set
                attrs:
                  values:
                    type: bild_und_text
                    bild:
                      - seiten/arbeiten/bachelorarbeit-schreiben.jpg
                    ausrichtung: text-bild
                    text: |+
                      Je nach Fachrichtung und Institution umfasst sie inklusive Inhaltsverzeichnis und Exposé 20-60 Seiten. Oft bestimmen Hochschule oder Dozenten die Anzahl der Wörter und den Aufbau der Arbeit. Neben Themenwahl und Literaturrecherche stehe auf der To Do Liste auch die Anwendung formaler Richtlinien.

              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Insgesamt beläuft sich die dafür vorgesehene Bearbeitungszeit auf bis zu 4 Monate. Vorlagen und Beispiele können Sie vom Lehrinstitut selbst erlangen. '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Akademisches Ghostwriting ist eine Alternativ'
                  -
                    type: text
                    text: 'e, denn Sie können sich von einem Ghostwriter eine Bachelor Thesis schreiben lassen, welche als Orientierungshilfe dient. Außerdem müssen Sie als Student nach Ansprechpartnern als Betreuer der Bachelorarbeit oder zum '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /korrektorat/korrekturlesen
                          target: null
                          rel: null
                    text: Korrekturlesen
                  -
                    type: text
                    text: ' suchen. Auch hier kann ein akademischer Berater Hilfestellung leisten und eine Korrektur übernehmen.'
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
                    text: 'Wichtige Kriterien für eine Bachelorarbeit'
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
                    text: 'Die Formatierungsrichtlinien und Kriterien werden durch die jeweiligen Lehrstühle vorgegeben, allerdings haben sich '
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
                    text: 'einige Hochschulgesetze als gängig für die Formatierung erwiesen'
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: '. Laut Prüfungsordnung wird Folgendes von den Betreuern vorausgesetzt:'
            show_as_card: false
        type: row
        enabled: true
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
                        type: link
                        attrs:
                          href: /blog/aufbau-wissenschaftliche-arbeit
                          target: null
                          rel: null
                    text: Gliederung
                  -
                    type: text
                    text: ' einer Bachelorarbeit'
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
                                  href: /blog/bachelorarbeit-abstract
                                  target: null
                                  rel: null
                            text: Abstract
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
                            text: Vorwort
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
                    text: 'Oft haben Studierende Schwierigkeiten beim Zitieren von Quellen, sowohl im Literaturverzeichnis als auch in den Fußnoten. Wie ein Zitat korrekt aufgebaut wird und welche Regeln hierbei eingehalten werden müssen, erfahren Sie in einzelnen Etappen '
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
                          href: /blog/literaturquellen-richtig-zitieren
                          target: null
                          rel: null
                    text: hier
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
          -
            bard:
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Allgemeine Formatierungsrichtlinien einer Bachelorarbeit '
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
                            text: 'Schriftart: Times New Roman (oder Arial Größe 11) '
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
                            text: 'Kapitelüberschriften: 14 Pt Fettdruck, danach zwei Zeilen Abstand'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Unterkapitelüberschriften: 12 Pt Fettdruck, danach eine Zeile Abstand'
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Fußnoten: Schriftgröße 10 '
                  -
                    type: list_item
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Seitenzahlen: alle Seiten nummeriert, außer Titelblatt, Inhaltsverzeichnis einer Bachelorarbeit, Literaturverzeichnis und Anhang'
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: '17'
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
parent: d118c7b2-141d-4bac-972d-c1502381a340
updated_by: 94ade404-9791-479c-a67d-f792aa146207
updated_at: 1655816212
template: default
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: '0.5'
sitemap_changefreq: daily
override_twitter_settings: false
override_twitter_card_settings: false
twitter_card_type_page: summary
meta_title: 'GWriters Erfahrung'
meta_description: 'Mustervorlage für Bachelorarbeit schreiben lassen & Hilfe vom akademischen Ghostwriter – schnell, diskret und geprüft auf Qualität & Plagiate.'
og_title: 'Bachelorarbeit schreiben lassen • Mustervorlage von GWriters'
og_description: 'Mustervorlage für Bachelorarbeit schreiben lassen & Hilfe vom akademischen Ghostwriter – schnell, diskret und geprüft auf Qualität & Plagiate.'
og_image: GWriters-Logo.png
arbeitsgruppe: a_abschlussarbeiten
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
