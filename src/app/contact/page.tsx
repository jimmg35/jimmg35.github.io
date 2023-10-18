'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../i18n'

export default function Contact() {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.contact}</p>
    </main>
  )
}
