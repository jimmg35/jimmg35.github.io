import React, { createContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export interface IRoute {
  name: string
  path: string
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
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'undergraduate', path: '/education/undergraduate' },
    { name: 'graduate', path: '/education/graduate' },
    { name: 'phd', path: '/education/phd' },
    { name: 'research', path: '/experience/research' },
    { name: 'work', path: '/experience/work' },
    { name: 'conference', path: '/publications/conference' },
    { name: 'journal', path: '/publications/journal' },
    { name: 'presentation', path: '/publications/presentation' },
    { name: 'skills', path: '/skills' },
    { name: 'contact', path: '/contact' }
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