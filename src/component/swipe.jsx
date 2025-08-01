import React from "react"

import  CardSwipe from "@/component/ui/cardswipe"

const CardSwipeDemo = () => {
  const images = [
    { src: "/dashboard.jpg", alt: "Image 1" },
    { src: "/dashboard.jpg", alt: "Image 2" },
    { src: "/dashboard.jpg", alt: "Image 3" },
  ]

  return (
    <div className="w-full flex justify-center">
      <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
    </div>
  )
}

export default CardSwipeDemo
