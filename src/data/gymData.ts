export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  admissionFee: number;
  description: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  badge?: string;
  features: string[];
}

export const GYM_CONFIG = {
  name: "Good Life Health Club",
  shortName: "Good Life",
  tagline: "Build Your Strength. Transform Your Life.",
  subtitle: "Elite strength training, modern equipment, and certified coaching in Kayamkulam.",
  admissionFee: 500,
  personalTrainerFee: 3000,
  
  contact: {
    phone: "+91 99610 20029",
    rawPhone: "9961020029",
    whatsapp: "9961020029",
    whatsappUrl: "https://wa.me/919961020029",
    email: "goodlifekylm@gmail.com",
    instagram: "https://www.instagram.com/goodlife_hc_?utm_source=qr&stkn=MnBxM3hjNDNrb3B3",
    instagramHandle: "@goodlife_hc_",
    address: "Good Life Health Club, Kayamkulam, Kerala, India",
    coordinates: "9.166573, 76.5241672",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.2315046736803!2d76.5241672!3d9.166573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061ddaed0e4011%3A0xcede80fa63303564!2sGood%20Life%20Health%20Club!5e1!3m2!1sen!2sin!4v1790595602227!5m2!1sen!2sin",
    mapDirectionsUrl: "https://maps.google.com/?cid=14906540673418573156",
  },

  timings: [
    { days: "Monday – Saturday", hours: "5:30 AM – 10:00 PM" },
    { days: "Sunday", hours: "6:00 AM – 12:00 PM" },
  ],

  stats: [
    { value: "10,000+", label: "Sq. Ft. Gym & Sports Arena" },
    { value: "4 Premium", label: "Dedicated Sports & Rec Amenities" },
    { value: "100+", label: "Heavy Iron & Machine Stations" },
    { value: "100%", label: "Certified Coaches & Match Referees" },
  ],

  sportsExpansion: {
    title: "New Sports & Recreation Zone",
    headline: "Expand Your Athletic Performance",
    announcement: "Welcome to the new sports and recreation zone at Good Life Health Club. We are expanding our facilities to include premium amenities, featuring professional badminton courts, dedicated cricket net practice facilities, a high quality basketball court, and a versatile open playing area.",
  },
};

export interface SportsAmenity {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  slotsAvailable: string;
  pricingNote: string;
}

