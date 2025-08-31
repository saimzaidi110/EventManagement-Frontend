import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Users } from "lucide-react";
import NavbarComponent from '../component/NavbarComponent'
import EventCards from "../component/EventCards"

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      feedback:
        "Working with Shahzaib was a fantastic experience! He transformed my ideas into a professional and modern website. His communication was clear, and delivery was even faster than expected. Highly recommended!",
      designation: "Founder, DigitalSpark",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Imran Malik",
      feedback:
        "Extremely talented and reliable. Shahzaib handled our WordPress project from start to finish with great attention to detail. We’ve already hired him for our next job!",
      designation: " CEO, TechNova",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Anaya Noor",
      feedback:
        "Shahzaib’s work speaks for itself. The portfolio site he built for me is fast, beautiful, and easy to manage. He even optimized it for SEO. Couldn’t ask for more!",
      designation: "Blogger & Content Creator",
      image:
        "https://media.istockphoto.com/id/2156170315/photo/a-cheerful-female-party-planner-holds-a-clipboard-in-her-hands-while-looking-directly-at-the.jpg?s=612x612&w=0&k=20&c=fnh2niXtfBnyrpMX14wQNXvDBzDejdiS36c-3lyaLlk=",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-white dark:text-white">
      {/* Navbar */}
      <NavbarComponent />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-[90vh] flex items-center">
        <div className="px-4 mx-auto max-w-screen-xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
            Welcome to EventSphere
          </h1>
          <p className="mb-8 text-lg font-medium text-gray-600 lg:text-xl sm:px-12 xl:px-44 dark:text-gray-100">
            Discover, explore, and attend the most exciting expos and events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/events"
              className="py-3 px-6 text-white bg-[#d5a351] hover:bg-[#e88c15] rounded-lg text-lg font-semibold transition duration-300"
            >
              Explore Events
            </Link>
            <Link
              to="/contact"
              className="py-3 px-6 text-white bg-[#d5a351] hover:bg-[#e88c15] rounded-lg text-lg font-semibold transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="max-w-5xl mx-auto ">
        <h1 className="text-5xl font-black text-[#d5a351] mt-20 mb-8 animate-fadeIn text-center">
          About <span className="text-gray-900">EventSphere</span>
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-900 animate-fadeIn delay-100 text-center">
          Whether you're a business looking to showcase your products or an
          enthusiast eager to explore new opportunities, EventSphere provides an
          intuitive platform to discover, book, and attend events with ease.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 animate-fadeIn delay-200 ">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[#ff9b1f]/40 transition-shadow duration-300 text-left">
            <Star className="text-[#d5a351] mb-4 w-8 h-8 text-center" />
            <h2 className="text-2xl font-semibold mb-2 text-[#d5a351]">
              Live Expos
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Access dynamic and engaging expos happening around the world.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[#ff9b1f]/40 transition-shadow duration-300 text-left">
            <MapPin className="text-[#d5a351] mb-4 w-8 h-8" />
            <h2 className="text-2xl font-semibold mb-2 text-[#d5a351]">
              Booth Booking
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Reserve and manage your booth spaces effortlessly with EventSphere.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[#ff9b1f]/40 transition-shadow duration-300 text-left">
            <Users className="text-[#d5a351] mb-4 w-8 h-8" />
            <h2 className="text-2xl font-semibold mb-2 text-[#d5a351]">
              Event Insights
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Get detailed schedules, speaker bios, and insights at your
              fingertips.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <section className="mt-20 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-4xl font-black text-[#d5a351] mb-4 text-left">
              About Us
            </h3>
            <p className="text-gray-800 text-lg text-left">
              Event Sphere ek innovative platform hai jo event planning aur
              management ko asaan aur behtareen banata hai. Chahe aap chhoti
              gathering organize kar rahe ho ya bara corporate event, Event
              Sphere apne smart tools aur seamless features ke zariye har qadam
              par madad karta hai, taake aapka event kamyab aur yaadgar ban
              jaye.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#d5a351] mt-8 text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e88c15] transition"
            >
              Learn More About Us
            </Link>
          </div>
          <img
            src="https://thumbs.dreamstime.com/b/wedding-hall-17035049.jpg"
            alt="Smart Event Search"
            className="rounded-xl shadow-lg object-cover w-full h-100"
          />
        </section>

        {/* Events Section */}
        <section>
          <EventCards />
        </section>

        {/* Highlights Section */}
        <section className="mt-24 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <img
            src="https://cdn0.weddingwire.com/vendor/371610/3_2/640/png/wedding-2_51_16173-170473476698522.jpeg"
            alt="Event Highlights"
            className="rounded-xl shadow-lg object-cover w-full h-80"
          />
          <div>
            <h3 className="text-3xl font-bold text-[#d5a351] mb-4">
              Connecting Moments
            </h3>
            <p className="text-gray-800 leading-relaxed">
              From concerts to conferences, EventSphere matches you with events
              that align with your passions, enabling connection and community
              through shared experiences.
            </p>
          </div>
        </section>

        {/* Smart Discovery */}
        <section className="mt-20 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-[#d5a351] mb-4">
              Smart Discovery
            </h3>
            <p className="text-gray-800 leading-relaxed">
              With curated recommendations and live notifications, EventSphere
              helps you stay ahead and informed about every opportunity near and
              far.
            </p>
          </div>
          <img
            src="https://panel.eventsbooking.pk/Content/Images/ETG8.jpg"
            alt="Smart Event Search"
            className="rounded-xl shadow-lg object-cover w-full h-80"
          />
        </section>
      </div>

      {/* Testimonials */}
      <section className="mt-20 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ image, feedback, name }, index) => {
            const isOrange = index === 1;
            const bgColor = isOrange ? "#d5a351" : "#1E2939";
            const textColor = "text-white";
            const borderColor = isOrange ? "#d5a351" : "#1E2939";

            return (
              <div
                key={index}
                className="relative shadow-xl rounded-lg px-6 pt-16 pb-6 text-center"
                style={{ backgroundColor: bgColor }}
              >
                {/* Circle Image */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-white border-4"
                    style={{ borderColor }}
                  >
                    <img
                      src={image}
                      alt={name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Feedback */}
                <p className="mt-4 text-sm leading-relaxed mb-6 italic text-gray-200">
                  {feedback}
                </p>

                {/* Name */}
                <h3 className={`text-lg font-bold ${textColor}`}>{name}</h3>

                {/* Stars */}
                <div className="mt-2 flex justify-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-[#d5a351] text-white mt-0">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience the Best Events?
        </h2>
        <p className="mb-6">
          Join EventSphere and never miss out on exciting opportunities!
        </p>
        <Link
          to="/signup"
          className="bg-white text-[#e88c0e] px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
