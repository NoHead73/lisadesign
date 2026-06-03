'use client';

import { useEffect, useState } from 'react';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import('aos').then((AOS) => {
      const AOSModule = AOS.default || AOS;
      AOSModule.init({
        duration: 1500,
        once: false,
        offset: 100,
      });
    });
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      import('aos').then((AOS) => {
        const AOSModule = AOS.default || AOS;
        AOSModule.refresh();
      });
    }
  }, [mounted]);

  return <>{children}</>;
}