import { useEffect, useRef, useState } from "react";

const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;
const INITIAL_SECONDS = FIFTEEN_MINUTES_MS / 1000;

const CountdownTimer = () => {
  const deadlineRef = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    if (!deadlineRef.current) {
      deadlineRef.current = Date.now() + FIFTEEN_MINUTES_MS;
    }

    const interval = setInterval(() => {
      if (!deadlineRef.current) return;

      const now = Date.now();
      const diff = Math.max(0, Math.floor((deadlineRef.current - now) / 1000));

      setTimeLeft(diff);

      if (diff === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const TimeUnit = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex min-w-[52px] items-center justify-center rounded-md bg-primary-foreground/15 px-3 py-1.5">
        <span className="text-lg font-bold tabular-nums text-white">
          {value}
        </span>
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-primary h-12 flex items-center shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <div className="hidden md:block font-bold text-xs uppercase tracking-widest opacity-80">
          Oferta Exclusiva
        </div>
        
        <div className="text-[10px] md:text-sm font-medium flex-1 text-center px-4">
          Últimos 15 minutos para garantir o <span className="font-bold">TOTALCRIO4MDK</span> com condição exclusiva.
        </div>

        <div className="flex items-center gap-2 font-bold text-xs md:text-sm whitespace-nowrap">
          <div className="flex items-center gap-1">
            <span className="bg-black/20 rounded px-1.5 py-0.5 min-w-[24px] text-center">{minutes}</span>
            <span className="text-[10px] opacity-70">MIN</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-black/20 rounded px-1.5 py-0.5 min-w-[24px] text-center">{seconds}</span>
            <span className="text-[10px] opacity-70">SEG</span>
          </div>
        </div>
      </div>
    </div>
  );

};

export default CountdownTimer;
