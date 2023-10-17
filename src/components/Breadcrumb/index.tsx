import { locator16 } from '@esri/calcite-ui-icons'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import useLocale from '../../i18n'
import EsriSvgIcon from '../EsriSvgIcon'

const Breadcrumb = () => {
  const { t, locale, switchLocale } = useLocale({})
  const pathname = usePathname()
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

    const paths = trimSpecificCharacters(pathname, '/')
      .split('/')
      .map((p) => t.nav.burger.about)
    setpaths(paths)
  }, [pathname, locale])

  useEffect(() => {
    console.log(locale)
  }, [locale])

  return (
    <div className="text-sm breadcrumbs bg-[#0055bd] text-white py-4 flex items-center justify-center">
      <ul>
        {paths.map((path, index) => {
          return (
            <li key={index}>
              <a className="gap-1">
                <EsriSvgIcon svg={locator16} size={16} />
                {t.nav.burger.home}
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
