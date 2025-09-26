"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card } from "@/components/ui/card"

export default function BookingCalendar() {
  const [date, setDate] = React.useState(new Date())
  const [timeSlot, setTimeSlot] = React.useState("")

  const timeSlots = [
    "9 AM - 12 PM",
    "12 PM - 3 PM",
    "3 PM - 6 PM",
    "6 PM - 9 PM",
  ]

  return (
    <div className="mt-8 space-y-6">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Next Available Dates</h2>
    
        <div className="p-6 space-y-6">
            {/* Calendar */}
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border border-border p-2 bg-background"
          classNames={{
            month_caption: "ms-2.5 me-20 justify-start",
            nav: "justify-end",
          }}
        />

        {/* Selected Date Heading */}
        {date && (
          <div className="text-left">
            <h3 className="text-lg font-medium text-foreground">
              Selected: {format(date, "dd MMMM yyyy")}
            </h3>
            {timeSlot && (
              <p className="text-sm text-muted-foreground mt-1">
                Time Slot: {timeSlot}
              </p>
            )}
          </div>
        )}

        {/* Time Slot Selector */}
        <div className="flex flex-col items-left">
          {/* <p className="text-sm font-medium mb-3">Choose a Time Slot</p> */}
          <ToggleGroup
            type="single"
            value={timeSlot}
            onValueChange={setTimeSlot}
            className="flex flex-wrap justify-center gap-3"
          >
            {timeSlots.map((slot) => (
              <ToggleGroupItem
                key={slot}
                value={slot}
                aria-label={slot}
                className="px-4 py-2 rounded-2xl border shadow-sm data-[state=on]:bg-orange-500 data-[state=on]:text-white hover:bg-orange-100 transition-colors"
              >
                {slot}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        </div>
      
    </div>
  )
}
