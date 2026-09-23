import { ContactForm } from "@/app/contacto/contact-form";
import { HeroBanner } from "./hero-banner";
import { LocationMap } from "./location-map";

const ContactPage = () => {
  return (
    <>
      <HeroBanner />
      <ContactForm />
      <LocationMap />
    </>
  );
};

export default ContactPage;