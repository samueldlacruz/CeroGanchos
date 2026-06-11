import { AlertTriangle, ShieldAlert, ShieldCheck, Info } from 'lucide-react';

interface ActionRecommendationsProps {
  score: number;
}

const ActionRecommendations = ({ score }: ActionRecommendationsProps) => {
  const getConfig = (s: number) => {
    if (s < 30) return {
      icon: ShieldCheck,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      title: 'Riesgo bajo',
      actions: [
        'Puedes proceder con precaución.',
        'Verifica siempre la reputación del vendedor antes de comprar.',
        'Usa métodos de pago con protección al comprador.',
        'Guarda comprobantes de todas las transacciones.',
      ],
    };
    if (s < 60) return {
      icon: Info,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      title: 'Riesgo moderado',
      actions: [
        'Procede con precaución. Hay señales de alerta.',
        'Verifica la empresa en la DGII antes de continuar.',
        'Busca opiniones de otros usuarios en foros o redes sociales.',
        'Nunca compartas datos bancarios por formularios no oficiales.',
        'Prefiere pagos contra entrega si es posible.',
      ],
    };
    if (s < 80) return {
      icon: ShieldAlert,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      title: 'Riesgo alto',
      actions: [
        'No recomendamos continuar con esta compra o inversión.',
        'Se identificaron múltiples señales de alerta.',
        'Si ya invertiste, consulta con un abogado o la Procuraduría.',
        'Reporta la empresa a las autoridades competentes.',
        'Busca alternativas con mayor respaldo legal.',
      ],
    };
    return {
      icon: AlertTriangle,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      title: 'Riesgo muy alto',
      actions: [
        'Alto riesgo detectado. Evita esta compra o inversión.',
        'Esta evaluación indica patrones típicos de fraude.',
        'No transferir dinero bajo ninguna circunstancia.',
        'Si ya transferiste, contacta tu banco inmediatamente.',
        'Denuncia ante la Procuraduría General de la República.',
        'Comparte esta alerta con personas que puedan estar afectadas.',
      ],
    };
  };

  const config = getConfig(score);
  const Icon = config.icon;

  return (
    <div className="w-full max-w-xl">
      <h3 className="text-lg font-serif font-bold text-navy-600 mb-4">Qué hacer</h3>
      <div className={`${config.bg} border ${config.border} rounded-lg p-5`}>
        <div className="flex items-center space-x-2 mb-3">
          <Icon className={`h-5 w-5 ${config.color}`} />
          <span className={`font-semibold text-sm ${config.color}`}>{config.title}</span>
        </div>
        <ul className="space-y-2">
          {config.actions.map((action, i) => (
            <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActionRecommendations;
