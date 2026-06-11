import { Redo2, Undo2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import DialogDisclaimer from '../../components/DialogDisclaimer'
import FeedbackBanner from '../../components/FeedbackBanner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InteractiveForm from '../../components/InteractiveForm'
import LoadingText from '../../components/LoadingText'
import PageContainer from '../../components/PageContainer'
import ResultGauge from '../../components/ResultGauge'
import CategoryBreakdown from '../../components/CategoryBreakdown'
import PersonalizedTips from '../../components/PersonalizedTips'
import ActionRecommendations from '../../components/ActionRecommendations'
import ShareButtons from '../../components/ShareButtons'
import EnhancedResultDetail from '../../components/EnhancedResultDetail'
import IntroScreen from '../../components/IntroScreen'
import { Button } from '../../components/ui/button'
import { Progress } from '../../components/ui/progress'
import { investmentQuestions, shoppingQuestions, categoryLabels } from '../../data/questions'
import { Question } from '../../interfaces/Question'
import { cn } from '../../lib/utils'
import { delay } from '../../utils/delay'

const QUESTIONS_BY_TOPIC: Record<string, Question[]> = {
  "compras": shoppingQuestions,
  "inversiones": investmentQuestions
};

const INTRO_CONFIG: Record<string, { title: string; description: string }> = {
  compras: {
    title: "Chequeo de Compra Online",
    description: "Evalúa si una tienda online o red social es confiable antes de realizar una compra. Analizaremos la plataforma, el vendedor, los métodos de pago y la calidad del producto.",
  },
  inversiones: {
    title: "Invierte con Menos Riesgo",
    description: "Evalúa si una plataforma de inversión o negocio financiero es legítimo. Verificaremos su legalidad, transparencia, regulación y prácticas operativas.",
  },
};

const SpecificAssessment = () => {

  const { topic } = useParams()
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [viabilityScore, setViabilityScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [summaryOfResponses, setSummaryOfResponses] = useState<Array<{ question: string; response: string }>>([]);
  const [userResponses, setUserResponses] = useState<Record<number, { slug: string; isValid: boolean }>>({});

  const questions = QUESTIONS_BY_TOPIC[topic!];
  const introConfig = INTRO_CONFIG[topic!];

  const categories = [...new Set(
    questions
      .filter(q => q.category)
      .map(q => categoryLabels[q.category!] || q.category!)
  )];

  const calculateWeightedSum = (responses: Record<number, { slug: string; isValid: boolean }>) => {

    let totalWeight = 0;
    let weightedSum = 0;

    for (const questionId in responses) {
      const question = questions.find(question => question.id === Number(questionId));

      if (question) {
        const response = responses[Number(questionId)];

        const score = question.options?.find(option => option.slug === response.slug)?.score || 0;
        const weight = question.weight || 0;

        totalWeight += weight;
        weightedSum += score * weight;
      }
    }

    return totalWeight ? Math.round(Math.min((weightedSum / totalWeight) * 100, 100)) : 0;
  }


  const getViabilityScore = (userResponses: Record<number, { slug: string; isValid: boolean }>) => {
    setIsLoading(true);
    const _viabilityScore = calculateWeightedSum(userResponses);
    setViabilityScore(_viabilityScore);

  }

  const handleSubmit = (userResponses: Record<number, { slug: string; isValid: boolean }>) => {
    const _summaryOfResponses = Object.entries(userResponses).map(([questionId, response]) => {
      const question = questions.find(question => question.id === Number(questionId));
      return {
        question: question?.text || '',
        response: question?.options?.find(option => option.slug === response.slug)?.label || ''
      }
    })
    setSummaryOfResponses(_summaryOfResponses);
    setUserResponses(userResponses);

    setIsLoading(true);
    getViabilityScore(userResponses);

    const interval = setInterval(() => {
      setProgress(prev => (prev + 10 > 100 ? 100 : prev + 10));
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(0);
      setShowResults(true);
      setIsLoading(false);
    }, 5000);

    delay(8000).then(() => setShowDisclaimer(true));
  }

  return (
    <PageContainer>
      <Header withoutNav={true} />
      {showResults && <FeedbackBanner />}

      <main className="h-full">
        {!started ? (
          <IntroScreen
            title={introConfig.title}
            description={introConfig.description}
            questionCount={questions.length}
            categories={categories}
            onStart={() => setStarted(true)}
          />
        ) : isLoading ? (
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
            <Progress value={progress} className="w-[60%] mb-3" indicatorClassName={cn(progress > 80 ? 'bg-navy-600' : 'bg-mblue-500')} />
            <LoadingText texts={[
              "Analizando tus respuestas...",
              "Verificando la información proporcionada...",
              "Cruzando datos con fuentes oficiales...",
              "Generando tu calificación..."
            ]} />
          </div>
        ) : showResults ? (
          <div className="fade-in-10 duration-150 ease-in-out flex flex-col items-center gap-8 py-10 px-4 md:px-0">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-navy-600 mb-2">Tu resultado</h2>
              <p className="text-gray-500 text-sm">Basado en tus {summaryOfResponses.length} respuestas</p>
            </div>

            <ResultGauge score={viabilityScore} />

            <CategoryBreakdown responses={userResponses} questions={questions} />

            <ActionRecommendations score={viabilityScore} />

            <PersonalizedTips responses={userResponses} questions={questions} />

            <ShareButtons score={viabilityScore} topic={topic!} />

            <div className="flex sm:flex-row flex-col w-full max-w-xl items-center justify-between gap-4">
              <Button className="bg-mblue-500 w-full flex gap-2 hover:bg-mblue-600 items-center py-5 text-white font-semibold rounded-md text-sm" onClick={() => { setShowResults(false); setStarted(false); }}>
                <Undo2 className="h-4 w-4" />
                Volver a realizarla
              </Button>
              <Button className="bg-gray-400 w-full hover:bg-gray-500 flex gap-2 items-center py-5 text-white font-semibold rounded-md text-sm" onClick={() => navigate('/evaluaciones')}>
                <Redo2 className="h-4 w-4" />
                Realizar otra evaluación
              </Button>
            </div>

            <button onClick={() => setShowDetail(true)} className="text-mblue-500 underline text-sm hover:text-mblue-600">
              Ver detalle de cada respuesta
            </button>
          </div>
        ) : (
          questions.length > 0 && <InteractiveForm questions={questions} onSubmit={handleSubmit} />
        )}
      </main>

      <Footer />
      {showDisclaimer && <DialogDisclaimer isOpen={showDisclaimer} onClose={() => setShowDisclaimer(false)} />}
      {showDetail && (
        <EnhancedResultDetail
          responses={userResponses}
          questions={questions}
          isOpen={showDetail}
          onClose={() => setShowDetail(false)}
        />
      )}
    </PageContainer>
  )
}

export default SpecificAssessment
