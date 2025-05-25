// Definerer hvilke props komponenten forventer å motta
type Props = {
    title: string;        // Tittel som skal vises på toppen av siden
    descripton: string;   // Beskrivelse under tittelen (OBS: skrivefeil – bør være "description")
}

// Funksjonell komponent som viser en side-header med tittel og beskrivelse
export default function PageHeader({ title, descripton }: Props) {
    return (
        // Bakgrunnsfarge og full bredde
        <div className="bg-[#DCEAF3] w-full">
            {/* Innholdet sentrert, med maks bredde og padding */}
            <div className="mx-auto max-w-[1200px] py-10 px-8 flex flex-col gap-3">
                <h1 className="text-2xl md:text-3xl">{title}</h1>  {/* Tittel */}
                <p>{descripton}</p>                                {/* Beskrivelse */}
            </div>
        </div>
    )
}
