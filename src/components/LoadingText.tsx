import { useEffect, useState } from "react";

export default function LoadingText({ texts }: { texts: string[] }) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFade(true);
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <p className={`text-lg text-center font-semibold transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
            {texts[index]}
        </p>
    );
}
