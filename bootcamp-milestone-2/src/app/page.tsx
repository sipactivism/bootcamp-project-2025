import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome | Tobin's Site",
};

export default function Home() {
  return (
    <div className="about">
      <div className="about-image">
        <Image width={200} height={200} src="/discoball.png" alt="disco ball" />
      </div>
      <div className="about-text">
        <p>
          I'm <strong>Tobin Discoe</strong>, a <em>first-year</em> computer
          science major at Cal Poly SLO. I'm very excited to join Hack4Impact!
          I'm originally from <strong>Sacramento, CA</strong> and I like video
          games and learning about random stuff as well as going on random
          outings with friends.
        </p>
      </div>
    </div>
  );
}
