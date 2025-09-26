"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";

export default function HighlightsCarousel() {
  const carouselItems = [
    {
      image: "/highlight-1.png",
      text: "Balinese Day with a local family",
    },
    {
      image: "/highlight-2.png",
      text: "Visit a local temple",
    },
    {
      image: "/highlight-1.png",
      text: "Balinese Day with a local family",
    },
    {
      image: "/highlight-2.png",
      text: "Visit a local temple",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const total = carouselItems.length;

  const prev = () => setCurrentIndex((currentIndex - 1 + total) % total);
  const next = () => setCurrentIndex((currentIndex + 1) % total);

  // Get the 3 items to show in a loop
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(carouselItems[(currentIndex + i) % total]);
    }
    return items;
  };

  return (
    <div className="w-full">
      {/* Header with navigation buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Experience Highlights</h2>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={prev}>
            <MoveLeft color="#384B40" />
          </Button>
          <Button size="sm" variant="ghost" onClick={next}>
            <MoveRight color="#384B40"/>
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden w-full">
        <div className="flex flex-nowrap">
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2" // padding controls gap
            >
              <Image
                src={item.image}
                alt={`highlight-${index}`}
                width={300}
                height={300} // increased height
                className="rounded-xl object-cover w-full h-64 md:h-72 lg:h-80"
              />
              <p className="mt-2 text-base font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
