'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { LocaleContext } from '../../i18n'
import { ThemeContext } from '../../theme/ThemeProvider'

const HomeContainer = () => {
  const { themeMode } = useContext(ThemeContext)
  const { t } = useContext(LocaleContext)
  return (
    <main className="flex flex-col items-center justify-center landing-background">
      <div
        className={classNames({
          'flex flex-col gap-8 p-16 rounded-xl bg-opacity-80 border border-zinc-600':
            true,
          'bg-black': themeMode === 'dark',
          'bg-white': themeMode !== 'dark'
        })}
      >
        <div className="flex items-center gap-16">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-bold">{t.home.greet} 👏</p>
            <p className="text-4xl font-medium">
              A{' '}
              <span className="border-r-4 border-r-white pr-5 text-white">
                software developer
              </span>
            </p>
          </div>
          <div className="avatar online ">
            <div className="rounded-full w-32 border border-zinc-400">
              <img src={'/image/oh-crap.jpg'} />
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary mr-4">About me</button>
          <button className="btn  btn-accent">C.V. & Resume</button>
        </div>
      </div>
    </main>
  )
}

export default HomeContainer
