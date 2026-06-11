import { categoryLabels } from '../data/questions';
import { Question } from '../interfaces/Question';

interface CategoryBreakdownProps {
  responses: Record<number, { slug: string; isValid: boolean }>;
  questions: Question[];
}

const CategoryBreakdown = ({ responses, questions }: CategoryBreakdownProps) => {
  const categories: Record<string, { total: number; weighted: number; maxWeight: number }> = {};

  for (const question of questions) {
    if (!question.category || !question.weight) continue;
    if (!question.condition || question.condition(responses)) {
      if (!categories[question.category]) {
        categories[question.category] = { total: 0, weighted: 0, maxWeight: 0 };
      }
      const response = responses[question.id];
      if (response) {
        const option = question.options?.find((o) => o.slug === response.slug);
        const score = option?.score || 0;
        categories[question.category].total += score * question.weight;
        categories[question.category].weighted += question.weight;
      }
      categories[question.category].maxWeight += question.weight;
    }
  }

  const getColor = (pct: number) => {
    if (pct < 25) return 'bg-green-500';
    if (pct < 50) return 'bg-yellow-500';
    if (pct < 75) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getTextColor = (pct: number) => {
    if (pct < 25) return 'text-green-600';
    if (pct < 50) return 'text-yellow-600';
    if (pct < 75) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="w-full max-w-xl">
      <h3 className="text-lg font-serif font-bold text-navy-600 mb-4">Desglose por categoría</h3>
      <div className="space-y-3">
        {Object.entries(categories).map(([key, data]) => {
          const pct = data.maxWeight > 0 ? Math.round((data.total / data.maxWeight) * 100) : 0;
          return (
            <div key={key}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-600">{categoryLabels[key] || key}</span>
                <span className={`text-xs font-semibold ${getTextColor(pct)}`}>{pct}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-700 ${getColor(pct)}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBreakdown;
