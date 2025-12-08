"use client";
import React, { useRef, useState } from "react";

export default function DesignPage() {
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [open, setOpen] = useState(null);

  const cards = [
    {
      id: 0,
      title: "kick-off",
      description:
        "The first meeting of the client and the design team that sets the course for a smooth project collaboration.",
      outputs: ["project scope and timeline", "planning", "discovery workshops"],
    },
    {
      id: 1,
      title: "research",
      description: "We learn who the users are and what they need.",
      outputs: [
        "user personas",
        "user journeys & flows",
        "journey mapping",
        "interviews & surveys",
        "competitive analysis",
      ],
    },
    {
      id: 2,
      title: "ideation",
      description: "Think outside the box and generate creative solutions.",
      outputs: ["low-fi designs", "wireframes", "sketches", "prototypes"],
    },
    {
      id: 3,
      title: "testing",
      description: "Validate solutions with real users to refine improvements.",
      outputs: ["user testing", "A/B experiments", "feedback reports"],
    },
    {
      id: 4,
      title: "refinement",
      description: "Improve the design based on user feedback and testing.",
      outputs: ["final UI designs", "polished components"],
    },
    {
      id: 5,
      title: "handoff",
      description: "Deliver complete assets and documentation to developers.",
      outputs: ["design system", "dev-ready files", "documentation"],
    },
  ];

  const strategizeData = [
    {
      id: 1,
      title: "Product discovery",
      description:
        "Product discovery helps understand user needs, define the right problem, and ensure the solution is meaningful before development begins.",
      image: "/images/product-discovery.jpg",
    },
    {
      id: 2,
      title: "Proof of concept design",
      description:
        "A PoC design validates whether an idea is viable before investing in full development.",
      image: "/images/poc.jpg",
    },
    {
      id: 3,
      title: "MVP Design",
      description:
        "MVP design focuses on building the smallest lovable product to validate early-market fit.",
      image: "/images/mvp.jpg",
    },
    {
      id: 4,
      title: "UX/UI Design",
      description:
        "Crafting user-centered interfaces that balance aesthetics with usability.",
      image: "/images/ux-ui.jpg",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
      setActiveCard((prev) => Math.max(prev - 1, 0));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
      setActiveCard((prev) => Math.min(prev + 1, cards.length - 1));
    }
  };

  return (
    <div className="min-h-screen bg-black p-10 mt-[100px]">
      {/* HEADER + ARROWS */}
      <div className="flex items-start justify-between pr-10">
        <h2 className="text-5xl text-white max-w-2xl leading-relaxed mt-[120px] ml-[100px]">
          Our design process <span className="text-blue-600">is tailored</span>
          <br />
          to your needs and goals
        </h2>

        <div className="flex gap-4 mt-[200px]">
          <button
            onClick={scrollLeft}
            className="text-white text-3xl bg-white/10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-600 transition-colors duration-500"
          >
            ‹
          </button>

          <button
            onClick={scrollRight}
            className="text-white text-3xl bg-white/10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-600 transition-colors duration-500"
          >
            ›
          </button>
        </div>
      </div>

      {/* HORIZONTAL SCROLL WRAPPER WITHOUT SCROLLBAR */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth mt-20 px-10 hide-scrollbar"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`min-w-[400px] p-6 rounded-xl border border-neutral-800 text-white transition-colors duration-500 ${
              activeCard === index ? "bg-blue-600" : "bg-neutral-900"
            }`}
          >
            <p className="text-sm font-semibold opacity-70">
              {String(card.id + 1).padStart(2, "0")}
            </p>
            <h2 className="text-2xl font-semibold mt-1 mb-4">{card.title}</h2>
            <p className="text-base leading-relaxed opacity-90">{card.description}</p>
            <h3 className="text-lg font-semibold mt-6 mb-2">outputs</h3>
            <ul className="space-y-1 opacity-90">
              {card.outputs.map((output, idx) => (
                <li key={idx} className="list-disc ml-5">
                  {output}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     <div className="w-full text-white font-sans mt-[120px] px-[100px]">
  {/* HEADER TEXT */}
  <h2 className="text-5xl max-w-3xl leading-relaxed mb-12">
    We know the <span className="text-blue-600">obstacles you face</span>,
    <br />
    so we’re here for both rapid <br /> solutions and long-term <br /> partnership
  </h2>

  {/* ROW WRAPPER */}
  <div className="grid grid-cols-12 gap-6 py-10 border-b border-neutral-800">
    {/* LEFT COLUMN */}
    <div className="col-span-3 flex flex-col gap-2">
      <p className="text-xl opacity-70">01</p>
      <h2 className="text-2xl font-semibold">Strategize</h2>
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-span-9 flex flex-col">
      {strategizeData.map((item) => (
        <div key={item.id} className="border-b border-neutral-800 py-4">
          {/* Toggle Button */}
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex justify-between items-center text-left group"
          >
            <span className="text-lg">{item.title}</span>
            <span
              className={`text-blue-500 text-xl transition-transform ${
                open === item.id ? "rotate-90" : "group-hover:translate-x-1"
              }`}
            >
              →
            </span>
          </button>

          {/* Expanded Content */}
          {open === item.id && (
            <div className="mt-4 space-y-4">
              <p className="text-neutral-400 leading-relaxed">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg border border-neutral-800"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

      {/* HIDE SCROLLBAR STYLE */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}
