"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Testimonial = React.forwardRef(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col justify-between rounded-2xl border border-black/10 bg-background p-6 min-h-[350px] transition-all hover:shadow-lg dark:hover:shadow-primary/10 md:p-8",
          className
        )}
        {...props}
      >
        {/* Decorative quote mark */}
        <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
          "
        </div>

        {/* Rating stars */}
        {rating > 0 && (
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={18}
                className={cn(
                  index < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
        )}

        {/* Testimonial text */}
        <p className="flex-1 text-pretty text-base text-muted-foreground">
          {testimonial}
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 mt-6">
          {image && (
            <Avatar>
              <AvatarImage src={image} alt={name} height={48} width={48} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex flex-col">
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {role} {company && `@ ${company}`}
            </p>
          </div>
        </div>
      </div>
    )
  }
)

Testimonial.displayName = "Testimonial"

export { Testimonial }
