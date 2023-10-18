'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../i18n'

export default function About() {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.about}</p>
    </main>
  )
}
