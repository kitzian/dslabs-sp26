"use client";

import { useState } from "react";

type Section = "home" | "interests" | "contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[linear-gradient(to_top,rgba(0,0,0,0.753),rgba(0,0,0,0.753)),url('https://cozmofps.carrd.co/assets/images/bg.gif')] bg-cover bg-center">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden bg-linear-[45deg] from-[#D9B2B2] to-[#96A9EB] to-[54%] sm:p-11 p-8 transition-all duration-300 ease-out">
        {/* Navigation Buttons */}
        <nav className="flex flex-col sm:flex-row justify-center gap-2">
          {[
            { id: "home" as Section, label: "Home" },
            { id: "interests" as Section, label: "Interests" },
            { id: "contact" as Section, label: "Contact Info" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="w-full sm:w-auto px-4 py-1.5 rounded-lg text-sm font-normal bg-black text-white cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div>
          {/* Home Section */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              activeSection === "home" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div
                key={activeSection === "home" ? "home-active" : "home-inactive"}
                className={activeSection === "home" ? "animate-zoomIn" : ""}
              >
                {/* Student Badge */}
                <div className="flex justify-center my-3">
                  <span className="text-lg font-bold text-black">
                    Student He/Him
                  </span>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 mb-8 px-7">
                  {/* Left Column - Profile */}
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image Placeholder */}
                    <div className="w-23 h-23 rounded-full overflow-hidden">
                      <img
                        src="https://cozmofps.carrd.co/assets/images/image02.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h1 className="text-sm text-black font-bold mt-1">
                      Hello I’m Cozmo! :3
                    </h1>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-0.5">
                      <a
                        href="https://steamcommunity.com/id/CozmoFPS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Steam"
                      >
                        <img
                          src="/steam-svgrepo-com.svg"
                          alt="Steam"
                          className="w-5 h-5"
                        />
                      </a>
                      <a
                        href="https://soundcloud.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="SoundCloud"
                      >
                        <img
                          src="/soundcloud-svgrepo-com.svg"
                          alt="SoundCloud"
                          className="w-5 h-5"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/@CozmoFPS"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="YouTube"
                      >
                        <img
                          src="/youtube-168-svgrepo-com.svg"
                          alt="YouTube"
                          className="w-5 h-5"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Right Column - About */}
                  <div className="flex flex-col items-center">
                    <h2 className="text-lg font-bold text-black flex items-center gap-2">
                      About
                    </h2>
                    <div className="text-black text-sm font-semibold space-y-4">
                      <p className="text-center">
                        Hello! I’m a silly little “music producer” based in
                        California!! I’m not very good at what I do but I have a
                        lot of fun doing it
                      </p>
                      <p className="text-center">
                        Thank you for reading! Feel free to look around :3
                      </p>
                    </div>
                  </div>
                </div>

                {/* YouTube Video */}
                <div className="rounded-2xl overflow-hidden bg-black/30 aspect-video mx-18 mb-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XXKVouH1cBQ?rel=0&loop=0&controls=1&cc_load_policy=0&autoplay=0"
                    allowFullScreen
                    title="Featured Video"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              activeSection === "interests"
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div
                key={
                  activeSection === "interests"
                    ? "interests-active"
                    : "interests-inactive"
                }
                className={
                  activeSection === "interests" ? "animate-zoomIn" : ""
                }
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Likes */}
                  <div className="p-7 rounded-2xl">
                    <p className="text-black text-center text-lg font-medium leading-5.5">
                      Likes: <br /> kemono style fursuits and art, music
                      production, listening to music, playing the guitar,
                      fabulous beasts, reading, airplanes, and cats :3
                    </p>
                  </div>

                  {/* Dislikes */}
                  <div className="p-7 rounded-2xl">
                    <p className="text-black text-center text-lg font-medium leading-5.5">
                      Dislikes: <br /> akogeno, niggers, toxic positivity, rice,
                      people who take games too seriously (ur not good dude),
                      and my flower allergies &gt;:c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              activeSection === "contact"
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div
                key={
                  activeSection === "contact"
                    ? "contact-active"
                    : "contact-inactive"
                }
                className={`text-center ${
                  activeSection === "contact" ? "animate-zoomIn" : ""
                }`}
              >
                <p className="text-black text-lg font-bold leading-5.5 mt-4">
                  Hello! You could find me on
                  <br />
                  any of these platforms! (ordered by usage)
                </p>
                <p className="text-black text-lg font-medium leading-7 my-3">
                  Instagram: CozmoFPS <br />
                  Discord: CozmoFPS <br />
                  Steam: /id/CozmoFPS <br />
                  Telegram: SharkSushii
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <span className="text-black/50 text-xs">(Made by Jews)</span>
        </footer>
      </div>
    </div>
  );
}
