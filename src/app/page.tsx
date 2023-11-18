import React from "react";
import { projects } from "./data";
import PageLink from "./components/pageLink";
import Image from "next/image";
import { Inter, Familjen_Grotesk, IBM_Plex_Sans } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const FJ = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

const ProjectPage: React.FC = ({}) => {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="main">
          <div className="marginTop">
            <div className="title">
              <span className={FJ.className}>Greetings Traveler</span>
            </div>

            <br />
            <div
              style={{
                fontFamily: "Inter",
                color: "#aaaaaa",
                fontSize: "14px",
                width: "600px",
              }}
            >
              My name is Calvary Fisher. I&apos;m a PM, designer and engineer
              who specializes in scientific tools and data visualization. I love
              finding simple solutions to complex problems.
            </div>
          </div>
          <div className="line"></div>
          <br />
          {/* <div className="line"></div> */}
          {projects.map((item, index) => {
            return (
              <PageLink
                key={index}
                data={{
                  title: item.title,
                  subtitle: item.subtitle,
                  date: item.date,
                  image: item.homeImage,
                  route: item.route,
                }}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
