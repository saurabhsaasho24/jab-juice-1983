// ========================================
// COMPANY TYPES
// ========================================

export interface NavLink {
  name: string;
  label?: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  address: string;
  addressDisplay: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

// ========================================
// COMPANY DATA
// ========================================

export const companyData: CompanyData = {
  name: "JAB Juice",

  logo: "/assets/logo.png",

  email: "",

  phone: "+17182884547",

  phoneDisplay: "(718) 288-4547",

  address: "Brooklyn, NY, USA",

  addressDisplay: "Brooklyn, NY, USA",

  // Navigation Links
  navLinks: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Flavors",
      href: "/flavors",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],

  // Social Media Links
  socialLinks: [
    {
      name: "Facebook",
      url: "",
      icon: "/icons/facebook.svg",
      ariaLabel: "Visit our Facebook page",
    },
    {
      name: "Instagram",
      url: "",
      icon: "/icons/instagram.svg",
      ariaLabel: "Visit our Instagram page",
    },
    {
      name: "YouTube",
      url: "",
      icon: "/icons/youtube.svg",
      ariaLabel: "Visit our YouTube channel",
    },
  ],
};

export const company = companyData;