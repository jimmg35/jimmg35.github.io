'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../theme/ThemeProvider'

const HomeContainer = () => {
  const { themeMode } = useContext(ThemeContext)
  return (
    <main className="flex flex-col items-center justify-center landing-background">
      <div
        className={classNames({
          'p-16 rounded-xl bg-opacity-80 border border-zinc-600': true,
          'bg-black': themeMode === 'dark',
          'bg-white': themeMode !== 'dark'
        })}
      >
        <div className="flex items-center gap-16">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-bold">Hello there, I'm Jim 👏</p>
            <p className="text-4xl font-medium">A software developer</p>
          </div>
          <img
            src={'/image/tax.svg'}
            className={classNames({
              'w-[160px]': true,
              'landing-img': themeMode === 'dark',
              'landing-img-dark': themeMode !== 'dark'
            })}
          />
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
