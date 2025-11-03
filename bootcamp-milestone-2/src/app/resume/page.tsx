import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Tobin's Site",
};

export default function Resume() {
  return (
    <>
      <a href="resume.pdf" download>
        Download Resume
      </a>
      <div className="resume">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">
              California Polytechnic State University, San Luis Obispo
            </h3>
            <p className="entry-info">
              B.S. Computer Science (expected June 2029)
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <ul className="course-list">
            <li>Data Structures</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skill-list">
            <li>Python</li>
            <li>Lua</li>
            <li>JavaScript</li>
            <li>Git Version Control</li>
            <li>Java</li>
            <li>HTML and CSS</li>
            <li>Fast typing, 100+ wpm</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="entry">
            <h3 className="entry-title">Hand gesture memory game</h3>
            <p className="entry-info">February 2024</p>
            <p className="entry-description">
              Used Google’s mediapipe hand gesture recognizer and OpenCV to
              create a game which was shown to over 50 aspiring CTE students at
              high school CTE conference
            </p>
          </div>
          <div className="entry">
            <h3 className="entry-title">Laundry viewer frontend</h3>
            <p className="entry-info">September 2025 -</p>
            <p className="entry-description">
              Building a web application for Cal Poly students to be able to
              view the status of laundry rooms in a more convenient way. Used
              Android Studio emulator and a proxy to analyze requests from
              Campus Clean Pay app
            </p>
          </div>
          <div className="entry">
            <h3 className="entry-title">Personal website</h3>
            <p className="entry-info">October 2025 -</p>
            <p className="entry-description">
              Portfolio website made for Hack4Impact's starter pack onboarding
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="entry">
            <h3 className="entry-title">Student Worker</h3>
            <p className="entry-info">
              River City High School Cafeteria (August 2023 - May 2024, August
              2024 - May 2025)
            </p>
            <p className="entry-description">
              <ul>
                <li>
                  Served food to over 200 students daily during school lunch
                </li>
                <li>Washed and put away dishes and kitchenware</li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
