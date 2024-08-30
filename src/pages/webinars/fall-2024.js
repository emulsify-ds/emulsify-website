'use client'

import Head from 'next/head'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { Prose } from '@/components/Prose'
import callin from '@/images/webinars/callin.webp'
import randy from '@/images/webinars/randy.webp'

const webinar = {
  title:
    'From silos to synergy: Emulsify’s impact on higher ed website development',
  description: 'This is the description for the Fall 2024 webinar.',
  date: '2024-10-01',
  time: '10:00 AM',
  duration: '1 hour',
  location: 'Online',
  registrationLink: 'https://example.com',
}

const presenters = [
  {
    name: 'Callin Mullaney',
    image: callin,
    jobTitle: 'Senior Frontend Engineer | He/Him/His',
    description:
      'Callin Mullaney specializes in transforming designs into interactive web experiences at Four Kitchens, where he builds systems that extend design consistency across projects. A tech enthusiast, he thrives in collaborative environments and enjoys outdoor adventures like canoeing and camping.',
  },
  {
    name: 'Randy Oest',
    image: randy,
    jobTitle: 'Creative Director | He/Him/His',
    description:
      'Randy Oest, creative director at Four Kitchens since 2015, excels at turning complex content challenges into elegant, user-friendly designs. He’s passionate about tabletop RPGs and has won multiple ENNIE Awards for his contributions to the gaming community.',
  },
]

const Arrow = (props) => (
  <svg viewBox="0 0 131 49" {...props}>
    <path d="M1.48464 0.992226C2.75453 2.38653 4.30285 3.61243 5.23888 5.20003C8.4086 10.5752 13.0493 14.1658 18.4666 16.984C49.1955 32.9938 80.6358 35.268 112.898 21.9939C114.279 21.4243 115.637 20.7924 116.977 20.1244C117.993 19.6193 118.965 19.0227 120.964 17.9015C118.364 17.1807 116.709 16.5859 115 16.2796C107.465 14.9446 99.91 13.7068 92.3699 12.3996C90.3418 12.0481 87.6854 12.3939 87.6093 9.25023C87.5603 7.36993 89.2289 6.77073 92.832 6.95863C99.976 7.34023 107.128 7.58993 114.266 8.05323C117.575 8.26943 120.951 8.51323 124.127 9.38423C129.689 10.9083 131.563 14.5093 130.099 20.0616C129.592 21.9831 128.822 23.8455 128.091 25.7008C125.481 32.3562 122.437 38.875 122.279 46.236C122.264 46.896 121.38 48.138 121.107 48.08C120.265 47.909 118.995 47.369 118.845 46.741C118.345 44.6814 117.751 42.4262 118.13 40.4217C118.957 36.0298 120.355 31.7437 121.522 27.4192C121.733 26.6464 121.974 25.8833 122.418 24.389C120.842 24.9922 119.847 25.3212 118.895 25.7416C83.5569 41.2967 49.0475 39.6505 15.2673 20.9238C8.5351 17.1925 4.00481 11.7171 0.836835 4.91503C0.405335 3.98253 0.390915 2.85513 0.182495 1.81543C0.620225 1.53453 1.05381 1.25642 1.49154 0.975525L1.48464 0.992226Z" />
  </svg>
)

const Form = () => (
  <article
    className={classNames(
      'not-prose w-full scroll-pt-28 ',
      'md:float-right md:ml-8 lg:-mr-8 md:mb-8 md:max-w-[300px] space-y-6',
      'p-7 rounded border border-solid border-emulsifyBlue-400',
      'bg-gradient-to-b from-emulsifyBlue-100 to-emulsifyBlue-300',
      'dark:bg-gradient-to-b dark:from-violet-700 dark:via-emulsifyBlue-800 dark:to-emulsifyBlue-800',
    )}
    id="register"
  >
    <h2 className="font-width-75 text-balance text-3xl font-bold leading-none text-emulsifyBlue-800 dark:text-white">
      Register now to secure your spot!
    </h2>

    <label className="block">
      <span className="text-base font-semibold leading-none text-emulsifyBlue-900 dark:text-emulsifyBlue-100">
        Name
      </span>
      <input
        type="text"
        className="mt-1 block w-full rounded-md border-emulsifyBlue-400 shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-300 dark:text-emulsifyBlue-900"
        placeholder=""
      />
    </label>

    <label className="block">
      <span className="text-base font-semibold leading-none text-emulsifyBlue-900 dark:text-emulsifyBlue-100">
        Email address
      </span>
      <input
        type="email"
        className="mt-1 block w-full rounded-md border-emulsifyBlue-400 shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-300 dark:text-emulsifyBlue-900"
        placeholder="john@example.com"
      />
    </label>

    <div className="relative">
      <Link
        href="/docs/emulsify-drupal"
        className={classNames(
          'inline-block rounded-lg',
          'bg-violet-600 text-base font-bold text-white',
          'transition-all hover:bg-violet-700',
          'px-8 py-1 uppercase',
          'focus:ring focus:ring-violet-900',
          'focus-visible:ring focus-visible:ring-violet-900 focus-visible:border-violet-900 focus-visible:ring-offset-2',
          'dark:bg-violet-600 dark:border dark:border-solid dark:border-violet-1000',
          'dark:hover:bg-violet-700',
        )}
      >
        Register
      </Link>
      <Arrow className="absolute bottom-[-40px] left-[-140px] w-[150px] fill-emulsifyBlue-800 dark:fill-emulsifyBlue-100" />
    </div>
  </article>
)

