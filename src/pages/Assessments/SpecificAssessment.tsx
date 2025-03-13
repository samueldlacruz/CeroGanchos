import { useState } from 'react'
import { useParams } from 'react-router'
import DisclaimerCard from '../../components/DisclaimerCard'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InteractiveForm from '../../components/InteractiveForm'
import PageContainer from '../../components/PageContainer'
import ResultCard from '../../components/ResultCard'
import TipsCard from '../../components/TipsCard'
import { investmentQuestions, shoppingQuestions, shoppingTips } from '../../data/questions'
import { Question } from '../../interfaces/Question'

const SpecificAssessment = () => {

  const { topic } = useParams()
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const _viabilityScore = calculateWeightedSum(userResponses);
    setViabilityScore(_viabilityScore);

    setTimeout(() => {
      setShowResults(true);
      setIsLoading(false);
    }, 3000)
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
              <div className="place-content-center fade-in-10 duration-150 ease-in-out items-center bg-gray-200 grid grid-cols-8 grid-rows-2 gap-4 py-10 px-4 md:px-0">
                <ResultCard
                  score={viabilityScore}
                  setShowResults={setShowResults}
                  className=" col-span-3 row-span-2 col-start-2"
                />
                <DisclaimerCard className="col-span-3 col-start-5" />
                <TipsCard className="col-span-3 col-start-5" tips={shoppingTips} />
              </div>
            )}
          </>
        )}

        {isLoading && (
          <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="col-span-3 row-span-2 col-start-2">Cargando...</div>
          </div>
        )}
      </main>
      <Footer />
    </PageContainer>
  )
}

export default SpecificAssessment