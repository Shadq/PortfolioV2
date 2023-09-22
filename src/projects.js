import firstProject from "./assets/firstProject.png";
import secondProject from "./assets/secondProject.png";
import thirdProject from "./assets/thirdProject.png";

const projects = [
  {
    title: "Portoflio",
    description:
      "A simple but yet professional and modern portfolio build with ReactJS and CSS.",
    tags: ["ReactJs", "CSS"],
    gitHubRepo: "https://github.com/Shadq/JohnDoePortoflio/tree/main",
    websiteLink: "https://john-doe-portoflio-kxxr.vercel.app/",
    image: firstProject,
  },
  {
    title: "Crypto Coin Landing page",
    description:
      "A modern landing page of an ERC-20 token (that doesn't exists).",
    tags: ["ReactJs", "Chart.js", "CSS"],
    gitHubRepo: "https://github.com/Shadq/Coin-LandingPage/tree/main",
    websiteLink: "https://stack-coin-landing-page.vercel.app/",
    image: secondProject,
  },
  {
    title: "Decentralized Polling System",
    description:
      "A Denctralized fullstack polling system build with the latest technologies.",
    tags: ["ReactJs", "EthersJS", "Solidity", "Hardhat"],
    gitHubRepo: "https://github.com/Shadq/portofolio-project-3",
    image: thirdProject,
  },
];

export { projects };