export default function Index() {
  return (
    <>
      <Head>
        <title>{webinar.title} • Emulsify Webinar</title>
        <meta
          property="og:title"
          content={`${webinar.title} • Emulsify Webinar`}
          key="title"
        />
        {/* <meta property="og:image" content={sharingImage.src} /> */}
      </Head>

      <div className={classNames('', 'dark:bg-gradient-to-b')}>
        <div className="absolute min-h-[100vw] w-screen overflow-x-hidden ">
          <div className="webinar-gradient absolute top-0" />
        </div>

        <div className="mx-auto max-w-4xl px-5 pt-8 ">
          <div className="relative z-20">
            <p
              className={classNames(
                'uppercase inline-block rounded-xl px-3 py-1 pt-1.5 mb-3 leading-none text-sm font-bold text-white',
                'bg-slate-500',
              )}
            >
              Webinar
            </p>

            <h1 className="font-width-75 mb-4 text-balance text-5xl font-bold leading-none text-emulsifyBlue-900 dark:text-white md:text-6xl lg:gap-8 lg:text-7xl">
              {webinar.title}
            </h1>

            <h2 className="mb-8 text-2xl font-bold leading-tight text-emulsifyBlue-800 dark:text-emulsifyBlue-300 lg:text-3xl">
              Join Us on {webinar.date} at {webinar.time} for a Free Webinar
            </h2>

            <h3 className="text-balance text-xl font-bold leading-tight text-emulsifyBlue-900 dark:text-emulsifyBlue-200 lg:text-2xl">
              Are your institution’s web teams struggling with consistency,
              collaboration, and accessibility in your digital presence?
            </h3>
          </div>
        </div>
      </div>

      <section className="relative z-20">
        <Prose className="prose-emulsify mx-auto mb-52 !max-w-3xl px-5 py-10 ">
          <Form />

          <p className="lead">
            Higher education institutions face unique challenges in maintaining
            a cohesive and accessible web experience across multiple
            departments, campuses, and audiences.{' '}
          </p>
          <p>
            This free webinar will explore how{' '}
            <a href="https://emulsify.info">Emulsify</a> can revolutionize how
            your web team designs, develops, and maintains your institution’s
            digital footprint.
          </p>
          <h2>What you’ll learn:</h2>
          <ul>
            <li>
              <strong>Streamline your web development process</strong>—Discover
              how Emulsify’s component-based approach can drastically reduce
              development time, allowing your team to focus on what matters
              most: creating a dynamic and engaging online experience for
              students, faculty, and staff.
            </li>
            <li>
              <strong>Improve collaboration between teams</strong>—Learn how
              Emulsify bridges the gap between designers and developers,
              fostering a seamless workflow that ensures everyone is on the same
              page — no more silos or miscommunication.
            </li>
            <li>
              <strong>Ensure consistency across departments</strong>—See how a
              unified design system can help maintain brand consistency across
              all your institution’s websites, ensuring a cohesive user
              experience.
            </li>
            <li>
              <strong>Boost accessibility and compliance</strong>—Emulsify is
              designed with accessibility in mind, helping your team meet and
              exceed web accessibility standards, ensuring your digital spaces
              are inclusive for all.
            </li>
          </ul>
          <h2>Who should attend?</h2>
          <ul>
            <li>
              <strong>Web developers and designers</strong>—If you work on
              higher education websites, discover tools and techniques to
              improve your workflow and output.
            </li>
            <li>
              <strong>Marketing and communications teams</strong>—Learn how a
              consistent, well-maintained web presence can boost your
              institution’s brand and communications efforts.
            </li>
            <li>
              <strong>IT and web managers</strong>—See how adopting a design
              system can streamline your team’s processes and improve overall
              site management.
            </li>
          </ul>
          <h2>Why attend?</h2>
          <ul>
            <li>
              <strong>Expert insights</strong>—Gain knowledge from industry
              leaders who have successfully implemented Emulsify in higher
              education settings.
            </li>
            <li>
              <strong>Practical takeaways</strong>—Leave with actionable
              strategies you can apply immediately to improve your web projects.
            </li>
            <li>
              <strong>Interactive Q&amp;A</strong>—Get your specific questions
              answered by experts who understand the unique challenges of higher
              education web teams.
            </li>
          </ul>
          <p>
            <strong>
              Don’t miss out on this opportunity to empower your web team with
              the tools and strategies they need to excel.
            </strong>
          </p>

          <hr />

          <h2 id="-about-the-presenters-">
            <strong>About the Presenters:</strong>
          </h2>

          {presenters.map((presenter, i) => (
            <div
              className={classNames(
                'not-prose flex items-center gap-6',
                { 'flex-row': i % 2 === 0 },
                { 'flex-row-reverse': i % 2 !== 0 },
              )}
            >
              <Image
                src={presenter.image}
                alt={presenter.name}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold leading-tight text-emulsifyBlue-800 dark:text-emulsifyBlue-300">
                  {presenter.name}
                </h3>
                <p>{presenter.jobTitle}</p>
                <p className="mt-2 text-sm">{presenter.description}</p>
              </div>
            </div>
          ))}

          <hr />
          <p>
            <strong>
              Can’t make it to the live session?{' '}
              <a href="#register">Register anyway</a>, and we’ll send you the
              recording!
            </strong>
          </p>
          <hr />
          <p>
            <strong>Have questions?</strong>
          </p>
          <p>
            Contact us at{' '}
            <a href="mailto:shout@fourkitchens.com">shout@fourkitchens.com</a>{' '}
            or visit our <Link href="/">Website</Link> for more information.
          </p>
        </Prose>
      </section>
    </>
  )
}
