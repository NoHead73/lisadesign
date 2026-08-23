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
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <img src="/fox.png" alt="LisaDesign" className="w-8 h-8 md:w-10 md:h-10" />
                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">LisaDesign</span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-gray-300">
                    <button onClick={() => scrollToSection('advantages')} className="hover:text-white transition">О нас</button>
                    <button onClick={() => scrollToSection('services')} className="hover:text-white transition">Услуги</button>
                    <button onClick={() => scrollToSection('contacts')} className="hover:text-white transition">Контакты</button>
                    <button onClick={() => scrollToSection('contacts')} className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-semibold hover:shadow-lg transition">Связаться</button>
                </nav>

                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10 px-4 py-4 flex flex-col gap-4 text-gray-300">
                    <button onClick={() => scrollToSection('advantages')} className="text-left hover:text-white transition">О нас</button>
                    <button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition">Услуги</button>
                    <button onClick={() => scrollToSection('contacts')} className="text-left hover:text-white transition">Контакты</button>
                    <button onClick={() => scrollToSection('contacts')} className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-semibold text-center">Связаться</button>
                </div>
            )}
        </header>
    );
}