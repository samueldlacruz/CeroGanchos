import { List } from "lucide-react"
import { Card } from "./ui/card"
import { cn } from "../lib/utils"

const TipsCard = ({ className, tips }: { className?: string, tips: string[] }) => (

    <Card className={cn(className,"w-full max-w-xl p-6 text-left rounded-lg border border-gray-200 shadow-sm h-full")}>

        <h4 className="text-lg font-serif font-bold text-navy-600 mb-4">
            <List className="inline mr-2 mb-1 text-mblue-500" />
            Recomendaciones:
        </h4>
        <p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-gray-500 space-y-2">
                {tips.map((tip, index) => (
                    <li key={`tips-${index}`}>{tip}</li>
                ))}
            </ul>
        </p>
    </Card>

)

export default TipsCard
