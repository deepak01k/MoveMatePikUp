/**
 * MoveMate PikUp - Business Configuration
 * Live pickup base: Bokaro & Dhanbad.
 * Delivery scope: Anywhere in Jharkhand, Bihar & West Bengal.
 */

const BUSINESS_CONFIG = {
  business: {
    name: "MoveMate PikUp",
    tagline: "Live Pickup in Bokaro & Dhanbad — Delivering Across Jharkhand, Bihar & West Bengal",
    shortDescription: "On-demand goods pickup stationed live in Bokaro and Dhanbad. Safe local shifting and fast express transport to any destination across Jharkhand, Bihar, and West Bengal.",
    phone: "+91 9113182205",
    phoneRaw: "tel:+919113182205",
    whatsappNumber: "919113182205", // E.164 format without + for wa.me links
    whatsappDisplay: "+91 9113182205",
    whatsappDefaultMessage: "Namaste MoveMate! I need a pickup from Bokaro/Dhanbad.",
    email: "dispatch@movematepikup.com",
    headquarters: "Bokaro & Dhanbad Fleet Stations (Jharkhand)",
    operatingHours: {
      days: "Monday – Sunday",
      hours: "7:00 AM – 9:00 PM IST",
      note: "Live instant local dispatch in Bokaro & Dhanbad. Same-day & overnight trips across Jharkhand, Bihar & WB."
    },
    geo: {
      region: "IN-JH;IN-BR;IN-WB",
      placename: "Bokaro Steel City, Dhanbad",
      latitude: "23.7957", // Dhanbad coordinates
      longitude: "86.4304",
      serviceNote: "Live pickup in Bokaro & Dhanbad; deliveries across Jharkhand, Bihar, and West Bengal"
    }
  },

  trustBadges: [
    { title: "Live Fleet in Bokaro & Dhanbad", desc: "Vehicles stationed locally for 20–40 min rapid arrival", icon: "location_on" },
    { title: "Careful Handling", desc: "Padded quilts, tarpaulins & heavy ropes on every run", icon: "shield_with_heart" },
    { title: "Transparent Upfront Rates in ₹", desc: "Guaranteed flat quotes with zero hidden toll/driver fees", icon: "receipt_long" },
    { title: "Tri-State Delivery Reach", desc: "Delivering to any town or district in Jharkhand, Bihar & WB", icon: "alt_route" }
  ],

  services: [
    {
      id: "furniture-appliances",
      title: "Furniture & Home Appliances Shifting",
      badge: "Most Requested",
      icon: "chair",
      shortSummary: "Safe, damage-free shifting for sofas, steel almirahs, double-door fridges, and washing machines.",
      itemsHandled: [
        "Steel Godrej almirahs & wooden wardrobes",
        "Sofa sets, diwans & recliner chairs",
        "Double-door refrigerators & deep freezers",
        "Washing machines & desert air coolers",
        "Double beds, mattresses & dining tables"
      ],
      loadingAssistance: "1 Driver loading assistance included. 2-person helper crew available for stairs.",
      limitations: "Single items must not exceed 250kg unless arranged in advance.",
      typicalPrice: "From ₹699 local flat in Bokaro/Dhanbad"
    },
    {
      id: "store-pickup",
      title: "Store & Wholesale Market Pickup",
      badge: "Same-Day Dispatch",
      icon: "storefront",
      shortSummary: "Direct pickup from local showrooms, hardware markets, electronic malls, OLX, and Marketplace.",
      itemsHandled: [
        "Electronics from Croma, Reliance Digital, Vijay Sales",
        "Hardware, sanitaryware & electricals from Bank More / Chas mandis",
        "OLX & Facebook Marketplace verified collections in Bokaro & Dhanbad",
        "Bulk flatpack furniture & appliance cartons"
      ],
      loadingAssistance: "We inspect condition upon pickup, verify invoice/receipt, and handle dock loading.",
      limitations: "Buyer must ensure item is paid for prior to collection.",
      typicalPrice: "From ₹599 local flat in Bokaro/Dhanbad"
    },
    {
      id: "small-business",
      title: "Commercial & Industrial B2B Cargo",
      badge: "Priority Invoicing",
      icon: "inventory_2",
      shortSummary: "Industrial parts, machinery equipment, steel fabrication, and trade stock transport from Bokaro/Dhanbad.",
      itemsHandled: [
        "Industrial fabrication parts & engineering equipment",
        "Hardware, bearings, motors & conveyor components",
        "Merchant wholesale retail stock & FMCG cartons",
        "Event, exhibition & tent house equipment"
      ],
      loadingAssistance: "High-deck loading, e-Way bill compliance, GST invoices, and scheduled routes.",
      limitations: "Maximum payload up to 3,500kg per trip.",
      typicalPrice: "From ₹999 local / custom inter-city"
    },
    {
      id: "fragile-special",
      title: "Fragile & High-Care Items",
      badge: "High Care",
      icon: "local_shipping",
      shortSummary: "Quilted wrapping, gentle transport, and strict tie-down safety for sensitive goods.",
      itemsHandled: [
        "Large 55\"+ Smart TVs & audio systems",
        "Wooden puja mandirs & sacred idols",
        "Decorative mirrors, glass display cabinets & art",
        "Delicate lab or medical diagnostic gear"
      ],
      loadingAssistance: "Multi-point ratchet tie-downs, thick moving pads, corner protectors.",
      limitations: "No hazardous chemicals, volatile fuels, or prohibited contraband.",
      typicalPrice: "From ₹899 local flat"
    }
  ],

  coverage: {
    model: "Originating in Bokaro & Dhanbad to anywhere in Jharkhand, Bihar & West Bengal",
    livePickupBases: [
      {
        city: "Bokaro Steel City",
        pinRange: "827001 – 827014",
        localHubs: ["Sector 1 to 12", "Chas", "City Centre", "Co-operative Colony", "Bokaro Thermal", "Bermo", "Phusro", "Gomia", "Chandankiyari"],
        pickupETA: "20–35 mins live dispatch"
      },
      {
        city: "Dhanbad",
        pinRange: "826001 – 828205",
        localHubs: ["Bank More", "Saraidhela", "Hirapur", "Jharia", "Katras", "Govindpur", "Nirsa", "Sindri", "Putki", "Barwadda", "Gomoh"],
        pickupETA: "20–40 mins live dispatch"
      }
    ],
    deliveryDestinations: [
      {
        territory: "Across Jharkhand",
        tag: "Intra-State Express",
        popularDestinations: ["Ranchi (Capital)", "Jamshedpur (Tatanagar)", "Hazaribagh", "Giridih", "Deoghar", "Ramgarh", "Koderma", "Chaibasa", "Daltonganj"],
        typicalTransit: "Same-Day Door-to-Door Delivery"
      },
      {
        territory: "Across West Bengal",
        tag: "Border Direct Linehaul",
        popularDestinations: ["Asansol (45 mins away)", "Durgapur", "Raniganj", "Purulia", "Bankura", "Kolkata / Howrah", "Kharagpur", "Bardhaman", "Siliguri"],
        typicalTransit: "Same-Day to Asansol/Durgapur / Overnight to Kolkata"
      },
      {
        territory: "Across Bihar",
        tag: "Highway Freight Corridor",
        popularDestinations: ["Gaya", "Patna (Capital)", "Bihar Sharif", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Begusarai", "Purnia", "Arrah"],
        typicalTransit: "Same-Day / Next-Morning Scheduled"
      }
    ],
    supportedOriginPins: [
      // Dhanbad & Bokaro PINs
      "826001", "826002", "826003", "826004", "826005", "827001", "827002", "827003", "827004", "827006",
      "827009", "827010", "827011", "827012", "827013", "827014", "828101", "828104", "828109", "828111",
      "828113", "828116", "828122", "828129", "828201", "828205"
    ]
  },

  fleet: [
    {
      model: "Tata Ace / Mahindra Bolero Maxi (1-Tonne)",
      badge: "Live in Bokaro & Dhanbad",
      payload: "1,000 kg",
      volume: "120 cu ft",
      dimensions: "2.5m L × 1.5m W × 1.5m H",
      bestFor: "Local city shifting in Dhanbad/Bokaro, single room moving, almirah, fridge, washing machine, market stock.",
      features: ["All-weather tarpaulin cover", "Agile in crowded bazaar lanes", "Low loading deck", "20-40 min live arrival"]
    },
    {
      model: "Mahindra Bolero Pickup / Tata 407 (2-Tonne)",
      badge: "Regional Inter-City",
      payload: "2,000 kg",
      volume: "350 cu ft",
      dimensions: "3.5m L × 1.8m W × 1.9m H",
      bestFor: "Bokaro/Dhanbad to Ranchi, Jamshedpur, Asansol, Durgapur, Gaya, or Patna. Full 1-2 BHK house shifting & machinery.",
      features: ["Enclosed weatherproof container", "High-deck capacity", "Internal tie-down ropes", "Inter-state permit ready"]
    },
    {
      model: "Eicher / Tata 14ft - 17ft Closed Container (3.5-Tonne)",
      badge: "Inter-State Freight",
      payload: "3,500 kg",
      volume: "650 cu ft",
      dimensions: "5.2m L × 2.1m W × 2.2m H",
      bestFor: "Direct industrial consignments to Kolkata, Patna, Siliguri, or full corporate relocations.",
      features: ["Lockable steel container", "National permit with e-Way bill compliance", "GPS vehicle tracking", "Heavy machinery ready"]
    }
  ],

  howItWorks: [
    {
      step: 1,
      title: "Pickup in Bokaro or Dhanbad",
      desc: "Call, WhatsApp, or submit your enquiry with your pickup location in Bokaro or Dhanbad and your destination anywhere in Jharkhand, Bihar, or WB.",
      icon: "pin_drop"
    },
    {
      step: 2,
      title: "Get Guaranteed Upfront Price in ₹",
      desc: "We check our live vehicle queue in Bokaro/Dhanbad and give you a transparent flat rate quote in ₹ with zero hidden toll fees.",
      icon: "price_check"
    },
    {
      step: 3,
      title: "Prompt Arrival & Direct Delivery",
      desc: "Our verified driver reaches your Bokaro/Dhanbad location within minutes, safely secures your goods, and delivers straight to your drop address.",
      icon: "local_shipping"
    }
  ],

  faqs: [
    {
      q: "Where does MoveMate PikUp provide live pickup services?",
      a: "Currently, our live fleet is permanently stationed and operational in Bokaro and Dhanbad. We provide immediate local pickup across Bokaro Steel City (Chas, Sector 1–12, Bermo, Phusro) and Dhanbad (Bank More, Saraidhela, Jharia, Katras, Govindpur, Nirsa, Sindri)."
    },
    {
      q: "Can you deliver from Bokaro or Dhanbad to other cities in Jharkhand, Bihar, or West Bengal?",
      a: "Yes, absolutely! While pickups must originate in Bokaro or Dhanbad (or their surrounding industrial belt), we deliver to ANY town, city, or district across Jharkhand (Ranchi, Jamshedpur, Hazaribagh, Deoghar), West Bengal (Asansol, Durgapur, Kolkata, Purulia, Siliguri), and Bihar (Gaya, Patna, Bhagalpur, Muzaffarpur)."
    },
    {
      q: "How fast can a vehicle arrive for pickup in Bokaro or Dhanbad?",
      a: "For local pickups within Bokaro Steel City, Chas, Dhanbad city, Bank More, or Saraidhela, our vehicles typically arrive within 20 to 45 minutes of booking confirmation. For regional or inter-state trips, you can book same-day or schedule in advance."
    },
    {
      q: "What types of goods can be moved?",
      a: "We move household furniture (steel Godrej almirahs, beds, sofas, dining tables), appliances (fridges, washing machines, coolers), retail purchases, trade stock, wholesale merchant goods, and industrial engineering parts. We do NOT transport hazardous chemicals, illegal contraband, gas cylinders, or livestock."
    },
    {
      q: "Do you offer helpers for loading and unloading?",
      a: "Yes. Every standard booking includes 1 experienced driver who assists with ground-floor loading. If you have heavy items (such as steel almirahs or heavy fridges) or multi-floor stairs without a lift, you can request our 2-person helper crew."
    },
    {
      q: "How are inter-state trips to West Bengal or Bihar handled?",
      a: "Dhanbad and Bokaro are directly connected to West Bengal via the Grand Trunk Road (NH 19) — Asansol is just 45 minutes from Dhanbad, and Durgapur is about 1.5 hours away. Trips to Bihar (via NH 20 / NH 22) to Gaya and Patna are handled daily with full e-Way bill and commercial permit compliance."
    }
  ]
};

// Export for module or browser window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BUSINESS_CONFIG;
} else if (typeof window !== 'undefined') {
  window.BUSINESS_CONFIG = BUSINESS_CONFIG;
}
