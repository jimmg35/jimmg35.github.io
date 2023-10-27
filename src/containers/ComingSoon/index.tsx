'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../theme/ThemeProvider'

const ComingSoon = () => {
  const { themeMode } = useContext(ThemeContext)
  return (
    <main className="flex flex-col items-center justify-center coming-background">
      <div
        className={classNames({
          'flex flex-col gap-8 p-8 lg:p-16 rounded-xl': true
          // 'bg-black bg-opacity-60': themeMode === 'dark',
          // 'bg-white bg-opacity-90': themeMode !== 'dark'
        })}
      >
        <iframe src="https://giphy.com/embed/xZsLh7B3KMMyUptD9D"></iframe>
        <p className="text-3xl font-bold">Site is still under construction</p>
      </div>
    </main>
  )
}

export default ComingSoon
