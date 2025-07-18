'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/global/container';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import Icons from '@/components/global/icons';
import Navbar from '@/components/marketing/navbar';

const founders = [
  {
    name: 'Faizurrehman',
    role: 'Founder & CEO',
    badge: 'Founder',
    location: 'Lahore, Pakistan',
    skills: 'Web Developer, Team Leader, Visionary',
    bio: 'Visionary founder and expert web developer from Lahore, Pakistan. Passionate about building scalable, modern web solutions, leading teams to success, and driving innovation in the digital space.',
    image: '/faizu.jpg',
    instagram: 'https://www.instagram.com/cryptoguy.officiall/',
  },
  {
    name: 'Shaaf',
    role: 'Co-Founder & CEO',
    badge: 'Co-Founder',
    location: 'Near Karachi, Sindh',
    skills: 'Video Editor, Creative Director, Storyteller',
    bio: 'Creative co-founder and video editor from near Karachi, Sindh. Specializes in storytelling through motion and visual effects for brands and creators, and brings creative vision to every project.',
    image: '/portfolio/profilepicture.jpeg',
    instagram: 'https://www.instagram.com/shaaf.hpt/',
  },
];

const videoEditors = [
  {
    name: 'Abdulrehman',
    role: 'Video Editor',
    badge: 'Video Editor',
    location: 'Pakistan',
    skills: 'Video Editing, Motion Graphics',
    bio: 'Skilled video editor with a passion for storytelling and visual effects, helping brands and creators bring their vision to life.',
    image: '/portfolio/valorantmontagethumbnail.png', // Placeholder, update if you have Abdulrehman's image
    instagram: '',
  },
  {
    name: 'Shaheer Khan',
    role: 'Video Editor',
    badge: 'Video Editor',
    location: 'Pakistan',
    skills: 'Video Editing, Creative Direction',
    bio: 'Talented video editor and creative mind, dedicated to producing high-quality content and engaging visuals.',
    image: '/shaheer.jpg',
    instagram: '',
  },
];

