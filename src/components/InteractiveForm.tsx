import { Fragment, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Question } from "../interfaces/Question";
import { cn } from "../lib/utils";
import { delay } from "../utils/delay";

export default function InteractiveForm({ questions, onSubmit }: { questions: Question[], onSubmit: (responses: Record<number, { slug: string, isValid: boolean }>) => void }) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [responses, setResponses] = useState<Record<number, { slug: string, isValid: boolean }>>({});
  const [disabledNextButton, setDisabledNextButton] = useState<boolean>(true);

  const filteredQuestions = questions.filter(q => !q.condition || q.condition(responses));
  const totalSteps = filteredQuestions.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const question = filteredQuestions[currentStep];
    const isValid = question.validate ? question.validate(value, responses) : true;
    setResponses({
      ...responses,
      [question.id]: { slug: value, isValid }
    });
  };

  const handleSelect = (optionSlug: string) => {
    setDisabledNextButton(true);
    const question = filteredQuestions[currentStep];
    const isValid = question.validate ? question.validate(optionSlug, responses) : true;
    setResponses({
      ...responses,
      [question.id]: { slug: optionSlug, isValid }
    });

    delay(200).then(() => {
      if (currentStep < filteredQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      }
      setDisabledNextButton(false);
    });
  };

  const nextStep = () => {
    if (currentStep < filteredQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(responses);
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gray-100 md:px-0 px-4">
      <Card className="w-full max-w-lg p-6 text-center">
        <CardContent key={filteredQuestions[currentStep].id} className="fade-in duration-700 animate-in">
          <Fragment>
            <h2 className="text-lg font-semibold mb-4">
              {filteredQuestions[currentStep].text}
            </h2>

            {filteredQuestions[currentStep].type === "select" ? (
              <div className="flex flex-col space-y-2">
                {filteredQuestions[currentStep].options?.map((option, index) => (
                  <Button
                    key={`${option.label}-${index}`}
                    variant={responses[filteredQuestions[currentStep].id]?.slug === option.slug ? "default" : "outline"}
                    onClick={() => handleSelect(option.slug)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            ) : (
              <input
                type={filteredQuestions[currentStep].type}
                {...filteredQuestions[currentStep].type === "number" && { min: 1 }}
                className="w-full p-2 border rounded-md"
                value={responses[filteredQuestions[currentStep].id]?.slug || ""}
                onChange={handleChange}
              />
            )}
          </Fragment>

          <div className={cn("flex mt-4", currentStep > 0 ? "justify-between" : "justify-end")}>
            {currentStep > 0 && (
              <Button onClick={prevStep} variant="outline">
                Anterior
              </Button>
            )}
            {currentStep < filteredQuestions.length - 1 ? (
              <Button onClick={nextStep} disabled={(disabledNextButton || (!responses[filteredQuestions[currentStep].id]?.isValid))}>Siguiente</Button>
            ) : (
              <Button onClick={handleSubmit}>Enviar</Button>
            )}
          </div>
        </CardContent>
      </Card>
      <p className="text-lg text-gray-500 mt-5">
        Pregunta {currentStep + 1} de {totalSteps}
      </p>

      {filteredQuestions[currentStep].link && (
        <Card className="mt-4 w-full max-w-lg p-4 bg-white shadow-md border-l-4 border-blue-500 text-left">
          <p className="text-lg font-semibold">Importante:</p>
          <a href={filteredQuestions[currentStep].link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-base underline">
            {filteredQuestions[currentStep].linkDescription}
          </a>
        </Card>
      )}
    </div>
  );
}
