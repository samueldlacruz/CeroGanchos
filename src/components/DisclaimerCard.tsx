import { AlertTriangle } from 'lucide-react'
import { cn } from '../lib/utils'
import { Card } from './ui/card'

const DisclaimerCard = ({ className }: { className?: string }) => (
    <Card className={cn(className, "w-full max-w-xl p-6 text-left rounded-md h-full")}>
        <h3 className="text-xl font-bold mb-4">
            <AlertTriangle className="inline mr-2 mb-1 text-yellow-500" />
            Nota:
        </h3>
        <p className="text-base leading-[21px]">
            La evaluación proporcionada en este sitio es solo orientativa y no garantiza una compra segura o exitosa. Si decides invertir o realizar una compra, lo haces bajo tu propio riesgo. No nos hacemos responsables de ninguna pérdida financiera, fraude o inconveniente. Además, los enlaces a otras páginas web son solo para referencia y no implican respaldo ni responsabilidad sobre su contenido, especialmente si la información no está actualizada.
        </p>
    </Card>
)

export default DisclaimerCard