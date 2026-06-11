const getRiskRating = (score: number) => {
    if (score < 5) return { grade: "AAA", color: "bg-green-700", meaning: "" };
    if (score < 10) return { grade: "AA+", color: "bg-green-600" };
    if (score < 15) return { grade: "AA", color: "bg-green-500" };
    if (score < 20) return { grade: "AA-", color: "bg-green-400" };
    if (score < 25) return { grade: "A+", color: "bg-emerald-400" };
    if (score < 30) return { grade: "A", color: "bg-yellow-400" };
    if (score < 35) return { grade: "A-", color: "bg-yellow-500" };
    if (score < 40) return { grade: "BBB+", color: "bg-amber-500" };
    if (score < 45) return { grade: "BBB", color: "bg-orange-400" };
    if (score < 50) return { grade: "BBB-", color: "bg-orange-500" };
    if (score < 55) return { grade: "BB+", color: "bg-orange-600" };
    if (score < 60) return { grade: "BB", color: "bg-red-500" };
    if (score < 65) return { grade: "BB-", color: "bg-red-500" };
    if (score < 70) return { grade: "B+", color: "bg-red-600" };
    if (score < 75) return { grade: "B", color: "bg-red-600" };
    if (score < 80) return { grade: "B-", color: "bg-red-700" };
    if (score < 85) return { grade: "CCC+", color: "bg-red-700" };
    if (score < 90) return { grade: "CCC", color: "bg-red-800" };
    if (score < 95) return { grade: "CCC-", color: "bg-red-900" };
    if (score < 98) return { grade: "C", color: "bg-gray-700" };
    return { grade: "D", color: "bg-gray-900" };
};

const riskMeanings: Record<string, string> = {
    "AAA": "Riesgo mínimo",
    "AA+": "Muy bajo riesgo, tendencia positiva",
    "AA": "Muy bajo riesgo",
    "AA-": "Muy bajo riesgo, tendencia negativa",
    "A+": "Bajo riesgo, tendencia positiva",
    "A": "Bajo riesgo",
    "A-": "Bajo riesgo, tendencia negativa",
    "BBB+": "Riesgo moderado, tendencia positiva",
    "BBB": "Riesgo moderado",
    "BBB-": "Riesgo moderado, tendencia negativa",
    "BB+": "Moderado a alto riesgo, tendencia positiva",
    "BB": "Moderado a alto riesgo",
    "BB-": "Moderado a alto riesgo, tendencia negativa",
    "B+": "Riesgo alto, tendencia positiva",
    "B": "Riesgo alto",
    "B-": "Riesgo alto, tendencia negativa",
    "CCC+": "Riesgo muy alto, tendencia positiva",
    "CCC": "Riesgo muy alto",
    "CCC-": "Riesgo muy alto, tendencia negativa",
    "C": "Riesgo crítico",
    "D": "Incumplimiento de pago"
};

const RiskIndicator = ({ score }: { score: number }) => {
    const { grade, color } = getRiskRating(score);

    return (
        <div className="flex flex-col sm:items-end items-start">
            <span className="text-xs md:text-sm w-full md:w-2/3 md:text-right text-left text-gray-400 font-sans">{riskMeanings[grade] || "Desconocido"}</span>
            <p className={`${color} px-5 py-3 text-center mt-2 rounded-sm`}>
                <span className="text-4xl font-serif font-bold text-white">{grade}</span>
            </p>
        </div>
    );
};

export default RiskIndicator;
