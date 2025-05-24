"use client"

import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuSidebar from "./Menu-sidebar";

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/features", children: "Features" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact" }
]

export default function Menu() {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <header className="w-full bg-[#005B8F]">
            <div className="mx-auto h-20 max-w-[1200px] px-8 flex justify-between">
                <Link href="/">
                    <Image 
                        src="/logo.png"
                        height={500}
                        width={500}
                        alt="logo"
                        className="h-full w-full object-cover"
                        quality={100}
                    />
                </Link>

                <MenuSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

                <div className="flex items-center gap-x-4 text-white">
                    <SearchIcon />
                    
                    <MenuIcon
                        onClick={() => setIsSidebarOpen(true)}
                    />
                </div>
            </div>
        </header>
    )
}