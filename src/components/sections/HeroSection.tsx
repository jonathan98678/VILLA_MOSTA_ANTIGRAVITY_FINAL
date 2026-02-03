"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    videoId?: string;
    videoStart?: number;
    videoEnd?: number;
    showScrollIndicator?: boolean;
    className?: string;
}

declare global {
    interface Window {
        YT: {
            Player: new (
                elementId: string,
                config: {
                    videoId: string;
                    playerVars: Record<string, number | string>;
                    events: {
                        onReady: (event: { target: YouTubePlayer }) => void;
                        onStateChange: (event: { data: number; target: YouTubePlayer }) => void;
                    };
                }
            ) => YouTubePlayer;
        };
        onYouTubeIframeAPIReady: () => void;
    }
}

interface YouTubePlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    seekTo: (seconds: number, allowSeekAhead: boolean) => void;
    getCurrentTime: () => number;
    mute: () => void;
}

export function HeroSection({
    title = "VILLA MOSTA",
    subtitle = "A Traditional Maltese Home",
    description = "Experience authentic Maltese hospitality in the heart of Mosta.",
    videoId = "9mg8FOQi6bI",
    videoStart = 121,
    videoEnd = 124.5,
    showScrollIndicator = true,
    className,
}: HeroSectionProps) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [showFreezeFrame, setShowFreezeFrame] = React.useState(false);
    const playerRef = React.useRef<YouTubePlayer | null>(null);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
    const hasPausedRef = React.useRef(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("hero-video", {
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    start: videoStart,
                    enablejsapi: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    disablekb: 1,
                },
                events: {
                    onReady: (event) => {
                        event.target.mute();
                        event.target.seekTo(videoStart, true);
                        event.target.playVideo();

                        intervalRef.current = setInterval(() => {
                            if (hasPausedRef.current) return;

                            const currentTime = event.target.getCurrentTime();
                            if (currentTime >= videoEnd) {
                                event.target.pauseVideo();
                                hasPausedRef.current = true;

                                // Show the freeze frame screenshot
                                setShowFreezeFrame(true);

                                if (intervalRef.current) {
                                    clearInterval(intervalRef.current);
                                }
                            }
                        }, 100);
                    },
                    onStateChange: () => { },
                },
            });
        };

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [videoId, videoStart, videoEnd]);

    const scrollToContent = () => {
        const nextSection = document.getElementById("intro");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className={cn(
                "relative flex items-center justify-center overflow-hidden bg-stone-900",
                "mt-14",
                "h-[calc(100vh-56px)] min-h-[500px]",
                className
            )}
        >
            {/* Video Background - hidden after freeze frame shows */}
            <div className={cn(
                "absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-300",
                showFreezeFrame ? "opacity-0" : "opacity-100"
            )}>
                <div
                    className="absolute left-1/2 w-[177.78vh] min-w-full"
                    style={{
                        aspectRatio: "16/9",
                        bottom: "-50px",
                        transform: "translate(-50%, 0)"
                    }}
                >
                    <div id="hero-video" className="w-full h-full" />
                </div>
            </div>

            {/* Freeze frame screenshot - shows after video ends */}
            <div className={cn(
                "absolute inset-0 transition-opacity duration-300",
                showFreezeFrame ? "opacity-100" : "opacity-0"
            )}>
                <Image
                    src="/images/villa/hero-freeze.png"
                    alt="Mosta Rotunda"
                    fill
                    className="object-cover object-bottom"
                    priority
                />
            </div>

            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />

            {/* Content */}
            <div className="relative text-center px-6 max-w-4xl mx-auto" style={{ zIndex: 10 }}>
                <h1
                    className={cn(
                        "font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4",
                        "transition-all duration-1000 ease-out",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {title}
                </h1>

                <p
                    className={cn(
                        "text-white/90 text-lg md:text-xl mb-2",
                        "transition-all duration-1000 ease-out delay-150",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {subtitle}
                </p>

                <p
                    className={cn(
                        "text-white/70 text-base md:text-lg max-w-lg mx-auto",
                        "transition-all duration-1000 ease-out delay-300",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {description}
                </p>

                <div
                    className={cn(
                        "mt-8 transition-all duration-1000 ease-out delay-500",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <Link href="/book" className="btn btn-ghost">
                        Book Your Stay
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <button
                    onClick={scrollToContent}
                    className={cn(
                        "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white",
                        "transition-all duration-500 ease-out cursor-pointer",
                        "flex flex-col items-center gap-2"
                    )}
                    style={{ zIndex: 10 }}
                    aria-label="Scroll to content"
                >
                    <span className="text-xs tracking-[0.2em] uppercase">Discover</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
            )}
        </section>
    );
}
