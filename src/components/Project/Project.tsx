import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AbfCodes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>AI-Powered Resume Analyzer</h3>
              <p>
                {" "}
                This intelligent resume analyzer helps job seekers optimize
                their resumes by providing AI-driven suggestions tailored to
                specific job requirements. By analyzing the content, structure,
                and keywords in a resume, the tool identifies areas for
                improvement and ensures alignment with industry standards. It
                enhances the chances of landing a job interview by making
                resumes more appealing to recruiters and applicant tracking
                systems (ATS).{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Node.js</li> <li>Express</li>
                <li>OpenAI API</li>
                <li>React</li>
                <li>MongoDB</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AbfCodes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
              </div>
            </header>
            <div className="body">
              <h3>GeniusBot: AI Chatbot for Customer Support</h3>
              <p>
                This AI-powered chatbot enhances customer support by providing
                instant, accurate responses to customer queries. It continuously
                learns from interactions, improving its ability to understand
                and answer complex questions over time. Businesses can integrate
                this chatbot to automate support, reduce response times, and
                improve customer satisfaction while minimizing manual workload.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>Nest.js</li>
                <li>OpenAI API</li>
                <li>React</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AbfCodes/"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Online Store for Multiple Sellers</h3>
              <p>
                A dynamic e-commerce platform that allows multiple sellers to
                list their products while providing customers with a seamless
                shopping experience. The system supports real-time order
                tracking, secure payment processing, and an efficient seller
                management system. This platform is ideal for businesses looking
                to create a scalable online marketplace with multi-vendor
                support.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>Nest.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>GraphQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AbfCodes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Car Auction Website</h3>
              <p>
                An interactive car auction platform that enables users to bid on
                vehicles in real-time, receive instant updates on bidding
                status, and track auctions effortlessly. The platform leverages
                WebSockets to ensure a smooth and responsive experience,
                allowing buyers to stay updated on their bids without delays. It
                streamlines the car auction process, making it more accessible
                and engaging for users.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>Nest.js</li>
                <li>Express</li>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>WebSockets</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AbfCodes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Delivery App with Live Tracking</h3>
              <p>
                A feature-rich delivery application that supports multiple
                pickup points and real-time order tracking using live location
                data. Customers can monitor their deliveries, get estimated
                arrival times, and receive notifications throughout the process.
                The app integrates with mapping services to enhance accuracy and
                ensure a seamless user experience for both customers and
                delivery personnel.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>React Native</li>
                <li>Google Maps API</li>
                <li>Nest.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>WebSockets</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AbfCodes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AI-Powered HR Management System (HRMS)</h3>
              <p>
                The AI-powered HRMS optimizes employee management with
                role-based access, automated attendance tracking, and
                streamlined payroll processing. It enhances recruitment through
                AI-driven resume screening and interview scheduling while
                providing performance analytics and insightful reports. A
                built-in chatbot assists employees, ensuring an efficient and
                user-friendly experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>React Native</li>
                <li>Google Maps API</li>
                <li>Nest.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Heroku</li>
                <li>Redis</li>
                <li>S3</li>
                <li>WebSockets</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
