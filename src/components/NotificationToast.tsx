import { motion } from "framer-motion";
import { PartyPopper, X } from "lucide-react";

interface NotificationToastProps {
    name: string;
    onClose: () => void;
}

const NotificationToast = ({ name, onClose }: NotificationToastProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative flex items-center gap-4 w-full max-w-sm p-4 bg-secondary border border-primary/20 rounded-lg shadow-lg overflow-hidden"
        >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
            <PartyPopper className="h-8 w-8 text-primary flex-shrink-0 ml-2" />
            <div className="flex-1">
                <p className="text-sm text-secondary-foreground/90">
                    <span className="font-bold text-primary">{name}</span> acabou de garantir a oferta exclusiva!
                </p>
            </div>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-secondary-foreground/10 transition-colors">
                <X className="h-4 w-4 text-secondary-foreground/70" />
            </button>
        </motion.div>
    );
};

export default NotificationToast;