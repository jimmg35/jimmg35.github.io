import React from 'react'

interface IEsriSvgIcon {
  size: number
  svg: string
}

const EsriSvgIcon = ({ size, svg }: IEsriSvgIcon) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      fill="none"
      viewBox={`0 0 ${size} ${size}`}
      stroke="currentColor"
    >
      <path d={svg} />
    </svg>
  )
}

export default EsriSvgIcon
