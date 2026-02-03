import { Header } from "@/components/Header";
import { CarCategoryCard } from "@/components/CarCategoryCard";
import { FeaturedCarCard } from "@/components/FeaturedCarCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ArrowRight, Phone, Mail } from "lucide-react";

const featuredCars = [
  {
    name: "Huracán Sterrato",
    brand: "Lamborghini",
    imageUrl: "https://images.pexels.com/photos/120049/lamborghini-yellow-sports-car-120049.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $262,000",
    specs: [
      { label: "Horsepower", value: "631 HP" },
      { label: "0-100 km/h", value: "3.2s" },
      { label: "Top Speed", value: "343 km/h" },
      { label: "Engine", value: "5.2L V10" },
    ],
  },
  {
    name: "911 Turbo S",
    brand: "Porsche",
    imageUrl: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $223,000",
    specs: [
      { label: "Horsepower", value: "640 HP" },
      { label: "0-100 km/h", value: "2.7s" },
      { label: "Top Speed", value: "330 km/h" },
      { label: "Engine", value: "3.8L Twin-Turbo" },
    ],
  },
  {
    name: "Model S Plaid",
    brand: "Tesla",
    imageUrl: "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $84,990",
    specs: [
      { label: "Horsepower", value: "1,020 HP" },
      { label: "0-100 km/h", value: "1.99s" },
      { label: "Top Speed", value: "322 km/h" },
      { label: "Range", value: "640 km" },
    ],
  },
  {
    name: "M4 Competition",
    brand: "BMW",
    imageUrl: "https://images.pexels.com/photos/3414887/pexels-photo-3414887.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $106,700",
    specs: [
      { label: "Horsepower", value: "625 HP" },
      { label: "0-100 km/h", value: "3.0s" },
      { label: "Top Speed", value: "290 km/h" },
      { label: "Engine", value: "3.0L Twin-Turbo" },
    ],
  },
];

const categories = [
  {
    title: "Sports Cars",
    description: "Ultimate performance machines engineered for pure speed and agility",
    imageUrl: "https://images.pexels.com/photos/1385470/pexels-photo-1385470.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 12,
  },
  {
    title: "Luxury SUVs",
    description: "Refined elegance combined with commanding presence and capability",
    imageUrl: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 8,
  },
  {
    title: "Electric Vehicles",
    description: "Next-generation performance with zero-emission sustainable power",
    imageUrl: "https://images.pexels.com/photos/2820850/pexels-photo-2820850.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 10,
  },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 120, 215, 0.2) 100%), url('https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
                  Welcome to Excellence
                </p>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                  Experience Power.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                    {" "}Precision. Prestige.
                  </span>
                </h1>
              </div>

              <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                Discover our exclusive collection of world-class luxury and sports cars. From the legendary Lamborghini to cutting-edge Tesla technology, every vehicle represents the pinnacle of automotive engineering.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 uppercase text-sm tracking-widest group">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 uppercase text-sm tracking-widest">
                  Book a Test Drive
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-white/70 text-sm mt-1">Premium Models</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-white/70 text-sm mt-1">Brands</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">99%</p>
                  <p className="text-white/70 text-sm mt-1">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
                <div className="relative bg-glass rounded-2xl p-8 h-full flex items-center justify-center border border-primary/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">⚡</div>
                    <p className="text-white/80 text-sm">
                      Engineered for Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Car Categories Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Collections
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Explore our curated collections across three distinct categories of automotive excellence
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <CarCategoryCard
                  key={index}
                  title={category.title}
                  description={category.description}
                  imageUrl={category.imageUrl}
                  count={category.count}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Cars Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Iconic Models
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Handpicked masterpieces from the world's most prestigious automotive brands
              </p>
            </div>

            {/* Featured Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCars.map((car, index) => (
                <FeaturedCarCard
                  key={index}
                  name={car.name}
                  brand={car.brand}
                  imageUrl={car.imageUrl}
                  price={car.price}
                  specs={car.specs}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border-t border-b border-primary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drive Your Dream Today
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join our exclusive community of luxury car enthusiasts. Whether you're looking to purchase, lease, or experience your dream vehicle, we're here to make it happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 uppercase text-sm tracking-widest group flex items-center justify-center gap-2">
                Schedule a Test Drive
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 border-2 border-primary text-white font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 uppercase text-sm tracking-widest">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary via-blue-400 to-accent rounded-md flex items-center justify-center">
                    <span className="font-black text-xl text-white">⚡</span>
                  </div>
                  <span className="font-bold text-xl text-white">APEX</span>
                </div>
                <p className="text-white/60 text-sm">
                  Premium luxury and sports car collection for discerning enthusiasts.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest">
                  Collection
                </h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Sports Cars
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Luxury SUVs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Electric Vehicles
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +1 (555) 123-4567
                  </a>
                  <a
                    href="mailto:info@apexcars.com"
                    className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    info@apexcars.com
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border/50 pt-8">
              <p className="text-center text-white/50 text-sm">
                © 2024 APEX Luxury Motors. All rights reserved. | Premium Automotive Excellence
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
