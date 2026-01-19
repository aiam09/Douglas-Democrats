import { Candidate, Event, LeadershipMember, NavItem, NewsItem, MerchItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'DC Dems Merchandise', path: '/merch' },
  { 
    label: 'More', 
    path: '#',
    children: [
      { label: 'Bylaws', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Help Wanted', path: '/volunteer' },
      { label: 'Membership', path: '/volunteer' },
      { label: 'Early Voting', path: '/voting' },
      { label: 'Voter Precincts', path: '/voting' },
      { label: 'Friends and Sponsors', path: '/about' },
      { label: 'Events', path: '/events' }
    ]
  },
];

export const HERO_CONTENT = {
  title: "Building a Better Future for Douglas County",
  subtitle: "County Committee of the Democratic Party of Georgia",
  ctaPrimary: "Donate",
  ctaSecondary: "Volunteer",
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Douglas Dems Sweep Local Elections",
    excerpt: "A historic night for Democrats in Douglas County as we secure key seats on the county commission and judicial benches.",
    date: "Nov 8, 2024",
    image: "https://picsum.photos/seed/news1/600/400",
    category: "Press Release"
  },
  {
    id: 2,
    title: "Voter Registration Drive Success",
    excerpt: "Over 500 new voters registered this weekend thanks to our dedicated volunteers across the county.",
    date: "Oct 15, 2024",
    image: "https://picsum.photos/seed/news2/600/400",
    category: "Community"
  },
  {
    id: 3,
    title: "Upcoming Town Hall: Public Safety",
    excerpt: "Join County Commissioners for an open discussion on improving public safety and community policing.",
    date: "Oct 1, 2024",
    image: "https://picsum.photos/seed/news3/600/400",
    category: "Events"
  }
];

export const LEADERSHIP: LeadershipMember[] = [
  { name: "Ingrid Landis-Davis", role: "Chair", image: "https://picsum.photos/seed/leader1/300/300" },
  { name: "David Sponhour", role: "Vice Chair", image: "https://picsum.photos/seed/leader2/300/300" },
  { name: "Rachel Amdur", role: "Executive Director", image: "https://picsum.photos/seed/leader3/300/300" },
  { name: "Joe Corrigan", role: "Treasurer", image: "https://picsum.photos/seed/leader4/300/300" },
];

export const CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: "Dr. Romona Jackson Jones",
    position: "County Commission Chair",
    bio: "Driving change in healthcare and education policy for a stronger community.",
    image: "https://picsum.photos/seed/cand1/400/500",
    website: "#"
  },
  {
    id: 2,
    name: "Kelly Robinson",
    position: "County Commission",
    bio: "Committed to environmental sustainability and economic development.",
    image: "https://picsum.photos/seed/cand2/400/500",
    website: "#"
  },
  {
    id: 3,
    name: "Dalia Racine",
    position: "District Attorney",
    bio: "Reforming our justice system to be fair, equitable, and effective.",
    image: "https://picsum.photos/seed/cand3/400/500",
    website: "#"
  },
];

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Monthly Committee Meeting",
    date: "November 20, 2024 - 7:00 PM",
    location: "Douglasville Conference Center",
    description: "Regular monthly meeting for all committee members and interested public."
  },
  {
    id: 2,
    title: "Phone Banking for 2024",
    date: "Every Tuesday & Thursday",
    location: "Virtual (Zoom)",
    description: "Help us get out the vote! Training provided at the start of every session."
  },
  {
    id: 3,
    title: "Annual Gala Dinner",
    date: "December 15, 2024 - 6:00 PM",
    location: "Douglasville Cultural Arts Center",
    description: "Celebrate our victories and prepare for the year ahead. Ticket required."
  }
];

export const VOTER_RESOURCES = [
  {
    title: "Register to Vote",
    desc: "The first step to making your voice heard. Register online in minutes.",
    icon: "UserPlus",
    link: "https://mvp.sos.ga.gov/"
  },
  {
    title: "Find Your Polling Place",
    desc: "Locate your assigned polling station for election day voting.",
    icon: "MapPin",
    link: "https://mvp.sos.ga.gov/"
  },
  {
    title: "Absentee Ballots",
    desc: "Vote from the comfort of your home. Request your absentee ballot today.",
    icon: "Mail",
    link: "https://mvp.sos.ga.gov/"
  },
  {
    title: "Election Calendar",
    desc: "Stay up to date with important deadlines for registration and voting.",
    icon: "Calendar",
    link: "https://sos.ga.gov/elections-division-georgia-secretary-states-office"
  }
];

export const MERCH_ITEMS: MerchItem[] = [
  {
    id: 1,
    name: "Douglas Dems T-Shirt",
    price: 25.00,
    image: "https://picsum.photos/seed/merch1/400/400",
    url: "#"
  },
  {
    id: 2,
    name: "Campaign Mug",
    price: 15.00,
    image: "https://picsum.photos/seed/merch2/400/400",
    url: "#"
  },
  {
    id: 3,
    name: "Vote 2024 Tote Bag",
    price: 20.00,
    image: "https://picsum.photos/seed/merch3/400/400",
    url: "#"
  },
  {
    id: 4,
    name: "Douglas Democrats Cap",
    price: 22.00,
    image: "https://picsum.photos/seed/merch4/400/400",
    url: "#"
  }
];