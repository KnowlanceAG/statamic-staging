export const service = {
  de: {
    Ghostwriting: { price: 100 },
    Textüberarbeitung: { price: 75 },
    Lektorat: { price: 22 },
    Korrektorat: { price: 10 },
    Übersetzung: { price: 60 },
    Plagiatsprüfung: { price: 180, fixed: true }
  },
  ch: {
    Ghostwriting: { price: 110 },
    Textüberarbeitung: { price: 82 },
    Lektorat: { price: 25 },
    Korrektorat: { price: 12 },
    Übersetzung: { price: 67 },
    Plagiatsprüfung: { price: 180, fixed: true }
  }
}

export const specialField = {
  'ohne Fachbezug': 1,
  Wirtschaft: 1.1,
  'Jura/Recht': 1.2,
  Informatik: 1.3,
  Naturwissenschaften: 1.2,
  Geisteswissenschaften: 1,
  Sozialwissenschaften: 1,
  'Medizin/Zahnmedizin': 1.2,
  Architektur: 1.3,
  Ingenieurwissenschaften: 1.3,
  Sportwissenschaften: 1,
  Psychologie: 1.1,
  'Politik- / Geschichtswissenschaften': 1.0,
  'Sonstige Fachbereiche': 1.1
}

export const qualityLevel = {
  Economy: 0.85,
  Business: 0.90,
  Academic: 1.00
}

export const qualityDescription = {
  Economy: 'Blog Artikel, SEO Texte etc.',
  Business: 'Ratgeber, Sachbücher, Biografien etc.',
  Academic: 'Wissenschaftliche Arbeiten'
}

export const timeType = [{ Tage: 1 }, { Wochen: 7 }, { Monate: 30 }]

export const pagesPerDay = [
  { threshold: 2, value: 1 },
  { threshold: 6, value: 1.2 },
  { threshold: 12, value: 1.6 },
  { threshold: 20, value: 2 },
  { threshold: 30, value: 3 },
  { threshold: 50, value: 5 }
]

export const pageFactor = [
  { threshold: 10, value: 1 },
  { threshold: 20, value: 1.01 },
  { threshold: 50, value: 1.02 },
  { threshold: 100, value: 1.03 },
  { threshold: 200, value: 1.04 },
  { threshold: 300, value: 1.05 },
  { threshold: 10000, value: 1.05 }
]

export const options = {
  service,
  specialField,
  qualityLevel,
  qualityDescription,
  timeType,
  pagesPerDay,
  pageFactor
}
