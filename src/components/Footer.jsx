import clsx from 'clsx'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'
import logo from '../images/emulsifyLogo.svg'

export function Footer() {
  return (
    <footer
      className={clsx(
        'wave-footer bg-emulsifyBlue-900 text-emulsifyBlue-100',
        'px-4 pb-24 pt-10 md:px-6',
      )}
    >
      <div className="mx-auto max-w-8xl sm:px-2 lg:flex lg:flex-row lg:px-8 xl:px-12">
        <div className="mb-5">
          <Link href="/" aria-label="Home page">
            <Image
              src={logo}
              className="relative top-[4px] mb-2 block h-9 w-auto md:min-h-[60px]"
              alt="Emulsify"
            />
          </Link>
          <p className="text-sm">
            Emulsify is a registered trademark of Four Kitchens.
          </p>
        </div>
        <div className=" lg:ml-auto lg:max-w-[450px]">
          <h2 className="text-xl font-bold ">
            Emulsify is a product of{' '}
            <Link
              href="https://www.fourkitchens.com"
              className="border-b border-solid border-emulsifyBlue-400  text-emulsifyBlue-100 transition-colors hover:border-emulsifyBlue-100"
            >
              Four Kitchens
            </Link>
          </h2>
          <p>
            Our team creates digital experiences that delight, scale, and
            deliver measurable results. If you need help creating a design
            system, the Web Chefs have you covered.
          </p>
          <Link
            href="https://www.fourkitchens.com/"
            className={classNames(
              'mt-4 inline-block rounded px-4 py-2 transition-colors',
              'bg-emulsifyBlue-700',
              'font-bold',
              'hover:bg-emulsifyBlue-600',
            )}
          >
            Get in touch
          </Link>{' '}
        </div>
      </div>
      <div className="clear-both" />
    </footer>
  )
}
