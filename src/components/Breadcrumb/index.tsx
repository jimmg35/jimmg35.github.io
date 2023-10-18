import { locator16 } from '@esri/calcite-ui-icons'
import React, { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LocaleContext } from '../../i18n'
import EsriSvgIcon from '../EsriSvgIcon'

const Breadcrumb = () => {
  const pathname = usePathname()
  const { t, locale, pathLocaleBundle } = useContext(LocaleContext)
  const [paths, setpaths] = useState<string[]>([])

  const trimSpecificCharacters = (str: string, charToRemove: string) => {
    const regex = new RegExp(`^${charToRemove}+|${charToRemove}+$`, 'g')
    return str.replace(regex, '')
  }

  useEffect(() => {
    if (pathname === '/') {
      setpaths([t.nav.burger.home])
      return
    }

    const newpaths = trimSpecificCharacters(pathname, '/')
      .split('/')
      .map((p) => pathLocaleBundle[p])
    setpaths(newpaths)

    console.log(newpaths)
  }, [pathname, locale])

  return (
    <div className="text-sm breadcrumbs bg-[#0055bd] text-white py-4 flex items-center justify-center">
      <ul>
        {paths.map((path, index) => {
          return (
            <li key={index}>
              <a className="gap-1">
                <EsriSvgIcon svg={locator16} size={16} />
                {path}
              </a>
            </li>
          )
        })}
        {/* <li>
          <a className="gap-1">
            <EsriSvgIcon svg={locator16} size={16} />
            {t.nav.burger.home}
          </a>
        </li> */}
      </ul>
    </div>
  )
}

export default Breadcrumb
