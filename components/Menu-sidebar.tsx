import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    items: NavbarItem[];
}

export default function MenuSidebar({ onOpenChange, open, items }: Props) {
    return(
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="transition-none bg-[#005B8F] text-white border-none"
            >
                <SheetHeader>
                    <div className="flex items-center">
                        <SheetTitle className="text-white !font-normal">
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                  <ScrollArea className="flex flex-col overflow-y-auto h-full py-5">
                    <div className="flex flex-col gap-3">
                        {items.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className="text-left hover:underline"
                                onClick={() => onOpenChange(false)}
                            >
                                {item.children}
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}