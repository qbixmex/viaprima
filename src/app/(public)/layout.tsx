import type { FC, ReactNode } from "react";
import { Suspense } from "react";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: {
      default: 'ViaPrima',
      template: `%s - ViaPrima`,
    },
    description: 'Somos un centro de distribución especializado en la  recepción, organización y preparación de paquetes para su entrega  a domicilio',
    icons: {
      icon: [
        { url: '/via_prima_logo.png', type: 'image/png' },
      ],
    },
    openGraph: {
      type: 'website',
      images: [
        {
          url: '/via_prima_logo.png',
          alt: 'ViaPrima',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ViaPrima',
      description: 'Somos un centro de distribución especializado en la  recepción, organización y preparación de paquetes para su entrega  a domicilio',
      images: [
        {
          url: '/via_prima_logo.png',
          alt: 'ViaPrima',
        },
      ],
    },
  };
};

type Props = Readonly<{ children: ReactNode }>;

const PublicLayout: FC<Props> = ({ children }) => {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
};

export default PublicLayout;
