import { Trophy, ShieldCheck, Truck, Headphones } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Trophy,
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: ShieldCheck,
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support"
    }
  ]

  return (
    <div className="bg-[#fdf6f0] min-h-44 flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 place-content-center gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center sm:justify-start sm:text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="mx-auto sm:mx-0">
                  <feature.icon className="h-12 w-12 text-gray-900" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

