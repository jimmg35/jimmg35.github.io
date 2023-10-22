'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { LocaleContext } from '../../i18n'
import { ThemeContext } from '../../theme/ThemeProvider'

const HomeContainer = () => {
  const { themeMode } = useContext(ThemeContext)
  const { t, locale } = useContext(LocaleContext)
  return (
    <main className="flex flex-col items-center justify-center landing-background">
      <div
        className={classNames({
          'flex flex-col gap-8 p-16 rounded-xl bg-opacity-80': true,
          'bg-black': themeMode === 'dark',
          'bg-white': themeMode !== 'dark'
        })}
      >
        <div className="flex items-center gap-16">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-bold">{t.home.greet} 👏</p>
            <p className="text-4xl font-medium">
              {t.home.aug}{' '}
              <span
                className={classNames({
                  'font-extrabold': true,
                  'type-en': locale === 'en',
                  'type-zh': locale === 'zh',
                  'type-ru': locale === 'ru',
                  'text-white': themeMode === 'dark',
                  'text-black': themeMode === 'light'
                })}
              ></span>
            </p>
          </div>
          <div className="avatar online ">
            <div className="rounded-full w-32 border border-zinc-400">
              <img src={'/image/oh-crap.jpg'} />
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary mr-4">{t.home.aboutMeBtn}</button>
          <button className="btn btn-accent">{t.home.cvBtn}</button>
        </div>
      </div>
    </main>
  )
}

export default HomeContainer
