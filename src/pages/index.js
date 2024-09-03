'use client'

import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrupal } from '@fortawesome/free-brands-svg-icons'
import {
  faCloudArrowDown,
  faGrid2Plus,
  faCommentCheck,
} from '@fortawesome/pro-solid-svg-icons'
import { faUniversalAccess } from '@fortawesome/pro-regular-svg-icons'
import TokenIcon from '@mui/icons-material/Token'
import Image from 'next/image'
import ReactPlayer from 'react-player/lazy'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ComponentLibrary from '@/components/icons/ComponentLibrary'
import builtWithEmulsifyImage from '../images/BuiltwithEmulsifyStamp.png'
import consistencyImage from '../images/home-consistency.jpg'
import talkingDrupal from '../images/talking_drupal_logo.png'
import togetherImage from '../images/home-together.jpg'
import waveImage from '../images/wave.png'
import WTILogo from '../images/built-with-emulsify/WTILogo.svg'
import aftLogo from '../images/built-with-emulsify/American_Federation_of_Teachers_logo.svg'
import colombiaLogo from '../images/built-with-emulsify/colombia.svg'
import coopeLogo from '../images/built-with-emulsify/coope.svg'
import drexelLogo from '../images/built-with-emulsify/drexel.svg'
import fhaoLogo from '../images/built-with-emulsify/fhao.svg'
import ithacaLogo from '../images/built-with-emulsify/ithaca.svg'
import ncnLogo from '../images/built-with-emulsify/ncn.svg'
import oregonZoo from '../images/built-with-emulsify/oregon-zoo-logo.svg'
import stanfordLogo from '../images/built-with-emulsify/stanford.svg'
import smithCollege from '../images/built-with-emulsify/smith-college.svg'
import tlhLogo from '../images/built-with-emulsify/tlh.svg'
import yaleInfoSecLogo from '../images/built-with-emulsify/yale-information-security.svg'
import yaleSchwarzmanLogo from '../images/built-with-emulsify/yale-schwarzman-center.svg'
import yalesom from '../images/built-with-emulsify/yalesom.svg'
import uft from '../images/built-with-emulsify/uft.svg'
import homeHero from '../images/home-hero.png'

