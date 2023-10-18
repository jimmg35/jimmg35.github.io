'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Undergraduate = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.undergraduate}</p>
    </main>
  )
}

export default Undergraduate
