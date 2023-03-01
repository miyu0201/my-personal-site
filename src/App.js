import "./App.css";
import imageYMH from "./images/ymh.jpeg";
import aboutMe from "./images/aboutMe.jpg";
import tenzi from "./images/tenzi.PNG";
import quiz from "./images/quiz.PNG";
import foodMarket from "./images/foodMarket.PNG";
import responsiveWeb from "./images/responsiveWeb.PNG";
import userContact from "./images/userContact.PNG";
import shoppingList from "./images/shoppingList.PNG";
import meme from "./images/meme.PNG";
import login from "./images/login.PNG";
import elvftech from "./images/elvftech.PNG";
import elderlyMonitor from "./images/elderlyMonitor.PNG";
import expenseIncomeTracker from "./images/income-expense-tracker.png";
import taskTracker from "./images/task-tracker.png";
import chartJS from "./images/chart_js.png";
import plant from "./images/plant.PNG";
import immersive from "./images/immersive.PNG";
import cityTraffic from "./images/cityTraffic.PNG";
import projectVision from "./images/projectVision.PNG";
import furniture from "./images/furniture.PNG";
import companyList from "./images/companyList.png";
import airbnb from "./images/airbnb.png";
import noteApp from "./images/note_app.png";
import recipeApp from "./images/recipe_app.png";

import { Linkedin, Github, StarFill } from "react-bootstrap-icons";

