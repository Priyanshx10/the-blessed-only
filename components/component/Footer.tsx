import Link from "next/link"
import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              <FaFacebook  className="h-6 w-6 text-gray-400" />
              <FaInstagram className="h-6 w-6 text-gray-400" />
              <FaSlack className="h-6 w-6 text-gray-400" />
              <FaXTwitter className="h-6 w-6 text-gray-400" />
              <FaYoutube className="h-6 w-6 text-gray-400" />
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
export default Footer;