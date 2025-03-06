import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Question } from "../interfaces/Question";
import { cn } from "../lib/utils";

export default function InteractiveForm({ questions }: { questions: Question[] }) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [responses, setResponses] = useState<Record<number, string>>({});

  const filteredQuestions = questions.filter(q => !q.condition || q.condition(responses));
  const totalSteps = filteredQuestions.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResponses({ ...responses, [filteredQuestions[currentStep].id]: e.target.value });
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

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gray-100 md:px-0 px-4">
      <Card className="w-full max-w-lg p-6 text-center">
        <CardContent>
          <h2 className="text-lg font-semibold mb-4">
            {filteredQuestions[currentStep].text}
          </h2>
          {filteredQuestions[currentStep].type === "select" ? (
            <div className="flex flex-col space-y-2">
              {filteredQuestions[currentStep].options?.map((option) => (
                <Button
                  key={option}
                  variant={responses[filteredQuestions[currentStep].id] === option ? "default" : "outline"}
                  onClick={() => setResponses({ ...responses, [filteredQuestions[currentStep].id]: option })}
                >
                  {option}
                </Button>
              ))}
            </div>
          ) : (
            <input
              type={filteredQuestions[currentStep].type}
              className="w-full p-2 border rounded-md"
              value={responses[filteredQuestions[currentStep].id] || ""}
              onChange={handleChange}
            />
          )}
          <div className={cn("flex mt-4", currentStep > 0 ? "justify-between": "justify-end")}>
            {currentStep > 0 && (
              <Button onClick={prevStep} variant="outline">
                Anterior
              </Button>
            )}
            {currentStep < filteredQuestions.length - 1 ? (
              <Button onClick={nextStep}>Siguiente</Button>
            ) : (
              <Button onClick={() => alert("Formulario enviado!")}>Enviar</Button>
            )}
          </div>
        </CardContent>
      </Card>
      <p className="text-lg text-gray-500 mt-5">
        Pregunta {currentStep + 1} de {totalSteps}
      </p>
    </div>
  );
}
