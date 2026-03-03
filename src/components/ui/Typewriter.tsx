import  {useState, useEffect} from 'react'

interface TypewriterProps {
    text: string;
    speed?: number;
}

export const Typewriter = ({text, speed = 80}: TypewriterProps) => {

    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        let i = 0;

        const typingInterval = setInterval(() => {
            if (i <= text.length) {
                setDisplayText(text.slice(0, i))
                i++;
            }else {
                clearInterval(typingInterval)
            }
        }, speed)

       return () => clearInterval(typingInterval)
    }, [text, speed])

    return (
        <span>
            {displayText}
            <span className='animate-pulse text-indigo-500 font-light ml-1'>|</span>
        </span>
    )

}