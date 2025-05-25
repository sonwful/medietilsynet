// Definerer hvilke props komponenten forventer å motta
type Props = {
    title: string;             // Tittel som skal vises i modulen
    description: string;       // Beskrivelse under tittelen
    block: React.ReactNode;    // Et React-element (f.eks. bilde, video, eller komponent)
}

// Eksporterer funksjonell komponent som tar inn props
export default function MediaModule({ description, block, title }: Props) {
    return (
        // Bruker CSS grid for å dele opp innhold i én eller to kolonner, avhengig av skjermstørrelse
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            
            {/* Venstre kolonne – Tekstinnhold */}
            <div className="flex flex-col gap-5 h-full justify-center">
                <h3 className="text-xl md:text-2xl">{title}</h3>  {/* Viser tittel */}
                <p>{description}</p>                              {/* Viser beskrivelse */}
            </div>

            {/* Høyre kolonne – Innholdskomponent */}
            <div className="flex items-center justify-center">
                {block} {/* // Viser det som sendes inn som "block", f.eks. et bilde eller en video */}
            </div>
        </div>
    )
}
