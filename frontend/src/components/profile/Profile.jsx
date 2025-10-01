import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import fotoPortfolio from "../../assets/images/foto-portfolio.png"; // Import the new image

const Profile = () => {
  return (
    <div
      className={`mx-4 xxl:mx-0.5 mt-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`} // Removed relative -bottom-20 lg:-bottom-28 z-10, added mt-10
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image section */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={fotoPortfolio}
              alt="Franco Paredes"
            />
          </div>
          {/* Social media section - Re-introducing it here as it was part of the original image block */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            Apasionado por la tecnología y la resolución de problemas.
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Soy programador web backend con experiencia en PHP, MySQL, Python y Flask, especializado en el desarrollo de aplicaciones web dinámicas, integración con bases de datos (phpMyAdmin, Firebase Realtime Database) y consumo de APIs.
            </p>
            <p className="mt-3">
              He trabajado en proyectos propios y para terceros, como Fortezza y Marmes Distribuciones, implementando catálogos de productos, carritos de compra y sistemas de gestión.
            </p>
            <p className="mt-3">
              Manejo Git y GitHub para control de versiones, despliegues en servidores dedicados y plataformas como Vercel, y cuento con experiencia en pasarelas de pago, CRUDs, landing pages optimizadas y automatización de procesos.
            </p>
            <p className="mt-3">
              Actualmente desarrollo proyectos como Eduteca, una academia web ficticia para formación tecnológica, aplicando Flask, Firebase y diseño responsivo con HTML, CSS (Bootstrap) y JavaScript. Mi enfoque está en crear soluciones eficientes, escalables y fáciles de usar.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#projects"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="/static/cv-programador_20250114_002438_0000_compressed-1.pdf" // Placeholder for Flask url_for
              target="_blank"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

