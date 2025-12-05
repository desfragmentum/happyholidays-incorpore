type MetaPixel = {
  fbq: (event: "track", eventName: string, payload?: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    fbq?: MetaPixel["fbq"];
  }
}

export const openWhatsAppChat = (phone: string, message: string) => {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact Black LP");
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
