import { motion } from "motion/react";

export function SystemArchitecture() {
    // Generate a grid of points
    const points = Array.from({ length: 16 }).map((_, i) => ({
        x: (i % 4) * 100 + 50,
        y: Math.floor(i / 4) * 100 + 50,
        id: i,
    }));

    // Define connections (lines) between specific points to form a "system"
    const connections = [
        { from: 5, to: 6 },
        { from: 6, to: 10 },
        { from: 10, to: 9 },
        { from: 9, to: 5 }, // Inner loop
        { from: 0, to: 5 },
        { from: 2, to: 6 },
        { from: 8, to: 9 },
        { from: 10, to: 11 },
        { from: 5, to: 1 },
    ];

    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center relative overflow-hidden bg-card/5 border border-border/50">
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-[600px] max-h-[600px] text-primary"
            >
                {/* Draw Connections */}
                {connections.map((conn, i) => {
                    const start = points[conn.from];
                    const end = points[conn.to];

                    return (
                        <motion.line
                            key={`conn-${i}`}
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="currentColor"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.4 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.2, // Stagger drawing
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}

                {/* Draw Nodes */}
                {points.map((point) => (
                    <motion.g key={point.id}>
                        {/* Pulsing Effect Container */}
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="2"
                            fill="currentColor"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: Math.random() * 1, // Random appearance
                            }}
                        />

                        {/* Active Nodes (Larger, Pulsing) - selectively applied */}
                        {[5, 6, 9, 10].includes(point.id) && (
                            <>
                                <motion.circle
                                    cx={point.x}
                                    cy={point.y}
                                    r="6"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="transparent"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                />
                                <circle cx={point.x} cy={point.y} r="3" fill="currentColor" />
                            </>
                        )}
                    </motion.g>
                ))}

                {/* Floating Data Packets (moving along lines) */}
                <motion.circle
                    r="3"
                    fill="currentColor"
                    className="text-primary"
                >
                    <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path={`M ${points[5].x} ${points[5].y} L ${points[6].x} ${points[6].y} L ${points[10].x} ${points[10].y} L ${points[9].x} ${points[9].y} Z`}
                    />
                </motion.circle>
            </svg>

            {/* Technical Labels */}
            <motion.div
                className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                SYS_ARCH_V2.0 // ONLINE
            </motion.div>
        </div>
    );
}
