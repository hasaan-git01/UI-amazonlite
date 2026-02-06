import React from "react";
import amz from "../assets/amz.png";
import tmw from "../img/tmw.png";
import cst from "../img/cst.png";
import ide from "../img/ide.png";
import tim from "../img/tim.png";
import adil from "../img/adil.png";
import div from "../img/div.png";

const About = () => {
  return (
    <>
      <div className="bg-white text-gray-800 px-6 md:px-20 py-12">
        <div className="flex justify-center">
          <img src={amz} alt="site logo" className="h-24 m-[30px] " />
        </div>

        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Amazon Lite
          </h1>
          <p className="text-gray-600 text-lg">
            At Amazon Lite, our mission is to be Earth’s most customer-centric
            company — a place where people can discover, explore, and buy
            anything they need, while empowering millions of businesses around
            the world.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className=" w-[500px] h-72 bg-gray-200 ">
            <img
              src={tmw}
              alt=""
              className="h-72 w-[500px]  border rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-3">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Amazon Lite began as a small online bookstore, driven by a passion
              for innovation and a belief that the internet could transform the
              way people shop. What started as a single idea has grown into one
              of the world’s largest marketplaces — connecting customers with
              millions of products and businesses across every continent.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Today, Amazon Lite continues to innovate in retail, cloud
              computing, consumer devices, entertainment, and more — always
              focusing on improving the lives of customers everywhere.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
                <img src={cst} alt="" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer Obsession</h3>
              <p className="text-gray-600">
                Everything we do begins with the customer. We work hard to earn
                and maintain trust.
              </p>
            </div>

            <div className="border rounded-lg p-8 shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
                <img src={ide} alt="" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly invent, simplify, and push boundaries to create
                better experiences.
              </p>
            </div>

            <div className="border rounded-lg p-8 shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
                <img src={tim} alt="" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Long-Term Thinking</h3>
              <p className="text-gray-600">
                We make decisions with a long-term view, believing that true
                value comes from patience and persistence.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-3">What We Do</h2>

            <p className="text-gray-600 leading-relaxed">
              From delivering everyday essentials to building cutting-edge cloud
              solutions, Amazon Lite’s ecosystem is vast and interconnected. We
              support creators, founders, developers, and customers from all
              around the world through our diverse set of services.
            </p>
            <ul className="list-disc ml-6 text-gray-600 mt-4 space-y-2">
              <li>Online Shopping & Delivery</li>
              <li>Amazon Lite Web Services (AWS)</li>
              <li>Entertainment through Prime Video & Music</li>
              <li>Smart devices like Alexa, Echo, and Fire TV</li>
              <li>Empowering small businesses globally</li>
            </ul>
          </div>

          <div className=" h-[330px] w-[450px] bg-white ">
            <img
              src={adil}
              alt=""
              className="h-[330px] w-[450px]   rounded-lg"
            />
          </div>
        </section>

        <section className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to building a sustainable future. From investing in
            renewable energy to reducing packaging waste and supporting global
            communities, Amazon Lite is working to make the planet better for
            generations to come.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="w-full h-72 bg-gray-200 rounded-lg shadow-inner">
            <img src={div} className="w-full h-full object-cover rounded-lg" />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-3">
              Our People & Culture
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Amazon Lite is powered by thinkers, builders, creators, and
              problem solvers. We foster a culture of inclusivity,
              collaboration, and continuous learning. Every day, our teams work
              together to deliver excellence and push what’s possible.
            </p>
          </div>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">
            Looking Toward the Future
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As we continue to grow, our vision stays the same: using technology,
            innovation, and customer obsession to build a better tomorrow.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
