import React from 'react'
import Logo from '../Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'
import NavSeaarch from '../NavSeaarch/NavSeaarch'

export default function NavBar() {
  return (
    <div className="nav-bar w-full h-20 flex justify-between bg-white z-50">
    <Logo LogoUrl={'./logo.png'} brandName={'TikTiki'} />
    <NavSeaarch />
    <NavMenu />
    </div>
  )
}
