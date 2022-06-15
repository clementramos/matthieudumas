import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"


const callouts = [
    {
      name: 'Image 1',
      description: 'Court texte descriptif',
      imageSrc: '/image1.webp',
      imageAlt: 'Court texte descriptif',
      href: '/image1.webp',
    },
    {
      name: 'Image 2',
      description: 'Court texte descriptif',
      imageSrc: '/image2.webp',
      imageAlt: 'Court texte descriptif',
      href: '/image2.webp',
    },
    {
      name: 'Image 3',
      description: 'Court texte descriptif',
      imageSrc: '/image3.webp',
      imageAlt: 'Court texte descriptif',
      href: '/image3.webp',
    },
  ]
  
  export default function Carousel() {
    return (
      <motion.div
      className="bg-white pb-auto md:justify-start md:space-x-10 h-full px-4 sm:px-6 dark:bg-orange-500"
      layoutId="mainDiv">
      <div>
        <div className="max-w-7xl mx-auto ">
          <div className="max-w-2xl mx-auto py-16 sm:py-36 lg:pt-6 lg:max-w-none border-b-2 border-gray-200 pb-4">
            <h2 className="text-2xl font-extrabold text-gray-900">« Là où se posent tes pieds, commence le voyage » Lao Tseu
    </h2>
            <div className="mt-9 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1  lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      className="w-full h-full object-center object-cover"
                      layoutId="img"
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    )
  }