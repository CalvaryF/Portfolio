import Image from "next/image";
import ProjectPage from "../../components/projectPage";
import { project5 } from "../../data";

export default function Home() {
  return <ProjectPage data={project5}></ProjectPage>;
}
