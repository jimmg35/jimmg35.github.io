import React, { useContext } from 'react'
import classNames from 'classnames'
import { LocaleContext } from '../../i18n'
import { RouteContext } from '../../route/RouteProvider'

const PageRouter = () => {
  const { routes, previousRoute, nextRoute, onRouteIndexChange } =
    useContext(RouteContext)
  const { pathLocaleBundle } = useContext(LocaleContext)
  return (
    <div className="invisible lg:visible w-screen h-16 px-4 absolute top-[50dvh] flex justify-between items-center">
      <div
        className={classNames({
          'tooltip tooltip-right': true,
          invisible: previousRoute === undefined
        })}
        data-tip={previousRoute && pathLocaleBundle[routes[previousRoute].name]}
      >
        <a
          className="btn btn-circle btn-primary text-2xl"
          onClick={() => {
            if (previousRoute !== undefined) onRouteIndexChange(previousRoute)
          }}
        >
          ❮
        </a>
      </div>

      <div
        className={classNames({
          'tooltip tooltip-left': true,
          invisible: nextRoute === undefined
        })}
        data-tip={nextRoute && pathLocaleBundle[routes[nextRoute].name]}
      >
        <a
          className="btn btn-circle btn-primary text-2xl"
          onClick={() => {
            if (nextRoute !== undefined) onRouteIndexChange(nextRoute)
          }}
        >
          ❯
        </a>
      </div>
    </div>
  )
}

export default PageRouter
