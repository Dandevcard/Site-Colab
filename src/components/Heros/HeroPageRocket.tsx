import localFont from 'next/font/local';
import React from 'react';
import { Button } from '../ui/button';
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const FontArista = localFont({ src: '../fonts/Arista-Pro-Regular-trial.woff2' });
const FontInter = localFont({ src: '../fonts/Inter.woff2' });

export default function HeroPageRocket() {
    const scrollToElement = useSmoothScroll();

    const handleBudgetClick = () => {
        scrollToElement('contact');
    };

    return (
        <>
            <div className='h-full w-full flex items-center relative flex-col justify-between dark:bg-black dark:text-white'>
                <img src='/Moon.svg' className='absolute md:top-5 lg:top-5 -top-5 right-5 md:right-28 lg:right-28 md:h-28 lg:h-28 h-16' />
                <div className='flex flex-col justify-center text-center pt-10 z-10 px-5 items-center flex-1 lg:mb-0 -mb-10'>
                    <h1 className={(FontArista.className) + ' dark:text-white text-[25px] md:text-[65px] lg:text-[65px] leading-none'}>
                        Soluções em software.
                    </h1>
                    <h1 className={(FontArista.className) + ' dark:text-white text-[25px] md:text-[65px] lg:text-[65px] leading-none'}>
                        Que impulsionam o seu <span className='text-green-500'>negócio</span>
                    </h1>
                    <h1 className={(FontInter.className) + ' dark:text-white text-[14px] lg:text-[20px] md:text-[20px] leading-none'}>
                        Sistemas personalizados para otimizar seus processos e alcançar seus objetivos.
                    </h1>
                    <div className='py-5 lg:py-8 md:py-8 z-10'>
                        <Button className={(FontInter.className)} color='success' size='lg' onClick={handleBudgetClick}>
                            <p className='text-md md:text-xl '>
                                Faça seu Orçamento
                            </p>
                        </Button>
                    </div>
                </div>
                <div className='z-10 lg:relative md:relative bottom-0'>
                    <img src='/Rocket.svg' className='h-[450px] lg:h-[480px]' />
                    <img src='/Smoke.svg' className='md:absolute lg:absolute lg:bottom-0 top-0 w-full z-0 lg:mt-0 -mt-[228px] md:hidden ' />
                </div>
                <img src='/Smoke.svg' className='absolute bottom-0 w-full z-0 md:flex hidden ' />
            </div>
        </>
    );
}