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
          'flex flex-col gap-8 p-8 lg:p-16 rounded-xl bg-opacity-80': true,
          'bg-black': themeMode === 'dark',
          'bg-white': themeMode !== 'dark'
        })}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center ">
          <div className="avatar online">
            <div className="rounded-full w-32 border border-zinc-400">
              <img src={'/image/oh-crap.jpg'} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl lg:text-5xl font-bold">{t.home.greet} 👏</p>
            <p className="text-lg lg:text-4xl font-medium">
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
        </div>
        <div>
          <button className="btn btn-sm lg:btn lg:btn-primary btn-primary mr-4">
            {t.home.aboutMeBtn}
          </button>
          <button className="btn btn-sm lg:btn lg:btn-accent btn-accent">
            {t.home.cvBtn}
          </button>
        </div>
      </div>
    </main>
  )
}

export default HomeContainer
