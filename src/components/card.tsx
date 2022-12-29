import { book } from "types/Book"
import "./card.css"

export default function Card({ titulo, editora, foto }: book) {
    return (
        <div className="card">
            <h1>{titulo}</h1>
            <h2>{editora}</h2>
            <img src={foto} alt={foto} />
        </div>
    )
}
