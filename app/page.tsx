// src/app/page.tsx

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Герой-секция */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">
              🚀 Коалиция <span className="text-purple-400">Дизайн + Код</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Супруга рисует в Figma → Я оживляю в коде
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Наши работы
            </button>
          </div>
        </div>

        {/* Карточка товара — покажи супруге! */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-sm mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-purple-500/30">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-5xl">🎨</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Дизайн-проект
              </h2>
              <p className="text-gray-300 mb-4">
                Современный дизайн от профессионала. Адаптивно, стильно, со вкусом.
              </p>
              <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-400">
                от 15 000 ₽
              </span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all">
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}