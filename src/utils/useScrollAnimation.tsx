import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

// Component wrapper for easy use
import React from 'react';

interface ScrollAnimateProps {
    children: React.ReactNode;
    animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'bounce';
    delay?: number;
    className?: string;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
    children,
    animation = 'fadeUp',
    delay = 0,
    className = '',
}) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`scroll-animate ${animation} ${isVisible ? 'visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimate;
