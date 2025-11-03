import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio | Tobin's Site",
};

export default function Portfolio() {
  return (
    <>
      <a href="/">
        <Image
          src={"/personalsite.png"}
          width={360}
          height={146}
          alt={"Screenshot of personal website"}
        />
      </a>
      <div className="project-details">
        <p className="project-name">Personal Website</p>
        <p className="project-description">
          My personal website, created through Hack4Impact's Starter Pack
          onboarding task
        </p>
        <a href="index.html">Learn More</a>
      </div>
    </>
  );
}
