interface ResultGaugeProps {
  score: number;
}

const ResultGauge = ({ score }: ResultGaugeProps) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (s: number) => {
    if (s < 30) return '#22c55e';
    if (s < 60) return '#eab308';
    if (s < 80) return '#f97316';
    return '#ef4444';
  };

  const getLabel = (s: number) => {
    if (s < 30) return 'Bajo';
    if (s < 60) return 'Moderado';
    if (s < 80) return 'Alto';
    return 'Muy alto';
  };

  const color = getColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-44 h-44">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="10"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-serif font-bold text-navy-600">{score}%</span>
          <span className="text-xs font-medium mt-1" style={{ color }}>{getLabel(score)}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultGauge;
