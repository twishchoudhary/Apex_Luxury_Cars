import { Award, Shield, DollarSign, Zap, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Premium Selection",
    description: "Hand-picked luxury and sports cars from world-renowned manufacturers",
  },
  {
    icon: Shield,
    title: "Verified Authenticity",
    description: "Every vehicle undergoes rigorous performance and authenticity verification",
  },
  {
    icon: DollarSign,
    title: "Flexible Financing",
    description: "Customized financing options tailored to your budget and preferences",
  },
  {
    icon: Zap,
    title: "Exclusive Test Drives",
    description: "Experience vehicles on premium tracks with professional instruction",
  },
  {
    icon: Heart,
    title: "Expert Support",
    description: "Dedicated concierge service for all your automotive needs",
  },
  {
    icon: TrendingUp,
    title: "Trusted by Enthusiasts",
    description: "Preferred by luxury car collectors and performance enthusiasts worldwide",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose APEX
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience the pinnacle of automotive excellence with our curated collection and exceptional service
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/40 group-hover:to-accent/40 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Accent */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
