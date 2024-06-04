---
id: b1510f04-f5f7-4d15-9be4-fc69c7add6e0
blueprint: pages
title: "Das Unternehmen"
updated_by: 94ade404-9791-479c-a67d-f792aa146207
updated_at: 1705995490
teaser:
  - type: heading
    attrs:
      level: 1
      textAlign: center
    content:
      - type: text
        marks:
          - type: textColor
            attrs:
              color: orange-500
              hex: "#ff6606"
        text: "Das Unternehmen"
  - type: set
    attrs:
      id: tSXw3Oty
      values:
        type: spacer
        padding-y: 10
  - type: set
    attrs:
      id: dVow3lPG
      values:
        type: teaser_icon_columns
        columns:
          - id: MdIuwGro
            icon: logo-startseite/icon-datenschutz-anonymitaet.svg
            headline: "Datenschutz &amp; 100% Anonymität"
            tooltip_infotext: "Wir schützen Ihre Daten streng gemäß der Vorschriften von DSGVO/GDPR &amp; garantieren Ihre Anonymität zu 100%."
          - id: MR9AmBxM
            icon: logo-startseite/icon-teillieferung.svg
            headline: "Teillieferungen &amp; kostenlose Änderungen"
            tooltip_infotext: "Sie erhalten von uns regelmäßig Teillieferungen und wir setzen Ihre Feedbacks kostenfrei um. So können Sie jederzeit Einfluss auf Ihr Projekt nehmen."
          - id: mSIflHHt
            icon: logo-startseite/icon-schnelle-lieferung2.svg
            headline: "Schnelle &amp; pünktliche Lieferung"
            tooltip_infotext: "Wir respektieren Ihre Deadlines! Sie erhalten Ihre bestellte Mustervorlage zum vereinbarten Datum in lektorierter &amp; finaler Form."
          - id: 9SAGegNV
            icon: logo-startseite/icon-akademische-qualitaet4.svg
            headline: "Top-Qualität von akademischen Experten"
            tooltip_infotext: "Ihre Mustervorlage wird von akademischen Experten auf höchstem Niveau erstellt, die oft selbst als Doktoren oder Professoren beschäftigt sind."
  - type: set
    attrs:
      id: x0CMNcg5
      values:
        type: spacer
        padding-y: 15
  - type: set
    attrs:
      id: GPWl9XWh
      values:
        type: button
        button_link: "entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf"
        button_text: "JETZT KOSTENLOS ANFRAGEN"
        color: "#FF6606"
        spacing_top: false
  - type: set
    attrs:
      id: htcQBZua
      values:
        type: spacer
        padding-y: 20
  - type: paragraph
    content:
      - type: text
        marks:
          - type: bold
        text: "Oder rufen Sie uns einfach an, wir beraten Sie gerne & kostenlos:"
    attrs:
      textAlign: center
  - type: heading
    attrs:
      level: 2
      textAlign: center
    content:
      - type: text
        marks:
          - type: textColor
            attrs:
              color: orange-500
              hex: "#ff6606"
          - type: link
            attrs:
              href: "tel:##phone##"
              target: null
              rel: null
        text: "##phone##"
