'use client'

import React, { useContext } from 'react'
import { Inter } from 'next/font/google'
import Breadcrumb from '../components/Breadcrumb'
import NavBar from '../components/NavBar'
import ThemeProvider, { ThemeContext } from '../theme/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

interface IRootEntry {
  children: React.ReactNode
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

const RootEntry = ({ children }: IRootEntry) => {
  const { themeMode } = useContext(ThemeContext)
  return (
    <html lang="en" data-theme={themeMode}>
      <head>
        <title>{`I'm Jim. 👏`}</title>
        <link
          href="/favicon/favicon-dark-16.png"
          sizes="16x16"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon/favicon-dark-32.png"
          sizes="32x32"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon/favicon-dark-48.png"
          sizes="48x48"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon/favicon-dark-64.png"
          sizes="64x64"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon/favicon-dark-96.png"
          sizes="96x96"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />

        <link
          href="/favicon/favicon-light-16.png"
          sizes="16x16"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="/favicon/favicon-light-32.png"
          sizes="32x32"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="/favicon/favicon-light-48.png"
          sizes="48x48"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="/favicon/favicon-light-64.png"
          sizes="64x64"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="/favicon/favicon-light-96.png"
          sizes="96x96"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={inter.className}>
        <Wrapper>
          <NavBar />
          <Breadcrumb />
          {children}
        </Wrapper>
      </body>
    </html>
  )
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <RootEntry>{children}</RootEntry>
    </ThemeProvider>
  )
}

export default RootLayout
