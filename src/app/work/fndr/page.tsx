import Image from "next/image";
import ProjectPage from "../../components/projectPage";
import { project4 } from "../../data";

export default function Home() {
  return (
    <>
      <ProjectPage data={project4}></ProjectPage>
    </>
  );
}
