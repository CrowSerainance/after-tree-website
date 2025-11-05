import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Leaf, Clock, X } from "lucide-react";

// Using local paths for assets
const LOGO_SRC = "/logo.png";

// Gallery images - cakes, frappes, and kakigori
const GALLERY_IMAGES = [
  "/gallery/img5.jpg",
  "/gallery/img8.jpg",
  "/gallery/img11.jpg",
  "/gallery/img14.jpg",
  "/gallery/img17.jpg",
  "/gallery/img21.jpg",
  "/gallery/img24.jpg",
  "/gallery/img56.jpg",
];

export default function AfterTreeSite() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-[#E8F0E6] text-[#223327]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#E8F0E6]/70 border-b border-[#dfe7df]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_SRC}
              alt="After Tree logo"
              className="h-10 w-auto object-contain hidden sm:block"
              onError={(e) => ((e.currentTarget.style.display = "none"))}
            />
            <span className="font-semibold tracking-wide text-xl sm:text-2xl">After Tree</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#menu" className="hover:opacity-80">Menu</a>
            <a href="#gallery" className="hover:opacity-80">Gallery</a>
            <a href="#visit" className="hover:opacity-80">Visit</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl bg-[#2E4C3A] hover:bg-[#284233]">Order Pickup</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF2E9] to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Desserts under the canopy</h1>
            <p className="text-[#3a5646] text-lg max-w-prose">
              A light, leafy sanctuary for egg tarts, chiffon cakes, matcha things, and refreshingly simple drinks. 
              Thoughtfully made. Best enjoyed with shade and good company.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#menu">
                <Button className="rounded-2xl bg-[#2E4C3A] hover:bg-[#284233]">See Menu Highlights</Button>
              </a>
              <a href="#gallery">
                <Button variant="secondary" className="rounded-2xl border border-[#cfe1cf] bg-white hover:bg-[#f2f6f2]">
                  View Gallery
                </Button>
              </a>
            </div>
            <ul className="flex flex-wrap gap-4 text-sm text-[#3a5646]">
              <li className="flex items-center gap-2"><Leaf className="h-4 w-4"/> light & greenery theme</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4"/> baked fresh daily</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-[#EAF2E9] shadow-sm grid place-items-center p-6">
              <img src={LOGO_SRC} alt="After Tree mark" className="max-h-52 w-auto object-contain" />
            </div>
            <div className="absolute -z-10 -top-6 -right-6 h-28 w-28 rounded-full bg-[#dfeee0]"/>
            <div className="absolute -z-10 -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#e7f3e6]"/>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-[#dbe7db]">
            <CardHeader>
              <CardTitle className="text-[#2E4C3A]">Gentle flavors</CardTitle>
            </CardHeader>
            <CardContent className="text-[#3a5646]">Balanced sweetness, soft textures, and ingredients that don't fight your tastebuds. Your palate can relax here.</CardContent>
          </Card>
          <Card className="rounded-2xl border-[#dbe7db]">
            <CardHeader>
              <CardTitle className="text-[#2E4C3A]">Leafy calm</CardTitle>
            </CardHeader>
            <CardContent className="text-[#3a5646]">Light wood, quiet greens, and sun-through-leaves lighting. The kind of vibe that makes time slow down.</CardContent>
          </Card>
          <Card className="rounded-2xl border-[#dbe7db]">
            <CardHeader>
              <CardTitle className="text-[#2E4C3A]">Made daily</CardTitle>
            </CardHeader>
            <CardContent className="text-[#3a5646]">We bake in small batches so the counter looks inviting instead of overwhelming. Fresh beats flashy.</CardContent>
          </Card>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="bg-[#F2F7F1] border-y border-[#e1ebdf]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold">Menu Highlights</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Egg Tarts", note: "buttery shell • silky custard" },
              { title: "Refreshing Drinks", note: "iced tea • fruit coolers" },
              { title: "Matcha", note: "earthy and creamy options" },
              { title: "Toasts", note: "thick-cut with sweet spreads" },
              { title: "You Tiao", note: "lightly crisp, perfect for dipping" },
              { title: "Cakes", note: "chiffon-forward, simple & airy" },
            ].map((i, idx) => (
              <Card key={idx} className="rounded-2xl border-[#dbe7db] hover:shadow-sm transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#2E4C3A]">{i.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-[#3a5646]">{i.note}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">Menu</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((imgSrc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-sm border border-[#dbe7db] aspect-[4/3] bg-[#EAF2E9] cursor-pointer"
              onClick={() => openModal(imgSrc)}
            >
              <img 
                src={imgSrc} 
                alt={`After Tree dessert ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="After Tree dessert"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </section>

      {/* Visit */}
      <section id="visit" className="bg-[#F2F7F1] border-t border-[#e1ebdf]">
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Visit Us</h2>
            <p className="text-[#3a5646]">We're tucked beneath a generous tree. Sit by the window, let the leaves do their soft shadow thing, and try the egg tart first.</p>
            <ul className="space-y-2 text-[#2E4C3A]">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> 123 Greenway, Quiet District</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> (000) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@aftertree.cafe</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4"/> Daily 10:00–21:00</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#dbe7db] bg-white shadow-sm">
            {/* Placeholder map embed */}
            <div className="aspect-[4/3] grid place-items-center text-[#3a5646]">Map placeholder</div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-white border border-[#dbe7db] p-6 sm:p-8 shadow-sm grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Keep it breezy</h3>
            <p className="text-[#3a5646]">No spam, just seasonal desserts and quiet openings.</p>
          </div>
          <form className="flex gap-3" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
          }}>
            <Input type="email" placeholder="Email address" className="bg-[#F7F9F6] border-[#d7e4d7]"/>
            <Button className="rounded-2xl bg-[#2E4C3A] hover:bg-[#284233]">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e1ebdf]">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[#3a5646] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} After Tree Dessert Cafe</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="underline hover:opacity-80">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
