import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import doctor from "../../Assets/Projects/doctor.png";
import security from "../../Assets/Projects/security.jpg";
import news from "../../Assets/Projects/news.png";
import text from "../../Assets/Projects/text.png";
import coal from "../../Assets/Projects/coal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Doctor Appoinment System"
              description="Doctor Appoinment App built using MERN Stack. A app where patients can find and book a doctor according to there sutibility."
              ghLink="https://github.com/rakshit1104/Doctor-Appointment-System"
              demoLink="https://mernapp-hp6d.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="SecurityX"
              description="SecurityX is a password manager which keeps the login data in the Web Browser.  It uses Local Storage of the Web Browser to store the data. This makes it useable and secure for everyone as the data is being saved on the PC itself."
              ghLink="https://github.com/rakshit1104/SecurityX"
              demoLink="https://rakshit1104.github.io/SecurityX/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NewsApp"
              description="NewsApp contains news from various sources and it consists of categories such as Bussiness, Entertainment, Health, Science, Sports and Technology. It is built using React and News API."
              ghLink="https://github.com/rakshit1104/NewsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="TextUtils"
              description="TextUtils is a word and a character counter utility which can be used to manipulate your text in the way you want. You can covert your text from UpperCase to LowerCase and vice-versa, clear text, and copy the manipulated text"
              ghLink="https://github.com/rakshit1104/TextUtils"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coal}
              isBlog={false}
              title="Coalescence"
              description="Coalescence is a Java app which consists of various in-apps such as Character counter, IP Finder, Calculator, Sudoku, Notepad and Picture Puzzle. It is built using Java and Java Swing."
              ghLink="https://github.com/rakshit1104/TextUtils"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
