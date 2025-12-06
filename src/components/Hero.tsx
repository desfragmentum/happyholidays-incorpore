import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { openWhatsAppChat } from "@/lib/whatsapp";
import NotificationToast from "./NotificationToast";
import { useToastNotifications } from "./useToastNotifications";

const Hero = () => {
  const whatsappNumber = "5516997797113";
  const whatsappMessage =
    "Oi! Quero saber mais sobre a oferta do procedimento de Redução de gordura.";
  const { toasts, removeToast } = useToastNotifications();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--brand-pink)/0.15),transparent_50%)]" />

      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-block animate-fade-in">
            <span className="inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold tracking-wider text-primary uppercase border border-primary/20">
              Adeus 2025! Beleza Renovada em 2026!
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up">
            PÓS BLACK IN'CORPORE
            <span className="block mt-2 text-primary">Redução de Gordura Abdominal</span>
            <p className="text-lg line-through text-muted-foreground mt-4">De R$ 1.780,00</p>
            <p className="text-sm font-semibold tracking-widest uppercase mt-4">POR APENAS</p>
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
              <span className="block text-12xl md:text-5xl mt-4">12x de 83,33</span>
            </motion.div>
            <p className="text-sm font-semibold tracking-widest uppercase mt-4">Sem Juros</p>
            <p className="mt-6 text-2xl md:text-4xl font-bold leading-tight animate-fade-in-up text-primary">Está Acabando! Mega Desconto! Últimas 5 Vagas! Aproveite Agora!</p>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Chegou o momento de investir na sua beleza. Resultados incríveis com o melhor preço do
            ano na Clínica In'Corpore.
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
              onClick={() => openWhatsAppChat(whatsappNumber, whatsappMessage)}
              className="text-base sm:text-lg px-4 sm:px-8 py-4 h-auto whitespace-normal bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-105"
            >
              GARANTIR OFERTA AGORA!
            </Button>
          </motion.div>

          <p className="text-sm text-secondary-foreground/60">🔥 Vagas Limitadas ⚡ Garanta Agora!</p>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <NotificationToast
              key={toast.id}
              name={toast.name}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
