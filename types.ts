export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Candidate {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  website?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
}

export interface MerchItem {
  id: number;
  name: string;
  price: number;
  image: string;
  url: string;
}