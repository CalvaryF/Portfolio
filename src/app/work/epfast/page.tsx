import Image from "next/image";
import ProjectPage from "../../components/projectPage";
import { project1 } from "../../data";

export default function Home() {
  return <ProjectPage data={project1}></ProjectPage>;
}
