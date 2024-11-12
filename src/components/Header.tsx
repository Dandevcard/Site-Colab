'use client';

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import useCloseSheet from "@/hooks/use-close-sheet"; // Importando o hook

const FontArista = localFont({ src: "fonts/Arista-Pro-Regular-trial.woff2" });

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const scrollToElement = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Usando o hook para fechar o Sheet quando a janela for redimensionada
  useCloseSheet(isOpen, setIsOpen);

  if (!mounted) return null;

  const handleButtonClick = (section: string) => {
    setIsOpen(false); // Fecha o Sheet primeiro
    setTimeout(() => {
      requestAnimationFrame(() => {
        scrollToElement(section);
      });
    }, 300);
  };

  return (
    <header className="py-2 w-full mx-auto px-5 lg:justify-start justify-center flex z-10">
      <nav className="flex container mx-auto items-center">
        <div>
          {theme !== "dark" ? (
            <img src="/logo-light-horizontar.png" alt="logo" className="lg:h-32 h-24" />
          ) : (
            <img src="/logo-dark-horizontar.png" alt="logo" className="lg:h-32 h-24" />
          )}
        </div>
        <div className="flex-1" />

        <div className="hidden lg:flex gap-5 items-center">
          <Button onClick={() => handleButtonClick("about")} color="success" variant="ghost" className={`${FontArista.className} dark:text-white hover:text-green-500 text-xl`}>Sobre</Button>
          <Button onClick={() => handleButtonClick("services")} color="success" variant="ghost" className={`${FontArista.className} dark:text-white hover:text-green-500 text-xl`}>Serviços</Button>
          <Button onClick={() => handleButtonClick("cases")} color="success" variant="ghost" className={`${FontArista.className} dark:text-white hover:text-green-500 text-xl`}>Cases</Button>
          <Button onClick={() => handleButtonClick("contact")} color="success" variant="ghost" className={`${FontArista.className} dark:text-white hover:text-green-500 text-xl`}>Contato</Button>
          <Button onClick={() => handleButtonClick("partners")} color="success" variant="ghost" className={`${FontArista.className} dark:text-white hover:text-green-500 text-xl`}>Parceiros</Button>
        </div>
        <div className="lg:hidden flex gap-5 items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex items-center" onClick={() => setIsOpen(true)}>
                <Menu className="mr-2" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <nav className="flex flex-col p-4">
                <Button onClick={() => handleButtonClick("about")} className="my-2" color="success" variant="ghost">Sobre</Button>
                <Button onClick={() => handleButtonClick("services")} className="my-2" color="success" variant="ghost">Serviços</Button>
                <Button onClick={() => handleButtonClick("cases")} className="my-2" color="success" variant="ghost">Cases</Button>
                <Button onClick={() => handleButtonClick("contact")} className="my-2" color="success" variant="ghost">Contato</Button>
                <Button onClick={() => handleButtonClick("partners")} className="my-2" color="success" variant="ghost">Parceiros</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="sm:ml-5">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