function App() {
  return (
    <div>
      <section class="header" id="home">
        <h1 class="header_title">
          Hi, I am <strong>Minghui Yu</strong>
        </h1>
        <p class="header_subtitle">front-end developer</p>
        <img src={imageYMH} alt="ymh" class="header_img" />
      </section>

      <section class="my_skills" id="skills">
        <h1 class="skills_title">My Skills</h1>
        <div class="skills">
          <div class="skill">
            <h3>Front-End Skills </h3>
            <p>ReactJS, HTML, CSS, react bootstrap, JavaScript libraries</p>
            <p>User Flow Design and Prototyping using Figma </p>
          </div>

          <div class="skill">
            <h3>Interactive Design </h3>
            <p>
              Unity Engine, C#, Design for Immersive Technolog, AR, VR, ARCore,
              ARKit
            </p>
          </div>

          <div class="skill">
            <h3>Responsive Design</h3>
            <p>
              Web Components Development, Functionality Implementation, Unit
              Testing, React Testing Library, Jest
            </p>
            <p>Version Control Systems: Git, Github</p>
          </div>
        </div>
        <a href="#about" class="btn">
          About Me
        </a>{" "}
        <a href="#work" class="btn">
          My Work
        </a>{" "}
        <a href="#profolio" class="btn">
          Profolio
        </a>
      </section>

      <section class="about_me" id="about">
        <h2 class="about_title">About Me</h2>

        <p class="about_subtitle">
          Designer & developer focusing on front-end.
        </p>

        <div class="about_me_body">
          <p>
            Dedicated and motivated web developerfocusing on front-end
            development in <strong>JavaScript, ReactJS, HTML, and CSS</strong>.
          </p>
          <p>
            Currently, working in a company providing software solutions for the
            effective use of power transformers. I helped the company develop
            the first proof of concept and accessible prototype to showcase to
            the clients and investors.
          </p>
          <p>
            Keen to utilize my skills in front-end development, UI Design,
            user-flow design, and prototyping to create a useful web with a
            heavy emphasis on excellent user experience. Seeking junior or
            mid-level opportunities to expand skills while facilitating company
            growth.
          </p>
        </div>

        <img src={aboutMe} alt="about me" class="about_me_img" />
      </section>

      <section class="my_work" id="work">
        <h2 class="work_title">My Work</h2>
        <p class="work_subtitle">My previous work experience</p>
        <div class="work_experience">
          <div class="work_detail">04/2022 - Ongoing</div>
          <div class="work_detail">
            <StarFill color="yellow" size={15} />
            &nbsp;&nbsp;
            <strong>Front-End Developer & Business Analyst - Elvftech</strong>
            <ul>
              <li>
                Responsible for the design,prototyping, and development of
                company website.
              </li>
              <li>
                Analyse and understand business problem or opportunity, identify
                areas for improvement.
              </li>
              <li>
                Worked closely with back-end developer to implement prototype
                elements into web applications using ReactJS, HTML, CSS,
                JavaScript, etc.
              </li>
              <li>Conduct market research and competitor analysis.</li>
            </ul>
          </div>

          <div class="work_detail">06/2021 - 08/2022</div>
          <div class="work_detail">
            <StarFill color="yellow" size={15} />
            &nbsp;&nbsp;<strong>Front-end developer - DTR1</strong>
            <ul>
              <li>
                Design concepts of the web app based on the company goal and the
                needs of the clients.
              </li>
              <li>
                Translated concepts into user flow, wireframes, and accessible
                prototypes using Figma, Sketch, and visual-paradigm to promote
                site interactions and user experience.
              </li>
              <li>
                Worked closely with back-end developer to implement prototype
                elements into web applications using ReactJS, HTML, CSS,
                JavaScript, etc.
              </li>
              <li>
                Handled user-input data, API data and combined them with
                transformer components for administering and visualization.
              </li>
              <li>
                Created charts using ChartJS to visualize the different types of
                data on the website.
              </li>
              <li>
                Implemented unit testing for usability and functionality using
                React Testing Library and Jest.
              </li>
            </ul>
          </div>

          <div class="work_detail">04/2014 - 12/2015</div>
          <div class="work_detail">
            <StarFill color="yellow" size={15} />
            &nbsp;&nbsp;
            <strong>
              Education Consultant -Premium Education International LTD/United
              Kingdom Education
            </strong>
            <ul>
              <li>
                Conducted educational consultation duties to deliver
                professional advice to clients.
              </li>
              <li>
                Handled the client document preparations and maintained the
                client database.
              </li>
              <li>
                Collaborated with universities, school administrators, and
                various departments to follow up on clients' application
                process, arrange interviews, etc.
              </li>
              <li>
                Handled client inquiries professionally and resolved their
                complaints effectively.
              </li>
              <li>
                Planned and organized educational events and conferences to
                bring in new customers.
              </li>
              <li>
                Implemented employee training programs to improve performance
                and productivity.
              </li>
            </ul>
          </div>

          <div class="work_detail">07/2011 - 03/2012</div>
          <div class="work_detail">
            <StarFill color="yellow" size={15} />
            &nbsp;&nbsp;
            <strong>
              Rich Content Developer/ Intern Website designer - IPmart Network
              SDN BHD
            </strong>
            <ul>
              <li>
                Designed and developed an e-commerce website using JavaScript,
                HTML, CSS, etc.
              </li>
              <li>
                Conducted data collection and analysis for user requirements,
                market trends, andcompetitors to determine design feasibility
                for new iPhone applications.
              </li>
              <li>
                Design and development of prototypes for iPhone apps (user
                interface & user-flow).
              </li>
              <li>
                Collaborated with various departments to determine subjects and
                market areas to generate creative content. Selected cover art,
                fonts, and designs to appeal to target users.
              </li>
              <li>
                Collaborated with systems engineers and designers to identify
                areas requiring improvement.
              </li>
              <li>
                Conducted extensive keyword research to develop comprehensive
                Search EngineOptimization strategies.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="my_work" id="profolio">
        <h2 class="work_title">Profolio</h2>
        <p class="work_subtitle">
          A selection of my previous work and projects
        </p>
        <div class="portfolio">
          <a href="https://tenzigame001.netlify.app/" class="portfolio_item">
            <img src={tenzi} alt="" class="portfolio_img" />
          </a>

          <a href="https://quiztriviagame.netlify.app/" class="portfolio_item">
            <img src={quiz} alt="" class="portfolio_img" />
          </a>

          <a href="https://foodstore001.netlify.app/" class="portfolio_item">
            <img src={foodMarket} alt="" class="portfolio_img" />
          </a>

          <a href="https://responsiveweb01.netlify.app/" class="portfolio_item">
            <img src={responsiveWeb} alt="" class="portfolio_img" />
          </a>

          <a href="https://elvftech.github.io/" class="portfolio_item">
            <img src={elvftech} alt="" class="portfolio_img" />
          </a>

          <a href="https://usercontact.netlify.app" class="portfolio_item">
            <img src={userContact} alt="" class="portfolio_img" />
          </a>

          <a href="https://recipeapp01.netlify.app/" class="portfolio_item">
            <img src={recipeApp} alt="" class="portfolio_img" />
          </a>

          <a href="https://meme-creator01.netlify.app/" class="portfolio_item">
            <img src={meme} alt="" class="portfolio_img" />
          </a>

          <a
            href="https://github.com/miyu0201/login-page_centered-transparent"
            class="portfolio_item"
          >
            <img src={login} alt="" class="portfolio_img" />
          </a>
          <a
            href="https://companylist.netlify.app/"
            class="portfolio_item"
          >
            <img src={companyList} alt="" class="portfolio_img" />
          </a>
         
          <a
            href="https://furniturestore001.netlify.app/"
            class="portfolio_item"
          >
            <img src={furniture} alt="" class="portfolio_img" />
          </a>
          <a
            href="https://deft-tapioca-8060a7.netlify.app"
            class="portfolio_item"
          >
            <img src={shoppingList} alt="" class="portfolio_img" />
          </a>
          <a
            href="https://airnbn.netlify.app/"
            class="portfolio_item"
          >
            <img src={airbnb} alt="" class="portfolio_img" />
          </a>
          <a
            href="https://react-note-app1.netlify.app/"
            class="portfolio_item"
          >
            <img src={noteApp} alt="" class="portfolio_img" />
          </a>

          <a
            href="https://github.com/miyu0201/Remote-Elderly-Monitoring-IoT"
            class="portfolio_item"
          >
            <img src={elderlyMonitor} alt="" class="portfolio_img" />
          </a>

          <a
            href="http://incomeexpensetracker001.netlify.app"
            class="portfolio_item"
          >
            <img src={expenseIncomeTracker } alt="" class="portfolio_img" />
          </a>

          <a
            href="https://appointmenttracker.netlify.app/"
            class="portfolio_item"
          >
            <img src={taskTracker} alt="" class="portfolio_img" />
          </a>

          <a
            href="https://chartjs001.netlify.app"
            class="portfolio_item"
          >
            <img src={chartJS} alt="" class="portfolio_img" />
          </a>

          <a
            href="https://www.youtube.com/watch?v=KPUsWQ5tR3Q"
            class="portfolio_item"
          >
            <img src={plant} alt="" class="portfolio_img" />
          </a>

          <a
            href="https://github.com/miyu0201/City-Traffic"
            class="portfolio_item"
          >
            <img src={cityTraffic} alt="" class="portfolio_img" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=Ozj875DmbZY&t=9s"
            class="portfolio_item"
          >
            <img src={immersive} alt="" class="portfolio_img" />
          </a>
          <a
            href="https://github.com/miyu0201/Project-VISION"
            class="portfolio_item"
          >
            <img src={projectVision} alt="" class="portfolio_img" />
          </a>
        </div>
      </section>

      <footer class="footer">
        <ul class="contact">
          <li class="contact_item">
            Email: &nbsp;
            <a class="contact_link" href="mailto:y.minghui@yahoo.com">
              y.minghui@yahoo.com
            </a>
          </li>
          <li class="contact_item">Phone: &nbsp; 0734939723</li>
          <li class="contact_item">
            Follow Me: &nbsp;
            <a
              class="contact_link"
              href="https://www.linkedin.com/in/minghuiyu88"
            >
              <Linkedin color="#48D1CC" size={15} />
            </a>
            <a class="contact_link" href="https://github.com/miyu0201">
              <Github color="#48D1CC" size={15} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
