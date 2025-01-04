import Image from "next/image"
import BrowseImage1 from '../../../public/Images/BrowseImage1.png'
import BrowseImage2 from '../../../public/Images/BrowseImage2.png'
import BrowseImage3 from '../../../public/Images/BrowseImage3.png'

const categories = [
  {
    name: "Dining",
    image: BrowseImage1,
    alt: "Dining room furniture showcase"
  },
  {
    name: "Living",
    image: BrowseImage2,
    alt: "Living room furniture showcase"
  },
  {
    name: "Bedroom",
    image: BrowseImage3,
    alt: "Bedroom furniture showcase"
  }
]

export default function BrowseTheRange() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 md:text-4xl">
            Browse The Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

