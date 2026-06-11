import { Share2, Copy, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  score: number;
  topic: string;
}

const ShareButtons = ({ score, topic }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const topicLabel = topic === 'compras' ? 'Compra online' : 'Inversión';
  const text = `CeroGanchos evaluó mi ${topicLabel} y obtuve un nivel de riesgo de ${score}%. Evalúa el tuyo en`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${text} ${window.location.origin}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${text} ${window.location.origin}`)}`;
    window.open(url, '_blank');
  };

  const handleTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-xl">
      <h3 className="text-lg font-serif font-bold text-navy-600 mb-3">Compartir resultado</h3>
      <div className="flex gap-3">
        <button
          onClick={handleWhatsApp}
          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-green-600 transition-colors text-sm font-medium"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </button>
        <button
          onClick={handleTwitter}
          className="flex items-center space-x-2 bg-navy-600 text-white px-4 py-2.5 rounded-md hover:bg-navy-500 transition-colors text-sm font-medium"
        >
          <Share2 className="h-4 w-4" />
          <span>Twitter</span>
        </button>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
        >
          <Copy className="h-4 w-4" />
          <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
