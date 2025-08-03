
import { AnimatedText } from "./AnimatedText";

type InfoCardProps = {
  smallHeader: string; // e.g., "FTTH and IT Service Provider"
  bigHeader: string; // e.g., "Best Service Provider"
  description: string; // short info line
  className?: string;
  backgroundImageUrl?: string; // optional background image
};

export function InfoCard({
  smallHeader,
  bigHeader,
  description,
  className = "",
  backgroundImageUrl,
}: InfoCardProps) {
  return (
    <div
      className={`relative overflow-hidden shadow-lg p-8 text-white ${className}`}
      aria-label="Information card"
      style={{
        background: backgroundImageUrl
          ? `url(${backgroundImageUrl}) center/cover no-repeat`
          : "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
      }}
    >
      {/* overlay to darken for contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative flex flex-col gap-2 max-w-7xl mx-auto pt-10 lg:pt-20">
        <AnimatedText as="h2" delay={1.2} className="text-sm lg:text-xl font-semibold uppercase tracking-wider">
          {smallHeader}
        </AnimatedText>
        <AnimatedText as="h1" delay={2.6} className="text-3xl lg:text-5xl font-bold leading-tight">
          {bigHeader}
        </AnimatedText>
        <AnimatedText as="p" delay={3.0} className="text-base lg:text-xl">
          {description}
        </AnimatedText>
      </div>
    </div>
  );
}
