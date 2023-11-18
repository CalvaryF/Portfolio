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
              <span className={FJ.className}>Hey, I'm Calvary</span>
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
              I'm a product designer based in Los Angeles, CA. My goal is to use
              design to imagine and create a future where humans live in harmony
              with our systems and tools.
            </div>
          </div>
          <div className="line"></div>
          <br />
          <div className="imageGrid">
            <img
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
              className="image"
              alt=""
              src="prof.png"
            ></img>
            <img
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
              className="image"
              alt=""
              src="prof2.png"
            ></img>
            <img
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
              className="image"
              alt=""
              src="prof3.png"
            ></img>
          </div>

          <div className="title">
            <span className={FJ.className}>Education and Experience</span>
          </div>
          <div className="line"></div>
          <img className="image imgMargin" alt="" src="edex.png"></img>
          <div className="title">
            <span className={FJ.className}>Reading and Interests</span>
          </div>
          <div className="line"></div>
          <img
            className="image  imgMargin"
            alt=""
            src="reading/books-01.png"
          ></img>
          <img
            className="image  imgMargin"
            alt=""
            src="reading/books-02.png"
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
