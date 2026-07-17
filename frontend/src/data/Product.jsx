// src/data/products.js
import {
  FaChartLine,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaClipboardCheck,
  FaFileInvoiceDollar,
} from 'react-icons/fa'
import { MdMiscellaneousServices } from 'react-icons/md'
import { BsFillGearFill } from 'react-icons/bs'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'

export const products = [
  {
    slug: 'tally-software-service',
    path: '/products/tally-software-service',
    label: 'Tally Software Service',
    desc: 'Connected services, upgrades, and business continuity features',
    description:
      'Tally Software Service helps your business stay updated with the latest product releases, connected services, and essential business continuity features. It is designed to improve reliability, keep your system current, and ensure smooth day-to-day accounting operations with ongoing access to key Tally capabilities.',
    icon: FaFileInvoiceDollar,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    slug: 'tallyprime-server',
    path: '/products/tallyprime-server',
    label: 'TallyPrime Server',
    desc: 'Enterprise multi-user performance and monitoring',
    description:
      'TallyPrime Server is built for businesses that need stronger performance, advanced user management, and better visibility in multi-user environments. It helps improve data access speed, supports centralized monitoring, and gives administrators more control over user activity and server operations.',
    icon: FaDatabase,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
  },
  {
    slug: 'tallyprime-cloud-access',
    path: '/products/tallyprime-cloud-access',
    label: 'TallyPrime Cloud Access',
    desc: 'Secure remote access to Tally from anywhere',
    description:
      'TallyPrime Cloud Access allows users to work on Tally securely from remote locations without being limited to a single office system. It supports flexible access for distributed teams, improves availability, and helps businesses continue operations from anywhere with an internet connection.',
    icon: FaCloud,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
  },
  {
    slug: 'tallyprime-developer',
    path: '/products/tallyprime-developer',
    label: 'TallyPrime Developer',
    desc: 'Platform for customization and extension development',
    description:
      'TallyPrime Developer is a platform for building custom extensions, tailored workflows, and business-specific modifications on top of TallyPrime. It is useful for organizations and implementation partners that want to adapt Tally to unique processes, reporting needs, and specialized operational requirements.',
    icon: FaLaptopCode,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-700',
  },
  {
    slug: 'tallycapital',
    path: '/products/tallycapital',
    label: 'TallyCapital',
    desc: 'Business financing and credit support solutions',
    description:
      'TallyCapital helps businesses explore financing and credit support options directly within their broader business ecosystem. It is aimed at improving access to working capital, supporting business growth, and making financial assistance more convenient for eligible organizations.',
    icon: FaChartLine,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    slug: 'shoper9',
    path: '/products/shoper9',
    label: 'Shoper9',
    desc: 'Retail enterprise and point-of-sale software',
    description:
      'Shoper9 is a retail and point-of-sale solution designed to simplify billing, inventory tracking, customer handling, and retail business operations. It is suitable for stores that need faster checkout, better stock visibility, and stronger control over day-to-day retail management.',
    icon: FaClipboardCheck,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
  {
    slug: 'erp-software',
    path: '/products/erp-software',
    label: 'ERP Software',
    desc: 'Integrated business management for finance and operations',
    description:
      'ERP Software provides an integrated platform to manage finance, operations, reporting, and core business workflows in one place. It is designed to reduce manual work, improve coordination between departments, and give management better visibility into overall business performance.',
    icon: BsFillGearFill,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
  },
  {
    slug: 'hotel-erp-software',
    path: '/products/hotel-erp-software',
    label: 'Hotel ERP Software',
    desc: 'Hospitality operations, billing, inventory, and control',
    description:
      'Hotel ERP Software is built for hospitality businesses that need to manage reservations, front office operations, billing, inventory, and reporting from a centralized system. It helps hotels improve operational control, reduce process gaps, and deliver smoother service across departments.',
    icon: HiOutlineWrenchScrewdriver,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
  {
    slug: 'lab-software',
    path: '/products/lab-software',
    label: 'Lab Software',
    desc: 'Laboratory workflow, billing, and reporting platform',
    description:
      'Lab Software supports laboratory operations by managing workflow, patient billing, test processes, and report generation in a structured system. It is intended to improve operational accuracy, speed up reporting, and help labs handle daily activities more efficiently.',
    icon: MdMiscellaneousServices,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
  },
]