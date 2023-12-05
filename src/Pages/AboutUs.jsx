import React from "react";
import HomeLayout from "../Layouts/HomeLayout.jsx";
import AboutMainpng from "../assets/images/aboutMainImage.png";
import apj from "../assets/images/apj.png";
import bilGates from "../assets/images/billGates.png";
import einstein from "../assets/images/einstein.png";
import nelsonMandela from "../assets/images/nelsonMandela.png";
import steveJobs from "../assets/images/steveJobs.png";
import CraouselSlide from "../Components/CraouselSlide.jsx";

function AboutUs() {
  const celebrities = [
    {
      name: "Dr APJ Abdul Kalam",
      image: apj,
      description:
        "Failure will never overtake me if my determination to succeed is strong enough",
      slideNumber: 1,
    },
    {
      name: "Bill Gates",
      image: bilGates,
      description:
        " “The advance of technology is based on making it fit in so that you don’t really even notice it, so it’s part of everyday life.",
      slideNumber: 2,
    },
    {
      name: "Albert Einstein",
      image: einstein,
      description:
        "  “A person who never made a mistake never tried anything new.”",
      slideNumber: 3,
    },
    {
      name: "Nelson Mandela",
      image: nelsonMandela,
      description:
        "“Education is the most powerful weapon which you can use to change the world.”",
      slideNumber: 4,
    },
    {
      name: "Steve Jobs",
      image: steveJobs,
      description:
        "“I know from my own education that if I hadn’t encountered two or three individuals that spent extra time with me, I’m sure I would have been in jail.”",
      slideNumber: 5,
    },
  ];
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col  text-white">
        <div className="flex items-center gap-4 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is provide Affordable and quality education to the World.
              we are providing the platfrom for the aspiring teachers their
              skills, creativity and knowledge to each other to empower and
              contribute in the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              className="drop-shadow-2xl"
              src={AboutMainpng}
              id="test1"
              style={{ filter: "drop-shadow(0px 10 10px rgb(0,0,0))" }}
              alt="about main image"
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto">
          {celebrities &&
            celebrities.map((celebrity) => (
              <CraouselSlide
                {...celebrity}
                key={celebrity.slideNumber}
                totalSlide={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
