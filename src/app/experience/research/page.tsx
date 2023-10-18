'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Research = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.research}</p>
    </main>
  )
}

export default Research
