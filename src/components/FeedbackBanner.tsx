import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const FeedbackBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-600 text-white py-2 px-4 flex items-center justify-between top-16 w-full z-50 shadow-md">
      <p className="text-sm md:text-base">
        ¡Tu opinión es importante! Ayúdanos a mejorar dejando tu feedback.
        <a
          href="https://tally.so/r/wbvQAE"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-2 hover:text-gray-200"
        >
          Da tu feedback aquí
        </a>
      </p>
      <Button
        variant="ghost"
        className="text-white hover:bg-blue-500"
        onClick={() => setIsVisible(false)}
      >
        <X size={18} />
      </Button>
    </div>
  );
};

export default FeedbackBanner;
