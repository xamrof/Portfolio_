
import React, { useState, useEffect, useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const Reveal = ({children, delay = 0, className = ""}: RevealProps) => {

    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(entry.target) //Stop to observe the element
                }
            },
            {threshold: 0.1} // 10% of the element visible
        )

        if (ref.current) observer.observe(ref.current)
        
        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${className}`}
            style={{transitionDelay: `${delay}ms` }}
            >
            {children}
        </div>
    )
    
}