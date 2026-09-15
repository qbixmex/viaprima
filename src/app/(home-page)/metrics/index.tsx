import { MetricsCard } from "./metric-card";
import { metricsCards } from "./metric-card/data";

export const Metrics = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {metricsCards.map((card) => (
            <MetricsCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
