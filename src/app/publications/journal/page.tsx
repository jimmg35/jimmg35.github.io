'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Journal = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.journal}</p>
    </main>
  )
}

export default Journal
