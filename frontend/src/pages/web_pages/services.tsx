import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

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
      name: 'Dynamic Course Creation',
      description:
        'Easily design and manage courses with our intuitive tools. Customize syllabi, integrate multimedia resources, and streamline assessments for an engaging learning experience.',
      icon: 'mdiBookEditOutline',
    },
    {
      name: 'Real-Time Student Analytics',
      description:
        'Gain valuable insights into student performance and engagement. Use data-driven reports to tailor educational strategies and improve learning outcomes.',
      icon: 'mdiChartBar',
    },
    {
      name: 'Collaborative Instructor Tools',
      description:
        'Facilitate seamless collaboration among instructors with shared resources and communication tools. Enhance teaching effectiveness and foster a supportive educational environment.',
      icon: 'mdiAccountGroupOutline',
    },
    {
      name: 'Secure Enrollment Management',
      description:
        'Efficiently manage student enrollments with secure payment processing and course assignment features. Ensure a smooth and organized registration process.',
      icon: 'mdiLockCheck',
    },
    {
      name: 'Interactive Discussion Boards',
      description:
        'Encourage student and instructor interaction through integrated discussion boards. Foster a collaborative learning community and enhance communication.',
      icon: 'mdiForumOutline',
    },
    {
      name: 'Comprehensive Resource Library',
      description:
        'Access a vast library of educational resources and materials. Support diverse learning needs and enrich the educational experience for all users.',
      icon: 'mdiLibraryBooks',
    },
  ];

  const testimonials = [
    {
      text: "${projectName} has transformed our educational approach. The platform's features are intuitive and have significantly improved our course management.",
      company: 'EduTech Solutions',
      user_name: 'Anna Roberts, Education Director',
    },
    {
      text: 'The analytics provided by ${projectName} are a game-changer. We can now make informed decisions to enhance student learning outcomes.',
      company: 'Learning Innovations Inc.',
      user_name: 'James Carter, Data Analyst',
    },
    {
      text: 'Our instructors love the collaborative tools offered by ${projectName}. It has made teaching more effective and engaging for everyone involved.',
      company: 'Future Educators Group',
      user_name: 'Laura Smith, Lead Instructor',
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
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Discover the range of services offered by ${projectName} to enhance your online education experience. From course management to analytics, we provide comprehensive solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'test4'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test4'}
          image={['Diverse team discussing strategies']}
          mainText={`Unlock the Power of ${projectName} Services`}
          subTitle={`Explore the comprehensive services offered by ${projectName} to elevate your online education experience. From seamless course management to insightful analytics, we provide the tools you need to succeed.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Discover Our Services`}
        />

        <FeaturesSection
          projectName={'test4'}
          image={['Dashboard showcasing key features']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Services and Features`}
          subTitle={`Discover the innovative features of ${projectName} designed to enhance your online education experience. From course management to analytics, we have you covered.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'test4'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test4'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
