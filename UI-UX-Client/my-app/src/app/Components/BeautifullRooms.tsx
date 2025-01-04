'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const BeautifulRooms = () => {
  const mainImg = '/Images/BeautifullRooms1.png';
  const projectTitle = "50+ Beautiful rooms inspiration";
  const projectDescription = "Our designer already made a lot of beautiful prototype of rooms that inspire you";

  const carouselImages = [
    {
      number: "02",
      type: "Living Room",
      title: "Modern Space",
      image: '/Images/BeautifullRooms2.png'
    },
    {
      number: "03",
      type: "Dining Room",
      title: "Cozy Dining",
      image: '/Images/BrowseImage1.png'
    },
    {
      number: "04",
      type: "Living Area",
      title: "Perfect Balance",
      image: '/Images/BrowseImage2.png'
    },
    {
      number: "05",
      type: "Bedroom",
      title: "Natural Light",
      image: '/Images/BrowseImage3.png'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FCF8F3]">
      <div className="container px-4 md:px-6 max-w-[1440px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr,2fr]">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold text-[#3A3A3A] md:text-5xl lg:text-[52px] leading-tight">
              {projectTitle}
            </h2>
            <p className="max-w-[600px] text-[#616161] md:text-lg">
              {projectDescription}
            </p>
            <div>
              <Button 
                className="bg-[#B88E2F] px-8 py-6 text-base hover:bg-[#B88E2F]/90"
              >
                Explore More
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Image - Now First */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={mainImg}
                alt="Beautiful bedroom design"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-8 left-8 bg-white p-6">
                <div className="mb-2 text-sm text-[#616161]">
                  01 — Bed Room
                </div>
                <div className="flex items-center justify-between pr-8">
                  <h3 className="text-2xl font-semibold text-[#3A3A3A]">
                    Inner Peace
                  </h3>
                  <Button 
                    variant="ghost" 
                    className="absolute bottom-6 right-6 h-auto p-0 text-[#B88E2F] hover:bg-transparent hover:text-[#B88E2F]/90"
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>

            {/* Carousel - Now Second */}
            <div className="relative h-full">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {carouselImages.map((room) => (
                    <CarouselItem key={room.number} className="h-full">
                      <div className="relative aspect-[4/4] w-full overflow-hidden">
                        <Image
                          src={room.image}
                          alt={`${room.type} design inspiration`}
                          fill
                          className="object-cover"
                        />
                        
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 h-12 w-12 border-2 border-[#B88E2F] bg-white" />
                <CarouselNext className="absolute right-4 top-1/2 h-12 w-12 border-2 border-[#B88E2F] bg-white" />
              </Carousel>
              {/* Carousel Indicators - Centered */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === 0 ? 'bg-[#B88E2F]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautifulRooms;