export const SPORTS_AMENITIES: SportsAmenity[] = [
  {
    id: "badminton",
    name: "Professional Badminton Courts",
    category: "Racket Sports",
    shortDesc: "BWF-standard synthetic cushioned courts with anti-glare vertical LED stadium lighting.",
    longDesc: "Engineered for both fast-paced competitive rallies and leisure play. Featuring multi-layer shock-absorbing synthetic mats that protect knee and ankle joints, regulation-height competition net posts, non-slip court grip, and high vertical clearance.",
    image: "/src/assets/images/sports_badminton.jpg",
    specs: [
      { label: "Surface", value: "BWF-Standard Synthetic Cushioned Mat" },
      { label: "Lighting", value: "Glare-Free Linear LED Floodlights (>500 Lux)" },
      { label: "Clearance", value: "High Ceiling Clearance for Deep Clears" },
      { label: "Formats", value: "Singles & Doubles Regulation Markings" },
    ],
    highlights: [
      "Shock-absorbing multi-layer floor reducing joint fatigue",
      "Available for casual hourly play, monthly passes & coaching",
      "Racket & premium nylon/feather shuttlecock rentals",
      "Comfortable sideline bench seating for spectators and teams",
    ],
    slotsAvailable: "Morning (5:30 AM – 11:00 AM) & Evening (4:00 PM – 10:00 PM)",
    pricingNote: "Member discounts & hourly slot booking available",
  },
  {
    id: "cricket-nets",
    name: "Dedicated Cricket Net Practice",
    category: "Batting & Bowling Facility",
    shortDesc: "All-weather astroturf pitches with heavy-duty safety netting for pace, spin, and bowling machines.",
    longDesc: "Whether you are fine-tuning your front-foot drive or running in to bowl fast, our dedicated cricket nets provide true bounce and consistent pace. Designed for club cricketers, weekend teams, and academy coaching sessions.",
    image: "/src/assets/images/sports_cricket.jpg",
    specs: [
      { label: "Pitch Type", value: "High-Density All-Weather AstroTurf" },
      { label: "Enclosure", value: "Heavy-Gauge Taut Perimeter Netting" },
      { label: "Run-up Length", value: "Full Bowler Run-up Lane with Grip Flooring" },
      { label: "Machine Ready", value: "Compatible with Automated Bowling Machines" },
    ],
    highlights: [
      "True, predictable bounce replicating match-day turf pitches",
      "Fully enclosed lane preventing stray balls into surrounding areas",
      "Batting tees, target stumps, and protective equipment support",
      "Ideal for solo net practice, team practice, and 1-on-1 batting drills",
    ],
    slotsAvailable: "All-day access with advance slot reservation",
    pricingNote: "Hourly lane rental, group bookings & coach packages",
  },
  {
    id: "basketball-court",
    name: "High Quality Basketball Court",
    category: "Court Sports",
    shortDesc: "FIBA-standard shock-absorbent multi-sport acrylic flooring with heavy-duty breakaway hoops.",
    longDesc: "Built for hoopers who demand superior grip, true ball bounce, and pro aesthetics. Equipped with professional break-away rim systems, tempered glass backboards, clear perimeter boundaries, and 3v3 / full-court scrimmage setups.",
    image: "/src/assets/images/sports_basketball.jpg",
    specs: [
      { label: "Flooring", value: "Multi-Layer Shock-Absorbent Acrylic Court" },
      { label: "Hoop System", value: "Tempered Glass Backboard & Pro Break-Away Rim" },
      { label: "Markings", value: "Regulation 3-Point Arc, Key & Free-Throw Lines" },
      { label: "Lighting", value: "Arena-Grade High-Lux Overhead Floodlights" },
    ],
    highlights: [
      "Superior traction for quick cuts, crossovers, and safe landing",
      "Official basketballs available at sports desk",
      "Ideal for open pickup games, 3-on-3 tournaments, and shooting drills",
      "Integrated perimeter netting for active ball retention",
    ],
    slotsAvailable: "Daily open scrimmage hours & private court reservation",
    pricingNote: "Free member recreational hours & private match rentals",
  },
  {
    id: "open-playing-area",
    name: "Versatile Open Playing Area",
    category: "Multi-Sport & Functional Arena",
    shortDesc: "Expansive multi-purpose artificial turf arena for box cricket, cross-training, and group fitness.",
    longDesc: "A wide, versatile green turf zone tailored for dynamic group sports, agility conditioning, circuit bootcamp workouts, box cricket matches, and recreational play without rigid boundary restrictions.",
    image: "/src/assets/images/sports_open_area.jpg",
    specs: [
      { label: "Surface", value: "Premium Cushioned Green Sports Turf" },
      { label: "Safety", value: "High Perimeter Safety Netting & Soft Borders" },
      { label: "Equipment", value: "Agility Ladders, Cones, Plyo Boxes & Hurdles" },
      { label: "Capacity", value: "Accommodates 20+ Athletes Simultaneously" },
    ],
    highlights: [
      "Versatile configuration for box cricket, dodgeball, or sprint drills",
      "Weather-protected recreation area active morning through night",
      "Perfect complement to indoor gym lifting sessions",
      "Host corporate wellness games and community fitness tournaments",
    ],
    slotsAvailable: "Open daily for training circuits, team slots & community games",
    pricingNote: "Included for all members; private team bookings available",
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "student-monthly",
    name: "Student Monthly",
    price: 1000,
    period: "month",
    admissionFee: 500,
    description: "Exclusive subsidized tier for students up to age 17 with valid student ID.",
    badge: "Under 17 Special",
    features: [
      "Full gym floor & free weights access",
      "Cardio machines & functional zone",
      "Standard locker & shower facilities",
      "Initial fitness assessment & form review",
      "Student ID required at verification",
    ],
  },
  {
    id: "adult-monthly",
    name: "Adult Monthly",
    price: 1300,
    period: "month",
    admissionFee: 500,
    description: "Flexible month-to-month access for adults with zero long-term lock-in.",
    features: [
      "Unlimited gym floor access during all operating hours",
      "Heavy iron free-weights, squat racks & deadlift platforms",
      "Full cardio deck & machine circuits",
      "Locker & changing room access",
      "Personalized starter workout routine",
    ],
  },
  {
    id: "quarterly-3m",
    name: "3 Months Plan",
    price: 3500,
    period: "3 months",
    admissionFee: 0,
    isPopular: false,
    description: "Consistent 90-day training cycle to establish momentum and visible muscle growth.",
    badge: "Quarterly Focus",
    features: [
      "All Adult Monthly benefits included",
      "Save on regular monthly cost",
      "Admission fee waived on 3-month commitment",
      "Progressive overload workout chart",
      "Locker room & clean shower access",
    ],
  },
  {
    id: "half-yearly-6m",
    name: "6 Months Plan",
    price: 6500,
    period: "6 months",
    admissionFee: 0,
    isPopular: true,
    description: "Our most chosen commitment for serious body recomposition and athletic transformation.",
    badge: "Most Popular",
    features: [
      "All 3-Month benefits with higher savings",
      "Admission fee 100% waived",
      "Free bi-monthly fitness & body composition check",
      "Nutrition & high-protein diet guidelines",
      "Complimentary gym shaker bottle",
    ],
  },
  {
    id: "annual-1y",
    name: "1 Year Elite Plan",
    price: 12500,
    period: "year",
    admissionFee: 0,
    isBestValue: true,
    description: "Maximum commitment, unbeatable value. Only ₹1,041/month equivalent.",
    badge: "Best Value",
    features: [
      "Year-round unlimited gym access",
      "Admission fee completely waived",
      "1 Complimentary 1-on-1 Personal Training session",
      "Priority equipment guidance & form corrections",
      "Diet consultation & macro breakdown sheet",
      "Free membership freeze for up to 30 days (travel/medical)",
    ],
  },
];

export const PERSONAL_TRAINER_INFO = {
  fee: 3000,
  period: "month",
  title: "Personal Trainer Add-on",
  description: "Dedicated 1-on-1 certified coaching tailored to your exact physique goals, biomechanics, and nutrition.",
  benefits: [
    "Dedicated daily 1-on-1 technique & form supervision",
    "Tailored strength & hypertrophy split",
    "Custom meal plan & macro targets calculation",
    "Weekly body measurement tracking & accountability",
    "Injury prevention & mobility conditioning",
  ],
};