function Hero() {
  return (
    <section
      className={classNames(
        'bg-gradient-to-b from-emulsifyBlue-900 to-violet-900',
        'text-white',
        'overflow-hidden px-5',
        'relative -top-[88px] -mb-[100px] md:-top-[100px]',
        'wave-hero',
      )}
    >
      <div className="mx-auto max-w-8xl py-32 pt-60 sm:px-2 lg:px-8 xl:px-12">
        <Image
          src={homeHero}
          alt=""
          className="absolute right-[-50px] top-[20%] hidden w-[38%] max-w-[621px] xl:block"
        />
        <div>
          <h1 className="mb-5 max-w-[800px] font-sans text-4xl font-black leading-none md:text-6xl lg:mb-10 lg:text-8xl">
            Build Beautiful Design Systems with Ease
          </h1>
          <p className="mb-8 max-w-[700px] text-xl font-semibold md:text-2xl lg:text-3xl">
            Emulsify is an open-source toolset that helps designers and
            developers create design systems for your Drupal website.
          </p>
          <Link
            href="/docs/emulsify-drupal"
            className={classNames(
              'inline-block rounded-lg',
              'bg-violet-600 text-xl font-bold text-white',
              'transition-all hover:bg-violet-700',
              'px-6 py-3',
            )}
          >
            Install Drupal theme{' '}
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              className="ml-3 text-violet-200"
            />
          </Link>
          <p className="mt-2">
            <Link
              href="/docs/emulsify-drupal#standalone-for-prototyping-outside-of-a-drupal-install"
              className="underline"
            >
              Standalone installation
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

function DesignSystemsTogether() {
  const content = {
    title:
      'Make and implement design systems in Drupal <em className="font-normal">together</em>',
    tryptch: [
      {
        icon: (
          <ComponentLibrary className="mb-5 h-[48px] text-5xl text-orange-500" />
        ),
        title: 'Develop a component-based product experience',
        body: 'A component-based product experience allows for greater efficiency and improved quality in the design and development process.',
      },
      {
        icon: (
          <FontAwesomeIcon
            icon={faDrupal}
            className="mb-5 text-5xl text-orange-500"
          />
        ),
        title: 'Create a fully customized Drupal theme from scratch',
        body: 'Creating from scratch allows you to tailor your design system to your specific needs. This is useful when you have strict branding guidelines or must create a unique user experience.',
      },
      {
        icon: (
          <div className="text-5xl">
            <TokenIcon className="mb-5 text-orange-500" fontSize="inherit" />
          </div>
        ),
        title: 'Use the shared language of design tokens',
        body: 'Improve efficiency and quality in the design and development process for designers and developers, making collaboration easier and more effective.',
      },
    ],
  }
  return (
    <section
      className={classNames(
        'bg-gradient-to-b from-emulsifyBlue-900 to-violet-900',
        'bg-cover text-white',
        'px-5',
      )}
      style={{ backgroundImage: `url("${togetherImage.src}")` }}
    >
      <div className="mx-auto max-w-8xl py-16 sm:px-2 md:py-32 lg:px-8 xl:px-12">
        <h2
          className={classNames(
            'font-width-75 text-4xl font-black md:text-7xl',
            'mb-20 max-w-4xl md:mb-40',
          )}
        >
          Make and implement design systems in Drupal{' '}
          <em className="squiggle relative">together</em>
        </h2>
        <ul className="flex flex-col gap-9 md:grid md:grid-cols-3 md:gap-14">
          {content.tryptch.map((item) => (
            <li key={item.title}>
              {item.icon}
              <h2
                className={classNames(
                  'font-width-75 mb-5 text-3xl font-extrabold leading-none text-orange-200 lg:text-4xl',
                )}
              >
                {item.title}
              </h2>
              <p className={classNames('text-lg font-medium ')}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function BuiltWithEmulsify() {
  const logoWall = [
    {
      src: aftLogo,
      alt: 'American Federation of Teachers',
      class: 'col-span-1',
      url: 'https://www.aft.org/',
    },
    {
      src: colombiaLogo,
      alt: 'Colombia University',
      class: 'col-span-2 md:col-span-3',
      url: 'https://sps.columbia.edu',
    },
    {
      src: coopeLogo,
      alt: 'Coope',
      class: 'col-span-2',
      url: 'https://www.coopeande1.com/',
    },
    {
      src: drexelLogo,
      alt: 'Drexel University',
      class: 'col-span-2',
      url: 'https://lebow.drexel.edu/',
    },
    {
      src: fhaoLogo,
      alt: 'Florida Hospital Association',
      class: 'col-span-2',
      url: 'https://www.facinghistory.org/',
    },
    {
      src: ithacaLogo,
      alt: 'Ithaca College',
      class: 'col-span-2 md:col-span-3',
      url: 'https://ithaca.edu',
    },
    {
      src: ncnLogo,
      alt: 'National Council of Nonprofits',
      class: 'col-span-2',
      url: 'https://www.councilofnonprofits.org/',
    },
    {
      src: oregonZoo,
      alt: 'Oregon Zoo',
      class: 'col-span-2',
      url: 'https://www.oregonzoo.org',
    },
    {
      src: stanfordLogo,
      alt: 'Stanford University',
      class: 'col-span-3',
      url: 'https://humsci.stanford.edu',
    },
    {
      src: smithCollege,
      alt: 'Smith College',
      class: 'col-span-3',
      url: 'https://www.smith.edu',
    },
    {
      src: tlhLogo,
      alt: 'Texas Law Help',
      class: 'col-span-1',
      url: 'https://texaslawhelp.org',
    },
    {
      src: uft,
      alt: 'United Federation of Teachers',
      class: 'col-span-1',
      url: 'https://www.uft.org/',
    },
    {
      src: yaleInfoSecLogo,
      alt: 'Yale Information Security',
      class: 'col-span-2 md:col-span-3',
      url: 'https://cybersecurity.yale.edu/',
    },
    {
      src: yalesom,
      alt: 'Yale School of Management',
      class: 'col-span-2 md:col-span-3',
      url: 'https://som.yale.edu/',
    },
    {
      src: yaleSchwarzmanLogo,
      alt: 'Yale Schwarzman Center',
      class: 'col-span-2',
      url: 'https://schwarzman.yale.edu/',
    },
    {
      src: WTILogo,
      alt: 'Yale Wu Tsai Institute',
      class: 'col-span-2',
      url: 'https://wti.yale.edu/',
    },
  ]

  return (
    <section className={classNames('blueprint bg-white', 'px-5')}>
      <div className="relative z-10 mx-auto max-w-8xl pb-4 pt-6 sm:px-2 md:py-8 lg:px-8 lg:py-16 xl:px-12">
        <Image
          src={builtWithEmulsifyImage}
          width={300}
          height={300}
          alt="Built with Emulsify"
          className="mx-auto w-[200px] -rotate-6 md:w-[175px] lg:w-auto"
        />
        <ul
          className={classNames(
            'mt-9 ',
            'grid grid-cols-5 items-center gap-x-1 gap-y-1',
            'md:gap-x-4 md:gap-y-2',
            'md:grid md:grid-cols-10 md:items-center lg:gap-x-5 lg:gap-y-9',
          )}
        >
          {logoWall.map((logo) => (
            <li
              key={logo.alt}
              className={classNames('rounded-sm  p-3', logo.class)}
            >
              {' '}
              <Link href={logo.url}>
                <Image src={logo.src} width={600} height={600} alt={logo.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Consistency() {
  const content = {
    diptych: [
      {
        icon: (
          <FontAwesomeIcon
            icon={faGrid2Plus}
            className="mb-5 text-5xl text-emulsifyBlue-500"
          />
        ),
        title: 'Get brand consistency, efficiently',
        body: 'Guidelines and components establish a cohesive web presence, even with unique department and school expressions. Emulsify provides tools and frameworks for new or updated websites, ensuring brand consistency is done efficiently.',
      },
      {
        icon: (
          <FontAwesomeIcon
            icon={faCommentCheck}
            className="mb-5 text-5xl text-emulsifyBlue-500"
          />
        ),
        title: 'Let departments and schools express themselves',
        body: 'Give clear guidelines to departments, schools, and other entities on how to express themselves while staying true to your brand. Find a balance between individuality and consistency to maintain a cohesive brand image.',
      },
      {
        icon: (
          <FontAwesomeIcon
            icon={faUniversalAccess}
            className="mb-5 text-5xl text-emulsifyBlue-500"
          />
        ),
        title: 'Include everyone with high accessibility standards',
        body: 'Early identification and addressing potential accessibility issues create a more accessible experience for everyone, including users with disabilities who may struggle with inaccessible websites.',
      },
    ],
  }
  return (
    <section
      className={classNames('text-white', 'bg-cover', 'px-5')}
      style={{ backgroundImage: `url("${consistencyImage.src}")` }}
    >
      <div className="mx-auto max-w-8xl py-16 sm:px-2 md:py-32 lg:px-8 xl:px-12">
        <h2
          className={classNames(
            'font-width-75 text-4xl font-black md:text-7xl',
            'mb-20 max-w-3xl md:mb-40',
          )}
        >
          Keep <em className="brand-consistency">brand consistency</em> across
          all of your websites
          <span className="block text-2xl text-orange-200 md:text-5xl">
            (while maintaining <FontAwesomeIcon icon={faUniversalAccess} />{' '}
            accessibility)
          </span>
        </h2>
        <ul className="flex flex-col gap-9 md:grid md:grid-cols-3 md:gap-14">
          {content.diptych.map((item) => (
            <li key={item.title}>
              {item.icon}
              <h2
                className={classNames(
                  'font-width-75 mb-5 text-3xl font-extrabold leading-none text-orange-200 lg:text-4xl',
                )}
              >
                {item.title}
              </h2>
              <p className={classNames('text-lg font-medium ')}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function WhatIsEmulsify() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      className={classNames('bg-emulsifyBlue-100', 'px-5')}
      style={{
        backgroundImage: `url("${waveImage.src}")`,
        backgroundSize: '25%',
      }}
    >
      <div className="mx-auto max-w-8xl py-8 sm:px-2 md:py-16 lg:px-8 xl:px-12">
        <h2
          className={classNames(
            'flex flex-row items-end justify-center gap-4',
            'font-width-75 text-4xl font-black md:text-7xl',
            'mb-5 text-emulsifyBlue-900 lg:mb-9',
          )}
        >
          What is Emulsify?
          <Image
            src={talkingDrupal}
            width={169}
            height={300}
            alt="Talking Drupal logo"
            className="relative -top-1 w-[80px] md:w-[100px]"
          />
        </h2>
        <div className="mx-auto max-w-4xl">
          {isLoaded ? (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Yk_0fARuBas&ab_channel=TalkingDrupal"
              controls
              width="100%"
              height="100%"
              className="aspect-video"
            />
          ) : null}

          <p className="mt-3">
            Watch the full episode at{' '}
            <a
              href="https://www.talkingdrupal.com/340"
              className="text-emulsifyBlue-800 underline"
            >
              Talking Drupal #340 - Storybook
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function TryEmulsifyToday() {
  return (
    <section className={classNames('text-white', 'bg-violet-900', 'px-5')}>
      <div className="mx-auto max-w-8xl py-16 sm:px-2 md:py-32 lg:px-8 xl:px-12">
        <h2
          className={classNames(
            'font-width-75 text-4xl font-black md:text-7xl',
            'mb-10 max-w-3xl ',
          )}
        >
          Ready to build your beautiful design system?
        </h2>
        <Link
          href="/docs"
          className={classNames(
            'inline-block rounded-lg',
            'bg-emulsifyBlue-700 text-xl font-bold text-white',
            'transition-all hover:bg-emulsifyBlue-800',
            'px-6 py-3',
          )}
        >
          Try Emulsify Today{' '}
          <FontAwesomeIcon
            icon={faCloudArrowDown}
            className="ml-3 text-emulsifyBlue-200"
          />
        </Link>
      </div>
    </section>
  )
}

export default function Index() {
  return (
    <div>
      <Hero />
      <DesignSystemsTogether />
      <BuiltWithEmulsify />
      <Consistency />
      <WhatIsEmulsify />
      <TryEmulsifyToday />
    </div>
  )
}
