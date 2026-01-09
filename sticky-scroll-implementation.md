# Sticky Scroll "Shrink Fade" Implementation Guide

This guide describes how to implement the "Shrink Fade" scroll effect used on the HTCI website. This effect makes the current section scale down and fade out slightly as the next section slides over it, creating a depth effect.

## 1. Prerequisites

Ensure you have the `motion` library installed (previously simpler `framer-motion`):

```bash
npm install motion
# or
npm install framer-motion
```

*Note: The code below uses `motion/react` imports, which is the modern import style for Motion V12+. If you are using an older version of `framer-motion`, change imports to `from 'framer-motion'`.*

## 2. The Core Component: `StickyScrollSection.tsx`

Create this component. It handles the scroll detection and animation logic.

**Key Logic:**
- It uses `useScroll` to track global scroll position.
- It calculates a `start` and `end` scroll range based on the section's `index`.
- It maps that range to `scale` (1 -> 0.9) and `opacity` (1 -> 0).

```tsx
import React from 'react';
import { useScroll, useTransform, motion } from 'motion/react'; // or 'framer-motion'

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
```

## 3. Usage Implementation

To make the effect work, your page structure must follow a strict pattern:
1.  **Sequential Indices**: `index={0}`, `index={1}`, etc.
2.  **Increasing Z-Index**: `zIndex={0}`, `zIndex={10}`, `zIndex={20}`. This ensures the *next* section visually slides *on top* of the current one.
3.  **Full Height**: Custom content inside should generally fill the screen or be centered, as the container is forced to `h-screen`.

### Example Page Structure (`App.tsx` or `HomePage.tsx`)

```tsx
import { StickyScrollSection } from './StickyScrollSection';

export const HomePage = () => {
    return (
        <main className="w-full bg-black min-h-screen">
            
            {/* 1. First Section (Background) */}
            <StickyScrollSection zIndex={0} index={0} className="bg-gray-900">
                <div className="h-full flex items-center justify-center">
                    <h1>Section One</h1>
                </div>
            </StickyScrollSection>

            {/* 2. Second Section (Slides over #1, while #1 shrinks) */}
            <StickyScrollSection zIndex={10} index={1} className="bg-gray-800">
                 <div className="h-full flex items-center justify-center">
                    <h1>Section Two</h1>
                </div>
            </StickyScrollSection>

            {/* 3. Third Section */}
            <StickyScrollSection zIndex={20} index={2} className="bg-gray-700">
                 <div className="h-full flex items-center justify-center">
                    <h1>Section Three</h1>
                </div>
            </StickyScrollSection>
            
            {/* 4. Normal Static Content (Footer, etc.) 
               Often you want the last section to scroll away normally, 
               or have a static footer that sits on top. 
               Just ensure its z-index is higher than the last scroll section. 
            */}
            <div className="relative z-30 bg-black py-20">
                <footer>My Footer</footer>
            </div>
        </main>
    );
};
```

## 4. Key Considerations

-   **Mobile Responsiveness:** The provided component detects mobile (`< 768px`) and disables the sticky/scale effects. This is usually preferred because "scroll-jacking" on mobile can feel buggy. On mobile, it falls back to a standard vertical scroll layout.
-   **Content Length:** This pattern works best when each "Slide" fits within the viewport. If you have a section with a lot of text that requires scrolling *within* the section, you may need `overflow-y-auto` inside the `StickyScrollSection` children, but be warned this can interfere with the main page scroll feel. This pattern is best for "Presentation" sites.
-   **Tailwind:** Ensure Tailwind CSS is configured, as the component relies on `h-screen`, `sticky`, `top-0`, etc.
