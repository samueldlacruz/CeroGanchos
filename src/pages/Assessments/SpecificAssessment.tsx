import { useNavigate, useParams } from 'react-router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InteractiveForm from '../../components/InteractiveForm'
import PageContainer from '../../components/PageContainer'
import { investmentQuestions, shoppingQuestions } from '../../data/questions'
import { Question } from '../../interfaces/Question'
import { useState } from 'react'
import { Card } from '../../components/ui/card'

const SpecificAssessment = () => {

  const { topic } = useParams()
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const [viabilityScore, setViabilityScore] = useState(0);

  const questionsByTopic: Record<string, Question[]> = {
    "compras": shoppingQuestions,
    "inversiones": investmentQuestions
  };

  const calculateWeightedSum = (responses: Record<number, string>) => {

    let totalWeight = 0;
    let weightedSum = 0;

    for (const questionId in responses) {
      const question = questionsByTopic[topic!].find(q => q.id === Number(questionId));

      if (question) {
        const response = responses[Number(questionId)];

        const score = question.options?.find(o => o.slug === response)?.score || 0;
        const weight = question.weight || 0;

        totalWeight += weight;
        weightedSum += score * weight;
      }
    }

    return totalWeight ? (weightedSum / totalWeight) * 10 : 0;
  }

  const getViabilityScore = (userResponses: Record<number, string>) => {
    const _viabilityScore = calculateWeightedSum(userResponses);
    setViabilityScore(_viabilityScore);
    setShowResults(true);
  }

  return (
    <PageContainer>
      <Header withoutNav={true} />
      <main className="h-full">
        {((topic !== undefined && questionsByTopic[topic]) && !showResults) ? (
          <InteractiveForm
            questions={questionsByTopic[topic]}
            onSubmit={getViabilityScore}
          />
        ) : (
          <>
            {showResults && (
              <div className="h-screen flex justify-center flex-col items-center">
                <Card className="w-full max-w-xl p-6 text-center rounded-md">
                  <h2 className="text-3xl font-bold text-center mb-12">Gracias por tu respuesta</h2>
                  <p className="text-xl text-gray-600max-w-2xl mx-auto mb-4">
                    La calificación de riesgo es:
                  </p>
                  <div className="flex items-end justify-center font-semibold mb-12">
                    <h2 className="text-6xl text-center">{viabilityScore.toFixed(2)}</h2>
                    <small className="text-3xl">{" "}/ 10</small>
                  </div>
                  <hr className="mb-8" />
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl text-left mx-auto">
                    {viabilityScore < 4
                      ? <span>✅ <strong>Confiable:</strong> Parece una tienda legítima.</span>
                      : viabilityScore < 7
                        ? <span>🤔 <strong>Dudoso:</strong> Investiga más antes de comprar.</span>
                        : <span>⚠️ <strong>Peligroso: </strong> Evita comprar aqui.</span>}
                  </p>
                  <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded' onClick={() => setShowResults(false)}>
                    Volver a realizar la evaluación
                  </button>
                  <button className="bg-gray-500 w-full hover:bg-gray-700 text-white font-bold py-4 px-4 rounded mt-4" onClick={() => navigate("/evaluaciones")}>
                    Realizar otra evaluación
                  </button>
                </Card>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </PageContainer>
  )
}

export default SpecificAssessment