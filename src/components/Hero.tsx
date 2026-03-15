import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { openWhatsAppChat } from "@/lib/whatsapp";
import NotificationToast from "./NotificationToast";
import { useToastNotifications } from "./useToastNotifications";
import { Check, Gift, Flame, MapPin, ChevronRight, ChevronLeft } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "5516997797113";
  const whatsappMessage =
    "Oi! Quero saber mais sobre a oferta do procedimento de Redução de gordura.";
  const { toasts, removeToast } = useToastNotifications();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.7 : clientWidth * 0.7;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const benefits = ["Sem dor", "Sem cirurgia", "Sem agulha", "Sem recuperação"];

  const results = [
    {
      src: "https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/TOTALCRIO4MDK/TOTALCRIO4MDK1.jpeg",
      alt: "Resultado 1",
    },
    {
      src: "https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/TOTALCRIO4MDK/TOTALCRIO4MDK3.jpeg",
      alt: "Resultado 2",
    },
    {
      src: "https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/TOTALCRIO4MDK/TOTALCRIO4MDK5.jpeg",
      alt: "Resultado 3",
    },
    {
      src: "https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/TOTALCRIO4MDK/TOTALCRIO4MDK6.jpeg",
      alt: "Resultado 4",
    },
  ];

  const logoUrl = "https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/incorpore-logo-header.png";

  return (
    <section className="relative pt-20 md:pt-24 pb-8 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/10 blur-[120px] rounded-full z-0" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-1 mb-4 md:mb-8"
        >
          <h1 className="text-xl md:text-6xl font-extrabold tracking-tight">
            VOCÊ JÁ TENTOU DE TUDO.
          </h1>
          <h2 className="text-xl md:text-6xl font-extrabold tracking-tight text-primary">
            DESSA VEZ É DIFERENTE.
          </h2>
          <p className="text-sm md:text-2xl font-light mt-2 opacity-90">
            O tratamento que elimina <span className="font-bold">gordura abdominal</span> de verdade
          </p>
        </motion.div>

        {/* Benefits Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-4 md:mb-12"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] md:text-sm font-medium"
            >
              <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              {benefit}
            </div>
          ))}
        </motion.div>

        {/* Results Cards Grid */}
        <div className="relative group/results">
          <motion.div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-x-visible snap-x no-scrollbar gap-2 md:gap-4 mb-2 md:mb-6 max-w-5xl mx-auto px-2 pb-1"
          >
            {results.map((result, index) => (
              <div
                key={index}
                className="min-w-[70%] sm:min-w-[40%] md:min-w-0 snap-center bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 shadow-2xl transition-transform md:hover:scale-[1.02]"
              >              
                {/* Card Image */}
                <div className="relative aspect-square">
                  <img
                    src={result.src}
                    alt={result.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile Scroll Indicator Arrows */}
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => scroll("left")}
                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-xl active:scale-90 transition-transform"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
            )}
            
            {canScrollRight && (
              <motion.button 
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scroll("right")}
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-xl active:scale-90 transition-transform"
              >
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Promo Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="max-w-2xl md:max-w-lg mx-auto mb-6 md:mb-8"
        >
          <div className="border-2 border-[#8b733b] bg-[#8b733b]/10 rounded-2xl p-3 md:p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <Gift className="w-10 h-10 text-[#facc15]" />
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-[#facc15]">
                As 10 primeiras a garantir ganham
              </h3>
              <p className="text-base md:text-lg font-medium text-[#facc15]">
                +4 sessões de Lipo sem Cortes!
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
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
            onClick={() => openWhatsAppChat(whatsappNumber, whatsappMessage)}
            className="group relative h-12 md:h-16 px-4 md:px-16 text-sm md:text-xl font-black rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#fbbf24] hover:to-[#f59e0b] shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105 uppercase tracking-wide border-b-4 border-orange-700"
          >
            → QUERO GARANTIR MINHA VAGA AGORA
          </Button>
        </motion.div>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm font-medium opacity-60">
            <span className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-500" />
              Vagas limitadas
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              Ibaté e São Carlos
            </span>
          </div>
      </div>

      {/* Floating Notifications */}
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
