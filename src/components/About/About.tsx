import ScrollAnimation from "react-animate-on-scroll";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import elasticIcon from "../../assets/elasticsearch.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mongoDbIcon from "../../assets/mongodb.svg";
import nestIcon from "../../assets/nestjs.svg";
import nextIcon from "../../assets/nextjs.svg";
import nodeIcon from "../../assets/node-icon.svg";
import postgresIcon from "../../assets/postgresql.svg";
import reactIcon from "../../assets/react-icon.svg";
import redisIcon from "../../assets/redis.svg";
import shopify from "../../assets/shopify.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import abdulBasit from "../../assets/abdul_basit.jpg";
import vueIcon from "../../assets/vue-icon.svg";
import wordpress from "../../assets/wordpress.svg";
import { Container } from "./styles";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Abdul Basit, a passionate full-stack developer with
            over 5 years of experience, specializing in backend engineering.
            I've worked across various industries, including fintech,
            e-commerce, SaaS, and real-time applications, building scalable and
            efficient software solutions. Currently, I'm diving deep into AI and
            machine learning, exploring how these technologies can optimize and
            enhance our productivity. One of my proudest projects involved
            developing a high-performance microservices architecture for a real
            estate platform, ensuring seamless transaction processing at scale.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I hit the gym four days a week to stay fit and maintain discipline.
            I also enjoy picking up new and interesting skills, always on the
            lookout for my next learning adventure.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            🚀 <code>A fun fact about me</code>: I have a knack for{" "}
            <strong>learning new technologies incredibly fast</strong>—give me a
            day with something new, and I'll be up and running like I've been
            using it for years! ⚡
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={nextIcon} alt="Next.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={nestIcon} alt="Nest.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={mongoDbIcon} alt="MongoDb" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={postgresIcon} alt="postgresql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={redisIcon} alt="redis" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={elasticIcon} alt="elastic search" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={abdulBasit} alt="Abdul Basit" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
