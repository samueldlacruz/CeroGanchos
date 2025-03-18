import { useNavigate } from "react-router"
import Count from "./Count"
import { Card } from "./ui/card"
import { cn } from "../lib/utils"

export interface ResultCardProps {
    className?:string
    score: number
    setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}

const ResultCard = ({ score, setShowResults, className }: ResultCardProps) => {
    const navigate = useNavigate();

    return (
        <Card className={cn(className, "w-full max-w-xl p-6 text-center items-center flex flex-col justify-center rounded-md h-full")}>
            <h2 className="text-3xl font-bold text-center mb-12">Gracias por tu respuesta</h2>
            <p className="text-xl text-gray-600max-w-2xl mx-auto mb-4">
                La calificación de riesgo es:
            </p>
            <div className="flex items-end justify-center font-semibold mb-12">
                <h2 className="text-6xl text-center">
                    <Count duration={1} number={score.toFixed(2)} />
                </h2>
                <small className="text-3xl">{" "}/ 100</small>
            </div>
            <hr className="mb-8 w-full" />
            <p className="text-xl text-gray-600 mb-8 max-w-2xl text-left mx-auto">
                {score < 40
                    ? <span>⚠️ <strong>Peligroso: </strong> Evita comprar o invertir aqui.</span> 
                    : score < 70
                        ? <span>🤔 <strong>Dudoso:</strong> Investiga más antes de comprar.</span>
                        : 
                        <span>✅ <strong>Confiable:</strong> Parece una tienda legítima.</span>}
            </p>
            <button className='bg-emerald-600 w-full hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded' onClick={() => setShowResults(false)}>
                Volver a realizar la evaluación
            </button>
            <button className="bg-gray-500 w-full hover:bg-gray-700 text-white font-bold py-4 px-4 rounded mt-4" onClick={() => navigate("/evaluaciones")}>
                Realizar otra evaluación
            </button>
        </Card>
    )
}

export default ResultCard