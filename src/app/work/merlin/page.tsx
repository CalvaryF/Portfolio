import Image from "next/image";
import ProjectPage from "../../components/projectPage";
import { project3 } from "../../data";

export default function Home() {
  return <ProjectPage data={project3}></ProjectPage>;
}
