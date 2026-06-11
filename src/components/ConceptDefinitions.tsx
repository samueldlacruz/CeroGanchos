import { conceptDefinitions } from '../data/questions';
import { BookOpen } from 'lucide-react';

const ConceptDefinitions = () => {
  const concepts = Object.entries(conceptDefinitions);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-mblue-500 text-sm font-semibold tracking-wider uppercase mb-3">Glosario</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600">Conceptos clave</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            Entiende los términos importantes para tomar mejores decisiones financieras.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map(([key, concept]) => (
            <div key={key} className="p-5 rounded-lg border border-gray-100 hover:shadow-md transition-shadow bg-gray-50">
              <div className="flex items-start space-x-3">
                <BookOpen className="h-5 w-5 text-mblue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-600 text-sm mb-1">{concept.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{concept.definition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptDefinitions;
