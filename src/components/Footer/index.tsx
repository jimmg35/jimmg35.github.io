import { caretLeft16, caretRight16 } from '@esri/calcite-ui-icons'
import React, { useContext } from 'react'
import classNames from 'classnames'
import { LocaleContext } from '../../i18n'
import { RouteContext } from '../../route/RouteProvider'
import EsriSvgIcon from '../EsriSvgIcon'

const Footer = () => {
  const { routes, previousRoute, nextRoute, onRouteIndexChange } =
    useContext(RouteContext)
  const { pathLocaleBundle } = useContext(LocaleContext)
  return (
    <footer className="lg:hidden footer flex items-center justify-between min-h-[56px] px-4 py-2 bg-primary text-white">
      <button
        className={classNames({
          'btn capitalize font-normal text-sm btn-primary btn-sm flex items-center justify-center gap-0 flex-[0.45]':
            true,
          invisible: previousRoute === undefined
        })}
        onClick={() => {
          if (previousRoute !== undefined) onRouteIndexChange(previousRoute)
        }}
      >
        <EsriSvgIcon svg={caretLeft16} size={16} />
        {previousRoute !== undefined && (
          <span>{pathLocaleBundle[routes[previousRoute].name]}</span>
        )}
      </button>
      <button className="btn btn-sm btn-circle btn-primary flex-[0.1]">
        <img
          src={'/favicon/favicon-light-48.png'}
          width={32}
          height={32}
          alt={'J'}
        />
      </button>

      <button
        className={classNames({
          'btn capitalize font-normal text-sm btn-primary btn-sm flex items-center justify-center gap-0 flex-[0.45]':
            true,
          invisible: nextRoute === undefined
        })}
        onClick={() => {
          if (nextRoute !== undefined) onRouteIndexChange(nextRoute)
        }}
      >
        {nextRoute !== undefined && (
          <span>{pathLocaleBundle[routes[nextRoute].name]}</span>
        )}
        <EsriSvgIcon svg={caretRight16} size={16} />
      </button>
    </footer>
  )
}

export default Footer
