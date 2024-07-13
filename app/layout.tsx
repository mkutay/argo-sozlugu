import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/themeProvider';
import { NavBar } from '@/components/navBar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Çevrim İçi Türkçe Argo Sözlüğü',
  description: 'Çevrim İçi Türkçe Argo Sözlüğü',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col">
            <NavBar/>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
