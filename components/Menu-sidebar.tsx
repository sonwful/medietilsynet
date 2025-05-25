// Importerer nødvendige komponenter fra Next.js og lokale UI-komponenter
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

// Definerer en TypeScript-interface for hvert menyelement
interface NavbarItem {
    href: string;               // Lenken til siden
    children: React.ReactNode; // Innholdet som skal vises (f.eks. tekst)
}

// Definerer props for komponenten
type Props = {
    open: boolean;                        // Om menyen er åpen eller ikke
    onOpenChange: (open: boolean) => void; // Funksjon som kjøres når menyens åpenhet endres
    items: NavbarItem[];                 // Liste med menyelementer
}

// Selve komponenten som tar imot props og renderer menyen
export default function MenuSidebar({ onOpenChange, open, items }: Props) {
    return (
        // Sheet er en komponent som fungerer som en sidepanel (skuff)
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right" // Panelet åpnes fra høyre side
                className="transition-none bg-[#005B8F] text-white border-none" // Farger og styling
            >
                {/* Headeren til menyen */}
                <SheetHeader>
                    <div className="flex items-center">
                        {/* Tittel for menyen */}
                        <SheetTitle className="text-white !font-normal">
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>

                {/* Scrollbar som inneholder menyelementene */}
                <ScrollArea className="flex flex-col overflow-y-auto h-full py-5">
                    <div className="flex flex-col gap-3">
                        {/* Mapper gjennom listen av menyelementer og lager en lenke for hver */}
                        {items.map((item) => (
                            <Link
                                href={item.href}               // Lenke til ønsket side
                                key={item.href}                // Unik nøkkel for React
                                className="text-left hover:underline" // Styling
                                onClick={() => onOpenChange(false)} // Lukk menyen når man klikker
                            >
                                {item.children} {/* // Viser innholdet (tekst, ikoner osv.) */}
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}
