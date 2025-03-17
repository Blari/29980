import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  AboutUsDesigns,
  HeroDesigns,
  ContactFormDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test4';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Course Management',
      description:
        'Easily create, edit, and organize courses with comprehensive syllabi and resource materials. Enhance learning with integrated assessment tools.',
      icon: 'mdiBookOpenPageVariant',
    },
    {
      name: 'Student Tracking',
      description:
        'Maintain a detailed database of enrolled students. Monitor their progress, manage grades, and ensure personalized learning experiences.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Instructor Profiles',
      description:
        'Manage instructor profiles with ease. Highlight qualifications, courses handled, and availability to ensure effective teaching.',
      icon: 'mdiAccountTie',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has transformed our online courses. The intuitive interface and robust features make managing classes a breeze.',
      company: 'EduTech Innovations',
      user_name: 'Alice Johnson, Head of Learning',
    },
    {
      text: 'Our students love the interactive elements and easy access to resources. ${projectName} truly enhances the learning experience.',
      company: 'Future Scholars Academy',
      user_name: 'Michael Smith, Principal',
    },
    {
      text: 'As an instructor, I appreciate the seamless integration of course materials and student tracking. ${projectName} is a game-changer.',
      company: 'Global Learning Hub',
      user_name: 'Emily Davis, Senior Instructor',
    },
    {
      text: 'The analytics feature in ${projectName} provides invaluable insights into student engagement and course effectiveness. Highly recommend!',
      company: 'Bright Minds Institute',
      user_name: 'John Lee, Data Analyst',
    },
    {
      text: "Our team has found ${projectName} to be an essential tool for managing our diverse range of courses. It's user-friendly and efficient.",
      company: 'Innovative Education Solutions',
      user_name: 'Sarah Brown, Program Director',
    },
    {
      text: 'The support team at ${projectName} is fantastic. They are always ready to help and ensure we get the most out of the platform.',
      company: 'Learning Pathways',
      user_name: 'David Wilson, IT Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Comprehensive Online Education Hub`}</title>
        <meta
          name='description'
          content={`Explore our all-in-one platform for managing courses, students, and instructors. Enhance your online education experience with our robust tools and features.`}
        />
      </Head>
      <WebSiteHeader projectName={'test4'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test4'}
          image={['Diverse students engaged in learning']}
          mainText={`Transform Learning with ${projectName} Today`}
          subTitle={`Discover a seamless online education experience with ${projectName}. Manage courses, students, and instructors effortlessly from a single platform.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Get Started Now`}
        />

        <AboutUsSection
          projectName={'test4'}
          image={['Team collaborating on innovative solutions']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are committed to revolutionizing online education. Our platform empowers educators and students to achieve their full potential through innovative tools and seamless management.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'test4'}
          image={['Interactive dashboard with analytics']}
          withBg={0}
          features={features_points}
          mainText={`Explore Key Features of ${projectName}`}
          subTitle={`Unlock the full potential of online education with ${projectName}. Discover features designed to enhance learning and streamline management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test4'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Users Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test4'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`We're here to help! Reach out to us anytime, and our team will respond promptly to assist you with any inquiries or support needs.`}
        />
      </main>
      <WebSiteFooter projectName={'test4'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
