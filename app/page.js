"use client";
import ChatbotBubble from "@/components/ChatbotBubble";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bath,
  BedDouble,
  Car,
  Clock,
  Coffee,
  DollarSign,
  Footprints,
  MapPin,
  Percent,
  Pool,
  SquareFoot,
  Tree,
  TrendingUp,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { LuPalmtree } from "react-icons/lu";
import { MdPool } from "react-icons/md";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryImages = [
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/Mansions%20beach%20view.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:638",
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/Mansions%20community.jpg/:/rs=w:1280,h:635",
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/Mansion%20at%20night.jpg/:/rs=w:1280,h:624",
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/Nad%20Al%20Sheba%20Garden%20LS%2005.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:720",
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/Nad%20Al%20Sheba%20Garden%20LS%2007.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:720",
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/Acres%208%20Serene%20Blue%20lagoon%20and%20bridge%20with%20fau.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:716",
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/Acres%204.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:719",
    "https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/7%20bed%20mansion%20ivory%20bathroom.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:592",
  ];

  const headerOpacity = Math.min(scrollY / 200, 0.8);
  const blurIntensity = Math.min(scrollY / 10, 20);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
          backdropFilter: `blur(${blurIntensity}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity}px)`,
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Dubai Luxury Homes
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mt-20 mx-auto px-4 py-8">
        <AnimatePresence>
          {isVisible && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="relative h-[60vh] rounded-xl overflow-hidden">
                <img
                  src="https://img1.wsimg.com/isteam/ip/bb499dcd-c955-4071-9732-6f67a2a48985/5%20bed%20mansion%20amber.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:947"
                  alt="Luxury Villa in Palm Jumeirah"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                >
                  <h2 className="text-4xl font-bold text-white mb-2">
                    Luxury Villa in Palm Jumeirah
                  </h2>
                  <p className="text-xl text-gray-200 flex items-center">
                    <MapPin className="mr-2" /> Palm Jumeirah, Dubai, UAE
                  </p>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="relative group overflow-hidden rounded-lg w-full h-48">
                          <img
                            src={image}
                            alt={`Property Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">
                              View
                            </span>
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <div className="relative">
                          <img
                            src={image}
                            alt={`Property Image ${index + 1}`}
                            className="w-full h-auto"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => setSelectedImage(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-4">Property Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: BedDouble, text: "5 Bedrooms" },
                  { icon: Bath, text: "6 Bathrooms" },
                  { icon: Footprints, text: "10,000 sq ft" },
                  { icon: Car, text: "4 Parking Spaces" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card>
                      <CardContent className="flex items-center p-4">
                        <item.icon className="mr-2" />
                        <span>{item.text}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience luxury living at its finest in this exquisite villa
                located in the prestigious Palm Jumeirah. This stunning property
                offers breathtaking views of the Arabian Gulf and the Dubai
                skyline. With its modern architecture, high-end finishes, and
                world-class amenities, this villa is the epitome of Dubai's
                luxurious lifestyle.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: MdPool, text: "Private Pool" },
                  { icon: Wifi, text: "High-speed Internet" },
                  { icon: LuPalmtree, text: "Landscaped Garden" },
                  { icon: Coffee, text: "Smart Home System" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="mr-2" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-4">Nearby Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Burj Al Arab",
                    distance: "12 km",
                    time: "20 minutes by car",
                    image:
                      "https://bynder.onthebeach.co.uk/cdn-cgi/image/width=1400,quality=70,fit=cover,format=auto/m/4fc952d6c9a011b3/original/Burj-al-Arab.jpg",
                  },
                  {
                    name: "Dubai Mall",
                    distance: "15 km",
                    time: "25 minutes by car",
                    image:
                      "https://media.istockphoto.com/id/1269123939/photo/dubai-mall-main-entrance-with-burj-khalifa-in-rising-in-the-background.jpg?s=612x612&w=0&k=20&c=dUvtoXLbNDC2IDoIFqMjqch-s3yTumveHmEv8hHrtmM=",
                  },
                  {
                    name: "Atlantis, The Palm",
                    distance: "3 km",
                    time: "7 minutes by car",
                    image:
                      "https://d363suj4pdptk4.cloudfront.net/externalApps/d28a0c14-8260-4d8d-8715-b88c10e4df59/conversion/WS-PropertyGalleryHuge/assets/50810?q=80",
                  },
                  {
                    name: "Dubai Marina",
                    distance: "8 km",
                    time: "15 minutes by car",
                    image:
                      "https://www.imtilak.net/uploads/posts/e9dc478fb4904742c3a14c30cf80399djja737.jpg",
                  },
                ].map((location, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card>
                      <CardContent className="p-4">
                        <img
                          src={location.image}
                          alt={location.name}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-lg font-semibold mb-2">
                          {location.name}
                        </h4>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <MapPin className="w-4 h-4 mr-1" />{" "}
                          {location.distance}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" /> {location.time}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-4">Location</h3>
              <div className="h-64 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                {/* Replace this div with an actual map component */}
                <div className="h-full  flex items-center justify-center">
                  <img
                    src="https://apiv3-ae.zaahib.com/listing_picture/6/6/7/4/9/9/5/15647454336/pic/Villa_For_Sale_Dubai_Dubai_.jpg"
                    alt="map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.section>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold mb-4">AED 75,000,000</h3>
                  <p className="text-gray-600 mb-6">
                    Luxury Villa in Palm Jumeirah
                  </p>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" type="email" />
                    <Input placeholder="Your Phone" type="tel" />
                    <Textarea placeholder="Your Message" rows={4} />
                    <Button className="bg-gray-800 w-full">
                      Request Information
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Investment Highlights
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                      <span>5% annual property value appreciation</span>
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-blue-500" />
                      <span>Potential rental yield: 4-6% per annum</span>
                    </li>
                    <li className="flex items-center">
                      <Percent className="w-5 h-5 mr-2 text-purple-500" />
                      <span>0% property tax in Dubai</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Financial Details
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Price per sq ft:</span>
                      <span className="font-semibold">AED 7,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Service charges:</span>
                      <span className="font-semibold">AED 15 per sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Transfer fee:</span>
                      <span className="font-semibold">
                        4% of property value
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Registration fee:</span>
                      <span className="font-semibold">AED 4,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <ChatbotBubble />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Dubai Luxury Homes</h4>
              <p className="text-gray-400">
                Bringing you the finest properties in Dubai.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">123 Palm Jumeirah, Dubai, UAE</p>
              <p className="text-gray-400">Phone: +971 4 123 4567</p>
              <p className="text-gray-400">Email: info@dubailuxuryhomes.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
