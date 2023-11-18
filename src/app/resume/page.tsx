import React from "react";

import Image from "next/image";
import { Inter, Familjen_Grotesk, IBM_Plex_Sans } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

const FJ = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

const ProjectPage: React.FC = ({}) => {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="main">
          <div className="marginTop">
            <div className="title">
              <span className={FJ.className}>Resume</span>
            </div>{" "}
            <div className="line"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="image imgMargin"
                alt=""
                src="resume_new.png"
              ></img>
            </div>
            <br />
            <div className="title">
              <span className={FJ.className}>What I learned at LONI</span>
            </div>
            <div className="line"></div>
            <img className="image imgMargin" alt="" src="loni.png"></img>
            <div className="title">
              <span className={FJ.className}>What I Learned at FNDR</span>
            </div>{" "}
            <div className="line"></div>
            <img className="image imgMargin" alt="" src="fndr.png"></img>
            <div className="title">
              <span className={FJ.className}>What I Learned at RS21</span>
            </div>
            <div className="line"></div>
            <img className="image imgMargin" alt="" src="rs21.png"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
