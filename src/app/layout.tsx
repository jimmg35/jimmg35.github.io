'use client'

import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [theme, settheme] = useState('light')
  return (
    <html lang="en" data-theme={theme}>
      <head>
        <title>My name is Jim. 👏</title>
      </head>
      <body className={inter.className}>
        {children}
        <div
          onClick={() => {
            settheme('dark')
          }}
        >
          www
        </div>
      </body>
    </html>
  )
}
