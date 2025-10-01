import Projects from "./Projects";
import pomo1 from "../../assets/images/pomo-1.png";
import bittHouse from "../../assets/images/bit-house.png";
import domusTienda from "../../assets/images/domus-tienda.png";
import upCatalogo from "../../assets/images/up-catalogo.png";

const projectData = [
  {
    id: 1,
    image: pomo1,
    category: "WEB DEVELOPMENT",
    title: "POMODORO TIMER LOFI",
    description:
      "Temporizador Pomodoro con tablero de tareas (To Do, In Progress, Done) y música lofi para mejorar la concentración.",
    deployLink: "https://pomodoro-timer-lofi.vercel.app/",
    repoLink: "#!", // No repo link provided in original
  },
  {
    id: 2,
    image: bittHouse,
    category: "WEB DEVELOPMENT",
    title: "BIT-HOUSE",
    description:
      "E-commerce de hardware con carrito de compras y filtro de productos, construido con React.",
    deployLink: "https://bit-house.vercel.app/",
    repoLink: "https://github.com/francoparedes/bit-house",
  },
  {
    id: 3,
    image: domusTienda,
    category: "WEB DEVELOPMENT",
    title: "DOMUS TIENDA",
    description:
      "E-commerce de una tienda de muebles, enfocado en un diseño moderno y minimalista.",
    deployLink: "https://domus-tienda.vercel.app/",
    repoLink: "https://github.com/francoparedes/Domus-tienda",
  },
  {
    id: 4,
    image: upCatalogo,
    category: "WEB DEVELOPMENT",
    title: "UP CATALOGO",
    description:
      "Catálogo de productos digital para una empresa de suplementos deportivos.",
    deployLink: "https://up-catalogo.vercel.app/",
    repoLink: "https://github.com/francoparedes/Up-catalogo",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Proyectos Recientes</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Aquí tienes una selección de mis trabajos recientes, mostrando mis habilidades en la creación de interfaces centradas en el usuario y visualmente atractivas.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-4"> {/* Changed grid and gap */}
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Ver más proyectos
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
