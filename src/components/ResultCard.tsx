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
            <Card className={cn(className, "w-full max-w-xl p-6 items-center flex flex-col justify-center rounded-lg border border-gray-200 shadow-sm h-full")}>
                <h2 className="text-2xl font-serif font-bold text-navy-600 text-left mb-12">Resultado</h2>
                <div className="flex gap-5 w-full font-semibold mb-12 px-5">
                    <div className="text-lg flex flex-col sm:flex-row text-gray-500 justify-between sm:items-end items-start text-left w-full">
                        <span className="text-sm">Calificación:</span>
                        <RiskIndicator score={score} />
                    </div>
                    <hr className="w-full border-gray-100" />
                    <div className="text-lg flex flex-col sm:flex-row text-gray-500 justify-between sm:items-end items-start text-center w-full">
                        <span className="text-sm">Nivel de riesgo:</span>
                        <p className="text-5xl font-serif font-bold text-navy-600">
                            <Count duration={1} number={score} />
                            <small className="text-3xl text-gray-400">{" "}%</small>
                        </p>
                    </div>
                    <hr className="w-full border-gray-100" />
                </div>
                <div className="flex items-end justify-end w-full gap-4 px-5">
                    <Button className='bg-navy-600 flex gap-2 hover:bg-navy-500 sm:w-auto w-full items-center py-5 px-8 text-white font-semibold rounded-md text-sm' onClick={() => setShowDetails(true)}>
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
