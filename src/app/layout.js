import Header from '@/components/Header';
import "./globals.css";


export const metadata = {
  title: "SPA page 2",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