const values = [
  {
    icon: <Icons.circle1 className="w-8 h-8 text-blue-400" />,
    title: 'Innovation',
    desc: 'We embrace new ideas and technologies to deliver cutting-edge solutions for our clients.'
  },
  {
    icon: <Icons.circle2 className="w-8 h-8 text-purple-400" />,
    title: 'Integrity',
    desc: 'We act with honesty, transparency, and respect in all our relationships.'
  },
  {
    icon: <Icons.circle1 className="w-8 h-8 text-pink-400" />,
    title: 'Collaboration',
    desc: 'We believe in the power of teamwork and open communication to achieve great results.'
  },
  {
    icon: <Icons.circle2 className="w-8 h-8 text-yellow-400" />,
    title: 'Excellence',
    desc: 'We strive for the highest standards in everything we do, from code to client service.'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

export default function TeamPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background to-gray-950 flex flex-col items-center overflow-x-hidden">
      <Navbar />
      {/* Animated background and modern hero section */}
      <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>
      <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
        <OrbitingCircles speed={0.5} radius={300}>
          <Icons.circle1 className="size-4 text-foreground/70" />
          <Icons.circle2 className="size-1 text-foreground/80" />
        </OrbitingCircles>
        <OrbitingCircles speed={0.25} radius={400}>
          <Icons.circle2 className="size-1 text-foreground/50" />
          <Icons.circle1 className="size-4 text-foreground/60" />
          <Icons.circle2 className="size-1 text-foreground/90" />
        </OrbitingCircles>
        <OrbitingCircles speed={0.1} radius={500}>
          <Icons.circle2 className="size-1 text-foreground/50" />
          <Icons.circle2 className="size-1 text-foreground/90" />
          <Icons.circle1 className="size-4 text-foreground/60" />
          <Icons.circle2 className="size-1 text-foreground/90" />
        </OrbitingCircles>
      </Container>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center gap-y-6 bg-background/0 pt-20 pb-10 w-full relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 animate-fade-in"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Leadership
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto animate-fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Visionary founders and a passionate team dedicated to building, designing, and delivering world-class digital experiences.
        </motion.p>
      </div>
      {/* Founders Section */}
      <section className="w-full max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 z-10 pb-20">
        {founders.map((member, i) => (
          <motion.div
            key={member.name}
            className={`relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center group hover:scale-105 hover:shadow-2xl transition-all cursor-pointer overflow-hidden ring-2 ring-blue-400/60`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            whileHover={{ y: -8, boxShadow: '0 8px 48px 0 rgba(80,80,255,0.18)' }}
          >
            {/* Floating badge */}
            <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-20">
              {member.badge}
            </span>
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-400 group-hover:border-purple-400 transition-colors shadow-lg">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              {member.name}
              {member.badge === 'Founder' && (
                <Icons.circle1 className="w-3 h-3 text-blue-400 animate-pulse" />
              )}
              {member.badge === 'Co-Founder' && (
                <Icons.circle2 className="w-3 h-3 text-pink-400 animate-bounce" />
              )}
            </h2>
            <h3 className="text-blue-400 font-semibold mb-1">{member.role}</h3>
            <p className="text-xs text-gray-400 mb-1">{member.location}</p>
            <p className="text-xs text-blue-300 mb-2">{member.skills}</p>
            <p className="text-gray-300 text-base mb-4">{member.bio}</p>
            <div className="flex gap-4 justify-center mt-auto">
              {member.instagram && (
                <motion.a
                  href={member.instagram}
                  target="_blank"
                  aria-label="Instagram"
                  className="text-pink-400 hover:text-pink-300 transition-colors text-2xl"
                  whileHover={{ scale: 1.2, color: '#ec4899' }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </section>
      {/* Video Editors Section */}
      <section className="w-full max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 z-10 pb-20">
        <motion.h2
          className="col-span-full text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Video Editors
        </motion.h2>
        {videoEditors.map((member, i) => (
          <motion.div
            key={member.name}
            className={`relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center group hover:scale-105 hover:shadow-2xl transition-all cursor-pointer overflow-hidden ring-2 ring-blue-400/60`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            whileHover={{ y: -8, boxShadow: '0 8px 48px 0 rgba(80,80,255,0.18)' }}
          >
            {/* Floating badge */}
            <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-20">
              {member.badge}
            </span>
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-400 group-hover:border-purple-400 transition-colors shadow-lg">
              {member.name === 'Shaheer Khan' ? (
                <div className="w-full h-full scale-125">
                  <Image src={member.image} alt={member.name} fill className="object-cover" style={{ objectPosition: 'center' }} />
                </div>
              ) : (
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              {member.name}
              <Icons.circle1 className="w-3 h-3 text-blue-400 animate-pulse" />
            </h2>
            <h3 className="text-blue-400 font-semibold mb-1">{member.role}</h3>
            <p className="text-xs text-gray-400 mb-1">{member.location}</p>
            <p className="text-xs text-blue-300 mb-2">{member.skills}</p>
            <p className="text-gray-300 text-base mb-4">{member.bio}</p>
            <div className="flex gap-4 justify-center mt-auto">
              {member.instagram && (
                <motion.a
                  href={member.instagram}
                  target="_blank"
                  aria-label="Instagram"
                  className="text-pink-400 hover:text-pink-300 transition-colors text-2xl"
                  whileHover={{ scale: 1.2, color: '#ec4899' }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </section>
      {/* Mission Section */}
      <section className="w-full max-w-4xl px-4 py-12 flex flex-col items-center text-center gap-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          To empower brands and creators with innovative digital solutions, creative storytelling, and a relentless commitment to excellence.
        </motion.p>
      </section>
      {/* Values Section */}
      <section className="w-full max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <div>{value.icon}</div>
            <h3 className="text-xl font-bold text-white mb-1">{value.title}</h3>
            <p className="text-gray-300 text-sm">{value.desc}</p>
          </motion.div>
        ))}
      </section>
      {/* Join Us Section */}
      <section className="w-full max-w-4xl px-4 py-16 flex flex-col items-center text-center gap-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Join Us
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Want to be part of our journey? We’re always looking for talented, passionate people to join our team. <br />
          <span className="text-blue-400">Let’s build something amazing together.</span>
        </motion.p>
        <motion.a
          href="/contactus"
          className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
} 