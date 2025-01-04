import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/HeroImg.png"
          alt="Modern furniture showcase"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute right-0 top-1/2 w-full -translate-y-1/2 md:w-[600px]">
        <div className="mx-4 rounded-sm bg-[#FFF9F3]/95 p-8 md:mx-8 md:p-12">
          <div className="space-y-6">
            <span className="text-sm font-medium uppercase tracking-wider text-gray-600">
              New Arrival
            </span>
            <h1 className="text-4xl font-bold text-[#B88E2F] md:text-5xl lg:text-6xl">
              Discover Our New Collection
            </h1>
            <p className="text-base text-gray-600 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <Button 
              className="bg-[#B88E2F] px-8 py-6 text-base hover:bg-[#B88E2F]/90"
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

