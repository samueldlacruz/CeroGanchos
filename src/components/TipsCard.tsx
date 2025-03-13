import { List } from "lucide-react"
import { Card } from "./ui/card"
import { cn } from "../lib/utils"

const TipsCard = ({ className, tips }: { className?: string, tips: string[] }) => (

    <Card className={cn(className,"w-full max-w-xl p-6 text-left rounded-md h-full")}>

        <h4 className="text-xl font-bold mb-4">
            <List className="inline mr-2 mb-1 text-blue-500" />
            Consejos:
        </h4>
        <p>
            <ul className="list-disc list-inside text-base leading-[21px]">
                {tips.map((tip, index) => (
                    <li className="mb-2" key={`tips-${index}`}>{tip}</li>
                ))}
            </ul>
        </p>
    </Card>

)

export default TipsCard