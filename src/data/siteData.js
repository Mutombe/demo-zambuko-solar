export const designTokens = {
  heroStyle: "carousel",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "howItWorks", "products", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Zambuko Solar",
    legalName: "Zambuko Solar (Pvt) Ltd",
    tagline: "Power Your Life",
    description:
      "Affordable solar energy systems for off-grid and peri-urban communities and businesses across Zimbabwe. Solar panels, batteries, inverters, irrigation systems, and complete home solar solutions.",
    phone: "+263 778 210 398",
    phoneRaw: "+263778210398",
    phoneAlt: "+263 718 393 095",
    phoneAltRaw: "+263718393095",
    phoneTollFree: "+263 8644 296 398",
    whatsappNumber: "263778210398",
    email: "info@zambukosolar.co.zw",
    website: "zambukosolar.co.zw",
    address: "Shop 5 J Way Mall, Along Julius Nyerere Way, Harare",
    addressAlt: "6 Aberdeen Road, Belgravia, Harare",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 24,
    established: "2018",
    yearsExperience: "6+",
    unitsSold: "400+",
    offGridReach: "350+",
    locations: "2",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:30 AM - 4:30 PM" },
      { day: "Saturday", time: "Closed" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "zambuko-solar-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/zambukosolar",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoImage: "/images/Zambuko-Solar-Logo-01.png",
    logoLine1: "Zambuko",
    logoLine2: "Solar",
    showLogoText: false,
  },

  hero: {
    badge: "Zimbabwe's Trusted Solar Provider",
    titleLines: ["POWER", "YOUR", "LIFE."],
    subtitle:
      "Affordable solar systems designed for Zimbabwe's homes, farms, and businesses. From off-grid villages to peri-urban communities, we bring clean energy within reach.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Browse Products",
    trustLine: "400+ Units Sold \u00b7 350+ Off-Grid Homes \u00b7 Since 2018",
    backgroundImages: [
      { url: "/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg", alt: "Solar farm with inverters" },
      { url: "/images/vivint-solar-9CalgkSRZb8-unsplash.jpg", alt: "Residential solar rooftop" },
      { url: "/images/raze-solar-Q8V1EEvnJgk-unsplash.jpg", alt: "Solar panel installation" },
      { url: "/images/manny-becerra-NgdhrwAx0J8-unsplash.jpg", alt: "Solar rooftop array" },
      { url: "/images/harisankar-hp6Xj7LyZ1E-unsplash.jpg", alt: "Solar panels at sunset" },
    ],
  },

  stats: [
    { number: "400+", label: "Units Sold" },
    { number: "350+", label: "Off-Grid Homes Reached" },
    { number: "2", label: "Harare Locations" },
    { number: "6+", label: "Years Empowering Zimbabwe" },
  ],

  servicesPreview: [
    {
      iconName: "Lightbulb",
      title: "Solar Home Systems",
      desc: "Complete solar kits for everyday living. Power your lights, charge devices, and watch TV with clean, reliable energy.",
      image: "/images/vivint-solar-9CalgkSRZb8-unsplash.jpg",
    },
    {
      iconName: "Leaf",
      title: "Solar Irrigation Systems",
      desc: "Submersible and surface pump systems for boreholes up to 80m. Keep your farm watered without grid power.",
      image: "/images/newpowa-ZC4UmkQpMJM-unsplash.jpg",
    },
    {
      iconName: "Rocket",
      title: "1.5kVA - 5kVA Systems",
      desc: "High-voltage solar solutions for homes and businesses during Zimbabwe's power cuts. Stay productive always.",
      image: "/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg",
    },
    {
      iconName: "Star",
      title: "Solar Panels",
      desc: "Quality photovoltaic panels built for African sun. High efficiency, durable construction, long warranties.",
      image: "/images/benjamin-jopen-p2GuLUu79Rg-unsplash.jpg",
    },
    {
      iconName: "ShieldCheck",
      title: "Solar Batteries",
      desc: "Deep cycle batteries designed for solar storage. Store daytime energy for reliable nighttime power.",
      image: "/images/possessed-photography-DqpPwAC3QVY-unsplash.jpg",
    },
    {
      iconName: "Briefcase",
      title: "Inverters",
      desc: "Pure sine wave inverters that convert DC to clean AC power. Safe for sensitive electronics and appliances.",
      image: "/images/evgeniy-alyoshin-2ASQyjafflo-unsplash.jpg",
    },
    {
      iconName: "CurrencyDollar",
      title: "Charge Controllers",
      desc: "MPPT and PWM controllers that protect your batteries and maximize solar panel efficiency.",
      image: "/images/markus-winkler-VX0ZEZSwqnY-unsplash.jpg",
    },
  ],

  // Products showcase (horizontal scroll on home)
  productsShowcase: [
    {
      name: "TV Combo System",
      spec: "32\" Smart LED TV + Panel + Battery + Controller",
      image: "/images/vivint-solar-9CalgkSRZb8-unsplash.jpg",
      category: "Home Systems",
    },
    {
      name: "Irrigation System",
      spec: "330W Panel + DC Pump + 1000L Tank + Battery",
      image: "/images/newpowa-ZC4UmkQpMJM-unsplash.jpg",
      category: "Agriculture",
    },
    {
      name: "3kVA Power System",
      spec: "High voltage inverter + panels + batteries",
      image: "/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg",
      category: "High Voltage",
    },
    {
      name: "330W Solar Panel",
      spec: "Monocrystalline, 25-year performance warranty",
      image: "/images/benjamin-jopen-p2GuLUu79Rg-unsplash.jpg",
      category: "Panels",
    },
    {
      name: "200Ah Deep Cycle",
      spec: "Gel battery, 1500+ cycle life",
      image: "/images/possessed-photography-DqpPwAC3QVY-unsplash.jpg",
      category: "Batteries",
    },
  ],

  featuredProjects: [
    {
      image: "/images/vivint-solar-9CalgkSRZb8-unsplash.jpg",
      title: "Residential Solar Installation",
      category: "Home Systems",
    },
    {
      image: "/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg",
      title: "Commercial Solar Farm",
      category: "Commercial",
    },
    {
      image: "/images/newpowa-ZC4UmkQpMJM-unsplash.jpg",
      title: "Farm Irrigation System",
      category: "Agriculture",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Why Zambuko " },
      { text: "Solar", highlight: true },
      { text: "?" },
    ],
    image: "/images/danny-messina-OiPtLN9_04w-unsplash.jpg",
    imageAlt: "Zambuko Solar technician installing panels on a rooftop",
    experienceYears: "6+",
    experienceLabel: "Years Serving Zimbabwe",
    points: [
      {
        title: "Affordable Systems",
        desc: "Solar energy should not be a luxury. Our systems are priced for real Zimbabwean households and small businesses.",
      },
      {
        title: "African Climate Tested",
        desc: "Every product is selected for performance in Zimbabwe's heat, dust, and weather conditions. No imports that cannot handle African sun.",
      },
      {
        title: "Full Installation Included",
        desc: "We do not just sell equipment. Our trained technicians handle complete installation, wiring, and setup at your property.",
      },
      {
        title: "After-Sales Support",
        desc: "Warranty-backed service with real support. If anything goes wrong, our Harare team is a phone call away.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "/images/harisankar-hp6Xj7LyZ1E-unsplash.jpg",
    backgroundAlt: "Solar panels gleaming at sunset in Zimbabwe",
    titleParts: [
      { text: "Ready to " },
      { text: "Go Solar", highlight: true },
      { text: "?" },
    ],
    subtitle:
      "Whether you need a small home system or a full commercial installation, we will design a solution that fits your budget and your power needs.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "WhatsApp Us",
    whatsappText:
      "Hello Zambuko Solar, I am interested in your solar systems. Can you help me find the right solution?",
  },

  homeTestimonials: [
    {
      name: "Tatenda Moyo",
      role: "Homeowner, Chitungwiza",
      text: "Since installing the Zambuko Solar home system, we have not used a single candle. The kids study at night, we charge phones, and the TV runs perfectly. Life-changing.",
      rating: 5,
    },
    {
      name: "Nyasha Garwe",
      role: "Farmer, Goromonzi",
      text: "The irrigation system paid for itself in one season. My borehole runs all day without diesel costs. Zambuko made solar farming a reality for me.",
      rating: 5,
    },
    {
      name: "Farai Chikwanha",
      role: "Shop Owner, Mbare",
      text: "Load shedding used to cost me half my daily income. Now my shop stays open with lights, fridge, and phone charging. Best investment I ever made.",
      rating: 5,
    },
    {
      name: "Rudo Makoni",
      role: "Teacher, Epworth",
      text: "Zambuko Solar installed everything in one afternoon. Professional team, clean work. My home feels modern now. I recommend them to everyone in my community.",
      rating: 5,
    },
    {
      name: "Simba Dube",
      role: "Business Owner, Belgravia",
      text: "We upgraded to the 5kVA system for our office. Zero downtime during ZESA outages. The inverter handles everything silently. Excellent quality.",
      rating: 4,
    },
    {
      name: "Grace Mutsvairo",
      role: "Homeowner, Glen View",
      text: "The TV combo package was exactly what we needed. Solar panel, battery, and a smart TV all in one deal. The children are so happy. Thank you Zambuko!",
      rating: 5,
    },
    {
      name: "Tendai Mashingaidze",
      role: "Poultry Farmer, Ruwa",
      text: "Solar-powered lighting for my chicken runs has improved egg production noticeably. The system runs reliably day after day. Great after-sales support too.",
      rating: 4,
    },
    {
      name: "Chiedza Pfende",
      role: "Nurse, Highfield",
      text: "I was worried about the cost but Zambuko helped me find a system within my budget. Four months in and I have not looked back. Clean energy for my family.",
      rating: 5,
    },
    {
      name: "Wellington Chirisa",
      role: "Lodge Owner, Masvingo",
      text: "We installed solar for our bush lodge. Guests love the eco-friendly angle and we save thousands on generators monthly. Zambuko understood our needs perfectly.",
      rating: 5,
    },
    {
      name: "Mercy Tafirenyika",
      role: "Homeowner, Budiriro",
      text: "Even on cloudy days the system performs well. The deep cycle battery stores more than enough power for the evening. Very impressed with the quality.",
      rating: 4,
    },
    {
      name: "Blessing Gondo",
      role: "Mechanic, Mabvuku",
      text: "I power my workshop tools with the 3kVA system. No more waiting for ZESA. My customers get served on time and my productivity has doubled.",
      rating: 5,
    },
    {
      name: "Patricia Hungwe",
      role: "Headmistress, Hatcliffe",
      text: "Zambuko Solar electrified our rural school. Students now have light to study and teachers can use laptops. This company truly cares about communities.",
      rating: 5,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Empowering Zimbabwe with " },
      { text: "Clean Energy", highlight: true },
    ],
    heroSubtitle:
      "Since 2018, Zambuko Solar has been on a mission to bring affordable, reliable solar energy to every corner of Zimbabwe \u2014 from peri-urban townships to remote farming communities.",
    storyImage: "/images/danny-messina-OiPtLN9_04w-unsplash.jpg",
    storyImageAlt: "Zambuko Solar team installing solar panels on a rooftop in Harare",
    storyProjectCount: "400+",
    storyProjectLabel: "Units Installed",
    storyTitle: "From One Panel to 400 Systems",
    storyParagraphs: [
      "Zambuko Solar was born from a simple observation: Zimbabwe's abundant sunshine was going to waste while communities lived without reliable electricity. Founded in 2018 in Harare, we set out to bridge this gap \u2014 not with expensive, imported luxury systems, but with affordable solutions designed for real Zimbabwean conditions.",
      "Our name, 'Zambuko,' means 'bridge' in Shona. We are the bridge between Zimbabwe's energy challenges and a solar-powered future. From our two Harare locations \u2014 J Way Mall on Julius Nyerere Way and our Belgravia office on Aberdeen Road \u2014 we serve homeowners, farmers, businesses, and institutions across the country.",
      "Today, with over 400 units sold and 350+ off-grid households reached, we continue to grow. Every system we install is a step toward energy independence for Zimbabwe. We believe in solar not just as technology, but as a tool for dignity, productivity, and progress.",
    ],
    mission:
      "To make clean, reliable solar energy accessible and affordable for every Zimbabwean household and business. We believe energy independence is a right, not a privilege.",
    vision:
      "A Zimbabwe where no family sits in darkness, no farm lacks water, and no business loses income to power cuts. A nation powered by its own abundant sunshine.",
    values: [
      {
        iconName: "Heart",
        title: "Affordability",
        desc: "We design solar solutions for real budgets. Energy access should never be limited by income.",
      },
      {
        iconName: "ShieldCheck",
        title: "Reliability",
        desc: "Every component we sell is tested for African conditions. We stand behind our products with real warranties.",
      },
      {
        iconName: "Lightbulb",
        title: "Innovation",
        desc: "We stay current with solar technology advances and bring the best price-performance options to Zimbabwe.",
      },
      {
        iconName: "Handshake",
        title: "Community",
        desc: "We serve communities, not just customers. Our goal is lasting impact in the neighborhoods we reach.",
      },
      {
        iconName: "Leaf",
        title: "Sustainability",
        desc: "Clean energy is our core product and our core value. Every unit we install reduces carbon emissions.",
      },
      {
        iconName: "Users",
        title: "Education",
        desc: "We teach customers how to maintain and optimize their systems. Knowledge empowers long-term energy independence.",
      },
    ],
    team: [
      {
        name: "Takunda Zambuko",
        role: "Founder & Managing Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Rumbidzai Choto",
        role: "Sales & Operations Manager",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "Tapiwa Mhizha",
        role: "Lead Solar Technician",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      {
        name: "Nyasha Dube",
        role: "Customer Support Lead",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
    ],
    milestones: [
      {
        year: "2018",
        title: "Zambuko Solar Founded",
        desc: "Started with a vision to bring affordable solar energy to Zimbabwean homes and farms.",
      },
      {
        year: "2019",
        title: "100th Unit Sold",
        desc: "Reached our first major milestone, powering 100 households across Harare and surrounding areas.",
      },
      {
        year: "2020",
        title: "Irrigation Systems Launched",
        desc: "Expanded into agricultural solar with borehole pump systems for smallholder farmers.",
      },
      {
        year: "2021",
        title: "Second Location Opened",
        desc: "Opened our Belgravia office on Aberdeen Road to better serve the growing customer base.",
      },
      {
        year: "2023",
        title: "350+ Off-Grid Homes",
        desc: "Reached over 350 off-grid households with reliable solar power across Zimbabwe.",
      },
      {
        year: "2024",
        title: "400+ Units Milestone",
        desc: "Surpassed 400 total units sold with continued expansion into high-voltage commercial systems.",
      },
    ],
    ctaTitle: "Ready to Go Solar?",
    ctaSubtitle:
      "Join hundreds of Zimbabwean families and businesses already enjoying clean, reliable solar energy.",
    ctaCta: "Get Your Free Quote",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Solar Solutions for " },
      { text: "Every Need", highlight: true },
    ],
    heroSubtitle:
      "From home lighting to commercial power systems and agricultural irrigation, we have the right solar solution for your needs and budget.",
    items: [
      {
        iconName: "Lightbulb",
        title: "Solar Home Systems",
        slug: "solar-home-systems",
        image: "/images/vivint-solar-9CalgkSRZb8-unsplash.jpg",
        desc: "Complete solar kits designed for everyday Zimbabwean homes. Power your lights, charge phones and devices, and enjoy entertainment with a 32-inch Smart LED TV combo \u2014 all from clean solar energy. Our home systems are plug-and-play, professionally installed, and sized for real household needs.",
        features: [
          "Various configurations for different home sizes",
          "TV combo with 32\" Smart LED television included",
          "LED lighting kits for multiple rooms",
          "Phone and device charging stations",
          "Easy-to-use charge controller",
          "Professional installation included",
        ],
      },
      {
        iconName: "Leaf",
        title: "Solar Irrigation Systems",
        slug: "solar-irrigation",
        image: "/images/newpowa-ZC4UmkQpMJM-unsplash.jpg",
        desc: "Purpose-built solar pump systems for Zimbabwean farms and gardens. Our irrigation solutions include submersible and surface pumps, supporting boreholes up to 80 meters deep. Power your water supply without diesel or grid electricity.",
        features: [
          "Submersible and surface pump options",
          "Supports boreholes up to 80m depth",
          "330W solar panel included",
          "DC pump with controller",
          "1000-litre water tank",
          "Deep cycle battery for cloudy days",
        ],
      },
      {
        iconName: "Rocket",
        title: "1.5kVA - 5kVA Systems",
        slug: "high-voltage-systems",
        image: "/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg",
        desc: "High-capacity solar systems for homes and businesses that need serious power. Our 1.5kVA to 5kVA range handles fridges, computers, power tools, and more \u2014 keeping you productive through Zimbabwe's load-shedding schedule.",
        features: [
          "1.5kVA to 5kVA system range",
          "Pure sine wave inverter technology",
          "Multiple solar panel configurations",
          "Battery bank for overnight power",
          "Handles fridges, computers, and power tools",
          "Commercial and residential options",
        ],
      },
      {
        iconName: "Star",
        title: "Solar Panels",
        slug: "solar-panels",
        image: "/images/benjamin-jopen-p2GuLUu79Rg-unsplash.jpg",
        desc: "High-efficiency photovoltaic panels selected specifically for African conditions. Our panels deliver maximum output even in Zimbabwe's extreme heat, with durable construction and long-term warranties.",
        features: [
          "Monocrystalline and polycrystalline options",
          "High heat tolerance for African climate",
          "25-year performance warranty",
          "Anti-reflective coated glass",
          "Corrosion-resistant aluminium frames",
          "Multiple wattage options available",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Solar Batteries",
        slug: "solar-batteries",
        image: "/images/possessed-photography-DqpPwAC3QVY-unsplash.jpg",
        desc: "Deep cycle batteries designed for daily solar charge and discharge cycles. Our batteries store daytime solar energy for reliable nighttime use, with long cycle life and maintenance options to suit every budget.",
        features: [
          "Deep cycle gel and AGM options",
          "1500+ cycle life span",
          "Maintenance-free designs available",
          "Various capacity options (100Ah - 200Ah)",
          "Built for daily solar cycling",
          "Compatible with all our systems",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Inverters",
        slug: "inverters",
        image: "/images/evgeniy-alyoshin-2ASQyjafflo-unsplash.jpg",
        desc: "Pure sine wave inverters that convert DC solar power into clean AC electricity. Safe for all electronics, from TVs and computers to fridges and medical equipment. Available in various capacities.",
        features: [
          "Pure sine wave output",
          "Safe for sensitive electronics",
          "Built-in overload protection",
          "Multiple capacity options",
          "LCD display for monitoring",
          "Quiet, fan-cooled operation",
        ],
      },
      {
        iconName: "CurrencyDollar",
        title: "Charge Controllers",
        slug: "charge-controllers",
        image: "/images/markus-winkler-VX0ZEZSwqnY-unsplash.jpg",
        desc: "MPPT and PWM charge controllers that protect your batteries and maximize solar panel efficiency. The brain of your solar system \u2014 regulating charge, preventing overcharge, and extending battery life.",
        features: [
          "MPPT and PWM technology options",
          "Overcharge and deep discharge protection",
          "Temperature compensation",
          "LCD status display",
          "Multiple amperage ratings",
          "Maximizes panel efficiency by up to 30%",
        ],
      },
    ],
    ctaTitle: "Not Sure Which System You Need?",
    ctaSubtitle:
      "Every home and business is different. Contact us for a free consultation and we will design a system matched to your power needs and budget.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Installations Across " },
      { text: "Zimbabwe", highlight: true },
    ],
    heroSubtitle:
      "From Harare homes to rural farms, see how our solar systems are powering lives across the country.",
    categories: [
      "All",
      "Home Systems",
      "Commercial",
      "Agriculture",
      "Institutional",
    ],
    items: [
      {
        id: 1,
        title: "Chitungwiza Family Home",
        category: "Home Systems",
        location: "Chitungwiza, Harare",
        year: "2024",
        image: "/images/vivint-solar-9CalgkSRZb8-unsplash.jpg",
        desc: "Complete home solar system installation for a family of six. Includes solar panel array, deep cycle batteries, LED lighting for four rooms, and a 32-inch Smart TV combo.",
        services: ["Solar Home Systems", "Solar Batteries"],
      },
      {
        id: 2,
        title: "Goromonzi Farm Irrigation",
        category: "Agriculture",
        location: "Goromonzi, Mashonaland East",
        year: "2024",
        image: "/images/newpowa-ZC4UmkQpMJM-unsplash.jpg",
        desc: "Solar-powered borehole irrigation system serving 5 hectares of vegetable farming. 330W panel, submersible pump, and 1000L tank with gravity-fed drip lines.",
        services: ["Solar Irrigation Systems", "Solar Panels"],
      },
      {
        id: 3,
        title: "Mbare Market Stalls",
        category: "Commercial",
        location: "Mbare, Harare",
        year: "2023",
        image: "/images/sungrow-emea-ceTSHQ0qars-unsplash.jpg",
        desc: "3kVA solar system powering eight market stalls with lighting, phone charging stations, and cold storage for perishable goods. Eliminated daily generator costs.",
        services: ["1.5kVA - 5kVA Systems", "Inverters"],
      },
      {
        id: 4,
        title: "Epworth Primary School",
        category: "Institutional",
        location: "Epworth, Harare",
        year: "2023",
        image: "/images/raze-solar-Q8V1EEvnJgk-unsplash.jpg",
        desc: "Solar electrification of a rural school with 12 classrooms. LED lighting, computer lab power, and admin office supply. Students can now study beyond daylight hours.",
        services: ["1.5kVA - 5kVA Systems", "Solar Panels"],
      },
      {
        id: 5,
        title: "Belgravia Office Complex",
        category: "Commercial",
        location: "Belgravia, Harare",
        year: "2024",
        image: "/images/manny-becerra-NgdhrwAx0J8-unsplash.jpg",
        desc: "5kVA commercial solar backup system for a professional office. Powers computers, printers, WiFi routers, and air conditioning during ZESA outages.",
        services: ["1.5kVA - 5kVA Systems", "Solar Batteries"],
      },
      {
        id: 6,
        title: "Ruwa Poultry Farm",
        category: "Agriculture",
        location: "Ruwa, Mashonaland East",
        year: "2023",
        image: "/images/benjamin-jopen-p2GuLUu79Rg-unsplash.jpg",
        desc: "Solar lighting and ventilation system for three poultry houses. Automated timer-controlled lighting improved egg production and reduced operating costs significantly.",
        services: ["Solar Home Systems", "Charge Controllers"],
      },
      {
        id: 7,
        title: "Glen View Residential Block",
        category: "Home Systems",
        location: "Glen View, Harare",
        year: "2022",
        image: "/images/danny-messina-OiPtLN9_04w-unsplash.jpg",
        desc: "Bulk installation of home solar kits for 15 households in a residential block. Coordinated installation completed in three days with community training session.",
        services: ["Solar Home Systems", "Solar Batteries"],
      },
      {
        id: 8,
        title: "Masvingo Bush Lodge",
        category: "Commercial",
        location: "Masvingo Province",
        year: "2024",
        image: "/images/harisankar-hp6Xj7LyZ1E-unsplash.jpg",
        desc: "Off-grid solar system for a 12-room eco-lodge. Replaced diesel generators entirely with a 5kVA solar array, saving over USD 800 per month in fuel costs.",
        services: ["1.5kVA - 5kVA Systems", "Inverters", "Solar Panels"],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "What Our Customers " },
      { text: "Say", highlight: true },
    ],
    heroSubtitle:
      "Real feedback from families, farmers, and businesses who made the switch to solar with Zambuko.",
    ratingBreakdown: [
      { stars: 5, count: 16 },
      { stars: 4, count: 6 },
      { stars: 3, count: 2 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    items: [
      {
        name: "Tatenda Moyo",
        role: "Homeowner, Chitungwiza",
        text: "Since installing the Zambuko Solar home system, we have not used a single candle. The kids study at night, we charge phones, and the TV runs perfectly. This was the best decision for our family.",
        rating: 5,
        date: "1 month ago",
        project: "Home Solar System",
      },
      {
        name: "Nyasha Garwe",
        role: "Farmer, Goromonzi",
        text: "The irrigation system paid for itself in one season. My borehole runs all day without diesel costs. Zambuko made solar farming a reality for me and my neighbors want the same system.",
        rating: 5,
        date: "2 months ago",
        project: "Solar Irrigation",
      },
      {
        name: "Farai Chikwanha",
        role: "Shop Owner, Mbare",
        text: "Load shedding used to cost me half my daily income. Now my shop stays open with lights, fridge, and phone charging station. The 3kVA system handles everything I need.",
        rating: 5,
        date: "2 months ago",
        project: "Commercial System",
      },
      {
        name: "Rudo Makoni",
        role: "Teacher, Epworth",
        text: "Zambuko Solar installed everything in one afternoon. Professional team, clean work, and they explained how to use everything. My home feels modern now.",
        rating: 5,
        date: "3 months ago",
        project: "Home Solar System",
      },
      {
        name: "Simba Dube",
        role: "Business Owner, Belgravia",
        text: "We upgraded to the 5kVA system for our office. Zero downtime during ZESA outages. The inverter handles everything silently and efficiently. Worth every dollar.",
        rating: 4,
        date: "3 months ago",
        project: "5kVA System",
      },
      {
        name: "Grace Mutsvairo",
        role: "Homeowner, Glen View",
        text: "The TV combo package was exactly what we needed. Solar panel, battery, and a smart TV all in one deal. The children are so happy and we save on electricity.",
        rating: 5,
        date: "4 months ago",
        project: "TV Combo System",
      },
      {
        name: "Tendai Mashingaidze",
        role: "Poultry Farmer, Ruwa",
        text: "Solar-powered lighting for my chicken runs has improved egg production noticeably. The system runs reliably every single day. Great after-sales support from the Zambuko team.",
        rating: 4,
        date: "4 months ago",
        project: "Agricultural Solar",
      },
      {
        name: "Chiedza Pfende",
        role: "Nurse, Highfield",
        text: "I was worried about the cost but Zambuko helped me find a system within my budget. Four months in and I have not looked back. Clean energy for my family at an affordable price.",
        rating: 5,
        date: "5 months ago",
        project: "Home Solar System",
      },
      {
        name: "Wellington Chirisa",
        role: "Lodge Owner, Masvingo",
        text: "We installed solar for our bush lodge. Guests love the eco-friendly angle and we save thousands on generators monthly. Zambuko understood our needs perfectly and delivered beyond expectations.",
        rating: 5,
        date: "5 months ago",
        project: "Commercial System",
      },
      {
        name: "Mercy Tafirenyika",
        role: "Homeowner, Budiriro",
        text: "Even on cloudy days the system performs well. The deep cycle battery stores more than enough power for the evening. Very impressed with the quality of Zambuko's products.",
        rating: 4,
        date: "6 months ago",
        project: "Home Solar System",
      },
      {
        name: "Blessing Gondo",
        role: "Mechanic, Mabvuku",
        text: "I power my workshop tools with the 3kVA system. No more waiting for ZESA to come back. My customers get served on time and my productivity has doubled since going solar.",
        rating: 5,
        date: "7 months ago",
        project: "3kVA System",
      },
      {
        name: "Patricia Hungwe",
        role: "Headmistress, Hatcliffe",
        text: "Zambuko Solar electrified our rural school. Students now have light to study and teachers can use laptops and projectors. This company truly cares about communities.",
        rating: 5,
        date: "8 months ago",
        project: "Institutional System",
      },
    ],
    ctaTitle: "Ready to Join Our Solar Family?",
    ctaSubtitle:
      "Hundreds of Zimbabweans have already made the switch. Get your free consultation today.",
    ctaCta: "Get Started",
    ctaWhatsappText:
      "Hello Zambuko Solar, I saw your customer reviews and I am interested in getting a solar system.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Get in " },
      { text: "Touch", highlight: true },
    ],
    heroSubtitle:
      "Visit us at either of our two Harare locations, call, WhatsApp, or fill in the form. We are here to help you find the right solar solution.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Tell us about your power needs and we will get back to you with a tailored solution.",
    locations: [
      {
        name: "J Way Mall Store",
        address: "Shop 5 J Way Mall, Along Julius Nyerere Way, Harare",
        phone: "+263 778 210 398",
        phoneRaw: "+263778210398",
      },
      {
        name: "Belgravia Office",
        address: "6 Aberdeen Road, Belgravia, Harare",
        phone: "+263 718 393 095",
        phoneRaw: "+263718393095",
      },
    ],
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Join the " },
      { text: "Solar", highlight: true },
      { text: " Revolution" },
    ],
    heroSubtitle:
      "Help us bring clean energy to every corner of Zimbabwe. We are always looking for passionate people who believe in the power of solar.",
    heroImage: "/images/raze-solar-Q8V1EEvnJgk-unsplash.jpg",
    cultureTitle: "Why Work at Zambuko Solar?",
    cultureItems: [
      {
        iconName: "Users",
        title: "Mission-Driven Work",
        desc: "Every system you help install changes a family's life. This is not just a job \u2014 it is meaningful work with visible impact.",
      },
      {
        iconName: "Rocket",
        title: "Growing Industry",
        desc: "Solar is the fastest-growing energy sector in Africa. Build your career in an industry with a limitless future.",
      },
      {
        iconName: "ShieldCheck",
        title: "Hands-On Training",
        desc: "Learn solar technology from experienced technicians. We invest in your skills and certifications.",
      },
    ],
    cultureImage: "/images/danny-messina-OiPtLN9_04w-unsplash.jpg",
    cultureImageAlt: "Zambuko Solar team working together on an installation",
    cultureTagline: "More Than a Job. A Mission.",
    openings: [
      {
        title: "Solar Installation Technician",
        type: "Full-Time",
        location: "Harare",
        desc: "Install and maintain residential and commercial solar systems. Electrical experience preferred. Training provided.",
      },
      {
        title: "Sales Consultant",
        type: "Full-Time",
        location: "Harare",
        desc: "Help customers find the right solar solution. Product knowledge training provided. Commission-based bonus structure.",
      },
      {
        title: "Customer Support Representative",
        type: "Full-Time",
        location: "Harare",
        desc: "Handle customer inquiries, schedule installations, and provide after-sales support via phone and WhatsApp.",
      },
    ],
    noOpenings: null,
    ctaTitle: "Do not See Your Role?",
    ctaSubtitle:
      "We are always interested in hearing from talented people. Send us your CV and we will keep you in mind for future opportunities.",
    ctaCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Affordable solar energy systems for Zimbabwe's homes, farms, and businesses. Power your life with clean, reliable energy from the sun.",
    copyright: "Zambuko Solar (Pvt) Ltd",
    copyrightExtra: "All rights reserved.",
  },
};

export default siteData;
