import { Fragment, useState } from "react"
import { cn } from "../lib/utils"
import Count from "./Count"
import DialogAssessmentSummary from "./DialogAssessmentSummary"
import RiskIndicator from "./RiskIndicator"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export interface ResultCardProps {
    className?: string
    score: number
    summaryOfResponses: Array<{ question: string; response: string }>
}

const ResultCard = ({ score, className, summaryOfResponses }: ResultCardProps) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <Fragment>
            <Card className={cn(className, "w-full max-w-xl p-6 items-center flex flex-col justify-center rounded-md h-full")}>
                <h2 className="text-3xl font-bold text-left mb-12">Resultado</h2>
                <div className="flex gap-5 w-full flex-col font-semibold mb-12 px-5">
                    <div className="text-xl flex flex-col sm:flex-row text-gray-600 justify-between sm:items-end items-start text-left">
                        <span>
                            Calificacion:
                        </span>
                        <RiskIndicator score={score} />
                    </div>
                    <hr className="w-full" />
                    <h2 className="text-xl flex flex-col sm:flex-row text-gray-600 justify-between sm:items-end items-start text-center">
                        Nivel de riesgo:
                        <p className="text-6xl">
                            <Count duration={1} number={score} />
                            <small className="text-4xl">{" "}%</small>
                        </p>
                    </h2>
                    <hr className="w-full" />
                </div>
                <div className="flex items-end justify-end w-full gap-4 px-5">
                    <Button className='bg-blue-600 flex gap-2 hover:bg-blue-700 sm:w-auto w-full items-center py-6 px-8 text-white font-bold rounded' onClick={() => setShowDetails(true)}>
                        Ver Detalles
                    </Button>
                </div>
            </Card>
            {showDetails && (
                <DialogAssessmentSummary 
                    summaryOfResponses={summaryOfResponses}
                    isOpen={showDetails}
                    onClose={() => setShowDetails(false)}
                />
            )}
        </Fragment>
    )
}

export default ResultCard