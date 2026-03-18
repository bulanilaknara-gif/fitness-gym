const services = [
  {
    image: "/images/service1.jpg",
    title: "Personal Training",
    text: "One-on-one sessions with certified trainers tailored to your specific fitness goals and needs.",
  },
  {
    image: "/images/service2.jpg",
    title: "Strength Training",
    text: "Build muscle, increase power, and boost metabolism with our comprehensive strength training programs.",
  },
  {
    image: "/images/service3.jpg",
    title: "Yoga Classes",
    text: "Improve flexibility, balance, and mental clarity through our guided yoga sessions for all levels.",
  },
];

function Services() {
  return (
    <section id="services" className="section dark-grey-bg">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Discover our comprehensive range of fitness programs designed to help you achieve your goals
        </p>

        <div className="card-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos="zoom-in">
              <img src={service.image} alt={service.title} />
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <button className="btn btn-primary full-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;