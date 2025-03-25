import { AlertTriangle } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'

const DialogDisclaimer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] max-w-xl">
            <DialogHeader>
                <div className="flex items-center">
                    <AlertTriangle className="inline mr-2 mb-1 text-yellow-500" />
                    <DialogTitle>Nota</DialogTitle>
                </div>
                <DialogDescription>
                    Por favor, leer cuidadosamente antes de realizar cualquier inversión.
                </DialogDescription>
            </DialogHeader>
            <hr />
            <p className="text-base leading-[21px] mb-4">
                La evaluación proporcionada en este sitio es solo orientativa y no garantiza una compra segura o exitosa. Si decides invertir o realizar una compra, lo haces bajo tu propio riesgo. No nos hacemos responsables de ninguna pérdida financiera, fraude o inconveniente. Además, los enlaces a otras páginas web son solo para referencia y no implican respaldo ni responsabilidad sobre su contenido, especialmente si la información no está actualizada.
            </p>
            <DialogFooter>
                <Button onClick={onClose}>Entendido</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
)

export default DialogDisclaimer