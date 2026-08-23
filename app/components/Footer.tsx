'use client';

export default function Footer() {
    return (
        <footer className="bg-black/60 backdrop-blur-md border-t border-white/10 py-8 md:py-12 mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <img src="/fox.png" alt="LisaDesign" className="w-8 h-8" />
                        <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">LisaDesign</span>
                    </div>
                    <p className="text-gray-400 text-sm">Дизайн, который вдохновляет</p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-2">Контакты</h3>
                    <p className="text-gray-400 text-sm">📞 <a href="tel:+79668043676" className="hover:text-pink-400 transition">+7 966 804-36-76</a></p>
                    <p className="text-gray-400 text-sm">✉️ <a href="mailto:lisa_margo_lisa@mail.ru" className="hover:text-pink-400 transition">lisa_margo_lisa@mail.ru</a></p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-2">Мы в соцсетях</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://t.me/+79668043676" target="_blank" className="text-gray-400 hover:text-pink-400 transition">Telegram</a>
                        <a href="https://max.ru/u/f9LHodD0cOKhGlwTvaOZ5fBUU96wCvZ7-NAgRGAeD9HSBPUFhC4fVEi4qko" target="_blank" className="text-gray-400 hover:text-pink-400 transition">MAX</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-xs mt-8 border-t border-white/5 pt-4">
                © 2026 LisaDesign. Все права защищены.
            </div>
        </footer>
    );
}
