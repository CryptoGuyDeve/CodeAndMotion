'use client'

import React, { useState } from 'react';
import Container from "../../components/global/container";
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import Icons from '@/components/global/icons';
import Navbar from '@/components/marketing/navbar';
import Footer from '@/components/marketing/footer';
import Image from 'next/image';
import Modal from '@/components/ui/modal';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Head from 'next/head';

// --- Typewriter Effect ---
const useTypewriter = (words: string[], speed = 80, pause = 1200) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  React.useEffect(() => {
    if (index >= words.length) return;
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setDisplayed(words[index].slice(0, subIndex + (deleting ? -1 : 1)));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  return displayed;
};

// --- Project Data ---
const webProjects = [
  {
    title: "Sword.lol - Bio Link Platform",
    description: "A modern, lightning-fast bio link and file hosting platform for creators. Features custom bio links, analytics, premium layouts, and secure file hosting. Built for performance and scalability.",
    image: "/images/swardlol.PNG",
    alt: "Sword.lol Bio Link Platform",
    tags: ["Next.js", "Fullstack", "Link in Bio", "SaaS", "Analytics"],
    link: "https://www.sward.lol/"
  },
  {
    title: "Fashion Store",
    description: "A modern fashion items listing site built with React.js and optimized for conversions.",
    image: "/images/website1.jpg",
    alt: "Fashion Website",
    tags: ["React.js", "E-commerce", "UI/UX"],
    link: "#"
  },
  {
    title: "Design Lab",
    description: "A dynamic site for a designing company with an interactive portfolio and contact forms.",
    image: "/images/website2.png",
    alt: "Design Lab",
    tags: ["Next.js", "Portfolio", "Contact Forms"],
    link: "#"
  },
  {
    title: "Personal Portfolio",
    description: "A dynamic site for a person with an interactive portfolio and contact forms.",
    image: "/images/website3.jpg",
    alt: "UI/UX Designer Portfolio",
    tags: ["Portfolio", "UI/UX", "Responsive"],
    link: "#"
  },
  {
    title: "Web Dev Tool",
    description: "A dynamic site for a web development tool with an interactive interface.",
    image: "/images/website4.png",
    alt: "Web Dev Tool Web",
    tags: ["Web App", "Tools", "Interactive"],
    link: "#"
  }
];

const designProjects = [
  { title: "1", image: "/portfolio/1.jpg", alt: "Social Media Graphics" },
  { title: "2", image: "/portfolio/profilepicture.jpg", alt: "Profile Picture" },
  { title: "3", image: "/portfolio/2.png", alt: "Logo Design" },
  { title: "4", image: "/portfolio/3.png", alt: "Thumbnail 1" },
  { title: "5", image: "/portfolio/4.jpg", alt: "Thumbnail 12" },
  { title: "6", image: "/portfolio/5.jpg", alt: "Banner Design" },
  { title: "7", image: "/portfolio/6.png", alt: "3D Reel Thumbnail" },
];

const videoProjects = [
  { title: "Short: Fast Cuts 1", video: "https://www.youtube.com/embed/8758zt_f1dI" },
  { title: "Short: Fast Cuts 2", video: "https://www.youtube.com/embed/QfMcP8JV6-A" },
  { title: "Short: Fast Cuts 3", video: "https://www.youtube.com/embed/0miuCkbWXrw" },
  { title: "Short: Fast Cuts 4", video: "https://www.youtube.com/embed/PeuLR5xO06U" },
  { title: "Showreel 2024", video: "https://www.youtube.com/embed/42xC5rTNeU0" },
  { title: "Epic Edit", video: "https://www.youtube.com/embed/s5BFxouPR8Q" },
];

function Portfolio() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalLabel, setModalLabel] = useState<string>('');

  // Typewriter
  const typewriter = useTypewriter([
    'Websites.',
    'Designs.',
    'Videos.',
    'Experiences.'
  ]);

  // Handlers
  const openImageModal = (src: string, alt: string) => {
    setModalContent(
      <div className="flex flex-col items-center">
        <Image src={src} alt={alt} width={800} height={600} className="rounded-xl max-h-[70vh] object-contain" loading="lazy" />
        <span className="mt-2 text-gray-200 text-center text-sm">{alt}</span>
      </div>
    );
    setModalLabel(alt);
    setModalOpen(true);
  };
  const openVideoModal = (src: string, title: string) => {
    setModalContent(
      <div className="w-full aspect-video max-w-2xl mx-auto">
        <iframe
          className="w-full h-full rounded-xl"
          src={src}
          title={title}
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <span className="mt-2 text-gray-200 text-center text-sm block">{title}</span>
      </div>
    );
    setModalLabel(title);
    setModalOpen(true);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
    })
  };
  const cardHover = {
    rest: { scale: 1, boxShadow: '0 4px 32px 0 rgba(0,0,0,0.15)' },
    hover: { scale: 1.04, boxShadow: '0 8px 48px 0 rgba(0,0,0,0.25)' }
  };

  return (
    <>
      <Head>
        <title>Portfolio | CodeAndMotion</title>
        <meta name="description" content="Explore our portfolio of web development, graphic design, and video editing projects. Modern, mobile-optimized, and SEO-friendly digital solutions for brands and creators." />
        <link rel="canonical" href="https://yourdomain.com/portfolio" />
        <meta property="og:title" content="Portfolio | CodeAndMotion" />
        <meta property="og:description" content="Explore our portfolio of web development, graphic design, and video editing projects. Modern, mobile-optimized, and SEO-friendly digital solutions for brands and creators." />
        <meta property="og:url" content="https://yourdomain.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/portfolio/thumbnail1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | CodeAndMotion" />
        <meta name="twitter:description" content="Explore our portfolio of web development, graphic design, and video editing projects. Modern, mobile-optimized, and SEO-friendly digital solutions for brands and creators." />
        <meta name="twitter:image" content="https://yourdomain.com/portfolio/thumbnail1.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'CodeAndMotion Portfolio',
          url: 'https://yourdomain.com/portfolio',
          description: 'Explore our portfolio of web development, graphic design, and video editing projects. Modern, mobile-optimized, and SEO-friendly digital solutions for brands and creators.',
          sameAs: [
            'https://yourdomain.com',
            'https://yourdomain.com/contactus',
            'https://yourdomain.com/team',
          ],
        }) }} />
      </Head>
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-background to-gray-950 overflow-x-hidden">
        <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md shadow-md">
      <Navbar />
        </div>
        <main className="flex-1 flex flex-col items-center justify-center w-full py-8 sm:py-16 px-2 sm:px-4">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 -z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.2 }}
              className="absolute top-[-20%] left-[-20%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-60"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute bottom-[-20%] right-[-20%] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] bg-gradient-to-br from-pink-500 via-yellow-500 to-blue-500 rounded-full blur-3xl opacity-50"
          />
        </div>
        {/* Hero Section */}
        <motion.section
            className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0 relative z-10 mb-8 sm:mb-12 px-2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.button
            className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto mb-2 bg-white/10 backdrop-blur-md border border-white/20"
            whileTap={{ scale: 0.95 }}
          >
              <span className="z-10 py-0.5 text-xs sm:text-sm text-neutral-100 flex items-center">
                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[8px] sm:text-[9px] font-medium mr-2 text-white">
                    NEW
                  </span>
                  CHECK OUR UPDATED PORTFOLIO
                </span>
          </motion.button>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center !leading-tight max-w-2xl sm:max-w-4xl mx-auto animate-fade-in flex flex-col items-center justify-center gap-2">
            <span className="flex flex-row flex-wrap items-center justify-center gap-2">
              Check <span className="text-blue-500 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Our</span>
                <span className="inline-block min-w-[120px] sm:min-w-[220px] whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 font-extrabold">
                {typewriter}|
              </span>
            </span>
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-2">Portfolio</span>
          </h1>
            <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground max-w-xs sm:max-w-3xl mx-auto animate-fade-in delay-100">
                  Whether you're looking for a custom website, stunning designs, or impactful video editing, we're here to help. Let's start your project today!
              <br />
              <a href="/contactus" className="underline text-blue-400 hover:text-blue-300 transition-colors">Contact Us</a> or <a href="/team" className="underline text-blue-400 hover:text-blue-300 transition-colors">Meet the Team</a>.
                </p>
        </motion.section>
            {/* Web Development Portfolio */}
          <section className="mt-4 sm:mt-8 w-full max-w-2xl sm:max-w-6xl px-0 sm:px-4 animate-fade-in-up" aria-labelledby="web-dev-heading">
            <h2 id="web-dev-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Web Development Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {webProjects.map((project, index) => (
              <motion.article
                key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 sm:p-6 rounded-2xl shadow-xl group relative overflow-hidden flex flex-col cursor-pointer hover:ring-2 hover:ring-blue-500/60 transition-all"
                tabIndex={0}
                aria-label={project.title}
                onClick={() => openImageModal(project.image, project.title)}
                onKeyDown={e => { if (e.key === 'Enter') openImageModal(project.image, project.title); }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
              >
                  <motion.div className="relative w-full h-40 sm:h-56 mb-2 sm:mb-4 rounded-lg overflow-hidden" whileHover={{ scale: 1.03 }}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors text-xs sm:text-base"
                        onClick={e => e.stopPropagation()}
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </motion.div>
                  <h3 className="text-base sm:text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-300 mb-2 flex-1 text-xs sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-800/60 text-blue-200 text-[10px] sm:text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Icons.circle1 className="w-2 h-2 animate-pulse" /> {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
                ))}
              </div>
            </section>
        {/* Graphic Designing Portfolio */}
          <section className="mt-10 sm:mt-20 w-full max-w-2xl sm:max-w-6xl px-0 sm:px-4 animate-fade-in-up" aria-labelledby="design-heading">
            <h2 id="design-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Graphic Designing Projects</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-6">
            {designProjects.map((project, index) => (
              <motion.figure
                key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 p-2 sm:p-3 rounded-xl shadow-lg flex flex-col items-center group relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500/60 transition-all"
                tabIndex={0}
                aria-label={project.title}
                onClick={() => openImageModal(project.image, project.title)}
                onKeyDown={e => { if (e.key === 'Enter') openImageModal(project.image, project.title); }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
              >
                  <motion.div className="relative w-full h-24 sm:h-40 mb-1 sm:mb-2 rounded-md overflow-hidden" whileHover={{ scale: 1.03 }}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 20vw, 10vw"
                    loading="lazy"
                  />
                </motion.div>
                  <figcaption className="text-[10px] sm:text-sm text-gray-200 text-center mt-1">{project.title}</figcaption>
              </motion.figure>
                ))}
              </div>
            </section>
            {/* Video Editing Portfolio */}
          <section className="mt-10 sm:mt-20 w-full max-w-2xl sm:max-w-6xl px-0 sm:px-4 animate-fade-in-up" aria-labelledby="video-heading">
            <h2 id="video-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Video Editing Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {videoProjects.map((project, index) => (
              <motion.article
                key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 sm:p-6 rounded-2xl shadow-xl flex flex-col cursor-pointer hover:ring-2 hover:ring-blue-500/60 transition-all"
                tabIndex={0}
                aria-label={project.title}
                onClick={() => openVideoModal(project.video, project.title)}
                onKeyDown={e => { if (e.key === 'Enter') openVideoModal(project.video, project.title); }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
              >
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">{project.title}</h3>
                  <motion.div className="relative w-full h-40 sm:h-56 rounded-md overflow-hidden" whileHover={{ scale: 1.03 }}>
                    <iframe
                    className="w-full h-full rounded-md"
                      src={project.video}
                      title={project.title}
                      frameBorder="0"
                      allowFullScreen
                    loading="lazy"
                    ></iframe>
                </motion.div>
              </motion.article>
                ))}
              </div>
            </section>
      </main>
      <Footer />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} ariaLabel={modalLabel}>
          <div className="max-w-xs sm:max-w-2xl w-full">
        {modalContent}
          </div>
      </Modal>
    </div>
    </>
  );
}

export default Portfolio;
