'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Phd = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.phd}</p>
    </main>
  )
}

export default Phd
