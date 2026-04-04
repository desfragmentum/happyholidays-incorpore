import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { X } from "lucide-react";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { Button } from "./ui/button";
import totalCrio1 from "@/assets/results/TOTALCRIO4MDK1.webp";
import totalCrio3 from "@/assets/results/TOTALCRIO4MDK3.webp";
import totalCrio5 from "@/assets/results/TOTALCRIO4MDK5.webp";
import totalCrio6 from "@/assets/results/TOTALCRIO4MDK6.webp";
import reducaoMedidas1 from "@/assets/results/Reducao-de-medidas1.webp";
import reducaoMedidas2 from "@/assets/results/Reducao-de-medidas2.webp";
import reducaoMedidas3 from "@/assets/results/Reducao-de-medidas3.webp";
import reducaoMedidas4 from "@/assets/results/Reducao-de-medidas4.webp";
import resultTotalCrio from "@/assets/result-totalcrio.webp";
import depoimento1 from "@/assets/depo01.webp";
import depoimento2 from "@/assets/depo02.webp";
import video1 from "@/assets/videos/depoimento-1.mp4";
import video2 from "@/assets/videos/depoimento-2.mp4";
import video3 from "@/assets/videos/depoimento-3.mp4";

const resultsByCategory: Record<string, Array<{ src: string; alt: string }>> = {
  "Criolipólise (TOTALCRIO4MDK)": [
    {
      src: totalCrio1,
      alt: "Resultado de Criolipólise 1",
    },
    {
      src: totalCrio3,
      alt: "Resultado de Criolipólise 2",
    },
    {
      src:  totalCrio5,
      alt: "Resultado de Criolipólise 3",
    },
    {
      src: totalCrio6,
      alt: "Resultado de Criolipólise 4",
    },
    {
      src: reducaoMedidas1,
      alt: "Resultado de Redução de Medidas 1",
    },
    {
      src: reducaoMedidas2,
      alt: "Resultado de Redução de Medidas 2",
    },
    {
      src: reducaoMedidas3,
      alt: "Resultado de Redução de Medidas 3",
    },
    {
      src: reducaoMedidas4,
      alt: "Resultado de Redução de Medidas 4",
    },
  ],
};

const categories = Object.keys(resultsByCategory);

const whatsappNumber = "5516997797113";
const whatsappMessage =
  "Oi! Quero saber mais sobre a oferta do procedimento de Redução de gordura.";

const testimonialVideos: Array<{ src: string; title: string }> = [
  {
    src: video1,
    title: "Depoimento em vídeo 1",
  },
  {
    src: video2,
    title: "Depoimento em vídeo 2",
  },
  {
    src: video3,
    title: "Depoimento em vídeo 3",
  },
];

const ResultsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isCycling, setIsCycling] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.3 });
  const interactionTimer = useRef<NodeJS.Timeout | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsCycling(false);
    if (interactionTimer.current) clearTimeout(interactionTimer.current);
    interactionTimer.current = setTimeout(() => {
      setIsCycling(true);
    }, 15000);
  };

  useEffect(() => {
    let categoryInterval: NodeJS.Timeout | undefined;

    if (isCycling && inView) {
      categoryInterval = setInterval(() => {
        const currentIndex = categories.indexOf(selectedCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        setSelectedCategory(categories[nextIndex]);
      }, 5000);
    }

    return () => {
      if (categoryInterval) clearInterval(categoryInterval);
      if (interactionTimer.current) clearTimeout(interactionTimer.current);
    };
  }, [isCycling, inView, selectedCategory]);

  const currentImages = resultsByCategory[selectedCategory];

  return (
    <section id="resultados" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Nossos <span className="text-primary">Resultados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns dos resultados reais de nossas clientes. Transformações que elevam a
            autoestima!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-card-foreground hover:bg-primary/10 hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentImages.map((image) => (
            <motion.button
              key={image.src}
              layoutId={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-xl shadow-lg focus:outline-none"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver detalhe
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 text-center space-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossa missão é transformar o seu espelho em motivo de orgulho.
          </h3>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <img
              src={resultTotalCrio}
              alt="Resultado de sucesso de cliente"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            O que nossas <span className="text-primary">clientes dizem</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <img
              src={depoimento1}
              alt="Depoimento de cliente 1"
              className="rounded-lg shadow-lg w-full"
            />
            <img
              src={depoimento2}
              alt="Depoimento de cliente 2"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
            {testimonialVideos.map((video) => (
              <div
                key={video.src}
                className="w-full max-w-[360px] rounded-lg shadow-lg overflow-hidden bg-card border border-border"
              >
                <video
                  className="w-full aspect-[9/16] object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                layoutId={selectedImage.src}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                aria-label="Fechar imagem"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400 mt-16"
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
          QUERO MINHA TRANSFORMAÇÃO AGORA
        </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
