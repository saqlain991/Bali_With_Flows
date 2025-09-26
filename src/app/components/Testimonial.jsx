"use client";

import { useState } from "react";
import { Testimonial } from "@/components/ui/testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Amazun",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
    testimonial:
      "This library has completely transformed how we build our UI components. The attention to detail and smooth animations make our application stand out. Highly recommended!",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Software Engineer",
    company: "Goggle",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=john",
    testimonial:
      "The components are well documented and easy to customize. The code quality is top-notch and the support is excellent. I'm very happy with my purchase.",
  },
  { 
    id: 3,
    name: "Emily Chen",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial:
      "The accessibility features and design system consistency are impressive. It's saved us countless hours in development time.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Amazun",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
    testimonial:
      "This library has completely transformed how we build our UI components. The attention to detail and smooth animations make our application stand out. Highly recommended!",
  },
  {
    id: 5,
    name: "John Doe",
    role: "Software Engineer",
    company: "Goggle",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=john",
    testimonial:
      "The components are well documented and easy to customize. The code quality is top-notch and the support is excellent. I'm very happy with my purchase.",
  },
  {
    id: 6,
    name: "Emily Chen",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial:
      "The accessibility features and design system consistency are impressive. It's saved us countless hours in development time.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF3E5]">
      {/* Header + Paragraph */}
        <div className="mb-8 px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 ">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Trusted by product teams and developers around the world. 
            Here’s what they think about our components.
          </p>
        </div>

      {/* Carousel */}
      <div className="overflow-hidden w-full px-8">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons Below Left */}
        <div className="mt-6 flex justify-start gap-4">
          <button
            onClick={prevTestimonial}
            className="flex items-center gap-2 px-4 py-2  text-white rounded-lg  transition"
          >
            <Image src="/arrow-left.png" width={80} height={80} className="cursor-pointer" alt="arrow-image" />
          </button>
          <button
            onClick={nextTestimonial}
            className="flex items-center gap-2 px-4 py-2  text-white rounded-lg  transition"
          >
            <Image src="/arrow-right.png" width={80} height={80} className="cursor-pointer"  alt="arrow-image"/>
          </button>
        </div>
      </div>
    </section>
  );
}
