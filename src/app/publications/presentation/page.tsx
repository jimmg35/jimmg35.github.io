'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Presentation = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.presentation}</p>
    </main>
  )
}

export default Presentation
