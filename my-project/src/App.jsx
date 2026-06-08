import './App.css'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'SQL',
  'React',
  'MySQL',
  'Tableau',
  'Microsoft Excel',
]

const experience = [
  {
    title: 'Shopping Website Internship',
    period: '2023',
    details:
      'Built a responsive shopping website with HTML, CSS and JavaScript. Focused on UI design, DOM interactivity and teamwork to deliver a polished front-end experience.',
  },
  {
    title: 'Fake Email Detector Project',
    period: '2024',
    details:
      'Developed a machine learning-based email detector using data preprocessing and NLP techniques to classify phishing and spam emails with strong accuracy.',
  },
]

const education = [
  {
    title: 'B.E. in Information Science and Engineering',
    institution: 'NMAM Institute of Technology, Nitte',
    period: '2023 – Present',
  },
  {
    title: 'Pre-University, PCMC',
    institution: 'Vagdevi Pre-University College',
    period: '2021 – 2023',
  },
  {
    title: 'Class X, State Board of Education',
    institution: 'Vagdevi School',
    period: '2020 – 2021',
  },
]

const certifications = [
  'Mastering Data Structures & Algorithms using C and C++ - Udemy',
  'Introduction to Typescript Programming for Web Development – Infosys SpringBoard',
  'Software Engineering Fundamentals – Software Development and Testing – Infosys SpringBoard',
]

function App() {
  return (
    <div className="app-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="hero-label">Full-stack Portfolio</p>
          <h1>Ravitej D Shetty</h1>
          <p className="hero-subtitle">
            Aspiring Information Science Engineer focused on modern web experiences,
            responsive interfaces, and machine learning-powered solutions.
          </p>

          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-outline" href="mailto:ravitejdshetty@gmail.com">
              Contact Me
            </a>
          </div>

          <div className="hero-details">
            <div>
              <span>Email</span>
              <a href="mailto:ravitejdshetty@gmail.com">ravitejdshetty@gmail.com</a>
            </div>
            <div>
              <span>Location</span>
              <p>Udupi, Karnataka</p>
            </div>
            <div>
              <span>Phone</span>
              <p>+91 91138 34697</p>
            </div>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="profile-card">
            <div className="profile-badge">Information Science & Engineering</div>
            <h2>About Me</h2>
            <p>
              I build clean, modern portfolio experiences and support data-driven decision making
              through simple, usable designs. I enjoy solving problems with code and working in
              collaborative teams.
            </p>
            <div className="profile-stat">
              <strong>1+</strong>
              <span>Years of learning</span>
            </div>
            <div className="profile-stat">
              <strong>2</strong>
              <span>Major projects</span>
            </div>
          </div>
        </aside>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-header">
            <span>About</span>
            <h2>Career Objective</h2>
          </div>
          <p className="section-copy">
            To secure a challenging role that leverages my skills and experience while contributing to a dynamic organization.
            I aim to drive innovation, learn continuously, and make a positive impact through teamwork and creativity.
          </p>
        </section>

        <section className="section split-grid" id="skills">
          <div>
            <div className="section-header">
              <span>Skills</span>
              <h2>Technical Expertise</h2>
            </div>
            <ul className="skills-grid">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-header">
              <span>Strengths</span>
              <h2>Soft Skills</h2>
            </div>
            <ul className="strengths-list">
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Creativity</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-header">
            <span>Experience</span>
            <h2>Internship & Projects</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline-card">
                <div className="timeline-meta">
                  <p>{item.period}</p>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-header">
            <span>Education</span>
            <h2>Academic Background</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.title} className="education-card">
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <span>Projects</span>
            <h2>Featured Work</h2>
          </div>
          <div className="project-card featured">
            <h3>Fake Email Detector</h3>
            <p>
              Designed and implemented a machine learning model to identify phishing and spam emails.
              Used natural language processing and email metadata to improve detection accuracy and
              strengthen cybersecurity defenses.
            </p>
          </div>
          <div className="project-card">
            <h3>Shopping Website</h3>
            <p>
              Created a responsive shopping website using HTML, CSS, and JavaScript with a focus on
              interactive product displays, cart behavior, and a clean user journey.
            </p>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="section-header">
            <span>Certifications</span>
            <h2>Professional Learning</h2>
          </div>
          <ul className="certification-list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-header">
            <span>Contact</span>
            <h2>Let’s Connect</h2>
          </div>
          <p className="section-copy">
            I am open to internships, collaborative projects, and full-time roles where I can contribute my
            web development and data skills.
          </p>
          <a className="button button-primary" href="mailto:ravitejdshetty@gmail.com">
            Email Me
          </a>
          <p className="contact-note">LinkedIn: linkedin.com/in/ravitejdshetty</p>
        </section>
      </main>
    </div>
  )
}

export default App
