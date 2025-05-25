// Importerer `clsx` som hjelper med å kombinere klassenavn betinget
import clsx from "clsx";

// Definerer hvilke props komponenten forventer
type Props = {
    color: string;                 // Bakgrunnsfarge, f.eks. "#ffffff" eller "lightblue"
    className?: string;           // Ekstra CSS-klasser som kan legges til (valgfritt)
    children: React.ReactNode;    // Innholdet som skal vises inne i seksjonen
}

// Funksjonell komponent som lager en seksjon med bakgrunnsfarge og sentrert innhold
export default function Section({ className, color, children }: Props) {
    return (
        // Ytre wrapper med full bredde og dynamisk bakgrunnsfarge
        <div className="w-full" style={{ backgroundColor: color }}>
            
            {/* Innhold sentrert med maks bredde og horisontal padding. 
                Bruker `clsx` for å kombinere baseklasser med eventuelle ekstra klasser som sendes inn */}
            <div className={clsx("mx-auto max-w-[1200px] px-8", className)}>
                {children} {/* Viser alt som legges inn som barn */}
            </div>
        </div>
    );
}
