interface FormProgressBarProps {
  current: number;
  total: number;
}

const FormProgressBar = ({ current, total }: FormProgressBarProps) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full max-w-lg mx-auto mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-400">
          Pregunta {current + 1} de {total}
        </span>
        <span className="text-xs font-medium text-mblue-500">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-navy-600 to-mblue-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default FormProgressBar;
