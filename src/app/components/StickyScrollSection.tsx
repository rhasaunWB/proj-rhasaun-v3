import React from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

export const StickyScrollSection = ({
    children,
    zIndex,
    className,
    index
}: {
    children: React.ReactNode,
    zIndex: number,
    className?: string,
    index: number
}) => {
    const { scrollY } = useScroll();
    const [windowHeight, setWindowHeight] = React.useState(800);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowHeight(window.innerHeight);
                setIsMobile(window.innerWidth < 768);
            };

            // Initial check
            handleResize();

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Calculate the active scroll range for this section
    // 'start' is when this section is fully visible and sticky at the top
    // 'end' is when the NEXT section has fully scrolled over it
    const start = index * windowHeight;
    const end = start + windowHeight;

    const scale = useTransform(scrollY, [start, end], [1, 0.9]);
    // Opacity fades out slightly faster than the scale
    const opacity = useTransform(scrollY, [start, end * 0.9], [1, 0]);

    return (
        <div
            className={`
                relative w-full 
                /* Desktop: Sticky behavior */
                md:sticky md:top-0 md:h-screen md:overflow-hidden 
                /* Mobile: Normal scrolling flow (disable effect) */
                ${className || ''}
            `}
            style={{ zIndex: isMobile ? 'auto' : zIndex }}
        >
            <motion.div
                /* Apply animations mainly on Desktop */
                style={isMobile ? undefined : { scale, opacity }}
                className="w-full h-full md:origin-bottom"
            >
                {children}
            </motion.div>
        </div>
    );
};
