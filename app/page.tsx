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
            <div className="fixed top-0 left-0 w-full h-full -z-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')", backgroundAttachment: isMobile ? "scroll" : "fixed" }} />
            <div className="fixed top-0 left-0 w-full h-full bg-black/70 -z-10" />
            <div className="fixed top-0 left-0 w-full h-full -z-5 opacity-60">
                {[...Array(100)].map((_, i) => {
                    const w = Math.random() * 2 + 0.5;
                    const h = Math.random() * 2 + 0.5;
                    const t = Math.random() * 100;
                    const l = Math.random() * 100;
                    const o = Math.random() * 0.7 + 0.3;
                    return <div key={i} className="absolute rounded-full bg-white" style={{ width: w + "px", height: h + "px", top: t + "%", left: l + "%", opacity: o }} />;
                })}
            </div>

            <div className="relative z-10 pb-20">
                <div className="min-h-[80vh] flex items-center justify-center px-4 pt-10">
                    <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
                        <img src="/fox.png" alt="LisaDesign" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-7xl font-bold text-pink-500 mb-4 md:mb-6">LisaDesign</h1>
                        <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-12">Современный дизайн • Анимации • Адаптив</p>
                        <button className="px-6 md:px-8 py-2 md:py-4 bg-purple-800 hover:bg-purple-700 active:bg-purple-600 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"><span className="text-white font-semibold text-sm md:text-base">Наши работы</span></button>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-10 md:mb-16" data-aos="fade-up">Наши <span className="text-pink-400">преимущества</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {[{ icon: "/diamond.png", title: "Эксклюзивный дизайн", desc: "Профессиональный авторский дизайн. Изображения нарисованные вручную по вашему заказу" }, { icon: "/development.png", title: "Ручная разработка", desc: "Профессиональная ручная разработка без использования шаблонов" }, { icon: "/world-wide-web.png", title: "Эксклюзивные названия", desc: "Уникальные нейминг и названия, которые выделят ваш бизнес" }, { icon: "/24h.png", title: "Гибкое сопровождение", desc: "Гибкая система сопровождения сайтов и постоянная поддержка" }].map((item, idx) => (
                                <div key={idx} className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 active:border-purple-500 transition-all duration-300 hover:scale-105 active:scale-95 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-200 mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm flex-grow flex items-center justify-center">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
                        <div className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:scale-105" data-aos="fade-up"><div className="text-4xl md:text-5xl font-bold text-pink-400">15 лет</div><p className="text-gray-400 mt-2">опыта</p></div>
                        <div className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="100"><div className="text-4xl md:text-5xl font-bold text-pink-400">1000+</div><p className="text-gray-400 mt-2">проектов</p></div>
                        <div className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="200"><div className="text-4xl md:text-5xl font-bold text-pink-400">700+</div><p className="text-gray-400 mt-2">клиентов</p></div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {[{ icon: "/layers.png", title: "Дизайн", desc: "Figma, авто-лейауты, современные тренды, уникальный стиль", price: "от 15 000 ₽" }, { icon: "/web-development.png", title: "Разработка", desc: "Next.js, TypeScript, Tailwind, анимации, производительность", price: "от 25 000 ₽" }, { icon: "/problem-solving.png", title: "Комбо", desc: "Дизайн + Разработка. Сайт под ключ с видео и анимациями", price: "от 35 000 ₽" }].map((card, idx) => (
                            <div key={idx} className="rounded-2xl p-4 md:p-6 border border-white/10 hover:border-purple-500 active:border-purple-500 transition-all duration-300 hover:scale-105 active:scale-95 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay={idx * 150}>
                                <img src={card.icon} alt={card.title} className="w-12 h-12 mx-auto mb-3 md:mb-4" />
                                <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-2">{card.title}</h3>
                                <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">{card.desc}</p>
                                <p className="text-2xl md:text-3xl font-bold text-pink-400 mb-4 md:mb-6">{card.price}</p>
                                <button className="w-full py-2 bg-purple-800 hover:bg-purple-700 active:bg-purple-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">Заказать</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="max-w-2xl mx-auto rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-500 active:border-purple-500 transition-all duration-300 hover:scale-105 active:scale-95 text-center" data-aos="fade-up" data-aos-delay="200">
                        <img src="/telephone.png" alt="Телефон" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">Контакты</h2>
                        <div className="space-y-4">
                            <p className="text-gray-300 text-lg break-all">📞 <a href="tel:+79668043676" className="hover:text-pink-400 active:text-pink-300 transition-colors">+7 966 804-36-76</a></p>
                            <p className="text-gray-300 text-lg break-all">✉️ <a href="mailto:lisa_margo_lisa@mail.ru" className="hover:text-pink-400 active:text-pink-300 transition-colors">lisa_margo_lisa@mail.ru</a></p>
                            <div className="flex justify-center gap-4 pt-4">
                                <a href="https://t.me/+79668043676" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-purple-700 active:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
                                    <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.6-1.38-.97-2.23-1.56-.99-.68-.35-1.06.22-1.67.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.06-.2-.04-.28-.02-.11.02-1.85 1.18-5.23 3.47-.5.34-.94.51-1.34.5-.44-.01-1.28-.25-1.91-.45-.77-.25-1.38-.38-1.33-.81.03-.23.34-.46.95-.7 3.73-1.62 6.22-2.69 7.47-3.21 3.56-1.49 4.3-1.75 4.78-1.76.11 0 .35.03.51.2.13.15.17.35.18.45.01.04-.01.16-.03.25z"/></svg>
                                </a>
                                <a href="https://max.ru/u/f9LHodD0cOKhGlwTvaOZ5fBUU96wCvZ7-NAgRGAeD9HSBPUFhC4fVEi4qko" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-purple-700 active:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
                                    <span className="text-gray-300 font-bold text-sm">MAX</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}