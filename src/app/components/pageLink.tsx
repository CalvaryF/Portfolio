import Image from "next/image";
import React, { ReactElement } from "react";
import { Inter, Familjen_Grotesk, IBM_Plex_Sans } from "next/font/google";

import Link from "next/link";

interface Props {
  data: {
    title: string;
    subtitle: string;
    date: string;
    image: string;
    route: string;
  };
}

const FJ = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

const PageLink: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Link href={`work/${data.route}`}>
        <div className="pageLinkCard">
          <img
            style={{
              height: "320px",
              objectFit: "cover",
              border: "1px solid #dfdfdf",
            }}
            src={data.image}
            className="image"
          />
          <div style={{ paddingLeft: "20px" }}>
            <div className="title" style={{ marginBottom: "10px" }}>
              <span className={FJ.className}>{data.title} </span>
            </div>

            <div>
              <span
                style={{ fontWeight: "600", color: "orangered" }}
                className="paragraph"
              >
                {data.date}
              </span>
            </div>

            <div>
              <span className="paragraph">{data.subtitle}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PageLink;
