import type { FC } from "react";
import { Hero } from "./hero";
import { MainFeature } from './main-feature/index';
import { Fundaments } from "./fundaments";

const QuienesSomosPage: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <MainFeature />
      <Fundaments />
    </div>
  );
};

export default QuienesSomosPage;