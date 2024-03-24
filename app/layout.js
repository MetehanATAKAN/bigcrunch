import Header from "@/components/Header";
import { Inter } from "next/font/google";
import '@/styles/reset.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Footer from "@/components/Footer";
config.autoAddCss = false
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitcoin, Ethereum Al/Sat | Kripto Para Borsası | Gate.io",
  description: "Bitcoin ✓ Ethereum ✓ Dogecoin gibi  fazla kripto para birimi ve sabit coin ile lider kripto para borsası ✓ Gate.io ile şimdi kripto alım satımına başlayın!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          <AntdRegistry>
          {children}
          </AntdRegistry>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
