import { ArrowRight } from "lucide-react";

interface CarSpec {
  label: string;
  value: string;
}

interface FeaturedCarCardProps {
  name: string;
  brand: string;
  imageUrl: string;
  price?: string;
  specs: CarSpec[];
}

export const FeaturedCarCard = ({
  name,
  brand,
  imageUrl,
  price,
  specs,
}: FeaturedCarCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 aspect-video">
        <img
          src={imageUrl}
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {price && (
          <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-md px-4 py-2 rounded-md">
            <p className="text-white font-bold text-sm uppercase tracking-wide">
              {price}
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">
            {brand}
          </p>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
          {specs.map((spec, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                {spec.label}
              </p>
              <p className="text-lg font-bold text-white">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 uppercase text-xs tracking-widest">
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
    </div>
  );
};
