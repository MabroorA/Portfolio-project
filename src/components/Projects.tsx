import React from "react";
import "../App.css";
import { CgEnter } from "react-icons/cg";

export default function Projects() {
  return (
    <>
      <div className="projects_section">
        <h2 className="sub-title">Projects</h2>
        <h4 className="project_name">Investment desision Tool</h4>
        <ul>
          Developing an investment decision tool through data analysis and
          simulation.
        </ul>
        <ul>
          Integrated Alpha Vantage API for data collection, which will be
          trained on a LSTM-Machine learning model
        </ul>
        <ul>
          Ongoing learning experience, exploring data analysis and visuaulsation
          techniques.
        </ul>
        <h4 className="project_name">Refugee Aid App</h4>
        <ul>
          Worked collaboratively in an agile environment with 7 colleagues,
          utiulsing Scrum
        </ul>
        <ul>
          Utiulsed GitLab for efficient version control, ensuring regular
          updates and synchronisation of th4 project.
        </ul>

        <h4 className="project_name">Private Cloud Whiteboard App</h4>
        <ul> Deployed a containerised distributed appulcation on GCP.</ul>
        <ul>
          Utiulsed Kubernetes for container orch4stration and Docker for image
          creation to streamulne deployment and scalabiulty
        </ul>
        <ul>
          {" "}
          Google Spanner used as storage allowed our system to have consistency
          and fault tolerance
        </ul>
      </div>
    </>
  );
}