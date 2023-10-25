import {
  beaker16,
  beaker32,
  conferenceRoom16,
  conferenceRoom32,
  education16,
  education32,
  emailAddress16,
  emailAddress32,
  fileMagnifyingGlass16,
  fileMagnifyingGlass32,
  information16,
  information32,
  locator16,
  locator32,
  presentation16,
  presentation32,
  rasterFunctionTemplate16,
  rasterFunctionTemplate32,
  script16,
  script32
} from '@esri/calcite-ui-icons'
import React, { createContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import EsriSvgIcon from '../components/EsriSvgIcon'

export interface IRoute {
  name: string
  path: string
  icon: React.JSX.Element
  contentIcon: React.JSX.Element
}

interface IRouteContext {
  routes: IRoute[]
  currentRoute: number
  nextRoute: number | undefined
  previousRoute: number | undefined
  onRouteIndexChange: (route: number) => void
}

export const RouteContext = createContext<IRouteContext>({
  routes: [],
  currentRoute: 0,
  nextRoute: undefined,
  previousRoute: undefined,
  onRouteIndexChange: () => {}
})

const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [currentRoute, setcurrentRoute] = useState<number>(0)
  const [previousRoute, setpreviousRoute] = useState<number | undefined>(
    undefined
  )
  const [nextRoute, setnextRoute] = useState<number | undefined>(1)
  const routes: IRoute[] = [
    {
      name: 'home',
      path: '/',
      icon: <EsriSvgIcon svg={locator16} size={16} />,
      contentIcon: <EsriSvgIcon svg={locator32} size={32} />
    },
    {
      name: 'about',
      path: '/about',
      icon: <EsriSvgIcon svg={information16} size={16} />,
      contentIcon: <EsriSvgIcon svg={information32} size={32} />
    },
    {
      name: 'undergraduate',
      path: '/education/undergraduate',
      icon: <EsriSvgIcon svg={education16} size={16} />,
      contentIcon: <EsriSvgIcon svg={education32} size={32} />
    },
    {
      name: 'graduate',
      path: '/education/graduate',
      icon: <EsriSvgIcon svg={education16} size={16} />,
      contentIcon: <EsriSvgIcon svg={education32} size={32} />
    },
    {
      name: 'phd',
      path: '/education/phd',
      icon: <EsriSvgIcon svg={education16} size={16} />,
      contentIcon: <EsriSvgIcon svg={education32} size={32} />
    },
    {
      name: 'research',
      path: '/experience/research',
      icon: <EsriSvgIcon svg={beaker16} size={16} />,
      contentIcon: <EsriSvgIcon svg={beaker32} size={32} />
    },
    {
      name: 'work',
      path: '/experience/work',
      icon: <EsriSvgIcon svg={fileMagnifyingGlass16} size={16} />,
      contentIcon: <EsriSvgIcon svg={fileMagnifyingGlass32} size={32} />
    },
    {
      name: 'conference',
      path: '/publications/conference',
      icon: <EsriSvgIcon svg={script16} size={16} />,
      contentIcon: <EsriSvgIcon svg={script32} size={32} />
    },
    {
      name: 'journal',
      path: '/publications/journal',
      icon: <EsriSvgIcon svg={conferenceRoom16} size={16} />,
      contentIcon: <EsriSvgIcon svg={conferenceRoom32} size={32} />
    },
    {
      name: 'presentation',
      path: '/publications/presentation',
      icon: <EsriSvgIcon svg={presentation16} size={16} />,
      contentIcon: <EsriSvgIcon svg={presentation32} size={32} />
    },
    {
      name: 'skills',
      path: '/skills',
      icon: <EsriSvgIcon svg={rasterFunctionTemplate16} size={16} />,
      contentIcon: <EsriSvgIcon svg={rasterFunctionTemplate32} size={32} />
    },
    {
      name: 'contact',
      path: '/contact',
      icon: <EsriSvgIcon svg={emailAddress16} size={16} />,
      contentIcon: <EsriSvgIcon svg={emailAddress32} size={32} />
    }
  ]
  const router = useRouter()

  const getIndexByName = (path: string) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].name === path) {
        return i
      }
    }
    return -1
  }

  const trimSpecificCharacters = (str: string, charToRemove: string) => {
    const regex = new RegExp(`^${charToRemove}+|${charToRemove}+$`, 'g')
    return str.replace(regex, '')
  }

  const handleRouteChange = (route: number) => {
    const previous_route = route - 1
    const next_route = route + 1
    if (previous_route < 0) {
      setpreviousRoute(undefined)
    } else {
      setpreviousRoute(previous_route)
    }
    if (next_route >= routes.length) {
      setnextRoute(undefined)
    } else {
      setnextRoute(next_route)
    }
    setcurrentRoute(route)
    router.push(routes[route].path)
  }

  useEffect(() => {
    if (pathname === '/') {
      handleRouteChange(0)
      return
    }
    const newpaths = trimSpecificCharacters(pathname, '/').split('/')
    const index = getIndexByName(newpaths[newpaths.length - 1])
    handleRouteChange(index)
  }, [pathname])

  return (
    <RouteContext.Provider
      value={{
        routes,
        currentRoute,
        nextRoute,
        previousRoute,
        onRouteIndexChange: handleRouteChange
      }}
    >
      {children}
    </RouteContext.Provider>
  )
}

export default RouteProvider
