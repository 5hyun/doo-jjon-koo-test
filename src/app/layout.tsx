import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import { MobileContainer } from '@/components/layouts/mobile-container';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: '두바이 쫀득 쿠키 테스트 | 나는 어떤 쿠키일까?',
  description:
    '피스타치오와 카다이프의 매력! 20개의 질문으로 알아보는 나만의 두바이 쿠키 성향 테스트. 32가지 결과 중 나는?',
  keywords:
    '두바이 초콜릿, 두바이 쿠키, MBTI 테스트, 성향 테스트, 피스타치오, 카다이프',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <MobileContainer>{children}</MobileContainer>
      </body>
    </html>
  );
}
