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

  const switchLocale = (locale: Locale) => {
    setlocale(locale)
    sett(localeBundle[locale])
  }

  return { t, locale, switchLocale }
}

interface ILocaleContext {
  t: ILocalePackage
  locale: Locale
  switchLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<ILocaleContext>({
  t: langEn,
  locale: 'en',
  switchLocale: () => {}
})

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const { t, locale, switchLocale } = useLocale({ defaultLocale: 'en' })

  return (
    <LocaleContext.Provider
      value={{
        t,
        locale,
        switchLocale
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
