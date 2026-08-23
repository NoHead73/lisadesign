'use client';

export default function Footer() {
    return (
        <footer id="footer" className="bg-black/20 backdrop-blur-md border-t border-white/5 py-6 md:py-8 mt-10">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <img src="/fox.png" alt="LisaDesign" className="w-6 h-6" />
                            <span className="text-base font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">LisaDesign</span>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Дизайн, который вдохновляет</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-pink-400 font-semibold text-sm mb-1">Контакты</h3>
                        <p className="text-gray-400 text-sm">📞 <a href="tel:+79668043676" className="hover:text-pink-400 transition">+7 966 804-36-76</a></p>
                        <p className="text-gray-400 text-sm">✉️ <a href="mailto:lisa_margo_lisa@mail.ru" className="hover:text-pink-400 transition">lisa_margo_lisa@mail.ru</a></p>
                    </div>

                    <div className="text-center md:text-right">
                        <h3 className="text-pink-400 font-semibold text-sm mb-1">Мы в соцсетях</h3>
                        <div className="flex justify-center md:justify-end gap-4">
                            <a href="https://t.me/+79668043676" target="_blank" className="text-gray-400 hover:text-pink-400 transition text-sm">Telegram</a>
                            <a href="https://max.ru/u/f9LHodD0cOKhGlwTvaOZ5fBUU96wCvZ7-NAgRGAeD9HSBPUFhC4fVEi4qko" target="_blank" className="text-gray-400 hover:text-pink-400 transition text-sm">MAX</a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-[10px] mt-6 border-t border-white/5 pt-4">
                    © 2026 LisaDesign. Все права защищены.
                </div>
            </div>
        </footer>
    );
}