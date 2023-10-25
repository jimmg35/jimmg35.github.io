'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import ContentSection from '../../components/ContentSection'
import { LocaleContext } from '../../i18n'
import { RouteContext } from '../../route/RouteProvider'
import { ThemeContext } from '../../theme/ThemeProvider'

const AboutContainer = () => {
  const { themeMode } = useContext(ThemeContext)
  const { t, locale } = useContext(LocaleContext)
  const { routes, currentRoute } = useContext(RouteContext)
  const router = useRouter()
  return (
    <main className="flex flex-col items-center justify-center ">
      <ContentSection
        title={routes[currentRoute].name}
        icon={routes[currentRoute].icon}
      >
        <p>asdasd</p>
      </ContentSection>
    </main>
  )
}

export default AboutContainer
