import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container max-w-4xl px-4 md:px-6 mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contatos</h2>
            <p className="text-muted-foreground text-lg">
              Fique à vontade para me encontrar nos seguintes canais:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"> {/* Usando grid para melhor controle */}
            <div className="flex flex-col items-center">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <SiGmail className="h-12 w-12" /> {/* Tamanho consistente dos ícones */}
              </Link>
              <p className="mt-4 text-muted-foreground text-center">bentogdev@gmail.com</p> {/* Texto centralizado */}
            </div>
            <div className="flex flex-col items-center">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FaGithub className="h-12 w-12" /> {/* Tamanho consistente dos ícones */}
              </Link>
              <p className="mt-4 text-muted-foreground text-center"> @gabrielbentog</p> {/* Texto centralizado */}
            </div>
            <div className="flex flex-col items-center">
              <Link href="https://www.linkedin.com/in/gabriel-bento-21120a293/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FaLinkedin className="h-12 w-12" /> {/* Tamanho consistente dos ícones */}
              </Link>
              <p className="mt-4 text-muted-foreground text-center">Gabriel Bento</p> {/* Texto centralizado */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
