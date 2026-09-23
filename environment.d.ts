declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MAILER_HOST: string | null;
      MAILER_PORT: string | null;
      MAILER_EMAIL: string | null;
      MAILER_TO: string | null;
      MAILERS_TO: string | null;
      MAILER_SECRET_KEY: string | null;
    }
  }

  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
