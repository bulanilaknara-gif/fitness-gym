const trainers = [
  {
    image: "/images/trainer1.jpg",
    name: "Ovin Rajapaksha",
    role: "Strength & Conditioning",
  },
  {
    image: "/images/trainer2.jpg",
    name: "Nilu Silva",
    role: "Yoga & Flexibility",
  },
  {
    image: "/images/trainer3.jpg",
    name: "Malshan Perera",
    role: "Personal Training",
  },
];

function Trainers() {
  return (
    <section id="trainers" className="section black-bg">
      <div className="container">
        <h2 className="section-title">Meet Our Trainers</h2>
        <p className="section-subtitle">
          Our certified professionals are dedicated to helping you reach your fitness potential
        </p>

        <div className="trainer-grid">
          {trainers.map((trainer, index) => (
            <div className="trainer-card" key={index} data-aos="fade-left">
              <img src={trainer.image} alt={trainer.name} />
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;