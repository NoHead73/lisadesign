"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            {/* Фоновое видео */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover -z-20"
                poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-particles-flowing-832-large.mp4" type="video/mp4" />
            </video>

            {/* Градиентная наложение */}
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 -z-10" />

            {/* Анимированные частицы */}
            <div className="fixed top-0 left-0 w-full h-full -z-5 opacity-30">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/20 animate-pulse"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Контент */}
            <div
                className="relative z-10 transition-transform duration-300"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                {/* Hero секция */}
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            🦊 LisaDesign
                        </h1>
                        <p className="text-md md:text-lg text-purple-300 mb-12">
                            Современный дизайн • Анимации • Видео-фон • Адаптив
                        </p>
                        <button className="group relative px-8 py-4 bg-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <span className="relative z-10 text-white font-semibold">
                Наши работы
              </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </div>

                {/* Карточки */}
                <div className="container mx-auto px-4 py-20">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "🎨",
                                title: "Дизайн от Лисы",
                                desc: "Figma, авто-лейауты, современные тренды, уникальный стиль",
                                price: "от 15 000 ₽",
                            },
                            {
                                icon: "⚡",
                                title: "Разработка",
                                desc: "Next.js, TypeScript, Tailwind, анимации, производительность",
                                price: "от 25 000 ₽",
                            },
                            {
                                icon: "🚀",
                                title: "Комбо",
                                desc: "Дизайн + Разработка. Сайт под ключ с видео и анимациями",
                                price: "от 35 000 ₽",
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                                <div className="text-6xl mb-4">{card.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-white/70 mb-4">{card.desc}</p>
                                <p className="text-3xl font-bold text-purple-400 mb-6">{card.price}</p>
                                <button className="w-full py-2 bg-purple-600/50 hover:bg-purple-600 rounded-lg transition-all duration-300 text-white">
                                    Заказать
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}