import { motion } from "framer-motion";
import { Check, CheckCircle, Flame, Package, Sparkles, TrendingUp } from "lucide-react";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { Button } from "./ui/button";

const whatsappNumber = "5516997797113";
const whatsappMessage =
  "Oi! Quero saber mais sobre a oferta do procedimento de Redução de gordura. Cupom: PROMOINCORPORE";

const highlights = [
  { icon: <TrendingUp className="h-6 w-6 text-primary" />, text: "Perca até 17 cm de abdômen." },
  { icon: <CheckCircle className="h-6 w-6 text-primary" />, text: "Resultados em poucas semanas." },
  { icon: <Sparkles className="h-6 w-6 text-primary" />, text: "Sem cirurgias e sem cortes." },
  { icon: <CheckCircle className="h-6 w-6 text-primary" />, text: "Sem dietas restritivas." },
];

const Treatments = () => {
  return (
    <section id="oferta" className="py-5 bg-background overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col gap-12 items-center mt-8 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-last lg:order-first flex flex-col items-center gap-4"
          >
            <img
              src="https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/TOTALCRIO4MDK/crio-result.jpeg"
              alt="Resultado Criolipólise 1"
              className="rounded-lg w-full max-w-[22rem] sm:max-w-lg shadow-2xl"
            />
            <img
              src="https://jjpas441qaaopsgd.public.blob.vercel-storage.com/img/TOTALCRIO4MDK/crio-result-02.jpeg"
              alt="Resultado Criolipólise 2"
              className="rounded-lg shadow-lg w-full max-w-[22rem] sm:max-w-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last flex flex-col space-y-6 w-full max-w-xl mx-auto"
          >
            <div className="space-y-3">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground break-words text-center md:text-left">
                <span className="text-primary">TOTALCRIO4MDK</span>
              </h2>
              <p className="text-xl font-semibold text-foreground/80 text-center md:text-left">
                O melhor procedimento para redução de gordura sem cirurgia!
              </p>
            </div>

            <p className="text-lg text-foreground/80 text-center md:text-left">
              Com nosso método exclusivo, você faz Criolipólise e{" "}
              <strong>congela a gordura de 100% da região abdominal</strong>, removendo o máximo de
              gordura possível em um único pacote.
            </p>

            <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Pacote Completo</h3>
              </div>
              <ul className="space-y-3 text-foreground/90 pl-2">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                  <span>
                    <strong>16 sessões de Criolipólise</strong> para a máxima remoção de gordura.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                  <div>
                    <span>
                      <strong>1 Detox Corporal</strong> para potencializar e acelerar os resultados,
                      incluindo:
                    </span>
                    <p className="text-sm text-muted-foreground mt-2 pl-2">
                      Massagem modeladora, manta térmica, diurético e exercícios respiratórios.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-lg font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border-l-4 border-primary text-primary p-4 rounded-md">
              <h4 className="font-bold text-primary">🎁 BÔNUS EXCLUSIVO</h4>
              {/* <p className="text-foreground">
                Fechando até dia <strong>30/11</strong>, você ganha <strong>2 sessões de Lipo Sem Cortes!</strong>
              </p> */}
            </div>

            <div className="bg-card border-2 border-primary/50 rounded-xl p-6 shadow-2xl shadow-primary/20 space-y-4 text-center transform sm:hover:scale-105 transition-transform duration-300 w-full">
              <p className="text-sm font-semibold tracking-widest text-foreground uppercase">
                USE O CUPOM DE DESCONTO
              </p>
              <motion.div
                className="bg-primary/10 border-2 border-dashed border-primary rounded-lg py-4 px-6 inline-block"
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
                <p className="text-4xl md:text-5xl font-mono font-bold text-primary tracking-tighter">
                  PROMOINCORPORE
                </p>
              </motion.div>
              <div className="flex items-center justify-center gap-2 pt-2">
                <Flame className="h-6 w-6 text-primary animate-pulse" />
                <p className="font-bold text-primary animate-pulse text-lg">OFERTA LIMITADA!</p>
              </div>
            </div>

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
                className="w-full text-lg py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-[0_0_30_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40_hsl(var(--primary)/0.55)] transition-all duration-300 sm:hover:scale-105"
              >
                GARANTIR OFERTA AGORA!
              </Button>
            </motion.div>

            <div className="text-center text-sm text-muted-foreground pt-4">
              <p>
                💡 <strong>Potencialize seus resultados!</strong> Acrescente nosso pacote de{" "}
                <strong>LIPO ENZIMÁTICA</strong>, também com oferta especial, e
                deixe seu procedimento ainda mais completo!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
