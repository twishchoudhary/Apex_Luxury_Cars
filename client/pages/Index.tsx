import { Header } from "@/components/Header";
import { MarketStats } from "@/components/MarketStats";
import { StockCard } from "@/components/StockCard";
import { StockChart } from "@/components/StockChart";
import { stocksData } from "@/lib/stock-data";
import { ArrowRight, BarChart3, TrendingUp, Book } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [selectedStock, setSelectedStock] = useState(stocksData[0]);
  const featuredStocks = stocksData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-cyan-500 to-blue-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Trade Smarter, Not Harder
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Master the stock market with easy-to-understand charts, real-time data, and expert insights. Perfect for beginners and experienced traders alike.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Start Trading
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Market Status</span>
                      <span className="bg-green-400/20 text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                        Open
                      </span>
                    </div>
                    <div className="h-12 bg-white/5 rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-white/5 rounded"></div>
                      <div className="h-8 bg-white/5 rounded"></div>
                      <div className="h-8 bg-white/5 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Market Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Market Overview</h2>
          <MarketStats />
        </section>

        {/* Featured Stock with Chart */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Deep Dive: Stock Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Stock Selector */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-foreground mb-4">Select Stock</h3>
              <div className="space-y-2">
                {stocksData.map((stock) => (
                  <button
                    key={stock.symbol}
                    onClick={() => setSelectedStock(stock)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      selectedStock.symbol === stock.symbol
                        ? "bg-primary text-white shadow-lg"
                        : "bg-card hover:bg-muted text-foreground border border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{stock.symbol}</span>
                      <span
                        className={`text-sm ${
                          stock.change >= 0 ? "text-success" : "text-destructive"
                        }`}
                      >
                        {stock.change >= 0 ? "+" : ""}{stock.changePercent.toFixed(1)}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="lg:col-span-3">
              <StockChart stock={selectedStock} />
            </div>
          </div>
        </section>

        {/* Featured Stocks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Top Performing Stocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStocks.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>
        </section>

        {/* All Stocks */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">All Available Stocks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stocksData.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>
        </section>

        {/* Learning Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Book className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Learning Center</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  New to trading? Our comprehensive guides explain charts, trends, and strategies in simple terms anyone can understand.
                </p>
                <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Explore Guides
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Understanding Trends</p>
                    <p className="text-sm text-muted-foreground">Learn what uptrends and downtrends mean</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Reading Charts</p>
                    <p className="text-sm text-muted-foreground">Master technical analysis basics</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Risk Management</p>
                    <p className="text-sm text-muted-foreground">Protect your investments wisely</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Trading?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are using TradeFlow to make informed decisions and grow their portfolios.
          </p>
          <button className="bg-gradient-to-r from-primary to-cyan-500 text-white font-bold px-10 py-4 rounded-lg hover:shadow-lg transition-shadow text-lg">
            Open Account
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground text-sm">
              © 2024 TradeFlow. All rights reserved. Data is for educational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
