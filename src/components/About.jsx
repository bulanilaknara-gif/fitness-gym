import { FaDumbbell, FaUserTie, FaCalendarAlt } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about section about-bg">
      <div className="about-grid" data-aos="fade-right">
        <div className="about-image">
          <img src="/images/about.jpg" alt="Gym Interior" />
        </div>

        <div className="about-text">
          <h2 className="section-title left">About Us</h2>
          <p>
            Welcome to Fitness Sport Center, your premier fitness destination with
            over 3 years of experience. We combine cutting-edge equipment, expert
            guidance, and a supportive community to help you achieve your fitness goals.
          </p>

          <div className="feature-item">
            <FaDumbbell className="feature-icon" />
            <div>
              <h3>Modern Equipment</h3>
              <p>State-of-the-art fitness equipment for all your training needs.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaUserTie className="feature-icon" />
            <div>
              <h3>Certified Trainers</h3>
              <p>Expert trainers with years of experience to guide you.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaCalendarAlt className="feature-icon" />
            <div>
              <h3>Flexible Plans</h3>
              <p>Membership options that fit your schedule and budget.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;