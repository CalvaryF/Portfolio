import React from "react";
//import styled from "styled-components";
// import { project1 } from "./data";
import Block from "./block";
import Image from "next/image";
import { Inter, Familjen_Grotesk, IBM_Plex_Sans } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import { Project } from "./types";
import LikeCard from "./likeCard";
import { projects } from "../data";
import { LuBuilding, LuUser, LuBox, LuWrench } from "react-icons/lu";

const FJ = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

interface props {
  data: Project;
}

const ProjectPage: React.FC<props> = ({ data }) => {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="main">
          <div className="blockContainer">
            <div className="mapLine2">
              <div className="mapCircle"></div>
            </div>
            <div className={"introTitle " + FJ.className}>{data.title}</div>
          </div>
          {/* <div>{data.subtitle}</div> */}
          <div className="blockContainer">
            {" "}
            <div className="mapLine"></div>
            <div className="intro">
              <div className="imageCard">
                <div className="label">Overview</div>
                <div className="bodyCopy">{data.overview}</div>
              </div>
              {/* <div>
              <div>{data.client}</div>
              <div>{data.role}</div>
              <div>{data.tools}</div>
            </div> */}
              <div className="infoBand">
                <div className="infoBandCard">
                  <div className="infoIcon">
                    <LuBuilding size={45} strokeWidth={1.3} color="orangered" />
                  </div>
                  <div>
                    <div className="subhead">Client</div>
                    <div className="bodyCopy"> {data.client}</div>
                  </div>
                </div>
                <div className="infoBandCard">
                  <div className="infoIcon">
                    {" "}
                    <LuUser size={45} strokeWidth={1.3} color="orangered" />
                  </div>
                  <div>
                    <div className="subhead">Role</div>
                    <div className="bodyCopy"> {data.role}</div>
                  </div>
                </div>
                <div className="infoBandCard">
                  <div className="infoIcon">
                    {" "}
                    <LuWrench size={45} strokeWidth={1.3} color="orangered" />
                  </div>
                  <div>
                    <div className="subhead">Tools</div>
                    <div className="bodyCopy"> {data.tools}</div>
                  </div>
                </div>
                <div className="infoBandCard">
                  <div className="infoIcon">
                    {" "}
                    <LuBox size={45} strokeWidth={1.3} color="orangered" />
                  </div>
                  <div>
                    <div className="subhead">Product</div>
                    <div className="bodyCopy"> {data.product}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="imageCard">
              <img className="image" alt="" src={data.headerImage}></img>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="main">
          {data.blocks.map((item, key) => {
            return <Block key={key} data={item}></Block>;
          })}

          <div className="blockContainer2">
            <div className="mapLine3">
              <div className="mapline3div"></div>
              <div className="mapCircle"></div>
            </div>
            <div className="heading">
              <span className={FJ.className}>Next</span>
            </div>
          </div>
          <LikeCard
            projects={[
              projects[(data.id + 1) % projects.length],
              projects[(data.id + 2) % projects.length],
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
