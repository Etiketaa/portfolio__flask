import {
  faLinkedin,
  faGithub, // Added GitHub icon
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"; // Added PDF icon for CV
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://www.linkedin.com/in/francoparedes1992/", label: "LinkedIn profile" },
  { icon: faGithub, link: "https://github.com/francoparedes", label: "GitHub profile" },
  { icon: faFilePdf, link: "/static/cv-programador_20250114_002438_0000_compressed-1.pdf", label: "Download CV" }, // Placeholder for Flask url_for
];

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-4"> {/* Added a div for better layout */}
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
          key={index}
          aria-label={item.label} // Added aria-label
        >
          <FontAwesomeIcon
            icon={item.icon}
            className={`text-xl w-4.5 aspect-square`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
