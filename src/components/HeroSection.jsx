import IllustrationMockUp from '../assets/illustration-mockups.svg';

const HeroSection = () => {
  return (
    <section>
        <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion. </p>
            <a href="#">Get Started For Free</a>
        </div>
        <figure>
            <img src={IllustrationMockUp} />
        </figure>
    </section>
  )
};

export default HeroSection;
