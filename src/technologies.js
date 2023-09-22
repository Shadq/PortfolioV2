import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoGraphql } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";

const firstRowTechnologies = [
  {
    name: "HTML 5",
    icon: (
      <p>
        <AiFillHtml5 />
      </p>
    ),
  },
  {
    name: "CSS 3",
    icon: (
      <p>
        <DiCss3 />
      </p>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <p>
        <BiLogoJavascript />
      </p>
    ),
  },
  {
    name: "Express",
    icon: (
      <p>
        <SiExpress />
      </p>
    ),
  },
  {
    name: "React JS",
    icon: (
      <p>
        <GrReactjs />
      </p>
    ),
  },
  {
    name: "Redux",
    icon: (
      <p>
        <BiLogoRedux />
      </p>
    ),
  },
];

const secondRowTechnologies = [
  {
    name: "GraphQL",
    icon: (
      <p>
        <BiLogoGraphql />
      </p>
    ),
  },
  {
    name: "Node JS",
    icon: (
      <p>
        <BiLogoNodejs />
      </p>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <p>
        <BiLogoMongodb />
      </p>
    ),
  },
  {
    name: "Mongoose",
    icon: (
      <p>
        <SiMongoose />
      </p>
    ),
  },
];

export { firstRowTechnologies, secondRowTechnologies };
