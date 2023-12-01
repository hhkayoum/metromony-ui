import Banner from "./Banner/Banner";
import HowToWork from "./HowToWork/HowToWork";
import PremiumMember from "./PremiumMember/PremiumMember";
import SuccessCount from "./SuccessCount/SuccessCount";
import SuccessStory from "./SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PremiumMember></PremiumMember>
      <HowToWork></HowToWork>
      <SuccessCount></SuccessCount>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default Home;
