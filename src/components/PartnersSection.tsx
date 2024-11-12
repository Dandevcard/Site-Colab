'use client';

import { useTheme } from "next-themes";
import localFont from 'next/font/local';

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

interface PartnerLogoProps {
  src: string;
  alt: string;
}

export default function PartnersSection() {
  const { theme } = useTheme();

  return (
    <section id="partners" className={`py-20 bg-gray-100 dark:bg-secondary w-full ${FontArista.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-primary mb-8  sm:mb-16">
          Empresas que Confiam na Colab Devs
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
          <PartnerLogo src={theme !== "dark" ? "/modena.png" : "/modena-dark.png"} alt="Logo Modena" />
          <PartnerLogo src="/fimca.png" alt="Logo IMCA" />
          <PartnerLogo src="/c88.png" alt="Logo C88" />
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ src, alt }: PartnerLogoProps) {
  return (
    <div className="bg-white dark:bg-card p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20">
      <img src={src} alt={alt} className="w-24 h-16 sm:w-40 sm:h-20 object-contain mx-auto" />
    </div>
  );
}