import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
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

                <div className="flex items-center gap-x-4 text-white">
                    <SearchIcon />
                    <MenuIcon />
                </div>
            </div>
        </header>
    )
}