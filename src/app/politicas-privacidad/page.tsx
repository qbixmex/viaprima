import type { FC } from "react";
import styles from "./styles.module.css";
import { cn } from "@/lib/cn";

export const PrivacyPolicyPage: FC = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.spotlightOne} />
      <div className={styles.spotLightTwo} />
      <div className={styles.container}>
        <h1 className={styles.h1}>Políticas de Privacidad</h1>

        <hr className={styles.hr} />

        <h2 className={styles.h2}>1. Uso de Cookies y Tecnologías de Rastreo</h2>

        <p className={cn(styles.p, 'mb-5')}>
          Este sitio web utiliza <b>cookies</b> y tecnologías similares con el propósito exclusivo de mejorar <b>la experiencia del usuario</b> durante su navegación.
        </p>

        <h2 className={styles.h2}>¿Qué son las cookies?</h2>

        <p className={cn(styles.p, 'mb-5')}>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo <b><i>&quot;Ordenador, Teléfono móvil o Tableta&ldquo;</i></b>, cuando visitas una página web.
        </p>

        <h3 className={styles.h3}>Finalidad de nuestras cookies</h3>

        <h4 className={styles.h4}>Funcionalidad y Preferencias:</h4>

        <p className="font-body-sm text-body-lg text-gray-100 leading-snug mb-2">
          Recordar tus opciones de navegación para ofrecerte una experiencia fluida y personalizada.
        </p>

        <h4 className={styles.h4}>Optimización Técnica:</h4>

        <p className={cn(styles.p, "mb-2")}>
         Garantizar un rendimiento adecuado del sitio web y corregir posibles errores de carga.
        </p>

        <h4 className={styles.h4}>Control del usuario:</h4>

        <p className={styles.p}>
          Puedes configurar tu navegador en cualquier momento para bloquear, rechazar o eliminar las cookies instaladas.
        </p>

        <p className={styles.p}>
          Sin embargo, ten en cuenta que algunas funciones del sitio podrían no estar disponibles o no funcionar correctamente si desactivas las cookies necesarias.
        </p>

        <hr className={styles.hr} />

        <h2 className={styles.h2}>2. Tratamiento de Datos en el Formulario de Contacto</h2>

        <p className={cn(styles.p, "mb-5")}>Cuando utilizas nuestro formulario de contacto para comunicarte con nosotros, recopilamos la información que nos proporcionas voluntariamente (como tu nombre, dirección de correo electrónico, teléfono y el contenido de tu mensaje o consulta).</p>

        <h3 className={styles.h3}>Finalidades del tratamiento:</h3>

        <h4 className={styles.h4}>Lectura y Atención:</h4>

        <p className={cn(styles.p, "mb-3")}>
          Leer, analizar y comprender tus preguntas, dudas, sugerencias o comentarios.
        </p>

        <h4 className={styles.h4}>Atención y Seguimiento:</h4>

        <p className={cn(styles.p, "mb-5")}>
          Responder a tus solicitudes y darle un seguimiento adecuado a tu caso o consulta hasta su resolución.
        </p>

        <h3 className={styles.h3}>
          3. Compromiso de Protección y No Transferencia de Datos
        </h3>

        <p className={cn(styles.p, "mb-3")}>
          Queremos ofrecerte total tranquilidad respecto al manejo de tu información personal:
        </p>

        <h4 className={styles.h4}>Uso exclusivo:</h4>

        <blockquote className={cn(styles.quote, "mb-4")}>
          Sus datos suministrados <b><i>únicamente</i></b> se utilizarán para la atención y seguimiento de las consultas realizadas a través del formulario.
        </blockquote>

        <h4 className={styles.h4}>Sin fines fraudulentos ó de spam:</h4>

        <p className={cn(styles.p, "mb-3")}>
          Tus datos <b><i>nunca serán vendidos, alquilados, cedidos ni transferidos</i></b> a terceros, ni se utilizarán para fines negativos, fraudulentos o de envío masivo de correo no deseado <b><i>(spam)</i></b>.
        </p>

        <h4 className={styles.h4}>Seguridad:</h4>

        <p className={styles.p}>
          Aplicamos medidas de seguridad administrativas y técnicas razonables para proteger la confidencialidad de tu información y evitar cualquier acceso no autorizado o alteración de los datos.
        </p>

        <hr className={styles.hr} />

        <h2 className={cn([styles.h2, "mb-5!"])}>4. Derechos del Usuario (ARCO)</h2>

        <h3 className={styles.h3}>Como usuario, tienes derecho a:</h3>

        <ul className={styles.list}>
          <li><b>Acceder:</b> a los datos personales que conservemos sobre ti.</li>
          <li><b>Rectificar:</b> Cualquier información inexacta o incompleta.</li>
          <li><b>Cancelar o eliminar:</b> tus datos personales cuando consideres que ya no son necesarios para las finalidades indicadas.</li>
          <li><b>Oponerte:</b> al tratamiento de tus datos para fines específicos.</li>
        </ul>

        <hr className={styles.hr} />

        <h2 className={styles.h2}>5. Cambios en las Políticas de Privacidad</h2>

        <p className={styles.p}>
          Nos reservamos el derecho de modificar o actualizar la presente <b><i>Política de Privacidad</i></b> en cualquier momento para adaptarla a novedades legislativas o cambios en nuestras prácticas. Cualquier cambio será publicado oportunamente en esta misma página.
        </p>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
