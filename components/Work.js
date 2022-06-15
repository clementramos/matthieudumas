import React from "react";
import Image from "next/image"
const features = [
    { name: 'Massage', description: 'Sint labore cupidatat dolore do.' },
    { name: 'Détente', description: 'Sint labore cupidatat dolore do.' },
    { name: 'Lumière rouge', description: 'Sint labore cupidatat dolore do.' },
    { name: 'Réeducation', description: 'Sint labore cupidatat dolore do.' },
    { name: 'Hypnose', description: 'Sint labore cupidatat dolore do.' },
    { name: 'Psychologie', description: 'Sint labore cupidatat dolore do.' },
  ]
  
  export default function Work() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2 border-b-2 border-gray-200 pb-4 ">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Mon travail</h2>
            <p className="mt-4 text-gray-500">
               Sint labore cupidatat dolore do. Qui magna consequat aliquip ea est fugiat Lorem laboris incididunt sunt. Mollit aute labore sint consectetur fugiat aliquip commodo. Est esse ea sunt pariatur occaecat id voluptate nostrud dolor do amet. Eu enim enim fugiat pariatur laboris quis sint ipsum ut cillum. Veniam et minim nostrud dolor aute commodo Lorem do esse consequat Lorem. Culpa irure labore veniam ut eiusmod laboris est incididunt fugiat.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src="/detente.jpg"
              alt=""
              className="bg-gray-100 rounded-lg"
              width="500"
              height="500"
            />
            <Image
              src="/detente.jpg"
              alt=""
              className="bg-gray-100 rounded-lg"
              width="500"
              height="500"
            />
            <Image
            src="/detente.jpg"
            alt=""
            className="bg-gray-100 rounded-lg"
            width="500"
            height="500"
          />
          <Image
          src="/detente.jpg"
          alt=""
          className="bg-gray-100 rounded-lg"
          width="500"
          height="500"
          />
          <Image
          src="/detente.jpg"
          alt=""
          className="bg-gray-100 rounded-lg"
          width="500"
          height="500"
          />
          <Image
          src="/detente.jpg"
          alt=""
          className="bg-gray-100 rounded-lg"
          width="500"
          height="500"
          />
          </div>
        </div>
      </div>
    )
  }