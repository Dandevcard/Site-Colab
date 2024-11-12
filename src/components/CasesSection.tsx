'use client'

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import localFont from 'next/font/local';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from "react";

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2', variable: '--font-arista' });

interface CaseCardProps {
  title: string;
  description: string;
  tech: string;
  imageUrl: string;
  link: string;
}

export default function CasesSection() {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 768);
    };
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="cases" className={`py-16 bg-gray-100 dark:bg-secondary w-full ${FontArista.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-primary mb-12 md:mb-16">Cases de Sucesso</h2>

        <div className="">
          <Carousel
            orientation={isVertical ? "vertical" : "horizontal"}
            opts={{
              align: "start",
              loop: true,
            }}
          ><div className="flex gap-10">
              <CarouselContent >
                <CarouselItem className="pl-2 md:basis-1/2">
                  <CaseCard
                    title="Hug Food"
                    description="Aplicativo de delivery com integração de pagamento com a C88 Pay."
                    tech="APP IOS / Android"
                    imageUrl="/hug.png"
                    link="https://www.hugfood.com.br/"
                  />
                </CarouselItem>
                <CarouselItem className="pl-2 md:basis-1/2">
                  <CaseCard
                    title="C88 PAY"
                    description="Site e Aplicativo de Soluções de Pagamento, Um facilitador da oraganização financeira!"
                    tech="Web & APP IOS / Android"
                    imageUrl="/c88.png"
                    link="https://www.c88pay.com.br/"
                  />
                </CarouselItem>
                <CarouselItem className="pl-2 md:basis-1/2">
                  <CaseCard
                    title="Saúde Aceduca"
                    description="Um sistema de sáude, em parceria ao Instituto Aparicio Carvalho."
                    tech="Web & APP IOS/ Android"
                    imageUrl="/logo-aparicio.png"
                    link="https://saude.aceduca.com.br/"

                  />
                </CarouselItem>
              </CarouselContent>
            </div>
            {!isVertical && (
              <>
                <CarouselPrevious className="bg-green-white text-black hover:bg-green-400 dark:bg-green-400 dark:hover:bg-black dark:hover:text-white"  aria-label="Previous slide" />
                <CarouselNext className="bg-green-white text-black hover:bg-green-400 dark:bg-green-400 dark:hover:bg-black dark:hover:text-white" aria-label="Next slide" />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ title, description, tech, imageUrl, link }: CaseCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white dark:bg-card p-6  w-full md:p-8 md:h-[200px] md:w-[600px] md:m-4 rounded-lg shadow-lg flex flex-col md:flex-row transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/20 cursor-pointer">
        <div className="flex-grow mb-4 md:mb-0">
          <h3 className={`text-xl md:text-2xl font-semibold text-gray-800 dark:text-primary mb-2 md:mb-4 font-arista`}>{title}</h3>
          <p className={`text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6 font-arista`}>{description}</p>
          <div className="flex items-center text-green-500 dark:text-primary font-arista">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="text-sm md:text-base font-medium">{tech}</span>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end w-full md:w-24">
          <Image src={imageUrl} alt={`${title} Logo`} width={80} height={80} className="object-contain" />
        </div>
      </div>
    </a>
  );
}