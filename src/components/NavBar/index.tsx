import { brightness24, moon24 } from '@esri/calcite-ui-icons'
import { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider'
import EsriSvgIcon from '../EsriSvgIcon'

const NavBar = () => {
  const { themeMode, onThemeChange } = useContext(ThemeContext)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Jim Chang</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => {
            if (themeMode === 'dark') {
              onThemeChange('light')
              return
            }
            onThemeChange('dark')
          }}
        >
          <div className="indicator">
            {themeMode === 'light' ? (
              <EsriSvgIcon svg={moon24} size={24} />
            ) : (
              <EsriSvgIcon svg={brightness24} size={24} />
            )}
          </div>
        </button>
      </div>
    </div>
  )
}

export default NavBar
