import {
  brightness24,
  hamburger24,
  language24,
  moon24
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
              <a>{t.nav.burger.home}</a>
            </li>
            <li>
              <a>{t.nav.burger.about}</a>
            </li>
            <li>
              <a>{t.nav.burger.education}</a>
              <ul className="p-2">
                <li>
                  <a>{t.nav.burger.undergraduate}</a>
                </li>
                <li>
                  <a>{t.nav.burger.graduate}</a>
                </li>
                <li>
                  <a>{t.nav.burger.phd}</a>
                </li>
              </ul>
            </li>
            <li>
              <a>{t.nav.burger.experience}</a>
              <ul className="p-2">
                <li>
                  <a>{t.nav.burger.research}</a>
                </li>
                <li>
                  <a>{t.nav.burger.work}</a>
                </li>
              </ul>
            </li>
            <li>
              <a>{t.nav.burger.publications}</a>
            </li>
            <li>
              <a>{t.nav.burger.skills}</a>
            </li>
            <li>
              <a>{t.nav.burger.contact}</a>
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
