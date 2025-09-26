"use client";

import * as React from "react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  CheckCircle2,
  Star,
  Calendar as CalendarIcon,
  Gem,
  Leaf,
  Heart,
  Compass,
  HeartCrack,
  Clock,
  Briefcase,
} from "lucide-react";
import HighlightsCarousel from "./Highlight-Carousel";
import BookingCalendar from "./BookingCalander";
import BookingCard from "./BookingCard";

export default function ExperienceSection() {
  const [date, setDate] = React.useState(new Date());
  const carouselImages = [
    "https://ik.imagekit.io/swaycloth991/Project1/highlight-1.png",
    "https://ik.imagekit.io/swaycloth991/Project1/highlight-2.png",
    "https://ik.imagekit.io/swaycloth991/Project1/highlight-1.png",
    "https://ik.imagekit.io/swaycloth991/Project1/highlight-2.png",
  ];

  return (
    <section className="w-full bg-[#F8F8F7] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-12">
          {/* ===== Top Content ===== */}   
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience a Day with a Balinese Family
            </h1>
            <p className="text-muted-foreground mb-6">
                Slow down. Watch the light move across the rice fields. Learn how to make coconut oil the way it’s been done for generations. This is Bali with soul — the part you don’t find in guidebooks.
            </p>
            <p className="text-muted-foreground mb-6">
            How can I connect with locals without it feeling forced or touristy?
            
            You spend a day with Tiwi and her family. You help make offerings, walk their land, cook lunch together, and share stories. No performance. Just presence.
            </p>

            <h2 className="font-semibold text-3xl mb-5">What's Include</h2>
            <div className="grid sm:grid-cols-1 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Gem className="text-[#F48712] w-5 h-5" />
                <span>Walk through the rice fields with Tiwi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-[#F48712] w-5 h-5" />
                <span> Learn how to make offerings & coconut oil</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-[#F48712] w-5 h-5" />
                <span>Cook & enjoy an authentic Balinese lunch</span>
              </div>
              <div className="flex items-center gap-3">
                <Compass className="text-[#F48712] w-5 h-5" />
                <span> Option to stay overnight in the family home</span>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Badge className="bg-[#384B40] font-normal px-3 py-2 rounded-3xl"><MapPin /> Village near Ubud</Badge>
              <Badge className="bg-[#384B40] font-normal px-3 py-2 rounded-3xl"><Clock /> 9am - 12am</Badge>
              <Badge className="bg-[#384B40] font-normal px-3 py-2 rounded-3xl"><Briefcase /> Private</Badge>
            </div>
          </div> 

          <Separator className="border-dotted" />

          {/* ===== Experience Card with Carousel ===== */}
          <HighlightsCarousel />

          {/* ===== Additional Content ===== */}
          <div className="space-y-4">
          <h2 className="font-semibold text-3xl mb-5">Discover Local Culture with a Balinese Family (Tiwi)</h2>
            <div className="grid sm:grid-cols-1 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Gem className="text-[#F48712] w-5 h-5" />
                <span>Walk through the rice fields with Tiwi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-[#F48712] w-5 h-5" />
                <span> Learn how to make offerings & coconut oil</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-[#F48712] w-5 h-5" />
                <span>Cook & enjoy an authentic Balinese lunch</span>
              </div>
              <div className="flex items-center gap-3">
                <Compass className="text-[#F48712] w-5 h-5" />
                <span> Option to stay overnight in the family home</span>
              </div>
              <div className="flex items-center gap-3">
                <Compass className="text-[#F48712] w-5 h-5" />
                <span> The host speaks french and english</span>
              </div>
            </div>
            <p className="py-10 underline">Shows Details</p>
          </div>
          

          {/* ===== Calendar ===== */}
          <div className="mt-4">
            <BookingCalendar />
          </div>

          

          {/* ===== Accordion Section ===== */}
          <div className="mt-2">
          <h2 className="text-3xl font-semibold mt-8">Additional Information</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Where will we meet?</AccordionTrigger>
                <AccordionContent>
                <div className="w-full h-64 mt-4 rounded-xl overflow-hidden mb-5">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.234979304588!2d-122.40141168468265!3d37.79361497975656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d6f9e5e9%3A0x95e0b85bdf3f0c37!2sGoogle!5e0!3m2!1sen!2sus!4v1679425141525!5m2!1sen!2sus"
                width="450px"
                height="100%"
                className="border rounded-md"
                loading="lazy"
              ></iframe>
            </div>

                <div className="flex-row gap-5">
                <p className="font-normal"><span className="text-gray-500">Pickup & Drop-off Location:</span> Your hotel or villa within Ubud, Canggu, Seminyak, or Sanur areas</p>
                 <p className="font-normal"><span className="text-gray-500">Pickup Time:</span> 7:30 AM – We’ll confirm the exact time based on your location</p>
                 <p className="font-normal"><span className="text-gray-500">Drop-off Time:</span> Around 4:30 PM (depending on traffic and group pace)</p>
                 <p className="font-normal"><span className="text-gray-500"> Private Transfers: </span> Clean, air-conditioned vehicle with a friendly local driver</p>
                </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Start and Ends</AccordionTrigger>
                <AccordionContent>
                 Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                 Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Suitability / Accessibility</AccordionTrigger>
                <AccordionContent>
                Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Cancellation and other policies</AccordionTrigger>
                <AccordionContent>
                Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What to Pack?</AccordionTrigger>
                <AccordionContent>
                Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum Lorem Impusm Lorem Ipsum
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Right Column - Sticky Form */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <BookingCard />
          </div>
        </div>
      </div>
      <style jsx>{`
        /* simple keyframes for horizontal scroll effect */
        @keyframes scrollX {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollX {
          animation: scrollX 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
