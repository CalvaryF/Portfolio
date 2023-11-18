import Image from "next/image";
import React, { ReactElement } from "react";
import { Inter, Familjen_Grotesk, IBM_Plex_Sans } from "next/font/google";

interface Props {
  data: { type: string; label: string; text: string; path: string[] };
}

const FJ = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

const heading = (label: string): JSX.Element => {
  return (
    <div className="blockContainer2">
      <div className="mapLine2">
        <div className="mapCircle"></div>
      </div>
      <div className="heading">
        <span className={FJ.className}>{label}</span>
      </div>
    </div>
  );
};

const image = (path: string[], label: string, text: string): JSX.Element => {
  return (
    <div className="blockContainer">
      <div className="mapLine"></div>
      <div className="imageCard">
        <div className="label">{label}</div>
        <div className="paragraph">{text}</div>
        {path.map((item, key) => {
          return <img key={key} src={item} className="image" />;
        })}
      </div>
    </div>
  );
};

const video = (path: string[], label: string, text: string): JSX.Element => {
  return (
    <div className="blockContainer">
      <div className="mapLine"></div>
      <div className="imageCard">
        <div className="label">{label}</div>
        <div className="paragraph">{text}</div>
        {path.map((item, key) => {
          return (
            <video
              style={{ marginBottom: "15px", borderRadius: "5px" }}
              height="100%"
              width="100%"
              key={key}
              controls
            >
              <source src={item} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        })}
      </div>
    </div>
  );
};

const paragraph = (label: string, text: string): JSX.Element => {
  return (
    <div className="blockContainer">
      <div className="mapLine"></div>
      <div className="imageCard">
        <div className="label">{label}</div>
        <div className="paragraph">{text}</div>
      </div>
    </div>
  );
};

const Block: React.FC<Props> = ({ data }) => {
  const t: { [key: string]: ReactElement } = {
    heading: heading(data.label),
    image: image(data.path, data.label, data.text),
    video: video(data.path, data.label, data.text),
    paragraph: paragraph(data.label, data.text),
  };

  return t[data.type];
};

export default Block;
