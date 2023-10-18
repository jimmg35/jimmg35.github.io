'use client'

import React, { useContext } from 'react'
import { LocaleContext } from '../../../i18n'

const Undergraduate = () => {
  const { t } = useContext(LocaleContext)
  return (
    <main>
      <p>{'under'}</p>
    </main>
  )
}

export default Undergraduate
