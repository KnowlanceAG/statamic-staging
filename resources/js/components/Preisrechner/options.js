export const service = {
  de: {
    Ghostwriting: { price: 90 },
    Textredaktion: { price: 50 },
    Lektorat: { price: 18 },
    Korrektorat: { price: 5 },
    Übersetzung: { price: 60 },
    Plagiatsprüfung: { price: 100, fixed: true }
  },
  ch: {
    Ghostwriting: { price: 100 },
    Textredaktion: { price: 56 },
    Lektorat: { price: 20 },
    Korrektorat: { price: 5.6 },
    Übersetzung: { price: 67 },
    Plagiatsprüfung: { price: 110, fixed: true }
  }
}

export const specialField = {
  'ohne Fachbezug': 1,
  Wirtschaft: 1,
  'Jura/Recht': 1.1,
  Informatik: 1.1,
  Naturwissenschaften: 1.07,
  Geisteswissenschaften: 1,
  Sozialwissenschaften: 1,
  'Medizin/Zahnmedizin': 1.1,
  Architektur: 1.06,
  Ingenieurwissenschaften: 1.1,
  Sportwissenschaften: 1,
  'Sonstige Fachbereiche': 1
}

export const qualityLevel = {
  Economy: 0.89,
  Business: 1,
  Academic: 1.18
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
