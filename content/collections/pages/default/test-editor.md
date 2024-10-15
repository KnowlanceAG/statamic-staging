---
id: 440d37a0-43d8-493b-8ae3-8033f5703e77
blueprint: pages
title: Test Editor
teaser:
  - type: paragraph
    attrs:
      textAlign: left
    content:
      - type: text
        text: 'Dies ist ein '
      - type: text
        marks:
          - type: bold
          - type: textColor
            attrs:
              color: orange-500
        text: neuer
      - type: text
        text: ' Text.'
  - type: paragraph
    attrs:
      textAlign: left
    content:
      - type: text
        text: 'Dies ist ein '
      - type: text
        marks:
          - type: link
            attrs:
              href: https://uscreen.de
              rel: noopener
              target: _blank
              title: Link zu uscreen
        text: Link
      - type: text
        text: .
  - type: paragraph
    attrs:
      textAlign: left
  - type: paragraph
    attrs:
      textAlign: left
    content:
      - type: text
        marks:
          - type: link
            attrs:
              href: https://www.uscreen.de
              rel: null
              target: _blank
              title: Uscreen
        text: Neuer Link
sitemap_active: true
breadcrumbs_active: true
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: '0.5'
sitemap_changefreq: daily
override_twitter_settings: false
updated_by: 790b1007-849c-4144-9e78-237388f0c603
updated_at: 1705405081
replicator:
  - id: lq16ufkr
    columns_replicator:
      - id: lq16uh50
        single_col: false
        grid:
          - id: VEzrZvzS
            bard:
              - type: paragraph
                attrs:
                  textAlign: left
                content:
                  - type: text
                    text: Dies ist ein anderer Text.
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
jumpmark: test@uscreen.de
---
