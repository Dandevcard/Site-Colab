import { Youtube, Linkedin, Instagram } from 'lucide-react';
import localFont from 'next/font/local';

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-black text-white py-12 w-full">
            <div className="container mx-auto text-center">
                <p className={`mb-4 font-normal ${FontArista.className}`}>
                    <span className="font-sans">&copy; 2024</span> Colab Devs. Todos os direitos reservados.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.youtube.com/@colabdevs743" className="text-gray-400 hover:text-green-600 transition-colors">
                        <Youtube size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/colab-devs-7b41b3244/" className="text-gray-400 hover:text-green-600 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/colabdevs/" className="text-gray-400 hover:text-green-600 transition-colors">
                        <Instagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
