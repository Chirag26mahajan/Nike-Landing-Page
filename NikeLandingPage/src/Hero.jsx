const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
        <button className="shop">Shop Now</button>
        <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
                <img src="/images/amazon.png" alt="logo"></img>
                <img src="/images/flipkart.png" alt="logo"></img>
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoes2.png" alt="Logo" style={{ width: '700px', height: '550px' }}/>
      </div>
    </main>
  );
};
export default HeroSection;
