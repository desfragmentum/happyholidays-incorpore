import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const whatsappNumber = "5516997797113";
const whatsappMessage =
  "Oi! Quero saber mais sobre a oferta do procedimento de Redução de gordura.";

const Footer = () => {
  const logoUrl =
    "https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/incorpore-logo-header.png";

  const handleWhatsApp = (extra?: string) => {
    const message = extra ? `${whatsappMessage} E também tenho interesse em ${extra}.` : whatsappMessage;
    openWhatsAppChat(whatsappNumber, message);
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-16">
        {/* Enzimas */}
        <div className="relative mb-20 overflow-hidden rounded-2xl border border-border/40 bg-background/20 p-8 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:border-primary/50">
          <div className="absolute -right-20 -top-20 h-60 w-60 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="relative z-10 grid items-center justify-center gap-8 md:grid-cols-2">
            <motion.div
              className="md:order-2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/fim-de-ano/Enzimas-novo.jpeg"
                alt="Aplicação de Enzimas"
                className="h-auto w-full max-w-sm rounded-lg object-cover shadow-md"
              />
            </motion.div>
            <motion.div
              className="space-y-6 text-center md:order-1 md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-3xl font-bold text-primary text-glow">Potencialize Seus Resultados!</h4>
              <p className="text-lg text-secondary-foreground/80">
                Já pensou em acelerar ainda mais a queima de gordura? Nossa aplicação de enzimas (Lipo
                Enzimática) é o complemento perfeito para a Criolipólise.
              </p>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  scale: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Button
                  size="lg"
                  onClick={() => handleWhatsApp("LIPO ENZIMÁTICA")}
                  className="w-full text-base md:w-auto px-4 md:px-8"
                >
                  SABER MAIS SOBRE A LIPO ENZIMÁTICA
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Enzimas Lipo Papada */}
        <div className="relative mb-20 overflow-hidden rounded-2xl border border-border/40 bg-background/20 p-8 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:border-primary/50">
          <div className="absolute -right-20 -top-20 h-60 w-60 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="relative z-10 grid items-center justify-center gap-8 md:grid-cols-2">
            <motion.div
              className="md:order-2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/fim-de-ano/lipo-papada.jpeg"
                alt="Aplicação de Lipo Enzimática de Papada"
                className="h-auto w-full max-w-sm rounded-lg object-cover shadow-md"
              />
            </motion.div>
            <motion.div
              className="space-y-6 text-center md:order-1 md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-3xl font-bold text-primary text-glow">Beleza Renovada!</h4>
              <p className="text-lg text-secondary-foreground/80">
                Dê adeus à papada e conquiste um contorno facial mais fino e elegante em poucas sessões com a (Lipo
                Enzimática de Papada) é o complemento perfeito para a Criolipólise.
              </p>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  scale: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Button
                  size="lg"
                  onClick={() => handleWhatsApp("LIPO ENZIMÁTICA DE PAPADA")}
                  className="w-full px-3 py-3 text-sm whitespace-normal break-words md:w-auto md:px-8 md:text-base md:whitespace-nowrap"
                >
                  SABER MAIS SOBRE A LIPO ENZIMÁTICA DE PAPADA
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="text-center mb-16 space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Pronta para sua <span className="text-primary">Transformação?</span>
          </h3>
          <p className="text-lg text-secondary-foreground/80">
            Não deixe essa oportunidade passar. Garanta agora seu desconto exclusivo!
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Button
              size="lg"
              onClick={() => handleWhatsApp()}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-105"
            >
              FALAR COM A CLÍNICA AGORA
            </Button>
          </motion.div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <img src={logoUrl} alt="Clínica In'Corpore Logo" className="w-48" />

              <p className="text-secondary-foreground/80 leading-relaxed">Estética Avançada e Emagrecimento</p>
              <p className="text-sm text-secondary-foreground/70">
                Transformando vidas através da beleza e autoestima.
              </p>
              <p className="text-sm text-secondary-foreground/70">CNPJ: 29.481.486/0001-09</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Entre em Contato</h4>

              <button
                type="button"
                onClick={() => handleWhatsApp()}
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(16) 99779-7113</span>
              </button>

              <a
                href="mailto:contato@esteticaincorpore.com.br"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contato@esteticaincorpore.com.br</span>
              </a>

              <a
                href="https://esteticaincorpore.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span>www.esteticaincorpore.com.br</span>
              </a>

              <div className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>
                  Rua Totó Pessente, 131 - Centro
                  <br />
                  Ibaté - SP, CEP: 14815-000
                </span>
              </div>

              <a
                href="https://instagram.com/clinicaincorpore_ibate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@clinicaincorpore_ibate</span>
              </a>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Clínica In'Corpore. Todos os direitos reservados.</p>
            <p className="mt-2 opacity-75">
              Desenvolvido por{" "}
              <a
                href="https://www.desfragmentum.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline"
              >
                Desfragmentum
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
