'use client'

import React, { useContext } from 'react'
import ContentSection from '../../components/ContentSection'
import Paragraph from '../../components/ContentSection/Paragraph'
import { LocaleContext } from '../../i18n'
import { RouteContext } from '../../route/RouteProvider'
import { ThemeContext } from '../../theme/ThemeProvider'

const AboutContainer = () => {
  const {} = useContext(ThemeContext)
  const { pathLocaleBundle } = useContext(LocaleContext)
  const { routes, currentRoute } = useContext(RouteContext)
  return (
    <main className="py-0 overflow-auto px-0 lg:px-64 lg:py-20">
      <ContentSection
        title={pathLocaleBundle[routes[currentRoute].name]}
        icon={routes[currentRoute].contentIcon}
      >
        <Paragraph>
          {`Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.`}
        </Paragraph>
      </ContentSection>
    </main>
  )
}

export default AboutContainer
