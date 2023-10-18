import React, { createContext, useState } from 'react'
import langEn from './en'
import langRu from './ru'
import langZh from './zh'

export type Locale = 'en' | 'zh' | 'ru'

export interface ILocalePackage {
  schema: Locale
  nav: {
    title: string
    burger: {
      home: string
      about: string
      education: string
      undergraduate: string
      graduate: string
      phd: string
      experience: string
      research: string
      work: string
      publications: string
      journal: string
      conference: string
      presentation: string
      skills: string
      contact: string
    }
  }
}

const localeBundle = {
  en: langEn,
  zh: langZh,
  ru: langRu
}

export const useLocale = ({
  defaultLocale = 'en'
}: {
  defaultLocale: Locale | undefined
}) => {
  const [locale, setlocale] = useState<Locale>(defaultLocale)
  const [t, sett] = useState<ILocalePackage>(localeBundle[defaultLocale])

  const pathLocaleBundle: { [key: string]: string } = {
    home: t.nav.burger.home,
    about: t.nav.burger.about,
    education: t.nav.burger.education,
    undergraduate: t.nav.burger.undergraduate,
    graduate: t.nav.burger.graduate,
    phd: t.nav.burger.phd,
    experience: t.nav.burger.experience,
    research: t.nav.burger.research,
    work: t.nav.burger.work,
    publications: t.nav.burger.publications,
    journal: t.nav.burger.journal,
    conference: t.nav.burger.conference,
    presentation: t.nav.burger.presentation,
    skills: t.nav.burger.skills,
    contact: t.nav.burger.contact
  }

  const switchLocale = (locale: Locale) => {
    setlocale(locale)
    sett(localeBundle[locale])
  }

  return { t, locale, pathLocaleBundle, switchLocale }
}

interface ILocaleContext {
  t: ILocalePackage
  locale: Locale
  pathLocaleBundle: { [key: string]: string }
  switchLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<ILocaleContext>({
  t: langEn,
  locale: 'en',
  pathLocaleBundle: {},
  switchLocale: () => {}
})

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const { t, locale, pathLocaleBundle, switchLocale } = useLocale({
    defaultLocale: 'en'
  })

  return (
    <LocaleContext.Provider
      value={{
        t,
        locale,
        pathLocaleBundle,
        switchLocale
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
