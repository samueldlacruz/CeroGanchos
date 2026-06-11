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
            <DialogContent className="sm:max-w-2xl border border-gray-200">
                <DialogHeader>
                    <div className="flex items-center">
                        <DialogTitle className="font-serif text-navy-600">Resumen de la Evaluación</DialogTitle>
                    </div>
                    <DialogDescription className="text-gray-500">
                        Aquí encontrarás un resumen de tu evaluación.
                    </DialogDescription>
                </DialogHeader>
                <hr className="border-gray-100" />
                <Table containerClassName="h-[500px]">
                    <TableCaption className="text-gray-400">Respondiste {summaryOfResponses.length} preguntas de la evaluación</TableCaption>
                    <TableHeader>
                        <TableRow className="border-gray-200">
                            <TableHead className="text-navy-600 font-semibold">No.</TableHead>
                            <TableHead className="w-[100px] text-navy-600 font-semibold">Pregunta</TableHead>
                            <TableHead className="text-right text-navy-600 font-semibold">Respuesta</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {summaryOfResponses.map((detail, index) => (
                            <TableRow key={`${detail.question.split(" ").join("-")}-${index}`} className="border-gray-100">
                                <TableCell className="font-medium text-navy-600">{index + 1}</TableCell>
                                <TableCell className="w-full text-gray-600 text-sm">{detail.question}</TableCell>
                                <TableCell className="text-right text-gray-600 text-sm">{detail.response}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <DialogFooter>
                    <Button onClick={onClose} className="bg-navy-600 hover:bg-navy-500 text-white">Cerrar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogAssessmentSummary
