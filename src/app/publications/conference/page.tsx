'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Conference = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.conference}</p>
    </main>
  )
}

export default Conference
