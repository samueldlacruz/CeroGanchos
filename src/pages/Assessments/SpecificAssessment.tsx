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
import { Progress } from '../../components/ui/progress'
import LoadingText from '../../components/LoadingText'
import { cn } from '../../lib/utils'

const SpecificAssessment = () => {

  const { topic } = useParams()
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [viabilityScore, setViabilityScore] = useState(0);
  const [progress, setProgress] = useState(0);

  const questionsByTopic: Record<string, Question[]> = {
    "compras": shoppingQuestions,
    "inversiones": investmentQuestions
  };

  const questions = questionsByTopic[topic!];

  const calculateWeightedSum = (responses: Record<number, { slug: string; isValid: boolean }>) => {

    let totalWeight = 0;
    let weightedSum = 0;

    for (const questionId in responses) {
      const question = questions.find(q => q.id === Number(questionId));

      if (question) {
        const response = responses[Number(questionId)];

        const score = question.options?.find(o => o.slug === response.slug)?.score || 0;
        const weight = question.weight || 0;

        totalWeight += weight;
        weightedSum += score * weight;
      }
    }

    return totalWeight ? (weightedSum / totalWeight) * 100 : 0;
  }

  const getViabilityScore = (userResponses: Record<number, { slug: string; isValid: boolean }>) => {
    setIsLoading(true);
    const _viabilityScore = calculateWeightedSum(userResponses);
    setViabilityScore(_viabilityScore);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(0);
      setShowResults(true);
      setIsLoading(false);
    }, 7000)
  }

  return (
    <PageContainer>
      <Header withoutNav={true} />
      <main className="h-full">
        {isLoading && (
          <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <Progress value={progress} className="w-[60%] mb-3" indicatorClassName={cn(progress > 80 ? "bg-emerald-600" : "bg-blue-600")} />
             <LoadingText 
               texts={[
                 "Estamos analizando tus respuestas...",
                 "Chequeando que tan real es tu compra...",
                 "Verificando que tan confiable esa inversión...",
                 "Cargando resultados..."
                ]}
             />
          </div>
        )}
        {((topic !== undefined && questions.length) && !showResults && !isLoading) ? (
          <InteractiveForm
            questions={questions}
            onSubmit={getViabilityScore}
          />
        ) : (
          <>
            {showResults && (
              <div className="place-content-center fade-in-10 duration-150 ease-in-out items-center bg-gray-200 grid grid-cols-8 grid-rows-2 gap-4 py-10 px-4 md:px-0">
                <ResultCard
                  score={viabilityScore}
                  setShowResults={setShowResults}
                  className=" col-span-3 row-span-2 col-start-2 col-end-5"
                />
                <DisclaimerCard className="col-span-3 col-start-5" />
                <TipsCard className="col-span-3 col-start-5" tips={shoppingTips} />
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