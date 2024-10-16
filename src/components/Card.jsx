
import bgImage from '../assets/bg.png';
import Icon from '../assets/Frame.svg';
import { Link } from 'react-router-dom'; 
import Apple from '../assets/bi_apple.svg';
import Playstore from '../assets/bi_playstore.svg';
const Card = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 items-center justify-center w-full">
      <div
        className="relative text-white rounded-3xl py-40 w-full max-w-[1040px] h-auto xl:h-[560px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#004741] opacity-70 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-9">
          <h6 className="text-lg flex items-center gap-2">
            <img src={Icon} alt="icon" className="w-6 h-6" /> Cross-platform
          </h6>
          <h4 className="text-2xl w-full xl:text-4xl lg:w-1/2 text-center px-2">
            Download our app now to get on-the-go access
          </h4>
        </div>
        <div className="relative flex flex-col lg:flex-row space-y-3 items-center justify-center space-x-3 mt-8">
          <Link
            to="/"
            className="py-3 px-7 md:py-5 md:px-10 bg-[#fff] text-[#00100B] rounded-md text-xs md:text-base flex items-center gap-3"
          >
           <img src={Apple} alt="" />iOS App Coming Soom
          </Link>
          <Link
            to="/"
            className="py-3 px-5 md:py-5 md:px-6 bg-[#fff] text-[#00100B] rounded-md text-xs md:text-base flex items-center gap-3"
          >
            <img src={Playstore} alt="" /> Android App Coming Soon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
