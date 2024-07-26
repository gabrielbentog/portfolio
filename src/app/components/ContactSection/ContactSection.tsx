import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
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
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FaGithub className="h-8 w-8" />
              </Link>
              <p className="mt-2 text-muted-foreground">github@exemplo.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FaTwitter className="h-8 w-8" />
              </Link>
              <p className="mt-2 text-muted-foreground">twitter@exemplo.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FaLinkedin className="h-8 w-8" />
              </Link>
              <p className="mt-2 text-muted-foreground">linkedin@exemplo.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;