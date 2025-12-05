import { Award, CalendarCheck, Rocket, Target } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { Button } from "./ui/button";

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Clínica Premiada",
    description:
      "Reconhecida com prêmios como Top of Mind Brazil, somos referência em estética na região.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Pioneirismo e Inovação",
    description:
      "Fomos os primeiros a trazer a Criolipólise e a Depilação a Laser para Ibaté, sempre com tecnologia de ponta.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Resultados Comprovados",
    description:
      "Com mais de 7.000 áreas tratadas em nosso método exclusivo de Criolipólise, seus resultados são nossa prioridade.",
  },
  {
    icon: <CalendarCheck className="h-10 w-10 text-primary" />,
    title: "Experiência e Confiança",
    description:
      "Desde 2018, nossa paixão é transformar vidas, elevando a autoestima com segurança e atendimento personalizado.",
  },
];

const whatsappNumber = "5516997797113";
const whatsappMessage =
  "Oi! Quero saber mais sobre a oferta do procedimento de Redução de gordura.";

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--brand-pink)/0.15),transparent_50%)]" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow">
            A Escolha Certa para Sua <span className="text-primary">Transformação</span>
          </h2>
          <p className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
            Entendemos que cada pessoa é única. Por isso, desde 2018, nos dedicamos a oferecer
            tratamentos personalizados que não apenas entregam resultados visíveis, mas que renovam
            sua autoestima e qualidade de vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/20 p-6 rounded-lg text-center space-y-4 border border-border/40 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:border-primary/50"
            >
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-secondary-foreground/90">{feature.title}</h3>
              <p className="text-secondary-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

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
          FALAR COM A CLÍNICA AGORA
        </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
