"use client" // Dette forteller Next.js at komponenten kjøres på klientsiden (pga. bruk av useState)

// Importerer nødvendige ikoner og komponenter
import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuSidebar from "./Menu-sidebar"; // Sidebar-komponenten som åpnes ved klikk

// Definerer meny-elementene som vises i sidebaren
const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/features", children: "Features" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact" }
]

export default function Menu() {
    // Bruker Reacts useState-hook for å holde styr på om sidebaren er åpen eller ikke
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        // Hoved-headeren med bakgrunnsfarge
        <header className="w-full bg-[#005B8F]">
            {/* Wrapper for innholdet, sentrert og med maks bredde */}
            <div className="mx-auto h-20 max-w-[1200px] px-8 flex justify-between">
                
                {/* Logo med lenke tilbake til forsiden */}
                <Link href="/">
                    <Image 
                        src="/logo.png"                     // Logoens filsti
                        height={500}
                        width={500}
                        alt="logo"
                        className="h-full w-full object-cover" // Sørger for at logoen dekker tilgjengelig plass
                        quality={100}
                    />
                </Link>

                {/* Sidebaren som åpnes ved klikk på menyikonet */}
                <MenuSidebar 
                    items={navbarItems}                  // Meny-elementene
                    open={isSidebarOpen}                 // Om menyen er åpen
                    onOpenChange={setIsSidebarOpen}      // Funksjon for å endre åpen/ikke åpen
                />

                {/* Ikoner på høyre side – søk og meny */}
                <div className="flex items-center gap-x-4 text-white">
                    <SearchIcon /> {/* // Kun et ikon her – ikke funksjonalitet enda */}
                    
                    <MenuIcon
                        onClick={() => setIsSidebarOpen(true)} // Åpner sidebaren når man klikker på menyikonet
                    />
                </div>
            </div>
        </header>
    )
}
