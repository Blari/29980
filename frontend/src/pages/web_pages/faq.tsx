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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} provides a comprehensive suite of features including course management, student analytics, instructor collaboration tools, and secure enrollment management. These tools are designed to enhance the online education experience for both educators and learners.',
    },
    {
      question: 'How can I manage courses with ${projectName}?',
      answer:
        'With ${projectName}, you can easily create, organize, and manage courses. Customize syllabi, integrate multimedia resources, and streamline assessments to provide an engaging learning experience.',
    },
    {
      question: 'Is there a way to track student progress?',
      answer:
        'Yes, ${projectName} offers advanced student analytics that allow you to monitor student performance and engagement. Use data-driven reports to tailor educational strategies and improve learning outcomes.',
    },
    {
      question: 'How does ${projectName} support instructor collaboration?',
      answer:
        '${projectName} facilitates seamless collaboration among instructors with shared resources and communication tools. This ensures a cohesive and effective teaching environment, enhancing the overall educational experience.',
    },
    {
      question: 'What is the pricing structure for ${projectName}?',
      answer:
        "${projectName} offers flexible pricing plans to suit different needs. Whether you're an individual educator or an institution, we have a plan that fits your requirements. Contact us for detailed pricing information.",
    },
    {
      question: 'Can I integrate ${projectName} with other tools?',
      answer:
        'Yes, ${projectName} is designed to integrate with various educational tools and platforms. This ensures a seamless experience and allows you to leverage existing resources effectively.',
    },
    {
      question: 'How do I get support if I encounter issues?',
      answer:
        "Our dedicated support team is available to assist you with any questions or issues. You can reach out to us via email or through the contact form on our website, and we'll respond promptly.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Explore our FAQ section for quick help and detailed information on our online education platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'test4'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test4'}
          image={['Person reading a FAQ document']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to common questions about ${projectName}. Get the information you need to make the most of our online education platform.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'test4'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test4'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
