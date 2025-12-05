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
        <span className="text-lg font-bold tabular-nums text-primary-foreground">
          {value}
        </span>
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur w-full">
      <div className="mx-auto flex h-12 w-full max-w-6xl items-center justify-between px-4 text-primary-foreground">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary-foreground/70">
          Oferta Exclusiva
        </span>

        <p className="text-[10px] font-medium text-center leading-tight sm:hidden">
          Últimos 15 minutos para garantir seu TOTALCRIO4MDK.
        </p>
        <p className="hidden text-xs font-medium text-center sm:block sm:text-left">
          Últimos 15 minutos para garantir o TOTALCRIO4MDK com condição exclusiva.
        </p>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex min-w-[44px] items-center justify-center rounded bg-primary-foreground/15 px-2 py-1">
            <span className="text-sm font-semibold tabular-nums">{minutes}</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">Min</span>
          <div className="flex min-w-[44px] items-center justify-center rounded bg-primary-foreground/15 px-2 py-1">
            <span className="text-sm font-semibold tabular-nums">{seconds}</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">Seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;