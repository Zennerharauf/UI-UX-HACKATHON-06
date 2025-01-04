'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:mx-28 md:grid-cols-2 gap-16 lg:gap-20">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F9F9F9] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F9F9F9] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-600">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F9F9F9] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Working Time</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your name
              </label>
              <Input
                id="name"
                placeholder="Abc"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Abc@def.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="This is an optional"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Hi! I'd like to ask about"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 min-h-[150px]"
              />
            </div>

            <Button 
              type="submit" 
              className=" px-20 py-5 bg-[#B88E2F]  rounded-xl hover:text-white hover:bg-gray-800"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

