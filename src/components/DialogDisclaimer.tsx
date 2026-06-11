import { AlertTriangle } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'

const DialogDisclaimer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] max-w-xl border border-gray-200">
            <DialogHeader>
                <div className="flex items-center">
                    <AlertTriangle className="inline mr-2 mb-1 text-amber-500" />
                    <DialogTitle className="font-serif text-navy-600">Aviso importante</DialogTitle>
                </div>
                <DialogDescription className="text-left text-gray-500">
                    Por favor, lee cuidadosamente antes de realizar cualquier inversión.
                </DialogDescription>
            </DialogHeader>
            <hr className="border-gray-100" />
            <p className="text-sm leading-relaxed text-gray-500 text-justify mb-4">
                La evaluación proporcionada en este sitio es solo orientativa y no garantiza una compra segura o exitosa. Si decides invertir o realizar una compra, lo haces bajo tu propio riesgo. No nos hacemos responsables de ninguna pérdida financiera, fraude o inconveniente. Los enlaces a otras páginas web son solo para referencia y no implican respaldo ni responsabilidad sobre su contenido.
            </p>
            <DialogFooter>
                <Button onClick={onClose} className="bg-navy-600 hover:bg-navy-500 text-white">Entendido</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
)

export default DialogDisclaimer
