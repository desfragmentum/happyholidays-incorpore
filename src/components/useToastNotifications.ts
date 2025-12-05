import { useState, useEffect } from 'react';

const randomNames = [
    "Ana S.", "Carlos L.", "Mariana P.", "João V.", "Beatriz M.",
    "Lucas R.", "Fernanda A.", "Pedro H.", "Gabriela C.", "Rafael F.",
    "Juliana G.", "Mateus B.", "Larissa N.", "Guilherme T.", "Camila O.",
    "Bruno E.", "Amanda D.", "Felipe K.", "Laura J.", "Vinicius Z.",
    "Felipe D.", "Beatriz B.", "Dyesse T.", "Iago T."
];

interface Toast {
    id: number;
    name: string;
}

export const useToastNotifications = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        const initialTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                const name = randomNames[Math.floor(Math.random() * randomNames.length)];
                const newToast = { id: Date.now(), name };

                setToasts([newToast]);

                // Remove o toast após 7 segundos
                setTimeout(() => {
                    removeToast(newToast.id);
                }, 7000);

            }, Math.random() * (10000 - 5000) + 5000); // A cada 5-10 segundos

            return () => clearInterval(interval);
        }, 4000); // Inicia após 40 segundos

        return () => clearTimeout(initialTimeout);
    }, []);

    const removeToast = (id: number) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    };

    return { toasts, removeToast };
};