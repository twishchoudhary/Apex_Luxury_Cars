export interface StockDataPoint {
  time: string;
  price: number;
  volume?: number;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  high52Week: number;
  low52Week: number;
  data: StockDataPoint[];
}

// Generate realistic stock chart data
function generateStockData(
  basePrice: number,
  volatility: number,
  days: number,
): StockDataPoint[] {
  const data: StockDataPoint[] = [];
  let currentPrice = basePrice;

  for (let i = days; i >= 0; i--) {
    const change = (Math.random() - 0.5) * volatility;
    currentPrice = Math.max(currentPrice + change, basePrice * 0.7);

    const date = new Date();
    date.setDate(date.getDate() - i);

    data.push({
      time: date.toLocaleDateString(),
      price: Math.round(currentPrice * 100) / 100,
      volume: Math.floor(Math.random() * 50000000) + 10000000,
    });
  }

  return data;
}

export const stocksData: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 182.45,
    change: 5.42,
    changePercent: 3.07,
    volume: "52.3M",
    marketCap: "$2.85T",
    high52Week: 199.62,
    low52Week: 124.17,
    data: generateStockData(182.45, 2, 90),
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 155.28,
    change: 8.73,
    changePercent: 5.95,
    volume: "34.2M",
    marketCap: "$1.02T",
    high52Week: 191.54,
    low52Week: 102.21,
    data: generateStockData(155.28, 1.8, 90),
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 417.82,
    change: 12.45,
    changePercent: 3.07,
    volume: "18.5M",
    marketCap: "$3.11T",
    high52Week: 457.81,
    low52Week: 309.23,
    data: generateStockData(417.82, 1.5, 90),
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 238.45,
    change: -12.55,
    changePercent: -5.01,
    volume: "78.9M",
    marketCap: "$751B",
    high52Week: 299.29,
    low52Week: 138.8,
    data: generateStockData(238.45, 3.2, 90),
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 198.35,
    change: 15.82,
    changePercent: 8.65,
    volume: "42.1M",
    marketCap: "$1.95T",
    high52Week: 198.35,
    low52Week: 101.26,
    data: generateStockData(198.35, 2.1, 90),
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 875.29,
    change: 35.42,
    changePercent: 4.22,
    volume: "31.5M",
    marketCap: "$2.16T",
    high52Week: 875.29,
    low52Week: 398.44,
    data: generateStockData(875.29, 2.8, 90),
  },
];

export const marketStats = {
  sAndP500: {
    index: "S&P 500",
    value: 5089.24,
    change: 32.45,
    changePercent: 0.64,
  },
  nasdaq: {
    index: "NASDAQ",
    value: 16087.58,
    change: 125.37,
    changePercent: 0.79,
  },
  djia: {
    index: "DOW JONES",
    value: 20045.67,
    change: -15.23,
    changePercent: -0.08,
  },
};
