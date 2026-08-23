'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex flex-col items-start cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <div className="flex items-center gap-2">
                        <img src="/fox.png" alt="LisaDesign" className="w-8 h-8 md:w-10 md:h-10" />
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                            LisaDesign
                        </span>
                    </div>
                    <span className="text-gray-400 text-xs md:text-sm mt-0.5 ml-10 md:ml-12 hidden md:block">
                        Дизайн, который вдохновляет
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-gray-300">
                    <button onClick={() => scrollToSection('advantages')} className="hover:text-pink-400 transition">О нас</button>
                    <button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition">Услуги</button>
                    <button onClick={() => scrollToSection('footer')} className="hover:text-pink-400 transition">Контакты</button>
                </nav>

                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black/20 backdrop-blur-md border-b border-white/5 px-4 py-4 flex flex-col gap-4 text-gray-300">
                    <button onClick={() => scrollToSection('advantages')} className="text-left hover:text-pink-400 transition">О нас</button>
                    <button onClick={() => scrollToSection('services')} className="text-left hover:text-pink-400 transition">Услуги</button>
                    <button onClick={() => scrollToSection('footer')} className="text-left hover:text-pink-400 transition">Контакты</button>
                </div>
            )}
        </header>
    );
}