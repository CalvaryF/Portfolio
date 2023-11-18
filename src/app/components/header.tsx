"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const headerItems = [
  { name: "Work", route: "work" },
  { name: "About", route: "about" },
  { name: "Resume", route: "resume" },
];

function Header() {
  const pathname = usePathname();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="header">
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              height: "25px",
              width: "60px",
              backgroundColor: "orangered",
              borderRadius: "2px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
            }}
          >
            C A L
          </div>
        </div>

        <div className="headerItemContainer">
          {headerItems.map((item, index) => {
            const isActive =
              (item.route === "work" && pathname === "/") ||
              pathname === `/${item.route}` ||
              pathname.includes(`/${item.route}/`);
            return (
              <Link key={index} href={`/${item.route}`}>
                <div className={`headerItem ${isActive ? "active" : ""}`}>
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
