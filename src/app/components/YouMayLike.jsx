"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    title: "Surf in Canggu",
    price: "From IDR 35,00,000.00/ person",
    description:
      "Wake up, grab your board and head to the beach while it's still quiet. This is your moment to catch your first wave – and do it with someone who knows...",
    image: "https://ik.imagekit.io/swaycloth991/Project1/card-img1.png",
    tags: ["Canggu", "Half Day Trip", "Private"],
  },
  {
    id: 2,
    title: "Balinese Healing in Retreat",
    price: "From IDR 60,00,000.00/ person",
    description:
      "You know that moment when you realise you've been carrying too much – in your body, your head, your heart? This is the kind of space that helps you...",
    image: "https://ik.imagekit.io/swaycloth991/Project1/card-img2.png",
    tags: ["Canggu", "Half Day Trip", "Private/Group"],
  },
  {
    id: 3,
    title: "Balinese Day with a local family",
    price: "From IDR 15,00,000.00/ person",
    description:
      "Slow down. Watch the light move across the rice fields. Learn how to make coconut oil the way it's been done for generations. This is Bali with soul...",
    image: "https://ik.imagekit.io/swaycloth991/Project1/card-img3.png",
    tags: ["Canggu", "Full Day Trip", "Private"],
  },
];

export default function YouMayAlsoLike() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Adjust cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  // Duplicate array for seamless loop
  const displayExperiences = [...experiences, ...experiences];

  return (
    <section className="py-16 px-4 md:px-12">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
        You may also like
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(displayExperiences.length * 100) / itemsPerView}%`,
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {displayExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="px-4 flex-shrink-0"
              style={{ width: `${100 / displayExperiences.length}%` }}
            >
              <div className="overflow-hidden flex flex-col h-full bg-white rounded-2xl shadow-lg">
                <div className="relative w-full h-80">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                <div className="p-4 flex flex-col gap-3 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className={`font-light rounded-2xl px-4 py-2 flex items-center gap-1 ${
                          idx === 0
                            ? "bg-[#384B40] text-white"
                            : idx === 1
                            ? "bg-[#407C59] text-white"
                            : "bg-[#FDF3E8] text-gray-800"
                        }`}
                      >
                        {idx === 0 && <MapPin size={14} />}
                        {idx === 1 && <Clock size={14} />}
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-[#407C59] font-medium">{exp.price}</p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {exp.description}
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <Link href="#">
                      <Button className="bg-[#384B40] text-white rounded-md px-6 py-2 hover:bg-[#2c3a33] cursor-pointer">
                        Book Escape
                      </Button>
                    </Link>
                    <Link href="#">
                      <button className="text-gray-700 text-sm underline cursor-pointer">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-10">
        <button onClick={prevSlide}>
          <Image src="/arrow-left.png" width={50} height={50} alt="arrow-left" />
        </button>
        <button onClick={nextSlide}>
          <Image src="/arrow-right.png" width={50} height={50} alt="arrow-right" />
        </button>
      </div>
    </section>
  );
}
