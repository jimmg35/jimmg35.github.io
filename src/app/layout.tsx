'use client'

import React, { useContext, useState } from 'react'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import ThemeProvider, { ThemeContext } from '../theme/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootEntry = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useContext(ThemeContext)
  return (
    <html lang="en" data-theme={themeMode}>
      <head>
        <title>My name is Jim. 👏</title>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <RootEntry children={children} />
    </ThemeProvider>
  )
}

export default RootLayout
