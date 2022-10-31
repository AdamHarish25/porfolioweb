import IsmiLogo from "../../images/LogoIsmi.png";
import ITLogo from "../../images/IslamicThingsLogoTr.png";
import RumahHypno from "../../images/RumahHypno.png";
import TomsAgency from "../../images/TomsAgency.png";

const ClientsDataProjects = [
  {
    image: ITLogo,
    progress: "On Progress",
    className: "bg-purple-500 cursor-not-allowed",
  },
  {
    image: IsmiLogo,
    progress: "Published",
    className: "bg-white cursor-pointer",
    link: "https://www.ismidki.org",
  },
  {
    image: RumahHypno,
    progress: "Published",
    className: "bg-white cursor-pointer",
    link: "https://www.rumahhypno.com",
  },
  {
    image: TomsAgency,
    progress: "Done",
    className: "bg-white cursor-default",
  },
];

export default ClientsDataProjects;
