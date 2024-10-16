import "./index.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import BackgroundImage from "./assets/Background.jpg";
import { ArrowUpRight, Circle, Search, Square } from "lucide-react";
import PartnerOne from "./assets/patners1.png";
import PartnerTwo from "./assets/partner2.jpeg";
import PartnerThree from "./assets/partner3.jpeg";
import CardOne from "./assets/Group.svg";
import CardTwo from "./assets/Group2.svg";
import CardThree from "./assets/Group3.svg";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <main className="max-w-screen-7xl overflow-x-hidden">
      <Navbar />

      <section className="h-full lg:mt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <h1 className="text-center mx-auto text-3xl md:text-5xl lg:text-[64px] w-full lg:w-2/3 font-light">
          Receive <span className="font-semibold">bookings</span> and down
          payments
        </h1>
        <p className="text-[#808785] mx-auto text-center mt-5 text-sm md:text-base lg:text-lg w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
          Say goodbye to scheduling headaches and hello to efficiency and
          convenience.
        </p>
        <p className="text-[#808785] mx-auto text-center text-sm md:text-base lg:text-lg w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
          With BuukMeNow, you can effortlessly manage your appointments, attract
          more clients, and take your business to new heights.
        </p>

        <div className="flex items-center justify-center space-x-3 mt-8">
          <Link
            to="/"
            className="py-3 px-6 md:py-5 md:px-10 bg-[#004741] text-white rounded-md text-xs md:text-base"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="py-3 px-6 md:py-5 md:px-6 border border-[#004741] text-[#004741] rounded-md text-xs md:text-base"
          >
            Request a demo
          </Link>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative lg:mt-20 px-4 sm:px-6 md:px-8 xl:px-24 mt-10 h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff] to-[#fff]/45 opacity-100 z-0"></div>
        <div className="mx-auto py-10 lg:pt-16 relative">
          <div className="bg-white py-1.5 px-1.5 sm:px-10 md:px-10 md:py-10">
            <div className="bg-teal-100 py-10 px-10 md:py-28 md:px-10">
              <div className="flex items-center justify-center bg-teal-600 px-8 md:px-8 lg:px-10 lg:py-24 py-10 md:py-6 rounded-lg">
                <input
                  type="text"
                  placeholder="www.buukmenow.com"
                  className="text-white bg-transparent placeholder-white  outline-none w-[500px] py-1.5 px-1.5 lg:py-5 lg:px-5 border-teal-100 border-2 focus:ring-2 focus:ring-teal-200 transition duration-200"
                />
                <button className="text-white rounded-md border-4 border-teal-100 focus:ring-2 focus:ring-teal-200 px-2 py-1 transition duration-200">
                  <Search className="w-8 h-10 md:w-20 md:h-20" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full hidden lg:block bg-[#F9F9F9] space-y-6 py-10 mt-10">
        <div className="flex items-center justify-center pt-10">
          <h3 className="text-xl">Some of our partners</h3>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row space-x-10">
          <img src={PartnerOne} alt="partners" className="w-[150px] " />
          <img
            src={PartnerTwo}
            alt="partners"
            className="w-16 h-16 rounded-full"
          />
          <img
            src={PartnerThree}
            alt="partners"
            className="w-16 h-16 rounded-full"
          />
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-20">
        {/* Header */}
        <div className="text-center mx-auto font-medium text-2xl lg:text-5xl w-full max-w-4xl lg:leading-[56px] mb-16">
          <h2>
            Discover BuukMeNow in Action: Unveiling the Future of Seamless
            Booking.
          </h2>
        </div>

        {/* Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 bg-[#FFF4E0] mx-auto rounded-lg lg:max-w-6xl px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
          {/* Text Section */}
          <div className="flex flex-col space-y-6 lg:space-y-10 w-full">
            <h3 className="text-lg lg:text-xl flex items-center gap-3 bg-[#F3F4F6] rounded-full pr-2 w-[130px] lg:w-[160px]">
              <ArrowUpRight className="bg-black text-white rounded-full p-1 w-8 h-8 lg:w-10 lg:h-10" />
              Bookings
            </h3>
            <h4 className="text-2xl lg:text-4xl mb-4 w-full lg:w-[400px]">
              Effortless Appointment Booking for Service Providers
            </h4>
            <p className="text-gray-600 text-sm lg:text-base mb-4 w-full lg:w-[400px]">
              Simplify your scheduling process and take control of your
              appointments with BuukMeNow. You can easily manage your
              availability, accept bookings online, and focus on what you do
              best.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={CardOne}
              alt="Booking Dashboard"
              className="rounded-xl w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 bg-[#EEFAF9] mx-auto rounded-lg lg:max-w-6xl px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
          {/* Text Section */}
          <div className="flex flex-col space-y-6 lg:space-y-10 w-full">
            <h3 className="text-lg lg:text-xl flex items-center gap-3 bg-[#F3F4F6] rounded-full pr-2 w-[130px] lg:w-[160px]">
              <Square className="bg-black text-white rounded-full p-2 w-8 h-8 lg:w-10 lg:h-10" />
              Services
            </h3>
            <h4 className="text-2xl lg:text-4xl mb-4 w-full lg:w-[500px]">
              Expand Your Reach and Showcase Your Professional Services
            </h4>
            <p className="text-[#808785] text-sm lg:text-base mb-4 w-full lg:w-[400px]">
              As a service provider, our platform gives you the tool to amplify
              your business and attract new customers with your quality services
              and professionalism.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={CardTwo}
              alt="Booking Dashboard"
              className="rounded-xl w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] "
            />
          </div>
        </div>

        {/* Staff Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 bg-[#FFF4E0] mx-auto rounded-lg lg:max-w-6xl px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
          {/* Text Section */}
          <div className="flex flex-col space-y-6 lg:space-y-10 w-full">
            <h3 className="text-lg lg:text-xl flex items-center gap-3 bg-[#F3F4F6] rounded-full pr-2 w-[100px] lg:w-[160px]">
              <Circle className="bg-black text-white rounded-full p-2 w-8 h-8 lg:w-10 lg:h-10" />
              Staff
            </h3>
            <h4 className="text-2xl lg:text-4xl mb-4 w-full lg:w-[400px]">
              Build Your Professional Profile and Connect with Clients
            </h4>
            <p className="text-[#808785] text-sm lg:text-base mb-4 w-full lg:w-[400px]">
              Create a compelling professional profile, showcase your skills,
              and connect with clients seeking your services.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end items-center">
            <img
              src={CardThree}
              alt="Booking Dashboard"
              className="rounded-xl w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] "
            />
          </div>
        </div>
      </section>

      <section className="lg:mt-20 px-4 sm:px-6 md:px-8 xl:px-24 mt-20 h-full">
        <div className="space-y-5">
          <h2 className="text-center mx-auto font-medium text-3xl lg:text-5xl w-full lg:leading-[56px]">
            The Ultimate Platform for Effortless Appointments
          </h2>
          <p className="text-center text-[#808785] text-lg lg:text-2xl">
            One Solution, One Platform. Embraced by the Service Industry&apos;s
            Finest!
          </p>
        </div>
        <div className="flex flex-col items-center mt-20">
          <h4 className="text-[#00A99D] font-medium text-8xl">311</h4>
          <p className="text-[#004741] text-lg text-center">
            Appointments booked on BuukMeNow
          </p>
        </div>
        <div className="flex flex-row space-x-10 items-center justify-center mt-10">
          <div>
            <h4 className="text-[#00100B] font-medium text-5xl">311</h4>
            <p className="text-[#004741] text-lg">Services</p>
          </div>
          <div>
            <h4 className="text-[#004741] font-medium text-5xl">162</h4>
            <p className="text-[#004741] text-lg">Businesses</p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-20">
        <Card />
      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-20">
        <Testimonial />
      </section>

      <section
        className="relative flex items-center justify-center lg:justify-start h-full mt-20 py-28 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#004741] to-[#004741]/90 opacity-100 z-0"></div>
        <div className="relative z-10 lg:text-left text-center text-white px-4 sm:px-6 lg:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
            Experience Our Services in Action
          </h1>
          <p className="text-base md:text-lg mb-8 lg:w-1/2">
            Request a demo to explore our offerings firsthand and witness the
            value they can bring to your needs.
          </p>
          <Link
            to="/"
            className="bg-white text-[#004741] px-6 py-4 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Request a demo now!
          </Link>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-20">
        <div className="flex items-center justify-between flex-col lg:flex-row text-center lg:text-left space-y-3">
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl">Check out some of our recent stories</h2>
            <p className="text-lg">Stay in the Loop with the Latest Buzz – Your Source for All Things BuukMeNow!</p>
          </div>
          <Link to='/' className="text-[#004741] ">View more</Link>
        </div>
      </section>
    </main>
  );
}

export default App;
