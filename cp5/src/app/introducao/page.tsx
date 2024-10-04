import Image from "next/image"
import sistemasolar from "@/img/sistemasolar.jpg"

export default function Introducao() {
    return (
        <div className="pages">
            <h1>Introdução às 
                Ideias de Immanuel Velikovsky</h1>
                <a><Image src={sistemasolar} alt="Sistema solar" width={400} height={270} /></a>
            <p>
                Immanuel Velikovsky (1895-1979) foi um psicanalista e escritor que, em seu livro Worlds in Collision (1950), propôs teorias controversas sobre a história do sistema solar e eventos cataclísmicos na Terra. Sua principal ideia era que os planetas poderiam interagir de maneiras que afetariam profundamente a história da humanidade e a geologia do nosso planeta. Velikovsky desafiou a visão científica convencional, sugerindo que eventos astronômicos como a passagem de Vênus
                perto da Terra teriam causado desastres naturais.
            </p>
        </div>
    )
}