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
import ReactPlayer from 'react-player'
import ComponentLibrary from '@/components/icons/ComponentLibrary'
import builtWithEmulsifyImage from '../images/Built with Emulsify Stamp.png'
import consistencyImage from '../images/home-consistency.jpg'
import talkingDrupal from '../images/talking_drupal_logo.png'
import togetherImage from '../images/home-together.jpg'
import waveImage from '../images/wave.png'

function Hero() {
  return (
    <section
      className={classNames(
        'bg-gradient-to-b from-emulsifyBlue-900 to-violet-900',
        'min-h-[85vh] text-white',
        'relative -top-[88px] -mb-[100px] md:-top-[100px]',
        'wave-hero'
      )}
    >
      <div className="mx-auto max-w-8xl py-32 pt-60 sm:px-2 lg:px-8 xl:px-12">
        <h1 className="mb-10 max-w-[800px] text-8xl font-black leading-none">
          Build Beautiful Design Systems with Ease
        </h1>
        <p className="mb-8 max-w-[700px] text-3xl font-semibold">
          Emulsify is an open-source toolset that helps designers and developers
          create design systems for your Drupal website.
        </p>
        <a
          href="https://google.com"
          className={classNames(
            'inline-block rounded-lg',
            'bg-violet-600 text-xl font-bold text-white',
            'transition-all hover:bg-violet-700',
            'px-6 py-3'
          )}
        >
          Install Drupal theme{' '}
          <FontAwesomeIcon
            icon={faCloudArrowDown}
            className="ml-3 text-violet-200"
          />
        </a>
        <p className="mt-2">
          <a href="https://google.com" className="underline">
            Standalone installation
          </a>
        </p>
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
        'bg-cover text-white'
      )}
      style={{ backgroundImage: `url("${togetherImage.src}")` }}
    >
      <div className="mx-auto max-w-8xl py-32 sm:px-2 lg:px-8 xl:px-12">
        <h2
          className={classNames(
            'font-width-75 text-7xl font-black',
            'mb-40 max-w-4xl'
          )}
        >
          Make and implement design systems in Drupal{' '}
          <em className="squiggle relative">together</em>
        </h2>
        <ul className="grid grid-cols-3 gap-14">
          {content.tryptch.map((item) => (
            <li key={item.title}>
              {item.icon}
              <h2
                className={classNames(
                  'font-width-75 mb-5 text-4xl font-extrabold leading-none text-orange-200'
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
  return (
    <section className={classNames('h-[80vh] bg-white')}>
      <div className="mx-auto max-w-8xl py-16 sm:px-2 lg:px-8 xl:px-12">
        <Image
          src={builtWithEmulsifyImage}
          width={300}
          height={300}
          alt="Built with Emulsify"
          className="mx-auto -rotate-6"
        />
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
      className={classNames('text-white', 'bg-cover')}
      style={{ backgroundImage: `url("${consistencyImage.src}")` }}
    >
      <div className="mx-auto max-w-8xl py-32 sm:px-2 lg:px-8 xl:px-12">
        <h2
          className={classNames(
            'font-width-75 text-7xl font-black',
            'mb-40 max-w-3xl'
          )}
        >
          Keep <em className="brand-consistency">brand consistency</em> across
          all of your websites
          <span className="block text-5xl text-orange-200">
            (while maintaining <FontAwesomeIcon icon={faUniversalAccess} />{' '}
            accessibility)
          </span>
        </h2>
        <ul className="grid grid-cols-3 gap-14">
          {content.diptych.map((item) => (
            <li key={item.title}>
              {item.icon}
              <h2
                className={classNames(
                  'font-width-75 mb-5 text-4xl font-extrabold leading-none text-orange-200'
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
  return (
    <section
      className={classNames('bg-emulsifyBlue-100')}
      style={{
        backgroundImage: `url("${waveImage.src}")`,
        backgroundSize: '25%',
      }}
    >
      <div className="mx-auto max-w-8xl py-16 sm:px-2 lg:px-8 xl:px-12">
        <h2
          className={classNames(
            'flex flex-row items-end justify-center gap-4',
            'font-width-75 text-7xl font-black',
            'mb-9 text-emulsifyBlue-900'
          )}
        >
          What is Emulsify?
          <Image
            src={talkingDrupal}
            width={169}
            height={300}
            alt="Talking Drupal logo"
            className="relative -top-1"
          />
        </h2>
        <div className="mx-auto max-w-4xl">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Yk_0fARuBas&ab_channel=TalkingDrupal"
            controls
            width="100%"
            height="100%"
            className="aspect-video"
          />
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

export default function Index() {
  return (
    <div>
      <Hero />
      <DesignSystemsTogether />
      <BuiltWithEmulsify />
      <Consistency />
      <WhatIsEmulsify />
    </div>
  )
}
