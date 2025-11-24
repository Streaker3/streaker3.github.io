"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShaderBackground } from "@/components/ui/shader-background";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function BlogIndexPage() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date("2027-03-30T00:00:00").getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <div className="min-h-screen pt-20 pb-32 relative overflow-hidden flex items-center justify-center">
            <ShaderBackground />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Coming Soon
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted mb-16 max-w-2xl mx-auto">
                        Exciting content is on the way. Stay tuned!
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                        {timeUnits.map((unit, index) => (
                            <motion.div
                                key={unit.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-surface/30 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
                            >
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-mono tabular-nums">
                                    {String(unit.value).padStart(2, "0")}
                                </div>
                                <div className="text-sm md:text-base text-text-muted uppercase tracking-wider">
                                    {unit.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
