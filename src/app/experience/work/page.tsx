'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Work = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{t.nav.burger.work}</p>
    </main>
  )
}

export default Work
