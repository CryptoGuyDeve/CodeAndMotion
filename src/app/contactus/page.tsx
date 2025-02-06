'use client'

import React, { useState } from 'react';
import Container from "../../components/global/container";
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import Icons from '@/components/global/icons';
import { sendEmail } from "@/utils/handleSubmit";
import Footer from '@/components/marketing/footer';
import Navbar from '@/components/marketing/navbar';

type MessageType = { type: "success" | "error"; text: string };

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    service: "Web Development",
    budget: "What is your budget?",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<MessageType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = (await sendEmail(formData)) as MessageType;

      if (response.type === "success" || response.type === "error") {
        setMessage(response);
      } else {
        setMessage({ type: "error", text: "Unexpected response from server" });
      }

      if (response.type === "success") {
        setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
          service: "Web Development",
          budget: "What is your budget?",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    }

    setLoading(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Navbar />
      <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>
      <div className="flex flex-col items-center justify-center gap-y-8 relative">
        <h1>
          <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
            <OrbitingCircles
              speed={0.5}
              radius={300}
            >
              <Icons.circle1 className="size-4 text-foreground/70" />
              <Icons.circle2 className="size-1 text-foreground/80" />
            </OrbitingCircles>
            <OrbitingCircles
              speed={0.25}
              radius={400}
            >
              <Icons.circle2 className="size-1 text-foreground/50" />
              <Icons.circle1 className="size-4 text-foreground/60" />
              <Icons.circle2 className="size-1 text-foreground/90" />
            </OrbitingCircles>
            <OrbitingCircles
              speed={0.1}
              radius={500}
            >
              <Icons.circle2 className="size-1 text-foreground/50" />
              <Icons.circle2 className="size-1 text-foreground/90" />
              <Icons.circle1 className="size-4 text-foreground/60" />
              <Icons.circle2 className="size-1 text-foreground/90" />
            </OrbitingCircles>
          </Container>

          <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
            <Container className="relative hidden lg:block overflow-hidden">
              <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                <span>
                  <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                  <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[9px] font-medium mr-2 text-white">
                    NEW
                  </span>
                  Explore the 2025 recap
                </span>
              </button>
            </Container>
            <Container delay={0.15}>
              <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                 Get in Touch with Us{" "}
                <span className="">
                  and Transform Your Ideas{" "}
                </span>
                Digital Innovation.
                <p className="mt-4 text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto">
                  Whether you're looking for a custom website, stunning designs, or impactful video editing, we're here to help. Let's start your project today!
                </p>
              </h1>
            </Container>
          </div>
        </h1>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 mt-12 px-6 sm:px-8 md:px-12 text-white w-full max-w-2xl">
        {message && (
          <div className={`mb-4 p-4 rounded-lg ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full bg-neutral-800 p-8 rounded-lg shadow-lg">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg" />
          <input type="text" name="number" value={formData.number} onChange={handleChange} required placeholder="Phone Number" className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg" />
          <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Message" className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg h-32"></textarea>

          <select name="service" value={formData.service} onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg">
            <option value="Web Development">Web Development</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Graphic Designing">Graphic Designing</option>
          </select>

          <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg" />

          <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-all" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
