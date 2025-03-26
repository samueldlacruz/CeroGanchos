import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export interface DialogAssessmentSummaryProps {
    isOpen: boolean;
    onClose: () => void;
    summaryOfResponses: Array<{ question: string; response: string }>;
}

const DialogAssessmentSummary = ({ summaryOfResponses, isOpen, onClose }: DialogAssessmentSummaryProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <div className="flex items-center">
                        <DialogTitle>Resumen de la Evaluación </DialogTitle>
                    </div>
                    <DialogDescription>
                        Aquí encontrarás un resumen de tu evaluación.
                    </DialogDescription>
                </DialogHeader>
                <hr />
                <Table containerClassName="h-[500px]">
                    <TableCaption>Respondiste {summaryOfResponses.length} preguntas de la evaluación</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No.</TableHead>
                            <TableHead className="w-[100px]">Pregunta</TableHead>
                            <TableHead className="text-right">Respuesta</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {summaryOfResponses.map((detail, index) => (
                            <TableRow key={`${detail.question.split(" ").join("-")}-${index}`}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell className="w-full">{detail.question}</TableCell>
                                <TableCell className="text-right">{detail.response}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>            
                </Table>
                
                <DialogFooter>
                    <Button onClick={onClose}>Cerrar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogAssessmentSummary