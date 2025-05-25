import MediaModule from "@/components/media-module"; // Importerer en modul som viser tekst + media (bilde/video)
import PageHeader from "@/components/page-header";   // Importerer en komponent som viser overskrift og beskrivelse øverst på siden
import Section from "@/components/section";           // Importerer en seksjonskomponent for å gruppere innhold med bakgrunnsfarge
import Image from "next/image";                        // Next.js sin optimaliserte bildekomponent

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hovedoverskrift og beskrivelse øverst på siden */}
      <PageHeader 
        title="Deepfakes" 
        descripton="Teknologien bak deepfakes har utviklet seg utrolig raskt. Det som før så ut som dårlige og urealistiske falske videoer, kan nå ligne ekte nyhetsklipp, selfievideoer eller meldinger fra kjente personer." 
      />

      {/* Stor sentrert bilde under header */}
      <div className="mx-auto max-w-[1200px] px-8 flex flex-col gap-6 py-10">
        <Image 
          src="/deepfakes.png"
          alt="deepfakes"
          height={1200}
          width={1200}
          className="w-full h-full min-h-[600px] object-cover"
        />
      </div>

      {/* Seksjon med lys blå bakgrunn */}
      <Section color="#DCEAF3" className="py-10">
        {/* MediaModule: Tekst med et bildeblok */}
        <MediaModule
          title="Hva er deepfakes?– og hvorfor bør du bry deg?"
          description="Forestill deg at du ser en video av noen du kjenner – eller deg selv – som sier eller gjør noe du aldri har gjort. Det kan være laget med en teknologi som heter deepfake. Ved hjelp av kunstig intelligens kan hvem som helst lage overbevisende falske videoer, bilder og lyd."
          block={
            <Image  
              src="/deepfakes.png" 
              alt="deepfakes" 
              height={800} 
              width={600} 
              className="w-full h-full min-h-[500px] object-cover" 
            />
          }
        />
      </Section>

      {/* Seksjon med mørk blå bakgrunn, viser fire logo-bilder i rad */}
      <Section color="#005B8F" className="py-3 flex gap-2">
        {/* Fire logo-bilder ved siden av hverandre */}
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
      </Section>

      {/* Ny seksjon med lys blå bakgrunn og tekst + bilde */}
      <Section color="#DCEAF3" className="py-10">
        <MediaModule
          title="Er du sikker på at du kjenner igjen en deepfake?"
          description="Teknologien bak deepfakes har utviklet seg utrolig raskt. Det som før så ut som dårlige og urealistiske falske videoer, kan nå ligne ekte nyhetsklipp, selfievideoer eller meldinger fra kjente personer – og det kan være nesten umulig å se forskjell med det blotte øyet."
          block={
            <Image  
              src="/deepfakes.png" 
              alt="deepfakes" 
              height={800} 
              width={600} 
              className="w-full h-full min-h-[500px] object-cover" 
            />
          }
        />
      </Section>

      {/* Igjen seksjon med mørk blå bakgrunn og fire logo-bilder */}
      <Section color="#005B8F" className="py-3 flex gap-2">
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
        <Image width={250} height={250} src="/logo.png" alt="logo" className="w-full h-full object-cover" />
      </Section>

      {/* Siste seksjon med lys blå bakgrunn og info om arrangement */}
      <Section color="#DCEAF3" className="py-10">
        <MediaModule
          title="På vårt arrangement får du vite:"
          description="Teknologien bak deepfakes har utviklet seg utrolig raskt. Det som før så ut som dårlige og urealistiske falske videoer, kan nå ligne ekte nyhetsklipp, selfievideoer eller meldinger fra kjente personer – og det kan være nesten umulig å se forskjell med det blotte øyet."
          block={
            <Image  
              src="/deepfakes.png" 
              alt="deepfakes" 
              height={800} 
              width={600} 
              className="w-full h-full min-h-[500px] object-cover" 
            />
          }
        />
      </Section>
    </div>
  );
}
