import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img src={data?.image} alt={`Imagen del proyecto ${data?.title}`} /> {/* Updated alt text */}
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center">
          <a
            href={data?.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary py-3 px-6 text-sm xs:text-[16px] font-semibold"
          >
            Ver Deploy
          </a>
          {data?.repoLink && data.repoLink !== "#!" && (
            <a
              href={data?.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white border border-gray-300 text-gray-900 py-3 px-6 text-sm xs:text-[16px] font-semibold hover:border-picto-primary hover:text-picto-primary"
            >
              Repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
