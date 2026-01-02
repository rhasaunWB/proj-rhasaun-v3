import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Misalignment() {
    const [isAligned, setIsAligned] = useState(false);

    // Toggle alignment state every few seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAligned(prev => !prev);
        }, 4000); // 4 second cycle
        return () => clearInterval(interval);
    }, []);

    // Lines representing the "System"
    const lines = Array.from({ length: 5 }).map((_, i) => i);

    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center relative overflow-hidden bg-card/5">
            <div className="relative w-full max-w-[95%] h-[450px] flex items-center justify-between">

                {/* Left Side (The Plan / Design) - Stable */}
                <motion.div className="w-[45%] h-full flex flex-col justify-center gap-12 relative">
                    {lines.map((i) => (
                        <div key={`left-${i}`} className="w-full h-[2px] bg-primary relative overflow-visible">
                            <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground opacity-50">0{i}</span>
                            {/* Connector Node */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-primary bg-background z-10" />
                        </div>
                    ))}
                    <div className="absolute top-8 left-0 text-xs font-mono text-muted-foreground">
                        SYS.A [DESIGN]
                    </div>
                </motion.div>

                {/* Right Side ( The Execution / Engineering) - Misaligned / Drifting */}
                <motion.div
                    className="w-[45%] h-full flex flex-col justify-center gap-12 relative"
                    animate={{
                        y: isAligned ? "0%" : "5%", // Relative shift since it's flex
                        opacity: 1
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 10
                    }}
                >
                    {lines.map((i) => (
                        <div key={`right-${i}`} className="w-full h-[2px] bg-primary/80 relative">
                            {/* Connector Node */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-primary bg-background z-10" />
                            <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground opacity-50">0{i}</span>
                        </div>
                    ))}
                    <div className="absolute bottom-8 right-0 text-xs font-mono text-muted-foreground text-right">
                        SYS.B [BUILD]
                    </div>
                </motion.div>

                {/* Connection Status Indicator */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    animate={{
                        opacity: isAligned ? 0 : 1,
                        scale: isAligned ? 0.5 : 1
                    }}
                >
                    <div className="w-[1px] h-32 bg-red-500/50 absolute left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="bg-background border border-red-500 text-red-500 text-[10px] font-mono px-2 py-1 uppercase tracking-wider whitespace-nowrap">
                        ! Misalignment
                    </div>
                </motion.div>

                {/* Success Indicator */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    animate={{
                        opacity: isAligned ? 1 : 0,
                        scale: isAligned ? 1 : 0.5
                    }}
                >
                    <div className="bg-background border border-green-500 text-green-500 text-[10px] font-mono px-2 py-1 uppercase tracking-wider whitespace-nowrap">
                        ✓ Synced
                    </div>
                </motion.div>

            </div>

            {/* Background Metadata */}
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted-foreground opacity-50">
                ERR_RATE: {isAligned ? "0.0%" : "12.4%"}
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground">
                OFFSET_MONITOR // V1
            </div>
        </div>
    );
}
