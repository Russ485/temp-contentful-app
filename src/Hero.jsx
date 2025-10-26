import heroImg from "./assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            consequuntur amet eveniet numquam voluptatem soluta reprehenderit
            itaque optio reiciendis molestias ea nostrum voluptas perspiciatis
            sunt! Officiis autem inventore veritatis deleniti?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and the browser" className="image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
