import { Stock } from "@/lib/stock-data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface StockChartProps {
  stock: Stock;
}

export const StockChart = ({ stock }: StockChartProps) => {
  const isPositive = stock.change >= 0;
  const lastPrice = stock.data[stock.data.length - 1].price;
  const firstPrice = stock.data[0].price;
  const highPrice = Math.max(...stock.data.map((d) => d.price));
  const lowPrice = Math.min(...stock.data.map((d) => d.price));
  const avgPrice = stock.data.reduce((sum, d) => sum + d.price, 0) / stock.data.length;

  // Determine trend explanation
  const isAboveAverage = lastPrice > avgPrice;
  const trendMessage = isPositive
    ? `${stock.symbol} is in an uptrend, trading ${isAboveAverage ? "above" : "below"} its average price of $${avgPrice.toFixed(2)}.`
    : `${stock.symbol} is in a downtrend, trading ${isAboveAverage ? "above" : "below"} its average price of $${avgPrice.toFixed(2)}.`;

  const volatilityMessage = highPrice - lowPrice > avgPrice * 0.15
    ? "This stock shows high volatility, meaning its price fluctuates significantly. This creates opportunities but also carries higher risk."
    : "This stock shows moderate volatility, meaning it has relatively stable price movements.";

  // Calculate momentum (price acceleration)
  const recentData = stock.data.slice(-10);
  const recentTrendUp = recentData[recentData.length - 1].price > recentData[0].price;
  const momentumMessage = recentTrendUp
    ? "Recent momentum is positive - the stock is gaining strength over the last 10 days."
    : "Recent momentum is negative - the stock is weakening over the last 10 days.";

  return (
    <div className="bg-white dark:bg-card border border-border rounded-xl p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground">{stock.symbol}</h3>
            <p className="text-muted-foreground text-sm">{stock.name}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-foreground">${stock.price.toFixed(2)}</p>
            <p
              className={cn(
                "text-lg font-semibold",
                isPositive ? "text-success" : "text-destructive"
              )}
            >
              {isPositive ? "+" : ""}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={stock.data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={isPositive ? "hsl(120, 61%, 45%)" : "hsl(0, 84.2%, 60.2%)"}
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor={isPositive ? "hsl(120, 61%, 45%)" : "hsl(0, 84.2%, 60.2%)"}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: any) => `$${value.toFixed(2)}`}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke={isPositive ? "hsl(120, 61%, 45%)" : "hsl(0, 84.2%, 60.2%)"}
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-border">
        <div>
          <p className="text-xs text-muted-foreground mb-2">HIGH (90 days)</p>
          <p className="text-lg font-bold text-foreground">${highPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">LOW (90 days)</p>
          <p className="text-lg font-bold text-foreground">${lowPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">AVERAGE</p>
          <p className="text-lg font-bold text-foreground">${avgPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">RANGE</p>
          <p className="text-lg font-bold text-foreground">
            ${(highPrice - lowPrice).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Explanations */}
      <div className="space-y-4">
        <div className="flex gap-3 items-start">
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
          ) : (
            <TrendingDown className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
          )}
          <div>
            <p className="font-semibold text-foreground mb-1">Overall Trend</p>
            <p className="text-sm text-muted-foreground">{trendMessage}</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground mb-1">Volatility Analysis</p>
            <p className="text-sm text-muted-foreground">{volatilityMessage}</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          {recentTrendUp ? (
            <TrendingUp className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
          ) : (
            <TrendingDown className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
          )}
          <div>
            <p className="font-semibold text-foreground mb-1">Recent Momentum</p>
            <p className="text-sm text-muted-foreground">{momentumMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
