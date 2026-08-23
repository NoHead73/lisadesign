"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen overflow-y-auto overflow-x-hidden">
            <Header />

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

            <div className="relative z-10 pb-20 pt-16">
                <section id="hero" className="min-h-[80vh] flex items-center justify-center px-4 pt-10">
                    <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                        <img src="/fox.png" alt="LisaDesign" className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-6">LisaDesign</h1>
                        <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-12">Современный дизайн • Анимации • Адаптив</p>
                        <button className="px-6 md:px-8 py-2 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:from-pink-700 active:to-purple-800 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"><span className="text-white font-semibold text-sm md:text-base">Наши работы</span></button>
                    </div>
                </section>

                <section id="advantages" className="container mx-auto px-4 py-10 md:py-16">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent" data-aos="fade-up" data-aos-once="false">Наши преимущества</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {[{ icon: "/diamond.png", title: "Эксклюзивный дизайн", desc: "Профессиональный авторский дизайн. Изображения нарисованные вручную по вашему заказу" }, { icon: "/development.png", title: "Ручная разработка", desc: "Профессиональная ручная разработка без использования шаблонов" }, { icon: "/world-wide-web.png", title: "Эксклюзивные названия", desc: "Уникальные нейминг и названия, которые выделят ваш бизнес" }, { icon: "/24h.png", title: "Гибкое сопровождение", desc: "Гибкая система сопровождения сайтов и постоянная поддержка" }].map((item, idx) => (
                                <div key={idx} className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 active:border-purple-500 transition-all duration-300 hover:scale-105 active:scale-95 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay={idx * 100} data-aos-once="false">
                                    <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-200 mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm flex-grow flex items-center justify-center">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-10 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
                        <div className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-once="false">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">15 лет</div>
                            <p className="text-gray-400 mt-2">опыта</p>
                        </div>
                        <div className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">1000+</div>
                            <p className="text-gray-400 mt-2">проектов</p>
                        </div>
                        <div className="rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">700+</div>
                            <p className="text-gray-400 mt-2">клиентов</p>
                        </div>
                    </div>
                </section>

                <section id="services" className="container mx-auto px-4 py-10 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {[{ icon: "/layers.png", title: "Дизайн", desc: "Figma, авто-лейауты, современные тренды, уникальный стиль", price: "от 15 000 ₽" }, { icon: "/web-development.png", title: "Разработка", desc: "Next.js, TypeScript, Tailwind, анимации, производительность", price: "от 25 000 ₽" }, { icon: "/problem-solving.png", title: "Комбо", desc: "Дизайн + Разработка. Сайт под ключ с видео и анимациями", price: "от 35 000 ₽" }].map((card, idx) => (
                            <div key={idx} className="rounded-2xl p-4 md:p-6 border border-white/10 hover:border-purple-500 active:border-purple-500 transition-all duration-300 hover:scale-105 active:scale-95 text-center flex flex-col h-full" data-aos="fade-up" data-aos-delay={idx * 150} data-aos-once="false">
                                <img src={card.icon} alt={card.title} className="w-12 h-12 mx-auto mb-3 md:mb-4" />
                                <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-2">{card.title}</h3>
                                <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">{card.desc}</p>
                                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-6">{card.price}</p>
                                <button
                                    onClick={scrollToFooter}
                                    className="w-full py-2 bg-purple-800 hover:bg-purple-700 active:bg-purple-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base"
                                >
                                    Заказать
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}