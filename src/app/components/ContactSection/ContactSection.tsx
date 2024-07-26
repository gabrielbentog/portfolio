import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import Link from 'next/link';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container max-w-4xl px-4 md:px-6 mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Entre em Contato</h2>
            <p className="text-muted-foreground text-lg">
              Fique à vontade para me encontrar nos seguintes canais:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-16"> {/* Aumentado o espaçamento entre ícones */}
            <div className="flex flex-col items-center">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <SiGmail className="h-12 w-12" /> {/* Aumentado o tamanho do ícone */}
              </Link>
              <p className="mt-4 text-muted-foreground">bentogdev@gmail.com</p> {/* Aumentado o espaçamento entre ícone e texto */}
            </div>
            <div className="flex flex-col items-center">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FaGithub className="h-12 w-12" /> {/* Aumentado o tamanho do ícone */}
              </Link>
              <p className="mt-4 text-muted-foreground">@gabrielbentog</p> {/* Aumentado o espaçamento entre ícone e texto */}
            </div>
            <div className="flex flex-col items-center">
              <Link href="https://www.linkedin.com/in/gabriel-bento-21120a293/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FaLinkedin className="h-12 w-12" /> {/* Aumentado o tamanho do ícone */}
              </Link>
              <p className="mt-4 text-muted-foreground">Gabriel Bento</p> {/* Aumentado o espaçamento entre ícone e texto */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
