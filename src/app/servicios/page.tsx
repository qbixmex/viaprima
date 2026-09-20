import { ServicesList } from "./services-list";
import { CommunicationChannels } from "./communication-channels";
import { HeroBanner } from "./hero-banner";

const ServiciosPage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroBanner />
      <ServicesList />
      <CommunicationChannels />
    </div>
  );
};

export default ServiciosPage;