import { marketStats } from "@/lib/stock-data";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const MarketStats = () => {
  const stats = [marketStats.sAndP500, marketStats.nasdaq, marketStats.djia];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => {
        const isPositive = stat.change >= 0;
        return (
          <div
            key={stat.index}
            className="bg-white dark:bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground text-sm">
                {stat.index}
              </h4>
              {isPositive ? (
                <TrendingUp className="w-5 h-5 text-success" />
              ) : (
                <TrendingDown className="w-5 h-5 text-destructive" />
              )}
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">
              {stat.value.toFixed(2)}
            </p>
            <p
              className={cn(
                "text-sm font-semibold",
                isPositive ? "text-success" : "text-destructive",
              )}
            >
              {isPositive ? "+" : ""}
              {stat.change.toFixed(2)} ({stat.changePercent.toFixed(2)}%)
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              {isPositive
                ? "Market is performing positively"
                : "Market is showing downward momentum"}
            </p>
          </div>
        );
      })}
    </div>
  );
};
