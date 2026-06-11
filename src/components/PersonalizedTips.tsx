import { Lightbulb } from 'lucide-react';
import { Question } from '../interfaces/Question';

interface PersonalizedTipsProps {
  responses: Record<number, { slug: string; isValid: boolean }>;
  questions: Question[];
}

const PersonalizedTips = ({ responses, questions }: PersonalizedTipsProps) => {
  const tips: string[] = [];

  for (const question of questions) {
    if (!question.condition || question.condition(responses)) {
      const response = responses[question.id];
      if (response && question.tip) {
        const option = question.options?.find((o) => o.slug === response.slug);
        if (option && option.score >= 1) {
          tips.push(question.tip);
        }
      }
    }
  }

  if (tips.length === 0) {
    return (
      <div className="w-full max-w-xl bg-green-50 border border-green-200 rounded-lg p-5">
        <div className="flex items-start space-x-3">
          <Lightbulb className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-800 text-sm">Excelente</p>
            <p className="text-green-700 text-sm mt-1">No detectamos señales de alerta significativas. Mantén buenas prácticas de seguridad.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl">
      <h3 className="text-lg font-serif font-bold text-navy-600 mb-4">Recomendaciones personalizadas</h3>
      <div className="space-y-3">
        {tips.slice(0, 6).map((tip, i) => (
          <div key={i} className="flex items-start space-x-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <Lightbulb className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800 leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedTips;
