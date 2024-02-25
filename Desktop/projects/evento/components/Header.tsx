"use client"


import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const routes = [
{
    name:"Home",
    path:"/"
},

{
  name:"All Events",
  path:"/events/all"
}
]

export default function Header() {

  const activePathName = usePathname()
  return (
    <header className='flex items-center h-14 justify-between border-b border-white/10 px-3 sm:px-9'>
        <Logo/>
        <nav>
          <ul className='flex gap-x-6 text-sm'>
            {routes.map(route => (<li className={clsx("hover:text-white transition", {
              "text-white" : activePathName === route.path,
              "text-white/50":activePathName !== route.path
            })}key={route.path}>
            <Link href={route.path}>{route.name}</Link>
            </li>))}
          </ul>
        </nav>
    </header>
  )
}
