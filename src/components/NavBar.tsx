"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

const links = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/Men",
        label: "men"
    },
    {
        href: "/Women",
        label: "women"
    },
    {
        href: "/Teens",
        label: "Teens"
    }
]

const NavBar = () => {
    const {handleCartClick}=useShoppingCart()
    const pathname = usePathname()
    return (
        <header className='w-full mb-8 border-b'>
            <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
                <Link href={"/"}>
                    <h1 className='text-2xl md:text-4xl font-bold'>Swift <span className='text-primary'>Deal</span></h1>
                </Link>
                <nav className='hidden lg:flex gap-12'>
                    {links.map((link) => (
                        <div key={link.href}>
                            {
                                pathname === link.href ? (
                                    <span className='text-primary'>{link.label}</span>
                                ) : (
                                    <Link
                                        className='text-gray-600 hover:text-primary'
                                        href={link.href}>{link.label}</Link>
                                )
                            }
                        </div>
                    ))}
                </nav>
                <div className='flex divide-x border-r  sm:border-l'>
                    <Button
                        onClick={handleCartClick}
                     variant={"outline"} className='flex flex-col gap-y-1.5 h-12
                            w-12 sm:w-20 md:h-24 m:w-24 rounded-none'>
                        <ShoppingBag />
                        <span className='hidden text-xs s font-semibold text-gray-500 sm:block'>
                            Cart
                        </span>
                    </Button>
                </div>
            </div>

        </header>
    )
}

export default NavBar
