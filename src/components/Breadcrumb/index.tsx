import {
  beaker16,
  bookmark16,
  conferenceRoom16,
  education16,
  emailAddress16,
  fileMagnifyingGlass16,
  information16,
  locator16,
  paste16,
  presentation16,
  rasterFunctionTemplate16,
  script16
} from '@esri/calcite-ui-icons'
import React, { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LocaleContext } from '../../i18n'
import EsriSvgIcon from '../EsriSvgIcon'

const pathIcons: { [key: string]: string } = {
  home: locator16,
  about: information16,
  education: education16,
  undergraduate: education16,
  graduate: education16,
  phd: education16,
  experience: paste16,
  research: beaker16,
  work: fileMagnifyingGlass16,
  publications: bookmark16,
  journal: script16,
  conference: conferenceRoom16,
  presentation: presentation16,
  skills: rasterFunctionTemplate16,
  contact: emailAddress16
}

const Breadcrumb = () => {
  const pathname = usePathname()
  const { locale, pathLocaleBundle } = useContext(LocaleContext)
  const [paths, setpaths] = useState<string[]>([])

  const trimSpecificCharacters = (str: string, charToRemove: string) => {
    const regex = new RegExp(`^${charToRemove}+|${charToRemove}+$`, 'g')
    return str.replace(regex, '')
  }

  useEffect(() => {
    if (pathname === '/') {
      setpaths(['home'])
      return
    }
    const newpaths = trimSpecificCharacters(pathname, '/').split('/')
    setpaths(newpaths)
  }, [pathname, locale])

  return (
    <div className="text-sm breadcrumbs bg-primary text-white py-4 flex items-center justify-center">
      <ul>
        {paths.map((path, index) => {
          return (
            <li key={index}>
              <a className="gap-1">
                <EsriSvgIcon svg={pathIcons[path.toLowerCase()]} size={16} />
                {pathLocaleBundle[path]}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
