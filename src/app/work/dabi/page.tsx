import Image from "next/image";
import ProjectPage from "../../components/projectPage";
import { project2 } from "../../data";

export default function Home() {
  return <ProjectPage data={project2}></ProjectPage>;
}
