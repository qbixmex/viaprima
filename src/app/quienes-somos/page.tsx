import type { FC } from "react";
import { Hero } from "./hero";
import { MainFeature } from './main-feature/index';
import { Fundaments } from "./fundaments";
import { GalleryValues } from "./values";

const QuienesSomosPage: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <MainFeature />    
      <Fundaments />
      <GalleryValues />
    </div>
  );
};

export default QuienesSomosPage;