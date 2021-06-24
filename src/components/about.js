import React from 'react';

function About() {
  return(
    <>
      <div>
        <h1>More About Us</h1>
      </div>
      <div class="center">
        <div class="card-container">
          <div class="card">
            <div class="side"><img src="/Assets/simone-3.jpeg" alt="Simone" class="about-us"/></div>
              <div class="side back">
                <div class = "lets-check">
                  <h2>About Simone</h2>
                  <p>Hi, I’m Simone Odegard. I’m a full stack JavaScript developer and I lead competitive dance teams. I believe that if you work hard, you will be successful even if you sometimes feel incapable. I want to inspire other young women to follow their dreams and be confident in their ability to succeed in tech.</p>
                </div>
                <div class="connect">
                  <a href="https://www.linkedin.com/in/simoneodegard/" target="_blank"><img src="Assets/LI-round.png" alt="LinkedIn icon" class="authors-social"/></a>
                  <a href="https://github.com/SimoneOdegard" target="_blank"><img src="/Assets/GH-round.png" alt="GitHub icon" class="authors-social"/></a>
                </div>
              </div>
            </div>
          </div>
        <div class="card-container">
          <div class="card">
            <div class="side"><img src="/Assets/jessi-1.jpg" alt="Jessi" class="about-us"/></div>
            <div class="side back">
              <div class = "lets-check">
                <h2>About Jessi</h2>
                <p>I am a creative, go-getter person, with strong communication and leadership skills. I value things like curiosity, bravery, and discovery. My background is in environmental science, consulting, and GIS. I thrive in a faced paced environment full of opportunities, with the freedom and professional autonomy to challenge myself and follow my ambitions.</p>
              </div>
              <div class="connect">
                <a href="https://www.linkedin.com/in/jessivelazquez/" target="_blank"><img src="/Assets/LI-round.png" alt="LinkedIn icon" class="authors-social"/></a>
                <a href="https://github.com/JessiVelazquez" target="_blank"><img src="/Assets/GH-round.png" alt="GitHub icon" class="authors-social"/></a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="side"><img src="/Assets/nicki.jpg" alt="Nicki" class="about-us"/></div>
            <div class="side back">
              <div class = "lets-check">
                <h2>About Nicki</h2>
                <p>Nicki is a full-stack Javascript developer coming from a more non-traditional background - the art/design world. After studying marketing at Portland State University, Nicki went on to become a hairstylist. Through international travel and amazing mentorship, she was exposed to the vast world of art and design, igniting a stronger passion for creativity. Nicki seeks to bring that creativity to the tech world.</p>
              </div>
              <div class="connect">
                <a href="https://www.linkedin.com/in/nickibaldwin/" target="_blank"><img src="/Assets/LI-round.png" alt="LinkedIn icon" class="authors-social"/></a>
                <a href="https://github.com/nickibaldwin" target="_blank"><img src="/Assets/GH-round.png" alt="GitHub icon" class="authors-social"/></a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="side"><img src="/Assets/jason.jpg" alt="Jason" class="about-us"/></div>
            <div class="side back">
              <div class = "lets-check">
                <h2>About Jason</h2>
                <p>Hi Everyone! I am a former Project Manager turned Full-Stack JavaScript web developer. I am an avid plant enthusiast with well over forty different variates of plants. I enjoy Full-Stack web development and having the ability to work through challenging situations. </p>
              </div>
              <div class="connect">
                <a href="https://www.linkedin.com/in/jason-taisey-4b229452/" target="_blank"><img src="/Assets/LI-round.png" alt="LinkedIn icon" class="authors-social"/></a>
                <a href="https://github.com/JTaisey389" target="_blank"><img src="/Assets/GH-round.png" alt="GitHub icon" class="authors-social"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;