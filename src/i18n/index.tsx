import React, {useState} from "react"
import langEn from "./en"
import langZh from "./zh"
import langRu from "./ru"

export type Locale = 'en' | 'zh' | 'ru'

export interface ILocalePackage {
  schema: Locale
  nav: {
    title: string
  }
}

const localeBundle = {
  'en': langEn,
  'zh': langZh,
  'ru': langRu
}

const useLocale = ({
 defaultLocale = 'en'
}: {
  defaultLocale?: Locale
}) => {
  const [locale, setlocale] = useState<Locale>(defaultLocale)
  const [t, sett] = useState<ILocalePackage>(localeBundle[defaultLocale])

  const switchLocale = (locale: Locale) => {
    setlocale(locale)
    sett(localeBundle[locale])
  }

  return {t, locale, switchLocale}

}

export default useLocale