import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { Gift, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const whatsappNumber = "5516997797113";
const whatsappMessage =
  "Oi! Quero saber mais sobre a oferta do procedimento de Redução de gordura.";

const VipSection = () => {
  return (
    <section className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--brand-pink)/0.15),transparent_50%)]" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-bounce">
            <Gift className="h-16 w-16 text-primary mx-auto" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-glow">BÔNUS</h2>

          <h3 className="text-4xl md:text-5xl font-bold text-glow">
            Desconto Exclusivo <span className="text-primary">+ CASHBACK!</span>
          </h3>

          <p className="text-xl md:text-2xl leading-relaxed text-secondary-foreground/90">
            Apenas quem vier através <span className="font-bold text-primary">desta página</span>{" "}
            garante descontos exclusivos e ainda recebe um valor de Cashback para usar em futuros
            tratamentos. Não perca essa vantagem extra!
          </p>

          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 p-4 rounded-full">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Descontos Exclusivos</h3>
              <p className="text-sm text-secondary-foreground/70">Em todos os nossos tratamentos</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 p-4 rounded-full">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Cashback Especial</h3>
              <p className="text-sm text-secondary-foreground/70">Para investir em novos cuidados</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 p-4 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Exclusividade</h3>
              <p className="text-sm text-secondary-foreground/70">Ofertas e novidades primeiro</p>
            </div>
          </div>

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
          onClick={() => openWhatsAppChat(whatsappNumber, whatsappMessage)}
          size="lg"
          className="text-base sm:text-lg px-4 sm:px-8 py-4 h-auto whitespace-normal bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-105"
        >
          GARANTIR DESCONTO EXCLUSIVO + CASHBACK
        </Button>
          </motion.div>

          <p className="text-sm text-secondary-foreground/60">
            🔒 Vagas limitadas • Entre em contato agora e não perca os benefícios exclusivos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VipSection;
