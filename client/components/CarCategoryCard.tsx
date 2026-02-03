interface CarCategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  count?: number;
}

export const CarCategoryCard = ({
  title,
  description,
  imageUrl,
  count,
}: CarCategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer h-64 md:h-72">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 text-sm md:text-base mb-3 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
        {count && (
          <p className="text-xs text-secondary uppercase tracking-widest font-semibold">
            {count} Models Available
          </p>
        )}
      </div>

      {/* Hover Accent */}
      <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-primary/20 to-transparent group-hover:w-full transition-all duration-500" />
    </div>
  );
};
