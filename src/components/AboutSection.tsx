import Image from "next/image";
import localFont from 'next/font/local';

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function AboutSection() {
  return (
    <section id="about" className={`py-20 w-full bg-white dark:bg-background ${FontArista.className}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-primary text-center md:text-left">
            Líder em soluções digitais inovadoras
          </h1>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300 text-center md:text-left">
            A Colab Devs é uma empresa de tecnologia sediada em Porto Velho, especializada no desenvolvimento de soluções inovadoras para plataformas web, mobile e outras tecnologias digitais. Com uma equipe altamente qualificada e comprometida, atuamos em diversos setores, oferecendo serviços personalizados para atender às necessidades de nossos clientes.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="absolute md:hidden -top-10 bg-green-200 dark:bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 w-[400px] h-[400px]"></div>
          <div className="absolute hidden md:block -top-20 bg-green-200 dark:bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 w-[500px] h-[500px]"></div>
          <div className="relative z-10">
            <Image
              src="/colab.jpeg"
              width={400}
              height={400}
              alt="Desenvolvimento de software"
              className="rounded-lg shadow-2xl object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}