"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  BarChart3,
  Tag,
  ChevronDown,
} from "lucide-react";
const img1 = "https://ik.imagekit.io/swaycloth991/Project1/img1.png";
const img2 = "https://ik.imagekit.io/swaycloth991/Project1/img2.png";
const img3 = "https://ik.imagekit.io/swaycloth991/Project1/img3.png";
const img4 = "https://ik.imagekit.io/swaycloth991/Project1/img4.png";
const img5 = "https://ik.imagekit.io/swaycloth991/Project1/img5.png";
const img6 = "https://ik.imagekit.io/swaycloth991/Project1/img6.png";
import Image from "next/image";

const HeroComponent = () => {
  const [location, setLocation] = useState("Kaleki");
  const [duration, setDuration] = useState("Morning 9-12");
  const [escapees, setEscapees] = useState("8");
  const [tripType, setTripType] = useState("Private");
  const [category, setCategory] = useState("Full day trip");

  const images = [
    {
      id: 1,
      src: img1,
      alt: "Rice field workers",
      className: "col-span-1 row-span-1",
    },
    {
      id: 2,
      src: img3,
      alt: "Balinese temple shrine",
      className: "col-span-1 row-span-2",
    },
    {
      id: 3,
      src: img4,
      alt: "Tropical landscape",
      className: "col-span-2 row-span-1",
    },
    {
      id: 4,
      src: img2,
      alt: "Traditional offerings",
      className: "col-span-1 row-span-1",
    },
    {
      id: 5,
      src: img5,
      alt: "Rice terraces",
      className: "col-span-1 row-span-1",
    },
    {
      id: 6,
      src: img6,
      alt: "Person at temple",
      className: "col-span-1 row-span-1",
    },
  ];

  const CustomSelect = ({ value, icon: Icon, placeholder }) => (
    <div className="relative">
      <div className="flex items-center space-x-3 p-4 bg-[#] backdrop-blur-sm rounded-2xl border border-black/30 hover:bg-white transition-all duration-200 cursor-pointer group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            {placeholder}
          </div>
          <div className="text-lg font-semibold text-gray-800">{value}</div>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-20 md:px-6 bg-[#FFF3E5] py-10">
      
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px] lg:h-[500px] mb-12">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`${image.className} relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0} 
              className="object-cover group-hover:scale-105 transition-transform duration-500 scale-120"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {index === images.length - 1 && (
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                View all images
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ===== Title and Description ===== */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Balinese Day with a Local
          <br />
          <span className="text-gray-700">Family</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Immerse yourself in the heart of Balinese culture by spending a day
          with a local family. This authentic experience offers a unique glimpse
          into daily life, traditions, and the warmth of Balinese hospitality.
        </p>
      </div>

      {/* ===== Booking Form ===== */}
      <div className="rounded-3xl p-8 shadow-2xl border border-black/30 bg-transparent backdrop-blur-md max-w-full mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Location */}
          <div className="flex-1 min-w-[150px] pr-4 border-r border-black/30">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </span>
            </div>
            <input
              type="text"
              placeholder="Kaleki"
              className="w-full p-4 rounded-2xl border-none bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none  "
            />
          </div>

          {/* Duration */}
          <div className="flex-1 min-w-[150px] px-4 border-r border-black/30">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </span>
            </div>
            <input
              type="text"
              placeholder="Morning 9-5"
              className="w-full p-4 rounded-2xl border-none bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none  "
            />
          </div>

          {/* Escapees */}
          <div className="flex-1 min-w-[150px] px-4 border-r border-black/30">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Escapees
              </span>
            </div>
            <input
              type="text"
              placeholder="8"
              className="w-full p-4 rounded-2xl border-none bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none  "
            />
          </div>

          {/* Type of Trip */}
          <div className="flex-1 min-w-[150px] px-4 border-r border-black/30">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type of Trip
              </span>
            </div>
            <input
              type="text"
              placeholder="Private"
              className="w-full p-4 rounded-2xl border-none bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none  "
            />
          </div>

          {/* Category */}
          <div className="flex-1 min-w-[150px] pl-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600">
                <Tag className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </span>
            </div>
            <input
              type="text"
              placeholder="Full day Trip"
              className="w-full p-4 rounded-2xl border-none bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
