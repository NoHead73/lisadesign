"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-y-auto overflow-x-hidden">
            {/* Фон */}
            <div
                className="fixed top-0 left-0 w-full h-full -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029')",
                    backgroundAttachment: isMobile ? "scroll" : "fixed"
                }}
            />

            {/* Градиент */}
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 -z-10" />

            {/* Частицы */}
            <div className="fixed top-0 left-0 w-full h-full -z-5 opacity-20">
                {!isMobile && [...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/20 animate-pulse"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 2 + 1}s`,
                        }}
                    />
                ))}
            </div>

            {/* Контент */}
            <div className="relative z-10 pb-20">
                {/* Hero секция */}
                <div className="min-h-[80vh] flex items-center justify-center px-4 pt-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            🦊 LisaDesign
                        </h1>
                        <p className="text-sm md:text-lg text-purple-300 mb-6 md:mb-12">
                            Современный дизайн • Анимации • Адаптив
                        </p>
                        <button className="group relative px-6 md:px-8 py-2 md:py-4 bg-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
                            <span className="relative z-10 text-white font-semibold text-sm md:text-base">
                                Наши работы
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </div>

                {/* Преимущества */}
                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-16">
                            Наши <span className="text-purple-400">преимущества</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {[
                                {
                                    icon: "🎨",
                                    title: "Эксклюзивный дизайн",
                                    desc: "Профессиональный авторский дизайн, созданный специально для вас"
                                },
                                {
                                    icon: "💻",
                                    title: "Ручная разработка",
                                    desc: "Профессиональная ручная разработка без использования шаблонов"
                                },
                                {
                                    icon: "✨",
                                    title: "Эксклюзивные названия",
                                    desc: "Уникальные нейминг и названия, которые выделят ваш бизнес"
                                },
                                {
                                    icon: "🔄",
                                    title: "Гибкое сопровождение",
                                    desc: "Гибкая система сопровождения сайтов и постоянная поддержка"
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-500 transition-all duration-300 hover:scale-105 text-center"
                                >
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-white/70 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Карточки услуг */}
                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "🎨",
                                title: "Дизайн",
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
                                className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-4xl md:text-6xl mb-3 md:mb-4">{card.icon}</div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-white/70 text-sm md:text-base mb-3 md:mb-4">{card.desc}</p>
                                <p className="text-2xl md:text-3xl font-bold text-purple-400 mb-4 md:mb-6">{card.price}</p>
                                <button className="w-full py-2 bg-purple-600/50 hover:bg-purple-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">
                                    Заказать
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Контакты */}
                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-500/30 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Свяжитесь с <span className="text-purple-400">Лисой</span>
                        </h2>
                        <div className="space-y-4">
                            <p className="text-white/80 text-lg break-all">
                                📞 <a href="tel:+79668043676" className="hover:text-purple-400 transition-colors">+7 966 804-36-76</a>
                            </p>
                            <p className="text-white/80 text-lg break-all">
                                ✉️ <a href="mailto:lisa_margo_lisa@mail.ru" className="hover:text-purple-400 transition-colors">lisa_margo_lisa@mail.ru</a>
                            </p>
                            <div className="flex justify-center gap-4 pt-4">
                                <a href="https://t.me/+79668043676" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.6-1.38-.97-2.23-1.56-.99-.68-.35-1.06.22-1.67.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.06-.2-.04-.28-.02-.11.02-1.85 1.18-5.23 3.47-.5.34-.94.51-1.34.5-.44-.01-1.28-.25-1.91-.45-.77-.25-1.38-.38-1.33-.81.03-.23.34-.46.95-.7 3.73-1.62 6.22-2.69 7.47-3.21 3.56-1.49 4.3-1.75 4.78-1.76.11 0 .35.03.51.2.13.15.17.35.18.45.01.04-.01.16-.03.25z"/></svg>
                                </a>
                                <a href="https://t.me/+79668043676" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <span className="text-white font-bold text-sm">MAX</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}