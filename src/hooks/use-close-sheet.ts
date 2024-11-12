import { useEffect } from 'react';

const useCloseSheet = (isOpen: boolean, setIsOpen: (value: boolean) => void, breakpoint: number = 768) => {
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth >= breakpoint) {
        setIsOpen(false);
      }
    };

    // Adiciona o listener de redimensionamento
    window.addEventListener('resize', handleResize);
    // Limpa o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, setIsOpen, breakpoint]);
};

export default useCloseSheet;
