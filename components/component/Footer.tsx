import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col space-y-4">
          <Image
          src="/logo.png"
          alt="Logo"
          height={100}
          width={100}
          className="rounded-full mr-4"
        />
            <p className="text-base text-gray-500">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-4">
              <FacebookIcon className="h-6 w-6 text-gray-400" />
              <InstagramIcon className="h-6 w-6 text-gray-400" />
              <SlackIcon className="h-6 w-6 text-gray-400" />
              <TwitterIcon className="h-6 w-6 text-gray-400" />
              <YoutubeIcon className="h-6 w-6 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col space-y-3">
              <h6 className="text-sm font-semibold text-gray-900 uppercase">Solutions</h6>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Marketing
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Analytics
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Commerce
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Insights
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              <h6 className="text-sm font-semibold text-gray-900 uppercase">Support</h6>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Pricing
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Documentation
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Guides
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                API Status
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              <h6 className="text-sm font-semibold text-gray-900 uppercase">Company</h6>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                About
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Blog
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Jobs
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Press
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Partners
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              <h6 className="text-sm font-semibold text-gray-900 uppercase">Legal</h6>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Claim
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Privacy
              </Link>
              <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">© 2020 The Blessed Only, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function SlackIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
      <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" />
      <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" />
      <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" />
      <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
