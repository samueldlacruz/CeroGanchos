import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Question } from '../interfaces/Question';

interface EnhancedResultDetailProps {
  responses: Record<number, { slug: string; isValid: boolean }>;
  questions: Question[];
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedResultDetail = ({ responses, questions, isOpen, onClose }: EnhancedResultDetailProps) => {
  if (!isOpen) return null;

  const getStatus = (score: number) => {
    if (score === 0) return { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50', label: 'Seguro' };
    if (score <= 2) return { icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-50', label: 'Precaución' };
    return { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50', label: 'Riesgo' };
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex justify-between items-center">
          <h3 className="text-lg font-serif font-bold text-navy-600">Detalle de respuestas</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        <div className="p-5 space-y-3">
          {questions
            .filter((q) => !q.condition || q.condition(responses))
            .map((question) => {
              const response = responses[question.id];
              if (!response) return null;
              const option = question.options?.find((o) => o.slug === response.slug);
              const score = option?.score ?? 0;
              const status = getStatus(score);
              const StatusIcon = status.icon;

              return (
                <div key={question.id} className={`p-4 rounded-lg border ${status.bg} border-gray-100`}>
                  <p className="text-sm font-medium text-navy-600 mb-2">{question.text}</p>
                  <div className="flex items-center space-x-2">
                    <StatusIcon className={`h-4 w-4 ${status.color}`} />
                    <span className="text-sm text-gray-700">{option?.label || response.slug}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${status.bg} ${status.color} font-medium`}>
                      {status.label}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="border-t border-gray-200 p-5">
          <button onClick={onClose} className="w-full bg-navy-600 text-white py-2.5 rounded-md hover:bg-navy-500 transition-colors text-sm font-semibold">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedResultDetail;
