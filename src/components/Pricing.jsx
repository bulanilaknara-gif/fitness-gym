function Pricing() {
  return (
    <section className="section dark-grey-bg" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        <p className="section-subtitle">
          Choose the perfect plan that fits your fitness journey and budget
        </p>

        <div className="pricing-grid">
          <div className="price-card">
            <h3>Basic</h3>
            <h4>$29 <span>/month</span></h4>
            <ul>
              <li>Access to gym equipment</li>
              <li>Locker room access</li>
              <li>Open gym hours</li>
              <li>Free fitness assessment</li>
            </ul>
            <button className="btn btn-primary full-btn">Get Started</button>
          </div>

          <div className="price-card featured">
            <div className="badge">Most Popular</div>
            <h3>Standard</h3>
            <h4>$59 <span>/month</span></h4>
            <ul>
              <li>Everything in Basic</li>
              <li>Group fitness classes</li>
              <li>1 personal training session</li>
              <li>Nutrition consultation</li>
              <li>Priority booking</li>
            </ul>
            <button className="btn btn-dark full-btn">Get Started</button>
          </div>

          <div className="price-card">
            <h3>Premium</h3>
            <h4>$99 <span>/month</span></h4>
            <ul>
              <li>Everything in Standard</li>
              <li>Unlimited personal training</li>
              <li>Custom meal plans</li>
              <li>Guest privileges</li>
              <li>24/7 gym access</li>
            </ul>
            <button className="btn btn-primary full-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;