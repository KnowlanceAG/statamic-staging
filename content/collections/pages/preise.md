---
id: 7aff708e-5d48-409e-9242-fd82c155f5ee
blueprint: pages
title: Preise
author: 1f7f4b5d-2f26-445f-984b-c1bf3adad660
template: without-teaser
updated_by: 94ade404-9791-479c-a67d-f792aa146207
updated_at: 1666888252
replicator:
  -
    columns_replicator:
      -
        columns_per_row: 2
        single_col: false
        grid:
          -
            bard:
              -
                type: heading
                attrs:
                  level: 1
                content:
                  -
                    type: text
                    text: 'Unsere Ghostwriter Preise'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: "Unser Preisrechner dient Ihnen als Orientierungshilfe für unsere Ghostwriter Preise. Die Preise für\_"
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen
                          target: null
                          rel: null
                    text: 'unsere Leistungen'
                  -
                    type: text
                    text: "\_richten sich nach unseren Erfahrungswerten mit unseren akademischen "
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /ghostwriter
                          target: null
                          rel: null
                    text: Ghostwritern
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
                    text: Lektoren
                  -
                    type: text
                    text: ' & Coaches. Bei GWriters bleiben Sie vollkommen anonym. Wenn Sie eine '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'diskrete Abrechnung über Freunde oder Verwandte'
                  -
                    type: text
                    text: ' wünschen, helfen wir Ihnen gerne!'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Je nach Ihren individuellen Anforderungen (z.B. Schwierigkeitsgrad des Themas, Zeitrahmen für die Schreibarbeit) kann der endgültige Preis bis zu 20% unter oder über dem des Preisrechners liegen. Bitte geben Sie außerdem nur die reinen Textseiten ('
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Normseite ca. 1800 Zeichen'
                  -
                    type: text
                    text: ' inkl. Leerzeichen) an.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Beim Ghostwriting sind die '
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
                    text: ', das '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /korrektorat
                          target: null
                          rel: null
                    text: Korrektorat
                  -
                    type: text
                    text: ', das '
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
                    text: ' durch einen Supervisor, '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen/formatierung
                          target: null
                          rel: null
                    text: Formatierung
                  -
                    type: text
                    text: ', Quellerecherche, alle Verzeichnisse, Deckblatt etc. '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'natürlich im Preis inbegriffen'
                  -
                    type: text
                    text: '. Wir bieten Qualität – und das zu fairen Preisen.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Neben der traditionellen Banküberweisung können Sie bei uns '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'sicher und diskret'
                  -
                    type: text
                    text: ' mit Google Pay, Apple Pay, Visa, Mastercard, American Express und Sofortüberweisung via Klarna zahlen.'
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating_img
                    dateien:
                      - preise/zahlungsmoeglichkeiten.png
                    img_size: w-3/4
                    float: mx-auto
                    image_options:
                      - no_upscale
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
    is_full: false
    type: add_section
    enabled: true
    remove_spacing: false
    border: false
  -
    columns_replicator:
      -
        single_col: false
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: preisrechner
                    show_calulator: true
              -
                type: paragraph
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
    is_full: true
    bg_toggle: false
    bg_color: '#F9F9F9'
    type: add_section
    enabled: true
    remove_spacing: false
    border: false
  -
    columns_replicator:
      -
        single_col: false
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: text_box_alignment
                    bard:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: "Für ein verbindliches Angebot senden Sie uns bitte eine\_"
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
                            text: Anfrage
                          -
                            type: text
                            text: "\_und wir melden uns innerhalb von 24 Stunden zurück. Ihre Daten werden selbstverständlich streng vertraulich behandelt und nicht an Dritte weitergegeben."
                    text_ausrichtung: text-center
                    column_count: false
              -
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT KOSTENLOS ANFRAGEN'
                    spacing_top: false
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
    remove_spacing: false
    is_full: true
    bg_toggle: false
    border: true
    type: add_section
    enabled: true
  -
    columns_replicator:
      -
        single_col: false
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
                          align: start
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Ghostwriter Kosten: Faktoren & Zusammensetzung'
              -
                type: set
                attrs:
                  values:
                    type: text_box_alignment
                    bard:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: "In den vergangenen Jahren konnten wir reichhaltige Erfahrungen im\_"
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /ghostwriting
                                  target: null
                                  rel: null
                            text: 'akademischen Ghostwriting'
                          -
                            type: text
                            text: "\_sammeln. Deshalb sind wir uns bewusst, dass sowohl die Seriosität einer "
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /ghostwriting/ghostwriting-agentur
                                  target: null
                                  rel: null
                            text: 'Ghostwriting Agentur'
                          -
                            type: text
                            text: ' als auch durchgängige Transparenz im Hinblick auf den Ghostwriting Service und die Preise für viele Kunden im Mittelpunkt stehen.'
                          -
                            type: hard_break
                          -
                            type: text
                            text: 'Wenn Sie sich bei '
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /
                                  target: null
                                  rel: null
                            text: GWriters
                          -
                            type: text
                            text: " eine Mustervorlage für Ihre Hausarbeit, Seminararbeit, Bachelorarbeit oder\_"
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /arbeiten/masterarbeit-schreiben-lassen
                                  target: null
                                  rel: null
                            text: 'Masterarbeit schreiben lassen'
                          -
                            type: text
                            text: ', erwartet Sie jederzeit höchste Qualität auf akademischem Niveau zu fairen Preisen. Dies garantieren wir durch unsere kompromisslose Qualitätssicherung, die selbstverständlich in jedem Preis-Angebot inklusive ist.'
                    text_ausrichtung: text-left
                    column_count: false
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        single_col: false
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
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'In unseren Preisen enthalten sind:'
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        columns_per_row: 3
        single_col: false
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating_img
                    img_size: w-1/4
                    float: mx-auto
                    dateien:
                      - preise/euro.svg
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
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: Festpreisgarantie
              -
                type: set
                attrs:
                  values:
                    type: text_box_alignment
                    bard:
                      -
                        type: paragraph
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
                                  color: 'rgb(68, 68, 68)'
                                  hex: '#000'
                            text: 'Unerwartete Preiserhöhungen oder versteckte Gebühren gibt es bei uns nicht! Falls Sie nicht ausdrücklich eine Änderung des Auftragsumfangs wünschen sollten, wird sich der Ihnen zugesagte Preis in keinem Fall ändern.'
                    text_ausrichtung: text-left
                    column_count: false
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating_img
                    dateien:
                      - preise/telefon.svg
                    img_size: w-1/4
                    float: mx-auto
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
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Initiale Telefonkonferenz'
              -
                type: set
                attrs:
                  values:
                    type: text_box_alignment
                    bard:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: "Unabhängig davon, ob Sie Ihre Seminararbeit, Masterarbeit oder\_"
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /arbeiten/bachelorarbeit-schreiben-lassen
                                  target: null
                                  rel: null
                            text: 'Bachelorarbeit schreiben lassen'
                          -
                            type: text
                            text: ', bei uns beginnt jeder Auftrag mit einer initialen Telefonkonferenz, damit Ihr Auftrag von Beginn an in die richtige Richtung geht.'
                    text_ausrichtung: text-left
                    column_count: false
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating_img
                    dateien:
                      - preise/projektmanager.svg
                    img_size: w-1/4
                    float: mx-auto
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
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Persönlicher Projektmanager'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: start
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Ihr persönlicher Projektmanager steht Ihnen während des gesamten Schreibprozesses jederzeit unterstützend zur Verfügung. Wir gehen individuell auf jeden Ihrer Wünsche ein, damit Sie zu jeder Zeit ein gutes Gefühl haben.'
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating_img
                    dateien:
                      - preise/feedback.svg
                    img_size: w-1/4
                    float: mx-auto
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
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Kostenlose Feedbackschleifen'
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: start
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Sie erhalten von uns je nach Auftragsgröße 2-5 Zwischenstände zugeschickt, sodass Sie gerne Feedback geben und die Schreibarbeit so selbst in die von Ihnen gewünschte Richtung steuern können. Auch nach Auftragsabschluss sind wir weiterhin für Sie da.'
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating_img
                    dateien:
                      - preise/lektorat.svg
                    img_size: w-1/4
                    float: mx-auto
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
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Wissenschaftliches Lektorat'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Vor der Abschlusslieferung wird die Mustervorlage für Ihre Abschlussarbeit durch einen übergeordneten Supervisor aus Ihrem Fachgebiet auf Rechtschreibung, Grammatik, Hyphenation, inhaltliche Richtigkeit und Wissenschaftlichkeit geprüft, für Ihren Erfolg!'
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: floating_img
                    dateien:
                      - preise/plagiatspruefung.svg
                    img_size: w-1/4
                    float: mx-auto
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
                      -
                        type: textAlign
                        attrs:
                          align: left
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: Plagiatsprüfung
              -
                type: set
                attrs:
                  values:
                    type: text_box_alignment
                    bard:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: "Bei GWriters erhalten Sie ausschließlich Unikate. Jede wissenschaftliche Arbeit wird vor der Abschlusslieferung\_auf Plagiate geprüft. Hierfür verwenden wir die gleiche Software, wie sie auch von Universitäten verwendet wird."
                    text_ausrichtung: text-left
                    column_count: false
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
    remove_spacing: false
    is_full: false
    border: false
    type: add_section
    enabled: true
  -
    columns_replicator:
      -
        single_col: false
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: text_box_alignment
                    bard:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Neben unseren hohen Qualitätsstandards nehmen aber selbstverständlich auch der verfügbare Bearbeitungszeitraum und insbesondere Ihr Fachbereich einen maßgeblichen Einfluss auf die Preise für das Ghostwriting Ihrer wissenschaftlichen Arbeit. Denn aus unserer jahrelangen Erfahrung wissen wir, dass jede wissenschaftliche Arbeit einen individuellen Anspruch hat.'
                          -
                            type: hard_break
                          -
                            type: text
                            text: "Ob Sie nun beispielsweise Ihre erste juristische Hausarbeit schreiben und dafür eine Lösungsskizze von einem erfahrenen Jura-Ghostwriter benötigen oder ob Sie sich eine Mustervorlage für Ihre\_"
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /fachrichtungen/finanzwissenschaften
                                  target: null
                                  rel: null
                            text: 'finanzwissenschaftliche Masterarbeit schreiben lassen'
                          -
                            type: text
                            text: ", die Kosten und Preise für Ihren Ghostwriter sind in jedem Fall genau so individuell wie Ihre Anforderungen. Aus diesem Grund legen wir eine hohe Priorität auf die Expertise unserer Kundenberater, damit sowohl ein Kunde mit einer kurzen\_"
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /fachrichtungen/soziologie
                                  target: null
                                  rel: null
                            text: 'sozialwissenschaftlichen Literaturarbeit'
                          -
                            type: text
                            text: ', als auch ein Kunde mit einer ingenieurwissenschaftlichen Masterarbeit, ausführlichen Berechnungen und technischen Zeichnungen immer einen fairen Preis erhalten – individuell auf Ihr Projekt zugeschnitten!'
                    text_ausrichtung: text-left
                    column_count: false
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        columns_per_row: 2
        single_col: false
        grid:
          -
            bard:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: start
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: "Unsere Preise für medizinisches, Jura- oder BWL-Ghostwriting sowie für alle anderen Fachbereiche beginnen ab\_"
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
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: '80,- € pro Normseite'
              -
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT KOSTENLOS ANFRAGEN'
                    spacing_top: true
                    button_align: justify-start
              -
                type: paragraph
            show_as_card: true
          -
            bard:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: start
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Benötigen Sie eine statistische Auswertung, technische Zeichnung oder haben Sie sonstige besondere Anforderungen?'
              -
                type: set
                attrs:
                  values:
                    type: button
                    button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                    button_text: 'JETZT BERATEN LASSEN'
                    spacing_top: true
                    button_align: justify-start
            show_as_card: true
        type: row
        enabled: true
        responsive_columns: 0
    remove_spacing: false
    is_full: true
    bg_toggle: false
    bg_color: '#D6D6D6'
    border: false
    type: add_section
    enabled: true
  -
    columns_replicator:
      -
        single_col: true
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
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        columns_per_row: 4
        single_col: true
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: custom_svg_width
                    svg_file: leistung/icons/security.svg
                    custom_svg_width: 65
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: 10
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
                    padding-y: 10
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: custom_svg_width
                    svg_file: leistung/icons/icon-kostenloses-feedback.svg
                    custom_svg_width: 65
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: 10
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
                    padding-y: 10
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: custom_svg_width
                    svg_file: leistung/icons/stopwatch.svg
                    custom_svg_width: 65
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: 10
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
                    padding-y: 10
            show_as_card: false
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: custom_svg_width
                    svg_file: leistung/icons/magistrate.svg
                    custom_svg_width: 65
              -
                type: set
                attrs:
                  values:
                    type: spacer
                    padding-y: 10
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
                    padding-y: 10
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
      -
        single_col: true
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
                          align: start
                      -
                        type: textColor
                        attrs:
                          color: 'rgb(68, 68, 68)'
                          hex: '#000'
                    text: 'Preise für akademisches Ghostwriting: Beispielpreise'
              -
                type: set
                attrs:
                  values:
                    type: text_box_alignment
                    bard:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: "Vielen Kunden genügen allgemeine Preisangaben nicht, dies haben wir aus Erfahrung gelernt. Stattdessen möchten Sie konkrete Antworten auf brennende Fragen wie: “Wie teuer ist eine Masterarbeit?” oder “Für wie viel Geld kann ich eine\_"
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /arbeiten/seminararbeit-schreiben-lassen
                                  target: null
                                  rel: null
                            text: 'Seminararbeit schreiben lassen'
                          -
                            type: text
                            text: '?” haben. Aus diesem Grund haben wir gemeinsam mit unseren akademischen Ghostwritern Preise für einige fiktive Beispielprojekte festgelegt, die Ihnen einen besseren Überblick über unsere Preisstruktur bei der Suche nach dem für Sie besten Angebot geben sollen.'
                          -
                            type: hard_break
                          -
                            type: text
                            marks:
                              -
                                type: bold
                            text: 'Vorab: Selbstverständlich können und dürfen wir Ihnen keine Abschlussarbeiten oder andere Arten von Prüfungsleistungen erstellen, gerne erstellen wir Ihnen aber eine hochqualitative Mustervorlage nach Ihren individuellen Vorgaben, die alle akademischen Standards und Anforderungen erfüllt.'
                    text_ausrichtung: text-left
                    column_count: false
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        single_col: true
        grid:
          -
            bard:
              -
                type: set
                attrs:
                  values:
                    type: accordion_wrapper
                    items:
                      -
                        headline: 'Mustervorlage für Seminararbeit'
                        accordion_content:
                          -
                            type: table
                            content:
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Fachbereich
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: BWL
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Umfang
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: '10 Textseiten'
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Zusätzliche Faktoren'
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: '-'
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Literatur vorhanden'
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Ja
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Preis
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'ab 80,- € pro Normseite'
                          -
                            type: set
                            attrs:
                              values:
                                type: button
                                button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                                button_text: 'JETZT KOSTENLOS ANFRAGEN'
                                button_align: justify-end
                                spacing_top: true
                        active: true
                      -
                        headline: 'Mustervorlage für Bachelorarbeit'
                        accordion_content:
                          -
                            type: table
                            content:
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Fachbereich
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Sozialwissenschaften
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Umfang
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: '40 Textseiten'
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Zusätzliche Faktoren'
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Empirie / stat. Auswertung'
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Literatur vorhanden'
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Nein
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Preis
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'ab 80,- € pro Normseite'
                          -
                            type: set
                            attrs:
                              values:
                                type: button
                                button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                                button_text: 'JETZT KOSTENLOS ANFRAGEN'
                                spacing_top: true
                                button_align: justify-end
                        active: true
                      -
                        headline: 'Mustervorlage für Masterarbeit'
                        accordion_content:
                          -
                            type: table
                            content:
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Fachbereich
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Psychologie
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Umfang
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: '60 Textseiten'
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Zusätzliche Faktoren'
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Empirie / stat. Auswertung; Präsentation für Kolloqium'
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'Literatur vorhanden'
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(255, 255, 255)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Nein
                              -
                                type: table_row
                                content:
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: Preis
                                  -
                                    type: table_cell
                                    attrs:
                                      colspan: 1
                                      rowspan: 1
                                      colwidth: null
                                      background: 'rgb(247, 247, 247)'
                                    content:
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
                                                  align: left
                                              -
                                                type: textColor
                                                attrs:
                                                  color: 'rgb(51, 51, 51)'
                                                  hex: '#000'
                                            text: 'ab 80,- € pro Normseite'
                          -
                            type: set
                            attrs:
                              values:
                                type: button
                                button_link: 'entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf'
                                button_text: 'JETZT KOSTENLOS ANFRAGEN'
                                spacing_top: true
                                button_align: justify-end
                        active: true
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      -
        single_col: true
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
                    text: 'Ihre Sicherheit und die Qualität Ihrer Arbeit haben für uns Priorität'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Im Hinblick auf unsere Qualitätsstandards, die Qualität Ihrer Arbeit und somit auch im Hinblick auf Ihren Erfolg machen wir keine Kompromisse. Sowohl Ihre Hausarbeit oder '
                  -
                    type: text
                    marks:
                      -
                        type: textColor
                        attrs:
                          color: '#000!important'
                          hex: '#000'
                    text: 'andere wissenschaftliche Arbeit'
                  -
                    type: text
                    text: ', als auch Ihre Bachelorarbeit, Masterarbeit oder Doktorarbeit werden von akademischen Experten mit umfassender Erfahrung in Ihrem Fachbereich verfasst. Hobbyschreiber findet man bei uns nicht, denn die Qualifikation unserer akademischen Ghostwriter wird von uns strengstens geprüft.'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'So können wir sicherstellen, dass Sie auch mit Sicherheit die Qualität erhalten, die Sie verdienen. Zudem haben Sie bei uns absolute Preissicherheit. Das heißt, dass die Kosten für ein faires Honorar unserer akademischen Experten mit langjähriger Erfahrung vollständig in unseren Preisen enthalten ist. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Sollten Sie nicht selbst eine Änderung des Auftragsumfangs wünschen, erwarten Sie keine weiteren Kosten für unseren Ghostwriting-Service. Das versprechen wir Ihnen!'
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Preisfaktoren bei GWriters'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'GWriters als akademische Ghostwriter-Agentur'
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
                            text: 'Akademisches Netzwerk:'
                          -
                            type: text
                            text: ' Als '
                          -
                            type: text
                            marks:
                              -
                                type: link
                                attrs:
                                  href: /ghostwriting/ghostwriting-agentur
                                  target: null
                                  rel: null
                            text: 'akademische Ghostwriter-Agentur'
                          -
                            type: text
                            text: ' verwaltet GWriters ein akademisches Netzwerk aus einer Vielzahl an Experten. Jeder dieser Experten muss vor seiner Aufnahme bei GWriters durch unsere Mitarbeiter eingehend auf seine Qualifikationen und Erfahrung geprüft werden.'
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
                            text: 'Wahl des richtigen akademischen Ghostwriters:'
                          -
                            type: text
                            text: ' In der Vorbereitung Ihres Auftrags kontaktieren unsere Mitarbeiter eine Vielzahl in Frage kommender Experten, vergleichen deren Erfahrungen und wählen den besten Kandidaten für Sie aus.'
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
                            text: 'Betreuung durch geschulte wissenschaftliche Projektmanager:'
                          -
                            type: text
                            text: ' Ihr Projektmanager begleitet Sie während des gesamten Auftragsverlaufs, ist immer über den aktuellen Stand Ihres Auftrags informiert und steht Ihnen jederzeit für Fragen & Anmerkungen zur Verfügung. Er kontrolliert und überwacht die Arbeit des Ghostwriter, garantiert die Einhaltung von Lieferterminen und kann dank seiner Erfahrung bei auftretenden Problemen frühzeitig einschreiten.'
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
                            text: 'Anonyme Kommunikation bei GWriters:'
                          -
                            type: text
                            text: ' Wir garantieren Ihnen absolute Anonymität, auch bei der Kommunikation mit Ihrem Ghostwriter. Ihr Projektmanager leitet nach einer Sicherheitsprüfung auf persönliche Daten Ihre E-Mails an Ihren Ghostwriter weiter. Auch anonyme Telefonkonferenzen sind möglich, wobei wir natürlich Ihre Telefonnummer gegenüber dem Ghostwriter verbergen.'
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
                            text: 'Vertragliche Verschwiegenheit der Ghostwriter, Qualitätsmanager und aller Mitarbeiter:'
                          -
                            type: text
                            text: ' Wir setzen viel Wert auf Verschwiegenheit. Alle beteiligten Personen sind dazu vertraglich verpflichtet. Das bedeutet, dass jeder Autor bei uns ein NDA unterschreibt, eine sogenannte Verschwiegenheitserklärung, genauso wie unsere Qualitätsmanager und alle anderen Mitarbeiter wie bspw. der Projektmanager, der Sie durch Ihr Projekt führt.'
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
                            text: 'Kostenfreier Ersatz bei Ausfall eines akademischen Ghostwriters:'
                          -
                            type: text
                            text: ' Im Falle des Ausfalls Ihres Ghostwriter garantieren wir kostenfreien Expertenersatz. Dies ist der große Vorteil, den Sie gegenüber einem Freelance-Ghostwriter bei einer Ghostwriting Agentur haben, da diese das komplette Ausfallrisiko übernimmt, falls einmal ein Ghostwriter erkrankt oder aus sonstigen Gründen Abstand vom Auftrag nimmt.'
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
                            text: 'Telefonische und schriftliche Verfügbarkeit des GWriters-Teams:'
                          -
                            type: text
                            text: ' Wir garantieren Ihnen eine umfassende telefonische und schriftliche Verfügbarkeit Ihres Projektmanager. In Notfällen oder falls Sie ein dringendes Anliegen haben, können Sie uns jederzeit anrufen und Ihr Projektmanager steht Ihnen auch an Wochenenden und an Feiertagen notfalls zur Seite.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Kostet für akademische Ghostwriter'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '1) Einarbeitung in individuelles wissenschaftliches Thema'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Der akademische Ghostwriter hat sicherlich Ahnung vom Thema und ist ein Experte auf seinem Gebiet. Nichtsdestotrotz bleibt natürlich nicht aus, dass er sich nochmal neu einarbeiten muss. Jedes Thema hat seinen eigenen individuellen Wert und muss dementsprechend auch individuell noch einmal bearbeitet werden und dementsprechend muss sich auch ein Ghostwriter oder ein Experte auf dem Gebiet neu einarbeiten um zum einen den kompletten aktuellen '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /blog/wie-schreibe-ich-einen-forschungsstand
                          target: null
                          rel: null
                    text: Forschungsstand
                  -
                    type: text
                    text: ' abzubilden und zum anderen auch wirklich ein Unikat für Euch zu generieren, mit dem Ihr etwas anfangen könnt.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '2) Literaturrecherche und Forschung durch den akademischen Ghostwriter'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Und nicht nur das, sondern dazu muss er natürlich eine komplette '
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
                    text: ' durchführen oder bei empirischen Arbeiten wo es halt auch darum geht Umfragen z.B. heranzuziehen als Datenerhebung..muss der Experte je nach Kundenwunsch die Umfragen vorbereiten, selbst vielleicht sogar durchführen, auswerten und analysieren und dementsprechend noch danach in den Text einarbeiten.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '3) Erstellung des individuellen Textes'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Dazu kommen wir auch gleich zur Erstellung des Textes. Auch das ist natürlich nicht wie wir es gerade eigentlich schon gesehen haben, allein an dem Punkt Literaturrecherche, ist ja nicht so, dass jemand das ganze einfach so runterschreibt. Sondern das Ganze wird mit System gemacht. Das bedeutet ein Text wird initial erstellt, welcher schon mal die wichtigsten Informationen enthält und schon mal den ersten roten Faden der Arbeit formt. Und in der Regel gehen unsere Experten so vor, dass sie in einem zweiten und dritten Schreibdurchgang das Ganze noch verfeinern - sozusagen "an dieses rohe Skelett Fleisch an den Knochen packen". So hatte das mein Bachelorvater immer gesagt ganz am Anfang im Studium. Und das ist tatsächlich auch ganz richtig so, ich meine: man schreibt das Ghostwriting nicht einfach so runter. Sondern man überarbeitet einen Text immer und immer wieder, verfeinert den Text, merkt, dass man vielleicht nicht auf das gewünschte Ergebnis zu seiner Hypothese kommt, muss sich dann mal neue Gedanken machen, neu ransetzen und das gleiche passiert natürlich auch bei einem Experten, der sich mit Eurem Thema beschäftigt. Also das ist ein nicht unerheblicher Aufwand über den sich manche Kunden gar nicht immer so Gedanken machen.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '4) Einarbeitung des Kundenfeedbacks'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Weiterhin muss natürlich Euer Feedback eingearbeitet werden. Bei größeren Arbeiten, bzw. Arbeiten über 10 Seiten, haben wir die Regel, dass Ihr als Kunde auch '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /blog/ghostwriting-gwriters-teillieferungen
                          target: null
                          rel: null
                    text: Teillieferungen
                  -
                    type: text
                    text: ' bekommt. Das bedeutet, Ihr werdet mit zwei, drei, oder vier Teillieferungen eben ausgestattet im Laufe der Zeit und könnt somit immer wieder den aktuellen Stand der Arbeit betrachten und außerdem Euer Feedback dazu geben. Dieses Feedback, kann ich mir vorstellen, das möchtet Ihr ja auch, dass das eingearbeitet wird. Und dementsprechend ist das mehr Aufwand für einen Ghostwriter, was sich auf Ghostwriter-Preise niederschlägt.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Akademisches Qualitätsmanagement'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '1) Permanente Qualitätskontrollen bei Ghostwritern und wissenschaftlichen Texten'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: "Uns ist es wichtig, dass wir ein bestimmtes Niveau an Qualität halten und dieses auch stetig verbessern um Euch eben genau das zu liefern, was Ihr bei uns auch bestellt. Dementsprechend führen wir permanente Qualitätskontrollen durch. Und das nicht nur bei den Abschlusslieferungen - wo wir gucken, dass alles auch einmal..dass die Orthografie stimmt, dass die Plagiatsprüfung durchgeführt wurde, usw. Wir schauen auch, dass wir Inhouse Aufträge vergeben an Autoren um diese eben noch einmal zwischendurch zu prüfen und immer wieder zu schauen \"Sind die auch 'up to date' und können unsere Autoren mithalten mit dem Rest, dem aktuellen Standard?\" Wenn nicht, dann machen wir diese darauf aufmerksam und arbeiten gemeinsam daran, dass dies besser wird oder trennen uns teilweise auch. Ich meine das gehört dazu wenn man ein akademisches Netzwerk aus Experten betreibt, dass man dieses eben auch entsprechend pflegt und dazu gehören, wie gesagt, permanente Qualitätskontrollen.\_"
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '2) Zweites Lektorat ergänzend zum Ghostwriting'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Ein '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /lektorat
                          target: null
                          rel: null
                    text: 'wissenschaftliches Lektorat'
                  -
                    type: text
                    text: ', welches nochmal nach der Abschlussprüfung durchgeführt wird, hatte ich gerade schon angeschnitten. Damit seid Ihr auf der sicheren Seite, dass Ihr auch ein qualitativ- hochwertiges Produkt erhaltet an dem Ihr Euch gut orientieren könnt.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '3) Plagiatsprüfungen als Qualitätssicherung'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Genauso wie die Plagiatsprüfung - Ihr möchtet natürlich ein Unikat erhalten, dementsprechend führen wir auch '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: /leistungen/plagiatspruefung
                          target: null
                          rel: null
                    text: Plagiatsprüfungen
                  -
                    type: text
                    text: ' durch, welche..oder von welchen Ihr auch die Auswertung bekommen könnt. Fragt da einfach nach, aber all dies sind natürlich Punkte, die sich auch auf den Preis auswirken und auf die wir natürlich nicht verzichten möchten, einfach nur um ein bisschen günstiger zu sein. Sondern es ist halt unser Anspruch Euch ein ordentliches Produkt zu liefern.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: 'Ihre individuellen Vorgaben'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '1) Komplexität des wissenschaftlichen Projektes'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Der erste Punkt ist die Komplexität des Projektes. Gerade hatte ich schon ein Beispiel genannt: Eine Arbeit im Bereich Zahnmedizin z.B. ist nicht vergleichbar mit einer Arbeit aus dem Bereich Atomphysik - um es mal überspitzt darzustellen. Ich glaube, das versteht jeder. Dementsprechend gibt es natürlich auch verschiedene Experten, die sich entsprechend honorieren lassen möchten. Ich sage mal bei einem Thema im Bereich BWL, Wirtschaft und Management wird das Honorar sicherlich etwas geringer ausfallen als bei sehr exotischen Themen und denke das ist sicherlich auch jedem bewusst.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '2) Bearbeitungsdauer beim akademischen Ghostwriting'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Gleiches gilt für die Bearbeitungsdauer: Wenn ein Experte jetzt nur zwei Wochen für eine Arbeit Zeit hat, für die er sich normalerweise 6 bis 7 Wochen einplanen würde, ist sicherlich selbsterklärend, dass er unter diesem Druck gerne auch ein höheres Honorar haben möchte.'
              -
                type: heading
                attrs:
                  level: 3
                content:
                  -
                    type: text
                    text: '3) Fachbereich und weitere individuelle Vorgaben'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Das gleiche gilt für den Fachbereich und eben für auch weitere individuelle Vorgaben. Dabei ist mit weiteren individuellen Vorgaben gemeint, dass wir wirklich versuchen alles auch für den Kunden zu erledigen, was sich der Kunde wünscht. Viele Kunden sind schon mal zu uns gekommen und haben gesagt "Ok, ich möchte jetzt die, und die und die Literatur mit eingearbeitet haben." Der Autor findet davon die Hälfte, die Hälfte nicht und muss sich denn Rest dann eben anderweitig organisieren. Ob er sich dann eben zusätzlich Bücher ausleiht, ob er sich zusätzlich Bücher bestellen muss, wird teilweise dann mit dem Kunden nochmal eruiert ob das so wirklich notwendig ist. Wenn der Autor jetzt sagt "Ok, eigentlich haben wir da genügend Futter um ein Thema ordentlich zu bearbeiten und haben auch schon andere Literatur, die genauso passend wäre." Kann es trotzdem sein, dass der Kunde darauf besteht und der Autor sagt "Ok, lieber Kunde. Dann möchte ich das Buch trotzdem bezahlt bekommen." - Was sich dann auch wieder auf den Preis auswirkt.'
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
                    text: 'Häufig gestellte Fragen zu unseren Ghostwriter Preisen'
              -
                type: set
                attrs:
                  values:
                    type: accordion_custom_wrapper
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
                                text: 'Ich möchte einen Ghostwriter mit Doktortitel beauftragen, muss ich mit höheren Preisen rechnen?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: "Die Preise für einen Ghostwriter oder Schreibcoach im akademischen Bereich variieren stark. Als Kunde sollte man sich allerdings darüber im Klaren sein, dass die Kosten für einen Ghostwriter mit entsprechenden Qualifikationen höher sind als für einen Ghostwriter, welcher nicht einmal einen akademischen Abschluss hat. Gerade bei geringen Preisen von Ghostwriting-Agenturen stellt sich so die Frage, ob man eine Mustervorlage für die eigene von jemandem\_"
                              -
                                type: text
                                marks:
                                  -
                                    type: link
                                    attrs:
                                      href: /arbeiten/doktorarbeit
                                      target: null
                                      rel: null
                                text: 'Doktorarbeit schreiben lassen'
                              -
                                type: text
                                text: "\_möchte, der selbst noch nicht einmal eine Dissertation verfasst hat. "
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: "Daher werden bei GWriters für jedes Projekt\_ausschließlich Ghostwriter mit mindestens dem gleichen akademischen Abschluss eingesetzt."
                              -
                                type: hard_break
                              -
                                type: text
                                text: 'Wenn es Ihnen besonders wichtig ist, einen Schreibcoach zu engagieren der bereits promoviert hat oder sogar eine Professur innehat, sollte man sich also darauf einstellen, dass für ein solches Ghostwriting '
                              -
                                type: text
                                marks:
                                  -
                                    type: textColor
                                    attrs:
                                      color: '#000!important'
                                      hex: '#000'
                                text: 'ein Aufpreis anfällt'
                              -
                                type: text
                                text: '. Die Kosten sind höher als wenn Sie eine Billig-Agentur engagieren, die solch einen hochklassigen Service nicht garnieren kann.'
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
                                text: 'Aus welchen Faktoren setzen sich die Preise für Ghostwriting zusammen?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Qualität hat auch bei der Ghostwritingleistung ihren Preis. Die Preise für einen erfolgreichen Ghostwriter setzen sich aus verschiedenen Faktoren zusammen. Zum Ersten gehört dazu die Fachdisziplin und '
                              -
                                type: text
                                marks:
                                  -
                                    type: textColor
                                    attrs:
                                      color: '#000!important'
                                      hex: '#000'
                                text: 'die Komplexität des '
                              -
                                type: text
                                text: 'Themas über welches die Arbeit verfasst werden soll. Hier greifen die typischen Gesetze des Marktes von Angebot und Nachfrage. '
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Starke Spezialisierungen einer Fachdisziplin, wie sie eine Dissertation erfordern, stellen natürlich andere Anforderungen an den Ghostwriter als das Verfassen einer'
                              -
                                type: text
                                marks:
                                  -
                                    type: link
                                    attrs:
                                      href: /arbeiten/hausarbeit-schreiben-lassen
                                      target: null
                                      rel: null
                                text: "\_Hausarbeit\_"
                              -
                                type: text
                                text: 'im ersten Semester. Daher sind die Preise einer solchen Ghostwritingleistungs natürlich höher. '
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Des weiteren spielt natürlich der Umfang einer solchen Arbeit auch eine entscheidenden Rolle. Hier geht es um den Zeitaufwand den ein Ghostwriter betreiben muss um die Arbeit zu verfassen. Daher ermessen Ghostwriting-Agenturen den Preis häufig pro Seite.'
                              -
                                type: hard_break
                              -
                                type: text
                                text: "Seriöse Agenturen erkennt man daran, dass diese einen Kostenvoranschlag unterbreiten (übrigens auch für\_Korrektorat, Lektorat und Plagiatsprüfung), der als Festpreisangebot deklariert wird, also nicht überschritten wird, ganz egal wie viel Mehrarbeit noch über den geschätzten Aufwand entsteht. Gute Agenturen sind sich der eigenen "
                              -
                                type: text
                                marks:
                                  -
                                    type: textColor
                                    attrs:
                                      color: '#000!important'
                                      hex: '#000'
                                text: 'Professionalität '
                              -
                                type: text
                                text: 'nämlich sehr wohl bewusst und können sich auf ihr Team von akademischen Ghostwritern verlassen.'
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
                                text: 'Ist ein hoher Preis eine Garantie für gutes Ghostwriting?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Einen hohen Preis für ein Ghostwriting zu verlangen ist natürlich per se keine Garantie für qualitativ hochwertige Arbeit. Allerdings zeigt sich hier, wie auch in anderen Lebensbereichen, oft: Wer billig kauft, kauft doppelt. Daher sollte ein günstiger Preis nicht das bevorzugte oder gar einzige beachtete Merkmal bei der Auswahl einer Ghostwriting-Agentur sein. '
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Besonders geachtet sollte darauf, dass der Ansprechpartner einen seriösen Eindruck macht. Auch empfiehlt es sich, durch gezieltes Nachfragen die Erfahrung der Agentur beim Erstellen solcher Arbeiten auf die Probe zu stellen. '
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Auch sollten man sicher gehen, dass ein Ghostwriter mit der Aufgabe betraut wurde, der reichlich Erfahrung im gefragten Fachgebiet mitbringt. Daher gilt als Faustregel, nicht nur auf den Preis, sondern auch darauf zu achten, ob die Aufgabe in gute Hände gelegt wird.'
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
                                text: 'Ich möchte einen Ghostwriter günstig beauftragen, haben Sie einen Billig-Tarif?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Auch wenn wir jederzeit versuchen, Ihnen den Service unserer Ghostwriter günstig – und zwar so günstig wie möglich – zu bieten, bieten wir keinen Billig-Tarif auf Kosten der Qualität unserer Arbeit an. Denn als eine der führenden Ghostwriting Agenturen im deutschsprachigen Raum ist es für uns von höchster Priorität, Ihnen jederzeit höchste Qualität von akademischen Experten liefern zu können.'
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
                                text: 'Ich möchte mir eine Hausarbeit schreiben lassen: Kosten im Durchschnitt?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: "Die Preisspanne, wenn Sie sich eine Mustervorlage für Ihre\_"
                              -
                                type: text
                                marks:
                                  -
                                    type: link
                                    attrs:
                                      href: /arbeiten/hausarbeit-schreiben-lassen
                                      target: null
                                      rel: null
                                text: 'Hausarbeit schreiben lassen'
                              -
                                type: text
                                text: ', liegt zwischen €800 – €1600. Natürlich variieren die Ghostwriter Preise hier aber auch stark abhängig von der geforderten Anzahl der Textseiten, dem Schwierigkeitsgrad Themas, dem Fachbereich und dem zur Verfügung stehenden Bearbeitungszeitraum. In jedem Fall werden wir jedoch versuchen, eine für Sie möglichst kostengünstige und zugleich hochqualitative Lösung zu finden.'
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
                                text: 'Ist ein abschließendes Lektorat bereits im Preis inklusive?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Da es immer unser ausgeschriebenes Ziel ist, Ihnen mit jeder Ausarbeitung höchste Qualität zu liefern, '
                              -
                                type: text
                                marks:
                                  -
                                    type: textColor
                                    attrs:
                                      color: '#000!important'
                                      hex: '#000'
                                text: 'sind Zusatzleistungen wie das Lektorat und Korrektorat, '
                              -
                                type: text
                                text: 'der durch uns erstellten Mustervorlage für Ihre Abschlussarbeit (Hausarbeit, Seminararbeit, Bachelorarbeit, Masterarbeit o.ä.) immer im Pauschalpreis inklusive. Diese werden von einem übergeordneten Supervisor durchgeführt, der den entsprechenden fachlichen Hintergrund wie Ihr Ghostwriter hat und somit Ihre Arbeit inhaltlich und äußerlich überprüfen und ihr den letzten Schliff geben kann.'
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
                                text: 'Was kostet es, einen Ghostwriter für die Quellenrecherche oder Themenfindung zu beauftragen?'
                        accordion_content:
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Selbstverständlich können unsere akademischen Ghostwriter bei jeder Fragestellung zu ihrer Abschlussarbeit behilflich sein. Gewöhnlich beginnen die Preise für solche Leistungen ab 500€. Gerne erstellen wir Ihnen ein individuell auf Ihre Bedürfnisse zugeschnittenes Angebot.'
                          -
                            type: paragraph
                            content:
                              -
                                type: text
                                text: 'Unsere akademischen Ghostwriter unterstützen Sie zum Beispiel auch bei der Themenfindung, Formatierung, Quellenrecherche, beim Finden einer Forschungsfrage und der Anwendung von Forschungsmethoden. Die Durchführung von Umfragen, Interviewsauswertungen, sowie qualitative ('
                              -
                                type: text
                                marks:
                                  -
                                    type: link
                                    attrs:
                                      href: /leistungen/maxqda-auswertung
                                      target: null
                                      rel: null
                                text: MAXQDA
                              -
                                type: text
                                text: ') und quantitativen (SPSS, Stata, R) Datenauswertungen oder Inhaltsanalysen übernehmen wir ebenfalls für Sie.'
                        active: false
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
    remove_spacing: false
    is_full: false
    border: false
    type: add_section
    enabled: true
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: '0.5'
sitemap_changefreq: daily
override_twitter_settings: false
page_title: 'Ghostwriter Preise von GWriters • Preissicherheit & Transparenz ✓'
meta_title: 'Ghostwriter Preise von GWriters • Preissicherheit & Transparenz ✓'
meta_description: 'Berechnen Sie die Ghostwriter Preise mit unserem Preisrechner. Jetzt Bachelorarbeit, Masterarbeit oder Doktorarbeit schreiben lassen - zu fairen Preisen!'
og_title: 'Ghostwriter Preise von GWriters • Preissicherheit & Transparenz ✓'
og_description: 'Berechnen Sie die Ghostwriter Preise mit unserem Preisrechner. Jetzt Bachelorarbeit, Masterarbeit oder Doktorarbeit schreiben lassen - zu fairen Preisen!'
og_image: GWriters-Logo.png
sitemap_active: true
schema_objects: |-
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Ich möchte einen Ghostwriter mit Doktortitel beauftragen, muss ich mit höheren Preisen rechnen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Preise für einen Ghostwriter oder Schreibcoach im akademischen Bereich variieren stark. Als Kunde sollte man sich allerdings darüber im Klaren sein, dass die Kosten für einen Ghostwriter mit entsprechenden Qualifikationen höher sind als für einen Ghostwriter, welcher nicht einmal einen akademischen Abschluss hat. Gerade bei geringen Preisen von Ghostwriting-Agenturen stellt sich so die Frage, ob man eine Mustervorlage für die eigene von jemandem Doktorarbeit schreiben lassen möchte, der selbst noch nicht einmal eine Dissertation verfasst hat.

  Daher werden bei GWriters für jedes Projekt ausschließlich Ghostwriter mit mindestens dem gleichen akademischen Abschluss eingesetzt.
  Wenn es Ihnen besonders wichtig ist, einen Schreibcoach zu engagieren der bereits promoviert hat oder sogar eine Professur innehat, sollte man sich also darauf einstellen, dass für ein solches Ghostwriting ein Aufpreis anfällt. Die Kosten sind höher als wenn Sie eine Billig-Agentur engagieren, die solch einen hochklassigen Service nicht garnieren kann."
      }
    },{
      "@type": "Question",
      "name": "Aus welchen Faktoren setzen sich die Preise für Ghostwriting zusammen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Qualität hat auch bei der Ghostwritingleistung ihren Preis. Die Preise für einen erfolgreichen Ghostwriter setzen sich aus verschiedenen Faktoren zusammen. Zum Ersten gehört dazu die Fachdisziplin und die Komplexität des Themas über welches die Arbeit verfasst werden soll. Hier greifen die typischen Gesetze des Marktes von Angebot und Nachfrage.

  Starke Spezialisierungen einer Fachdisziplin, wie sie eine Dissertation erfordern, stellen natürlich andere Anforderungen an den Ghostwriter als das Verfassen einer Hausarbeit im ersten Semester. Daher sind die Preise einer solchen Ghostwritingleistungs natürlich höher.

  Des weiteren spielt natürlich der Umfang einer solchen Arbeit auch eine entscheidenden Rolle. Hier geht es um den Zeitaufwand den ein Ghostwriter betreiben muss um die Arbeit zu verfassen. Daher ermessen Ghostwriting-Agenturen den Preis häufig pro Seite.
  Seriöse Agenturen erkennt man daran, dass diese einen Kostenvoranschlag unterbreiten (übrigens auch für Korrektorat, Lektorat und Plagiatsprüfung), der als Festpreisangebot deklariert wird, also nicht überschritten wird, ganz egal wie viel Mehrarbeit noch über den geschätzten Aufwand entsteht. Gute Agenturen sind sich der eigenen Professionalität nämlich sehr wohl bewusst und können sich auf ihr Team von akademischen Ghostwritern verlassen."
      }
    },{
      "@type": "Question",
      "name": "Ist ein hoher Preis eine Garantie für gutes Ghostwriting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Einen hohen Preis für ein Ghostwriting zu verlangen ist natürlich per se keine Garantie für qualitativ hochwertige Arbeit. Allerdings zeigt sich hier, wie auch in anderen Lebensbereichen, oft: Wer billig kauft, kauft doppelt. Daher sollte ein günstiger Preis nicht das bevorzugte oder gar einzige beachtete Merkmal bei der Auswahl einer Ghostwriting-Agentur sein.

  Besonders geachtet sollte darauf, dass der Ansprechpartner einen seriösen Eindruck macht. Auch empfiehlt es sich, durch gezieltes Nachfragen die Erfahrung der Agentur beim Erstellen solcher Arbeiten auf die Probe zu stellen.

  Auch sollten man sicher gehen, dass ein Ghostwriter mit der Aufgabe betraut wurde, der reichlich Erfahrung im gefragten Fachgebiet mitbringt. Daher gilt als Faustregel, nicht nur auf den Preis, sondern auch darauf zu achten, ob die Aufgabe in gute Hände gelegt wird."
      }
    },{
      "@type": "Question",
      "name": "Ich möchte einen Ghostwriter günstig beauftragen, haben Sie einen Billig-Tarif?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Auch wenn wir jederzeit versuchen, Ihnen den Service unserer Ghostwriter günstig – und zwar so günstig wie möglich – zu bieten, bieten wir keinen Billig-Tarif auf Kosten der Qualität unserer Arbeit an. Denn als eine der führenden Ghostwriting Agenturen im deutschsprachigen Raum ist es für uns von höchster Priorität, Ihnen jederzeit höchste Qualität von akademischen Experten liefern zu können."
      }
    },{
      "@type": "Question",
      "name": "Ich möchte mir eine Hausarbeit schreiben lassen: Kosten im Durchschnitt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Preisspanne, wenn Sie sich eine Mustervorlage für Ihre Hausarbeit schreiben lassen, liegt zwischen €800 – €1600. Natürlich variieren die Ghostwriter Preise hier aber auch stark abhängig von der geforderten Anzahl der Textseiten, dem Schwierigkeitsgrad Themas, dem Fachbereich und dem zur Verfügung stehenden Bearbeitungszeitraum. In jedem Fall werden wir jedoch versuchen, eine für Sie möglichst kostengünstige und zugleich hochqualitative Lösung zu finden."
      }
    },{
      "@type": "Question",
      "name": "Ist ein abschließendes Lektorat bereits im Preis inklusive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da es immer unser ausgeschriebenes Ziel ist, Ihnen mit jeder Ausarbeitung höchste Qualität zu liefern, sind Zusatzleistungen wie das Lektorat und Korrektorat, der durch uns erstellten Mustervorlage für Ihre Abschlussarbeit (Hausarbeit, Seminararbeit, Bachelorarbeit, Masterarbeit o.ä.) immer im Pauschalpreis inklusive. Diese werden von einem übergeordneten Supervisor durchgeführt, der den entsprechenden fachlichen Hintergrund wie Ihr Ghostwriter hat und somit Ihre Arbeit inhaltlich und äußerlich überprüfen und ihr den letzten Schliff geben kann."
      }
    },{
      "@type": "Question",
      "name": "Was kostet es, einen Ghostwriter für die Quellenrecherche oder Themenfindung zu beauftragen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selbstverständlich können unsere akademischen Ghostwriter bei jeder Fragestellung zu ihrer Abschlussarbeit behilflich sein. Gewöhnlich beginnen die Preise für solche Leistungen ab 500€. Gerne erstellen wir Ihnen ein individuell auf Ihre Bedürfnisse zugeschnittenes Angebot.

  Unsere akademischen Ghostwriter unterstützen Sie zum Beispiel auch bei der Themenfindung, Formatierung, Quellenrecherche, beim Finden einer Forschungsfrage und der Anwendung von Forschungsmethoden. Die Durchführung von Umfragen, Interviewsauswertungen, sowie qualitative (MAXQDA) und quantitativen (SPSS, Stata, R) Datenauswertungen oder Inhaltsanalysen übernehmen wir ebenfalls für Sie."
      }
    }]
  }
  </script>
published: true
---
