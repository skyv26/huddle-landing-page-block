import SubscriptionButton from './SubscriptionButton';
import IllustrationMockUp from '../assets/illustration-mockups.svg';

const HeroSection = () => {
  return (
    <section>
        <div className='flex flex-col'>
            <h1 className='font-semibold text-[#00252E] text-lg'>Build The Community Your Fans Will Love</h1>
            <p className='font-normal text-[#00252E] text-sm'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion. </p>
            <SubscriptionButton className="text-white bg-[#FF52C1] text-xs">Get Started For Free</SubscriptionButton>
        </div>
        <figure>
            <img src={IllustrationMockUp} />
        </figure>
    </section>
  )
};

export default HeroSection;
