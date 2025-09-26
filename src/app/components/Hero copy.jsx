"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { MapPin, Clock, Users, Plane, Compass, X } from "lucide-react";

// Small utility for conditional classes
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ====== HERO COMPONENT WITH BENTO GRID + TEXT + SEARCH ======
const Hero = ({ bentoImages }) => {
  return (
    <section className="w-full bg-background">
      {/* ===== 1️⃣ BENTO GRID ===== */}
      <InteractiveImageBentoGallery
        imageItems={bentoImages}
        title="Discover Amazing Tours"
        description="Explore breathtaking destinations with our exclusive tour packages."
      />

      {/* ===== 2️⃣ CENTER TEXT ===== */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Your Journey Begins Here
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find the perfect trip for your next adventure. From cultural escapes to
          thrilling expeditions, we have something for everyone.
        </p>
      </div>

      {/* ===== 3️⃣ TOUR SEARCH ===== */}
      <div className="container mx-auto px-4 pb-20">
        <div className="w-full rounded-xl bg-card shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Search for Your Perfect Tour
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Location */}
            <SearchItem icon={<MapPin className="text-orange-500" size={20} />} label="Location">
              <input
                type="text"
                placeholder="Enter location"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </SearchItem>

            {/* Duration */}
            <SearchItem icon={<Clock className="text-orange-500" size={20} />} label="Duration">
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Any</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>8+ Days</option>
              </select>
            </SearchItem>

            {/* Escapees */}
            <SearchItem icon={<Users className="text-orange-500" size={20} />} label="Escapees">
              <input
                type="number"
                min="1"
                placeholder="No. of people"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </SearchItem>

            {/* Type of Trip */}
            <SearchItem icon={<Plane className="text-orange-500" size={20} />} label="Type of Trip">
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select</option>
                <option>Adventure</option>
                <option>Leisure</option>
                <option>Pilgrimage</option>
              </select>
            </SearchItem>

            {/* Category */}
            <SearchItem icon={<Compass className="text-orange-500" size={20} />} label="Category">
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select</option>
                <option>Domestic</option>
                <option>International</option>
                <option>Special Tours</option>
              </select>
            </SearchItem>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-8">
            <button className="rounded-md bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition">
              Search Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ====== SEARCH ITEM SUBCOMPONENT ======
const SearchItem = ({ icon, label, children }) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="font-medium text-foreground">{label}</span>
    </div>
    {children}
  </div>
);

// ====== BENTO GALLERY COMPONENT ======
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ImageModal = ({ item, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="relative w-full max-w-4xl p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={item.url}
        alt={item.title}
        className="h-auto max-h-[90vh] w-full rounded-lg object-contain"
      />
    </motion.div>
    <button
      onClick={onClose}
      className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white"
      aria-label="Close image view"
    >
      <X size={24} />
    </button>
  </motion.div>
);

const InteractiveImageBentoGallery = ({ imageItems, title, description }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const calculateConstraints = () => {
      if (gridRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gridWidth = gridRef.current.scrollWidth;
        const newConstraint = Math.min(0, containerWidth - gridWidth - 32);
        setDragConstraint(newConstraint);
      }
    };
    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, [imageItems]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

  return (
    <section ref={targetRef} className="relative w-full overflow-hidden bg-primary py-16 sm:py-24">
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      </motion.div>

      <div ref={containerRef} className="relative mt-12 w-full cursor-grab active:cursor-grabbing">
        <motion.div
          className="w-max"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.05}
        >
          <motion.div
            ref={gridRef}
            className="grid auto-cols-[minmax(15rem,1fr)] grid-flow-col gap-4 px-4 md:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {imageItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={cn(
                  "group relative flex h-full min-h-[15rem] w-full min-w-[15rem] cursor-pointer items-end overflow-hidden rounded-xl border bg-card p-4 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg",
                  item.span
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedItem(item)}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
