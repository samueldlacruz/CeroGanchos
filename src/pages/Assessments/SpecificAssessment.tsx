import { Redo2, Undo2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import FeedbackBanner from '../../components/FeedbackBanner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InteractiveForm from '../../components/InteractiveForm'
import LoadingText from '../../components/LoadingText'
import PageContainer from '../../components/PageContainer'
import ResultCard from '../../components/ResultCard'
import TipsCard from '../../components/TipsCard'
import { Button } from '../../components/ui/button'
import { Progress } from '../../components/ui/progress'
import { investmentQuestions, investmentTips, shoppingQuestions, shoppingTips } from '../../data/questions'
import { Question } from '../../interfaces/Question'
import { cn } from '../../lib/utils'

const questionsByTopic: Record<string, Question[]> = {
  "compras": shoppingQuestions,
  "inversiones": investmentQuestions
};

const tipsByTopic: Record<string, string[]> = {
  "compras": shoppingTips,
  "inversiones": investmentTips
};

const SpecificAssessment = () => {

  const { topic } = useParams()
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [viabilityScore, setViabilityScore] = useState(0);
  const [progress, setProgress] = useState(0);


  const tips = tipsByTopic[topic!];
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
      {showResults && <FeedbackBanner />}

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
              <div className="fade-in-10 duration-150 ease-in-out items-center justify-center flex flex-col bg-gray-200 gap-4 py-10 px-4 md:px-0">
                <ResultCard
                  score={viabilityScore}
                  setShowResults={setShowResults}
                />
                <TipsCard tips={tips} />
                {/* <DisclaimerCard className="" /> */}

                <div className="flex w-full max-w-xl pt-5 items-center justify-between gap-4">
                  <Button className='bg-blue-600 w-full flex gap-2 hover:bg-blue-700 items-center py-6 text-white font-bold rounded' onClick={() => setShowResults(false)}>
                    <Undo2 className="h-6 w-6" />
                    Volver a realizarla
                  </Button>
                  <Button className="bg-gray-500 w-full hover:bg-gray-700 flex gap-2 items-center py-6 text-white font-bold rounded " onClick={() => navigate("/evaluaciones")}>
                    <Redo2 className="h-6 w-6" />
                    Realizar otra evaluación
                  </Button>
                </div>
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