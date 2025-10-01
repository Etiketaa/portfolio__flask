import "./introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Franco Paredes
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Convierto ideas en soluciones de software elegantes y funcionales. Soy desarrollador Full Stack. Bienvenido a mi espacio digital donde la creatividad se encuentra con el código.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:francoparedes1992@gmail.com" // Updated mailto link
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Hablemos {/* Added icon */}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

