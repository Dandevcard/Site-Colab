import { Code, Laptop, Users } from "lucide-react";
import { ReactNode } from "react";
import localFont from 'next/font/local';

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServicesSection() {
  return (
    <section id="services" className={`bg-gray-100 dark:bg-secondary w-full py-16 ${FontArista.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-primary text-center mb-12 md:mb-16">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <ServiceCard
            icon={<Code className="text-green-500 dark:text-primary w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 mx-auto" />}
            title="Desenvolvimento Web"
            description="Criamos websites responsivos e intuitivos que elevam a presença online da sua empresa."
          />
          <ServiceCard
            icon={<Laptop className="text-green-500 dark:text-primary w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 mx-auto" />}
            title="Aplicativos Mobile"
            description="Desenvolvemos aplicativos móveis inovadores para iOS e Android que engajam seus usuários."
          />
          <ServiceCard
            icon={<Users className="text-green-500 dark:text-primary w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 mx-auto" />}
            title="Consultoria em TI"
            description="Oferecemos consultoria especializada para otimizar seus processos e infraestrutura de TI."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-card p-6 md:p-8 rounded-lg shadow-lg transition-transform hover:scale-105 text-center md:text-left hover:shadow-xl dark:hover:shadow-primary/20">
      <div className="flex justify-center md:justify-start">{icon}</div>
      <h3 className={`text-xl md:text-2xl font-semibold text-gray-800 dark:text-primary mb-2 md:mb-4 ${FontArista.className}`}>{title}</h3>
      <p className={`text-sm md:text-base text-gray-600 dark:text-gray-300 ${FontArista.className}`}>{description}</p>
    </div>
  );
}