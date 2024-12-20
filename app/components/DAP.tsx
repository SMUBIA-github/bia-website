import React from "react";
import Wordcard from "./Wordcard";
import styles from "./DAP.module.css";
import Image from "next/image";

const DAP: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Data Associates Programme</h1>
        <p className={styles.subtitle}>
          SMU BIA&apos;s flagship academic programme
        </p>{" "}
        {/* Apostrophe is properly escaped here */}
        <p className={styles.description}>
          DAP is a project-oriented learning programme where mentees can learn
          through self-initiated projects in small groups and weekly theory
          sessions in tandem.
        </p>
        <p className={styles.additionalInfo}>
          Through mentoring, DAP aims to equip our associates with important
          data science knowledge and skills by creating a co-learning community.
        </p>
        <button className={styles.slideDeckButton}>
          <a
            href="https://smu.sg/DAP-Mentee-Slides"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slide Deck
          </a>
        </button>
      </div>

      {/* Program Cards Section */}
      <div className={styles.cardsSection}>
        <Wordcard
          title="Co-learning"
          imageSrc="/images/Co-learning2022.jpg"
          overlayContent={
            <div className={styles["modal-text"]}>
              <ul>
                <li>
                  <strong>Co-Learning Sessions</strong>: We believe the best way
                  to learn is to teach. These sessions aim to help Data
                  Associates build a strong foundation in Machine Learning
                  concepts, focusing on understanding the math and intuition
                  behind key techniques.
                </li>
                <li>
                  <strong>Team-Based Learning</strong>: Data Associates are
                  split into teams of 4, each presenting on a topic to their
                  peers. Topics include, but are not limited to: Regression,
                  Classification, Ensemble Learning, Neural Networks,
                  Unsupervised Learning, and Natural Language Processing.
                </li>
              </ul>
            </div>
          }
          className={styles.programCard}
        />
        <Wordcard
          title="Project"
          imageSrc="/images/dapProject.jpg"
          overlayContent={
            <div className={styles["modal-text"]}>
              <ul>
                <li>
                  <strong>Project-Based Learning</strong>: We believe in an
                  application-first approach. Each Data Associate works in a
                  group of 4 to propose and develop a data analytics project.
                </li>
                <li>
                  <strong>Creative Freedom</strong>: We don’t limit the type of
                  projects—only that they must be related to Data Analytics. The
                  focus is on practical experience and real-world
                  problem-solving.
                </li>
                <li>
                  <strong>Share Your Findings</strong>: At the end of the
                  project, Data Associates present their findings and final
                  outcomes to the community, fostering knowledge-sharing and
                  collaboration.
                </li>
              </ul>
            </div>
          }
          className={styles.programCard}
        />
        <Wordcard
          title="Community"
          imageSrc="/images/dapWelcome1.jpg"
          overlayContent={
            <div className={styles["modal-text"]}>
              <ul>
                <li>
                  <strong>Building a Strong Community</strong>: The Data
                  Associates program emphasizes the importance of collaboration,
                  networking, and growth within a supportive community.
                </li>
                <li>
                  <strong>Knowledge Sharing</strong>: Through events, workshops,
                  and group projects, Data Associates have numerous
                  opportunities to exchange knowledge and gain valuable insights
                  from peers.
                </li>
                <li>
                  <strong>Continuous Support</strong>: Our community provides a
                  space for Data Associates to ask questions, collaborate on
                  challenges, and continue learning from each other beyond the
                  formal sessions.
                </li>
              </ul>
            </div>
          }
          className={styles.programCard}
        />
      </div>

      {/* Highlights Section */}
      <div className={styles.highlightsSection}>
        <h2 className={styles.highlightsTitle}>Highlights from DAP</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/ASL2.jpg"
                alt="ASL Fingerspelling Detection Tool"
                fill
                className={styles.projectImage}
                objectFit="cover"
              />
            </div>
            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>
                ASL Fingerspelling Detection Tool
              </h3>
              <p className={styles.projectTeam}>
                <strong>Team:</strong> Jolene Yeo, Regine Tan, Rheza Paleva,
                Vicky Qu
                <br />
                <strong>Mentor:</strong> Jowett
              </p>
              <p className={styles.projectText}>
                As part of our DAP project, we delved into the realm of American
                Sign Language (ASL), exploring how we could harness machine
                learning to create a model capable of detecting and spelling out
                the sign languages given by the user.
              </p>
            </div>
          </div>

          <div className={styles.projectItem}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/Help-Htoo-Resale.jpg"
                alt="HDB Price Prediction Model"
                fill
                className={styles.projectImage}
                objectFit="cover"
              />
            </div>
            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>
                HDB Price Prediction Model
              </h3>
              <p className={styles.projectTeam}>
                <strong>Team:</strong> Elijah Khor, Htoo Myat Naing, Ivan Yeo,
                Keng Boon
                <br />
                <strong>Mentors:</strong> King Yeh, Gabriel Sidik
              </p>
              <p className={styles.projectText}>
                We created new features for each individual flat using the
                OneMap API such as coordinate data, postal code, and distances
                from places of interest. We then clustered the data by sector
                code and coordinates, before comparing different Regression
                methods to find the optimal model.
              </p>
            </div>
          </div>

          <div className={styles.projectItem}>
            <div className={styles.imageContainer}>
              {/* Use the regular <img> tag for the GIF */}
              <video
                src="https://thisisformygif2.s3.ap-southeast-1.amazonaws.com/Lyrics-Machine.gif.mp4"
                alt="Lyrics Machine"
                className={styles.projectImage}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>Lyrics Machine</h3>
              <p className={styles.projectTeam}>
                <strong>Team:</strong> Phyo, Rafe, Charmaine, Shu Rui
                <br />
                <strong>Mentors:</strong> Gabriel Sidik, Renata
              </p>
              <p className={styles.projectText}>
                Ever wondered how cool it would be if we could use machine
                learning to generate some sick lyrics? That was exactly what
                went through our minds while writing the project proposal for
                SMUBIA&apos;s Data Associate Programme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAP;
