import Link from "next/link";
import Image from "next/image";
import shopImg from '../../../public/Images/Banner.png';


interface ShopHeroProps {
  title: string; // The title to display (e.g., "Shop")
  location: string; // The location text to display in the breadcrumb (e.g., "Shop")
}

export default function ComponentLocation({ title, location }: ShopHeroProps) {
  return (
    <div>
      <div className="relative h-[300px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src={shopImg}
          alt="Shop background"
          fill
          style={{ objectFit: 'cover' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2">

          {/* Title */}
          <h1 className="text-4xl font-bold text-black">{title}</h1>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-black">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-zinc-700">{location}</span>
          </nav>
        </div>
      </div>
    </div>
  );
}
