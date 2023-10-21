'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../theme/ThemeProvider'

const HomeContainer = () => {
  const { themeMode } = useContext(ThemeContext)
  return (
    <main className="flex items-center justify-center">
      <div className="flex">
        <div>
          <p className="text-5xl font-bold">Hello there, I'm Jim 👏</p>
          <p className="text-4xl font-medium">A software developer</p>
        </div>
        <img src={'/image/tax.svg'} className="landing-img w-[160px]" />
      </div>
    </main>
  )
}

export default HomeContainer
