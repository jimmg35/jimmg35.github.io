import {
  beaker16,
  bookmark16,
  brightness24,
  education16,
  emailAddress16,
  fileMagnifyingGlass16,
  hamburger24,
  information16,
  language24,
  locator16,
  moon24,
  paste16,
  rasterFunction16,
  rasterFunctionTemplate16
} from '@esri/calcite-ui-icons'
import React, { useContext } from 'react'
import classNames from 'classnames'
import useLocale from '../../i18n'
import { ThemeContext } from '../../theme/ThemeProvider'
import EsriSvgIcon from '../EsriSvgIcon'

const NavBar = () => {
  const { themeMode, onThemeChange } = useContext(ThemeContext)
  const { t, locale, switchLocale } = useLocale({})
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <EsriSvgIcon svg={hamburger24} size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <EsriSvgIcon svg={locator16} size={16} />
                {t.nav.burger.home}
              </a>
            </li>
            <li>
              <a>
                <EsriSvgIcon svg={information16} size={16} />
                {t.nav.burger.about}
              </a>
            </li>
            <li>
              <details>
                <summary>
                  <EsriSvgIcon svg={education16} size={16} />
                  {t.nav.burger.education}
                </summary>
                <ul className="p-2">
                  <li>
                    <a>
                      <EsriSvgIcon svg={education16} size={16} />
                      {t.nav.burger.undergraduate}
                    </a>
                  </li>
                  <li>
                    <a>
                      <EsriSvgIcon svg={education16} size={16} />
                      {t.nav.burger.graduate}
                    </a>
                  </li>
                  <li>
                    <a>
                      <EsriSvgIcon svg={education16} size={16} />
                      {t.nav.burger.phd}
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <EsriSvgIcon svg={paste16} size={16} />
                  {t.nav.burger.experience}
                </summary>
                <ul className="p-2">
                  <li>
                    <a>
                      <EsriSvgIcon svg={beaker16} size={16} />
                      {t.nav.burger.research}
                    </a>
                  </li>
                  <li>
                    <a>
                      <EsriSvgIcon svg={fileMagnifyingGlass16} size={16} />
                      {t.nav.burger.work}
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>
                <EsriSvgIcon svg={bookmark16} size={16} />
                {t.nav.burger.publications}
              </a>
            </li>
            <li>
              <a>
                <EsriSvgIcon svg={rasterFunctionTemplate16} size={16} />
                {t.nav.burger.skills}
              </a>
            </li>
            <li>
              <a>
                <EsriSvgIcon svg={emailAddress16} size={16} />
                {t.nav.burger.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">{t.nav.title}</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <EsriSvgIcon svg={language24} size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                className={classNames({
                  ['active']: locale === 'en'
                })}
                onClick={() => {
                  switchLocale('en')
                }}
              >
                <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                  EN
                </span>
                English
              </button>
            </li>
            <li>
              <button
                className={classNames({
                  ['active']: locale === 'zh'
                })}
                onClick={() => {
                  switchLocale('zh')
                }}
              >
                <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                  ZH
                </span>
                繁體中文
              </button>
            </li>
            <li>
              <button
                className={classNames({
                  ['active']: locale === 'ru'
                })}
                onClick={() => {
                  switchLocale('ru')
                }}
              >
                <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                  RU
                </span>
                Русский
              </button>
            </li>
          </ul>
        </div>
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
