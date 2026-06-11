import { Clock, HelpCircle, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface IntroScreenProps {
  title: string;
  description: string;
  questionCount: number;
  categories: string[];
  onStart: () => void;
}

const IntroScreen = ({ title, description, questionCount, categories, onStart }: IntroScreenProps) => (
  <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
    <div className="w-full max-w-lg">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-navy-600 mb-3">{title}</h2>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-4 w-4" />
            <span>{questionCount} preguntas</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>~{Math.ceil(questionCount * 8 / 60)} min</span>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Se evaluará:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span key={cat} className="text-xs bg-navy-600/5 text-navy-600 px-3 py-1.5 rounded-full font-medium">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <Button onClick={onStart} className="w-full bg-navy-600 hover:bg-navy-500 text-white font-semibold py-3">
          Comenzar evaluación
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <p className="text-center text-xs text-gray-400">
        Tus respuestas no se almacenan ni se comparten.
      </p>
    </div>
  </div>
);

export default IntroScreen;
