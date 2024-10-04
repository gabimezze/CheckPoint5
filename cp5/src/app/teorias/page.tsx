import Image from "next/image"
import grafico from "@/img/grafico.jpg"

export default function Teorias() {
    return (
        <div className="pages">
            <h1>As Teorias de Velikovsky</h1>
            <a><Image src={grafico} alt="Grafico" width={400} height={270} /></a>
            <p>
            1. Vênus como Cometa:Velikovsky sugeriu que Vênus se formou como um cometa e que sua passagem pela Terra causou cataclismos como inundações e terremotos, mencionados em várias tradições culturais. <br />
            <br />
            2. Eventos Cataclísmicos:Ele argumentou que relatos históricos de desastres, como os dilúvios e as pragas do Egito, podem ser explicados por eventos astronômicos e suas consequências na Terra. <br />
            <br />
            3. Interações Planetárias:Velikovsky propôs que a gravitação e a dinâmica dos planetas são mais complexas do que se acreditava, levando a interações que poderiam resultar em mudanças significativas no clima e na geologia da Terra.
            </p>
        </div>
    )
}