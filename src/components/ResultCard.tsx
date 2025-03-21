import { cn } from "../lib/utils"
import Count from "./Count"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export interface ResultCardProps {
    className?: string
    score: number
    setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}

const ResultCard = ({ score, setShowResults, className }: ResultCardProps) => {

    return (
        <Card className={cn(className, "w-full max-w-xl p-6 items-center flex flex-col justify-center rounded-md h-full")}>
            <h2 className="text-3xl font-bold text-left mb-12">Resultado</h2>
            <div className="flex gap-5 w-full flex-col font-semibold mb-12 px-5">
                <p className="text-xl flex text-gray-600 justify-between items-end max-w-2xl text-left">
                    <span>
                        Calificacion:
                    </span>
                    <span className="text-8xl text-white bg-green-600 text-center border-2 px-8 py-4">
                        {score < 20
                            ? <span>A +</span>
                            : score < 40
                                ? <span>A</span>
                                : score < 60
                                    ? <>A-</>
                                    : score < 80
                                        ? <>B</>
                                        : score < 100
                                            ? <>C</>
                                            : <>D</>
                        }
                    </span>
                </p>
                <hr className="w-full" />
                <h2 className="text-xl justify-between text-gray-600 items-end w-full flex text-center">
                    Nivel de riesgo:
                    <p className="text-6xl">
                        <Count duration={1} number={score} />
                        <small className="text-4xl">{" "}%</small>
                    </p>
                </h2>
                <hr className="w-full" />
            </div>
            <div className="flex items-end w-full justify-end gap-4">
                <Button className='bg-blue-600 flex gap-2 hover:bg-blue-700 items-center py-6 px-8 text-white font-bold rounded' onClick={() => setShowResults(false)}>
                    Ver Detalles
                </Button>
            </div>
        </Card>
    )
}

export default ResultCard