import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-2">404</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto" />
          </div>
          <p className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </p>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved or removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
