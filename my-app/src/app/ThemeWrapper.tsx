// app/ThemeWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const initialTheme = typeof window !== 'undefined' 
  ? localStorage.getItem('theme') || 'system'
  : 'light';
  if (!mounted) {
    return (
      <html suppressHydrationWarning>
        <body>
          {children}
        </body>
      </html>
    );
  }

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme={initialTheme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}