'use client';

import { useEffect, useState } from 'react';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-7xl md:text-8xl animate-bounce mb-4">🦊</div>
          <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Загружаем LisaDesign...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}