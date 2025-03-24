const getRiskRating = (score: number) => {
    if (score < 5) return { grade: "AAA", color: "bg-green-700" };
    if (score < 10) return { grade: "AA+", color: "bg-green-600" };
    if (score < 15) return { grade: "AA", color: "bg-green-500" };
    if (score < 20) return { grade: "AA-", color: "bg-green-400" };
    if (score < 25) return { grade: "A+", color: "bg-green-300" };
    if (score < 30) return { grade: "A", color: "bg-yellow-400" };
    if (score < 35) return { grade: "A-", color: "bg-yellow-500" };
    if (score < 40) return { grade: "BBB+", color: "bg-yellow-600" };
    if (score < 45) return { grade: "BBB", color: "bg-orange-400" };
    if (score < 50) return { grade: "BBB-", color: "bg-orange-500" };
    if (score < 55) return { grade: "BB+", color: "bg-orange-600" };
    if (score < 60) return { grade: "BB", color: "bg-orange-700" };
    if (score < 65) return { grade: "BB-", color: "bg-red-400" };
    if (score < 70) return { grade: "B+", color: "bg-red-500" };
    if (score < 75) return { grade: "B", color: "bg-red-600" };
    if (score < 80) return { grade: "B-", color: "bg-red-700" };
    if (score < 85) return { grade: "CCC+", color: "bg-red-800" };
    if (score < 90) return { grade: "CCC", color: "bg-red-900" };
    if (score < 95) return { grade: "CCC-", color: "bg-gray-700" };
    if (score < 98) return { grade: "C", color: "bg-gray-800" };
    return { grade: "D", color: "bg-gray-900" };
};

const RiskIndicator = ({ score }: { score: number }) => {
    const { grade, color } = getRiskRating(score);

    return (
        <span className={`text-6xl text-white ${color} text-center  px-8 py-4`}>
            {grade}
        </span>
    );
};

export default RiskIndicator;