replicator:
  - id: ln0mi6zx
    columns_replicator:
      - id: ln0mi874
        single_col: true
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: set
                attrs:
                  id: ln0mirvx
                  values:
                    type: insert_html
                    html: |-
                      <p style="font-size:18px" align="center">
                      GWriters ist eine schnell wachsende Web-Plattform für die Vermittlung von akademischen Experten. Dazu gehören <b>Lektoren, Korrektoren, Ghostwriter, Texter und Übersetzer</b>; aber auch Autoren und Coaches für viele Einsatzbereiche im wissenschaftlichen Umfeld. Insbesondere unterstützen Sie unsere Experten durch die Erstellung von Mustervorlagen für nahezu alle denkbaren Arten von wissenschaftlichen Texten und Arbeiten.
                      </p>
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
  - id: ln0ml5zv
    columns_replicator:
      - id: ln0ml8jd
        single_col: false
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: heading
                attrs:
                  level: 2
                  textAlign: center
                content:
                  - type: text
                    marks: {}
                    text: "Erfahrungen unserer Kunden"
              - type: heading
                attrs:
                  level: 3
                  textAlign: center
                content:
                  - type: text
                    marks: {}
                    text: "Überzeugen Sie sich von der Qualität unserer Leistungen, basierend auf den Bewertungen bei Proven Expert:"
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      - id: ln0mlsbi
        single_col: false
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: set
                attrs:
                  id: ln0mm754
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
    bg_toggle: true
    bg_image: seiten/ghostwriting-agentur/ghostwriting-agentur.jpg
    bg_image_fixed: false
    border: false
    type: add_section
    enabled: true
  - id: ln0modwz
    columns_replicator:
      - id: ln0moffa
        single_col: true
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 2
                content:
                  - type: text
                    text: "Hintergründe von GWriters: Offenheit und Transparenz"
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: 'Entwickelt und betrieben wird die GWriters Web-Plattform von der GWriters International Inc., welche unter dem inzwischen international bekannten Brand "GWriters" auch lokale Plattformen für verschiedene weitere europäischen Länder bereitstellt. Unsere '
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /ghostwriting/ghostwriting-agentur
                          rel: null
                          target: null
                          title: null
                    text: "Ghostwriting Agentur"
                  - type: text
                    text: " wurde im Jahr 2011 von einer Gruppe junger Akademiker gegründet und bereits innerhalb weniger Monate durch erfahrene Webentwickler & Online-Marketer verstärkt. Mithilfe eines Finanzinvestments konnte die Entwicklung einer allen Anforderungen gerecht werdenden Webapplikation sichergestellt werden. Gleichzeitig gelang es uns kurzfristig eine große Zahl von akademischen Experten für die Möglichkeiten einer auf ihre Bedürfnisse spezialisierten Internet-Plattform zu begeistern."
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "Schnell zeigte sich, dass eine erhebliche Nachfrage nach akademischen Autoren, Bearbeitern und Beratern vorhanden ist und, wie bereits in vielen anderen Branchen zuvor, auch in diesem bereits existierende Markt ein Bedarf nach einer zentralen Online Präsenz, Professionalisierung und Bündelung von Kapazitäten besteht. GWriters sieht seine Aufgabe darin, den Markt für akademische Ghostwriter neu zu definieren und sowohl den Auftraggebern, als auch den freiberuflichen Dienstleistern mit mehrstufiger, teilautomatisierte Qualitätskontrolle, juristischer Absicherung, standardisierten Workflows und natürlich professioneller Abwicklung zur Seite zu stehen. Auch in den heutigen Zeiten von künstlicher Intelligenz und ChatGPT integrieren wir modernste Technologien zur Optimierung unserer Workflows und um unsere Kunden beim Erreichen bestmöglicher Resultate zu unterstützen, so bspw. mit unserem "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /ai-detector
                          rel: null
                          target: null
                          title: null
                    text: "kostenlosen AI Detector"
                  - type: text
                    text: .
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
  - id: ln0nbwmj
    columns_replicator:
      - id: ln0nkgzg
        single_col: false
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 2
                content:
                  - type: text
                    text: "Fordern Sie jetzt kostenlos Ihr unverbindliches Angebot an!"
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    marks:
                      - type: bold
                    text: "Wenn Sie bei Ihrer wissenschaftlichen Arbeit Unterstützung oder akademisches "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /ghostwriting
                          rel: null
                          target: null
                          title: null
                      - type: bold
                    text: Ghostwriting
                  - type: text
                    marks:
                      - type: bold
                    text: " benötigen, dann senden Sie uns eine "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /anfrage
                          rel: null
                          target: null
                          title: null
                      - type: bold
                    text: "unverbindliche Anfrage"
                  - type: text
                    marks:
                      - type: bold
                    text: ". Wir melden uns innerhalb weniger Stunden mit einem kostenlosen Leistungsangebot und allen wichtigen Informationen bei Ihnen zurück. Auch rufen wir Sie gerne an, falls Sie eine kostenlose telefonische Beratung wünschen."
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      - id: ln0nc677
        columns_per_row: 2
        single_col: false
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: set
                attrs:
                  id: ln0njyc4
                  values:
                    type: phone_cta
                    cta_text: "Fragen? Rufen Sie uns einfach an:"
                    open: "Mo.-Fr. 8 - 20 Uhr"
            show_as_card: true
          - id: ln0ncnep
            bard:
              - type: set
                attrs:
                  id: ln0nmy3m
                  values:
                    type: spacer
                    padding-y: 12
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "Unsere Preise für "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /medizin
                          rel: null
                          target: null
                          title: null
                    text: medizinisches
                  - type: text
                    text: ", "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /jura
                          rel: null
                          target: null
                          title: null
                    text: Jura
                  - type: text
                    text: "- oder "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /bwl
                          rel: null
                          target: null
                          title: null
                    text: BWL-Ghostwriting
                  - type: text
                    text: " sowie für andere Fachbereiche beginnen ab\_"
                  - type: text
                    marks:
                      - type: bold
                    text: "100,- € pro Normseite."
              - type: set
                attrs:
                  id: ln0np3yz
                  values:
                    type: button
                    button_link: "entry::fc359a9c-afc1-43b6-a4bb-302ff072cdcf"
                    button_text: "JETZT KOSTENLOS ANFRAGEN"
                    color: "#FF6606"
                    spacing_top: true
              - type: set
                attrs:
                  id: ln0nov68
                  values:
                    type: spacer
                    padding-y: 10
            show_as_card: true
        type: row
        enabled: true
        responsive_columns: 0
    remove_spacing: true
    is_full: true
    border: false
    type: add_section
    enabled: true
    bg_toggle: false
    bg_color: "#D6D6D6"
  - id: ln0nbv3h
    columns_replicator:
      - id: ln0ncy8w
        single_col: true
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 2
                content:
                  - type: text
                    text: "Ihre Vorteile bei GWriters"
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "GWriters hat sich als renommierte Plattform für akademisches Ghostwriting etabliert. Mit einem Netzwerk aus hochqualifizierten Ghostwritern aus diversen Fachgebieten hebt sich GWriters durch Professionalität, Qualität und Seriosität deutlich von der Konkurrenz ab. Im Gegensatz zu nicht spezialisierten Vermittlungsportalen für Experten aller Art, wie z.B. Upwork.com oder Freelancer.com, unterscheiden sich die Anforderungen an einen Online Service für akademische Experten jedoch durch die Notwendigkeiten unbedingter Anonymität aller Beteiligten, juristischer Absicherung und konsequenter Qualitätskontrolle."
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "Wir verstehen die speziellen Anforderungen und Herausforderungen wissenschaftlicher Arbeiten und bieten sowohl unseren Kunden als auch unseren Ghostwritern maßgeschneiderte Lösungen. Dies ermöglicht eine effiziente und qualitativ hochwertige Zusammenarbeit auf Augenhöhe."
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
        columns_per_row: 0
      - id: ln0ng422
        columns_per_row: 2
        single_col: true
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 3
                content:
                  - type: text
                    text: "Unbedingte Anonymität und Juristische Absicherung"
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "Die Wahrung der Anonymität aller Beteiligten und eine umfassende juristische Absicherung sind unerlässlich im Bereich des akademischen "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /ghostwriting
                          rel: null
                          target: null
                          title: null
                    text: Ghostwritings
                  - type: text
                    text: ". GWriters legt großen Wert auf Diskretion und Datenschutz gemäß GDPR und dessen deutscher Umsetzung, der DSGVO, um das Vertrauen unserer Kunden zu gewinnen und zu bewahren. Zudem werden rechtliche Rahmenbedingungen stets eingehalten und durch einen individuellen Werkvertrag bei jedem Projekt festgehalten, um sowohl unsere Auftraggeber als auch Ghostwriter zu schützen."
            show_as_card: false
          - id: ln0ng6ev
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 3
                content:
                  - type: text
                    text: "Stringente Qualitätskontrolle"
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "GWriters setzt auf eine konsequente und mehrstufige Qualitätskontrolle, um ein hohes Niveau wissenschaftlicher Arbeiten sicherzustellen. Sämtliche Ghostwriter durchlaufen einen rigorosen Auswahlprozess, bei dem Diplome, Schreibproben und Lebensläufe eingehend geprüft werden. So gewährleisten wir, dass nur hochqualifizierte und erfahrene Akademiker in das Netzwerk aufgenommen werden. Dies ist nicht nur unser Anspruch an uns selber, sondern das zentrale Qualitätsversprechen, dass die Marke GWriters zu dem macht, was sie ist: eine neue Definition von Zuverlässigkeit und Qualität."
            show_as_card: false
          - id: ln0ng9e3
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 3
                content:
                  - type: text
                    text: "Internationale Präsenz und Sprachvielfalt"
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "Mit einer Präsenz in mehreren europäischen Ländern, darunter Deutschland, Schweiz und Großbritannien, bietet GWriters eine breite Palette an Sprachoptionen an. Die Möglichkeit, wissenschaftliche Ausarbeitungen in der jeweiligen Landessprache zu verfassen, ist ein weiterer Pluspunkt, der die Plattform attraktiv für ein internationales Publikum macht. für jeden fremdsprachliche Arbeit setzen wir ausschließlich muttersprachliche "
                  - type: text
                    marks:
                      - type: link
                        attrs:
                          href: /
                          rel: null
                          target: null
                          title: null
                    text: Ghostwriter
                  - type: text
                    text: .
            show_as_card: false
          - id: ln0ngang
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 3
                content:
                  - type: text
                    text: "Professionelle Abwicklung und Kundenservice"
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: "Die standardisierten Workflows und die professionelle Abwicklung aller Projekte zeugen von der Effizienz und Zuverlässigkeit von GWriters. Ein engagierter Kundenservice steht unseren Auftraggebern und unseren Experten jederzeit zur Seite, um Fragen zu klären und Unterstützung zu bieten. Dies fördert eine positive und produktive Zusammenarbeit."
            show_as_card: false
        type: row
        enabled: true
        responsive_columns: 0
      - id: ln0nii43
        single_col: true
        grid:
          - id: 7Mk8Pm7D
            bard:
              - type: heading
                attrs:
                  textAlign: left
                  level: 3
                content:
                  - type: text
                    text: "GWriters: Ihr kompetenter Partner für akademisches Ghostwriting"
              - type: paragraph
                attrs:
                  textAlign: start
                content:
                  - type: text
                    text: "GWriters definiert den Markt für akademische Ghostwriter neu durch die Kombination aus Spezialisierung, Qualität, Anonymität und internationaler Reichweite. Die Plattform steht sowohl Auftraggebern als auch Dienstleistern als verlässlicher Partner zur Seite und setzt Maßstäbe in puncto Seriosität und Professionalität im Bereich des akademischen Ghostwritings."
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
template: default
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: "0.5"
sitemap_changefreq: daily
override_twitter_settings: false
meta_title: "GWriters • Seriöse akademische Ghostwriting Agentur"
meta_description: "GWriters ist eine schnell wachsende Web-Plattform für die Vermittlung von akademischen Freelancern, z.B. Lektoren, Autoren, Übersetzern & Coaches."
page_title: "GWriters • Seriöse akademische Ghostwriting Agentur"
og_title: "GWriters • Seriöse akademische Ghostwriting Agentur"
og_description: "GWriters ist eine schnell wachsende Web-Plattform für die Vermittlung von akademischen Freelancern, z.B. Lektoren, Autoren, Übersetzern & Coaches."
og_image: GWriters-Logo.png
sitemap_active: true
breadcrumbs_active: true
---
