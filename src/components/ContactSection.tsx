import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import localFont from 'next/font/local';
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "@/components/WhatsAppButton";

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function ContactSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
      telephone: telefone,
    };

    emailjs.send(
      'service_ifi0hjs', 
      'template_1ovjpge', 
      templateParams,
      '4jvcEF3PTH7RIRQ1k' 
    ).then(() => {
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('');

      toast({
        title: "Mensagem Enviada!",
        description: "Sua mensagem foi enviada com sucesso. Logo entraremos em Contato com você!",
      });
    }).catch((error) => {
      console.error("Erro ao enviar e-mail: ", error);
      toast({
        title: "Erro!",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
      });
    });
  };

  return (
    <section id="contact" className={`py-16 md:py-20 w-full bg-white dark:bg-background ${FontArista.className}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 dark:text-primary text-center mb-12 md:mb-16`}>
          Entre em Contato
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome"
              className={`w-full py-3 px-4 bg-white dark:bg-card text-gray-800 dark:text-primary border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-primary`}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              className={`w-full py-3 px-4 bg-white dark:bg-card text-gray-800 dark:text-primary border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-primary`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Telefone"
              className={`w-full py-3 px-4 bg-white dark:bg-card text-gray-800 dark:text-primary border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-primary`}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            <Textarea
              placeholder="Mensagem"
              className={`w-full py-3 px-4 bg-white dark:bg-card text-gray-800 dark:text-primary border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-primary`}
              rows={5}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
            <Button
              type="submit"
              className={`w-full bg-gray-600 dark:bg-primary text-white dark:text-background hover:bg-gray-800 dark:hover:bg-primary/90 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              Enviar Mensagem
            </Button>
          </form>
          <div className="mt-12 text-center">
            <h3 className={`text-xl font-bold mb-4 text-gray-800 dark:text-primary`}>Ou contate-nos via WhatsApp</h3>
            <WhatsAppButton phoneNumber="69999900694" message="Olá, Colab Devs!" />
          </div>
        </div>
      </div>
    </section>
  );
}