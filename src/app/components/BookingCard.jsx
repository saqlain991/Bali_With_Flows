  "use client";

  import * as React from "react";
  import { Card, CardContent } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Calendar } from "@/components/ui/calendar";
  import { Input } from "@/components/ui/input";
  import { ArrowRight, Star, CalendarIcon } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { format } from "date-fns";

  export default function BookingCard() {
    const [date, setDate] = React.useState(undefined);
    const [time, setTime] = React.useState("");

    return (
      <Card
        className="w-full h-[480px] max-w-sm mx-auto rounded-xl shadow-md bg-[#FAF1E6] p-6
                  border-r-4 border-b-4 border-r-orange-400 border-b-orange-400"
      >
        <CardContent className="space-y-4 p-0">
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 stroke-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-black font-medium">4.9 (120)</span>
          </div>

          {/* Price */}
          <p className="text-xl font-semibold text-[#1F3B2C]">
            From IDR 150,000.00/ <span className="font-normal">Person</span>
          </p>

          {/* Show Prices Link */}
          <Popover>
          <PopoverTrigger asChild>
            <button className="text-sm text-gray-600 underline cursor-pointer">Show Prices</button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-4">
            <p className="text-sm font-medium text-gray-800">Price Details:</p>
            <ul className="mt-2 space-y-1 text-gray-700 text-sm">
              <li>IDR 150,000 - Adult</li>
              <li>IDR 100,000 - Child</li>
              <li>IDR 50,000 - Infants</li>
            </ul>
          </PopoverContent>
        </Popover>

          {/* Form Fields */}
          <div className="space-y-3">
            {/* Guests */}
            <Select>
              <SelectTrigger className="w-full bg-white h-[60px]">
                <SelectValue placeholder="Guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
              </SelectContent>
            </Select>

            {/* Date & Time Picker */}
            <div className="flex flex-col gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-between bg-white text-left font-normal h-[60px]",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span>Date and Time</span>
                    )}
                    <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="p-0 w-auto"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              
            </div>

            {/* Add-ons */}
            <Select>
              <SelectTrigger className="w-full bg-white h-[60px]">
                <SelectValue placeholder="Select Add ons" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No Add-ons</SelectItem>
                <SelectItem value="guide">Local Guide</SelectItem>
                <SelectItem value="meal">Meal Included</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Button */}
          <div className="pt-2 flex">
            <Button
              className="w-40 gap-2 bg-[#1F3B2C] hover:bg-[#1b3326] text-left text-white rounded-xl cursor-pointer"
              variant="default"
            >
              Reserve for free <ArrowRight />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
