import type { FC } from "react";
import { HeroMaster } from "./home-page/hero-master";
import { OperativeModules } from "./home-page/operative-modules";
import { BottomBanner } from "./home-page/bottom-banner";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroMaster />
      <OperativeModules />
      <BottomBanner />
    </div>
  );
};

export default HomePage;