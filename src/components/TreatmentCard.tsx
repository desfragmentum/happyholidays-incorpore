import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

interface TreatmentCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  onOpenModal: (treatmentName: string) => void;
}

const TreatmentCard = ({ title, subtitle, description, image, onOpenModal }: TreatmentCardProps) => {

  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-luxury flex flex-col">
      <div className="absolute top-4 right-4 z-10">
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400"
          animate={{
            scale: [1, 1.30, 1],
          }}
          transition={{
            scale: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 font-bold shadow-lg">
            OFF
          </Badge>
        </motion.div>
      </div>

      <div className="aspect-[4/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-primary font-semibold text-lg">{subtitle}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <Button
          onClick={() => onOpenModal(title)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
          size="lg"
        >
          <Phone className="mr-2 h-4 w-4" />
          QUERO ESTE TRATAMENTO
        </Button>
      </div>
    </Card>
  );
};

export default TreatmentCard;
