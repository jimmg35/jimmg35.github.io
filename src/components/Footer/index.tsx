import { caretLeft16, caretRight16 } from '@esri/calcite-ui-icons'
import React from 'react'
import EsriSvgIcon from '../EsriSvgIcon'

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-between min-h-[56px] px-4 py-2 bg-primary text-white">
      <button className="btn capitalize font-normal text-sm btn-primary btn-sm flex items-center justify-center">
        <EsriSvgIcon svg={caretLeft16} size={16} />
        <span>button</span>
      </button>

      <button className="btn btn-sm btn-circle btn-primary">
        <img
          src={'/favicon/favicon-light-48.png'}
          width={32}
          height={32}
          alt={'J'}
        />
      </button>

      <button className="btn capitalize font-normal text-sm btn-primary btn-sm flex items-center justify-center">
        <span>button</span>
        <EsriSvgIcon svg={caretRight16} size={16} />
      </button>
    </footer>
  )
}

export default Footer
