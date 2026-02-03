import { Stock } from "@/lib/stock-data";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StockCardProps {
  stock: Stock;
}

export const StockCard = ({ stock }: StockCardProps) => {
  const isPositive = stock.change >= 0;

  return (
    <div className="bg-white dark:bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {stock.symbol}
          </h3>
          <p className="text-sm text-muted-foreground">{stock.name}</p>
        </div>
        {isPositive ? (
          <div className="bg-success/10 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-success" />
          </div>
        ) : (
          <div className="bg-destructive/10 p-2 rounded-lg">
            <TrendingDown className="w-5 h-5 text-destructive" />
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-4">
        <p className="text-2xl font-bold text-foreground">${stock.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-1">
          <span
            className={cn(
              "text-sm font-semibold",
              isPositive ? "text-success" : "text-destructive"
            )}
          >
            {isPositive ? "+" : ""}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Volume</p>
          <p className="text-sm font-semibold text-foreground">{stock.volume}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Market Cap</p>
          <p className="text-sm font-semibold text-foreground">{stock.marketCap}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-muted-foreground mb-1">52-Week Range</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-foreground">${stock.low52Week.toFixed(2)}</span>
            <div className="flex-1 mx-2 h-1.5 bg-input rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-destructive to-success"
                style={{
                  width: `${
                    ((stock.price - stock.low52Week) / (stock.high52Week - stock.low52Week)) * 100
                  }%`,
                }}
              />
            </div>
            <span className="text-xs font-medium text-foreground">${stock.high52Week.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
