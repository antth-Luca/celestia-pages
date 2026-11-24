import type { ReactNode } from "react"

interface CCProps {
    content: ReactNode
}

export default function ContentContainer({ content }: CCProps) {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <div className="star-bg">
                {Array.from({ length: 50 }).map((_, i) => {
                    const size = Math.random() * 2 + 1;

                    return (
                        <div
                            key={i}
                            className="star"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity: Math.random() * 0.7 + 0.3,
                                animationDuration: `${Math.random() * 10 + 3}s`,
                                animationDelay: `${Math.random() * -15}s`,
                            }}
                        />
                    );
                })}
            </div>

            <div className="relative z-10 w-full">
                {content}
            </div>
        </div>
    );
}