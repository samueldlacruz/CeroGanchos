import { Fragment, useState } from "react";
import { Question } from "../interfaces/Question";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { delay } from "../utils/delay";
import FormProgressBar from "./FormProgressBar";
import InfoTooltip from "./InfoTooltip";

export default function InteractiveForm({ questions, onSubmit }: { questions: Question[], onSubmit: (responses: Record<number, { slug: string, isValid: boolean }>) => void }) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [responses, setResponses] = useState<Record<number, { slug: string, isValid: boolean }>>({});
  const [error, setError] = useState<string | null>(null);

  const filteredQuestions = questions.filter(q => !q.condition || q.condition(responses));
  const totalSteps = filteredQuestions.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const question = filteredQuestions[currentStep];
    const isValid = question.validate ? question.validate(value, responses) : true;

    if (!isValid) {
      setError("Por favor, ingresa una URL válida que comience con http");
    } else {
      setError(null);
    }

    setResponses({
      ...responses,
      [question.id]: { slug: value, isValid }
    });
  };

  const handleSelect = (optionSlug: string) => {
    setError(null);
    const question = filteredQuestions[currentStep];
    const isValid = question.validate ? question.validate(optionSlug, responses) : true;

    setResponses(prevResponses => {
      const newResponses = { ...prevResponses, [question.id]: { slug: optionSlug, isValid } };

      const updatedQuestions = questions.filter(q => !q.condition || q.condition(newResponses));
      const newTotalSteps = updatedQuestions.length;

      if (isValid && currentStep < newTotalSteps - 1) {
        delay(200).then(() => setCurrentStep(currentStep + 1));
      }

      return newResponses;
    });
  };

  const nextStep = () => {
    const question = filteredQuestions[currentStep];
    const response = responses[question.id];

    if (question.type === "text" && question.validate && response) {
      const isValid = question.validate(response.slug, responses);
      if (!isValid) {
        setError("Por favor, ingresa una URL válida que comience con http");
        return;
      }
    }

    if (currentStep < filteredQuestions.length - 1) {
      setError(null);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setError(null);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(responses);
  };

  const currentQuestion = filteredQuestions[currentStep];
  const hasCategory = currentQuestion?.category;

  const categoryNames: Record<string, string> = {
    plataforma: "Plataforma",
    vendedor: "Vendedor",
    pago: "Pago",
    producto: "Producto",
    empresa: "Empresa",
    legalidad: "Legalidad",
    transparencia: "Transparencia",
    regulacion: "Regulación",
    operaciones: "Operaciones",
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gray-50 md:px-0 px-4 py-8">
      <FormProgressBar current={currentStep} total={totalSteps} />

      <Card className="w-full max-w-lg p-6 text-center border border-gray-200 shadow-sm">
        <CardContent key={filteredQuestions[currentStep].id} className="fade-in duration-700 animate-in">
          <Fragment>
            {hasCategory && (
              <span className="inline-block text-xs font-semibold text-mblue-500 bg-mblue-500/5 px-3 py-1 rounded-full mb-3">
                {categoryNames[hasCategory] || hasCategory}
              </span>
            )}

            <h2 className="text-lg font-sans font-medium mb-2 text-navy-600">
              {filteredQuestions[currentStep]?.text}
              {filteredQuestions[currentStep]?.tip && (
                <InfoTooltip text={filteredQuestions[currentStep].tip!} />
              )}
            </h2>

            {filteredQuestions[currentStep]?.type === "select" ? (
              <div className="flex flex-col space-y-2 mt-4">
                {filteredQuestions[currentStep]?.options?.map((option, index) => (
                  <Button
                    key={`${option.label}-${index}`}
                    variant={responses[filteredQuestions[currentStep].id]?.slug === option.slug ? "default" : "outline"}
                    onClick={() => handleSelect(option.slug)}
                    className={cn(
                      "justify-start text-left h-auto py-3 px-4",
                      responses[filteredQuestions[currentStep].id]?.slug === option.slug
                        ? "bg-navy-600 text-white hover:bg-navy-500 border-navy-600"
                        : "border-gray-200 text-navy-600 hover:bg-gray-50"
                    )}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <input
                  type={filteredQuestions[currentStep]?.type}
                  {...filteredQuestions[currentStep].type === "number" && { min: 1 }}
                  placeholder={filteredQuestions[currentStep]?.type === "text" ? "https://ejemplo.com" : undefined}
                  className={cn(
                    "w-full p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-mblue-500 focus:border-transparent",
                    error ? "border-red-300" : "border-gray-200"
                  )}
                  value={responses[filteredQuestions[currentStep].id]?.slug || ""}
                  onChange={handleChange}
                />
                {error && (
                  <p className="text-red-500 text-xs mt-2 text-left">{error}</p>
                )}
              </div>
            )}
          </Fragment>

          <div className={cn("flex mt-6", currentStep > 0 ? "justify-between" : "justify-end")}>
            {currentStep > 0 && (
              <Button onClick={prevStep} variant="outline" className="border-gray-200 text-navy-600">
                Anterior
              </Button>
            )}
            {currentStep < filteredQuestions.length - 1 ? (
              <Button onClick={nextStep} className="bg-navy-600 hover:bg-navy-500 text-white">Siguiente</Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-mblue-500 hover:bg-mblue-600 text-white">Ver resultado</Button>
            )}
          </div>
        </CardContent>
      </Card>

      {filteredQuestions[currentStep].link && (
        <div className="mt-4 w-full max-w-lg rounded-lg border border-mblue-100 bg-gradient-to-br from-mblue-50/80 to-white p-5 shadow-sm">
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-mblue-500/10">
              <svg className="w-3.5 h-3.5 text-mblue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-mblue-600 uppercase tracking-wider">Fuente oficial</span>
          </div>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{filteredQuestions[currentStep].linkDescription}</p>
          {typeof filteredQuestions[currentStep].link === "string" && (
            <a
              href={filteredQuestions[currentStep].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 border border-mblue-200 text-mblue-600 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-mblue-500/5 transition-colors"
            >
              <span>Verificar ahora</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {typeof filteredQuestions[currentStep].link !== "string" && (
            <div className="flex flex-wrap gap-2">
              {filteredQuestions[currentStep].link.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 border border-mblue-200 text-mblue-600 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-mblue-500/5 transition-colors"
                >
                  <span>{link.label}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
