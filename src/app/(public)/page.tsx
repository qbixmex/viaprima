import type { FC } from "react";
import { HeroMaster } from "./home-page/hero-master";
import { OperativeModules } from "./home-page/operative-modules";
import { LogisticsFlow } from "./home-page/logistic-flow";
import { BottomBanner } from "./home-page/bottom-banner";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroMaster />
      <OperativeModules />
      <LogisticsFlow />
      {/* <Metrics /> */}
      <BottomBanner />
    </div>
  );
};

export default HomePage;