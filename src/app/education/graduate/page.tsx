'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Graduate = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.graduate}</p>
    </main>
  )
}

export default Graduate
