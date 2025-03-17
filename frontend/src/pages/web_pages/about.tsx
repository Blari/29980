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
  FeaturesDesigns,
  HeroDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

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
      name: 'Comprehensive Course Management',
      description:
        'Effortlessly create, organize, and manage courses with detailed syllabi and integrated assessment tools. Enhance the learning experience with ease.',
      icon: 'mdiBookOpenPageVariant',
    },
    {
      name: 'Advanced Student Analytics',
      description:
        'Gain insights into student engagement and performance with powerful analytics. Make informed decisions to improve educational outcomes.',
      icon: 'mdiChartLine',
    },
    {
      name: 'Seamless Instructor Collaboration',
      description:
        'Facilitate collaboration among instructors with shared resources and communication tools. Ensure a cohesive and effective teaching environment.',
      icon: 'mdiAccountGroup',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has revolutionized our approach to online education. The platform is intuitive and packed with features that enhance learning.',
      company: 'EduVision Corp',
      user_name: 'Jessica Thompson, Director of Education',
    },
    {
      text: 'Our instructors love the seamless integration of resources and communication tools. ${projectName} makes teaching more effective and enjoyable.',
      company: 'Learning Innovators',
      user_name: 'Mark Johnson, Lead Instructor',
    },
    {
      text: 'The analytics provided by ${projectName} are invaluable. We can track student progress and make data-driven decisions to improve outcomes.',
      company: 'Future Scholars Institute',
      user_name: 'Emily Carter, Data Analyst',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Bright Minds Academy',
      user_name: 'David Lee, IT Support Specialist',
    },
    {
      text: 'Our students have responded positively to the interactive elements and easy access to course materials. ${projectName} truly enhances the learning experience.',
      company: 'Global Learning Solutions',
      user_name: 'Sarah Brown, Student Coordinator',
    },
    {
      text: "Implementing ${projectName} was a game-changer for us. The platform's features and user-friendly interface have made managing courses a breeze.",
      company: 'Innovative Education Group',
      user_name: 'Michael Smith, Program Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, values, and the innovative features that make us a leader in online education.`}
        />
      </Head>
      <WebSiteHeader projectName={'test4'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test4'}
          image={['Team brainstorming in modern office']}
          mainText={`Unveiling the Story of ${projectName}`}
          subTitle={`Discover the journey and vision behind ${projectName}. Learn how we are transforming online education with innovative solutions and a commitment to excellence.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'test4'}
          image={['Diverse team collaborating creatively']}
          mainText={`The Heartbeat of ${projectName}`}
          subTitle={`At ${projectName}, our mission is to revolutionize online education. We are driven by innovation, passion, and a commitment to empowering learners and educators worldwide.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'test4'}
          image={['Interactive dashboard with analytics']}
          withBg={0}
          features={features_points}
          mainText={`Innovative Features of ${projectName}`}
          subTitle={`Explore the cutting-edge features that make ${projectName} a leader in online education. Designed to enhance learning and streamline management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test4'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Users `}
        />
      </main>
      <WebSiteFooter projectName={'test4'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
