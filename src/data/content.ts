import type { Bi } from "@/i18n/translations";
import { b } from "@/i18n/translations";

import heroImg from "@/assets/hero.jpg";
import ideaCandles from "@/assets/idea-candles.jpg";
import ideaPickles from "@/assets/idea-pickles.jpg";
import ideaTailoring from "@/assets/idea-tailoring.jpg";
import ideaJewelry from "@/assets/idea-jewelry.jpg";
import ideaGifts from "@/assets/idea-gifts.jpg";
import ideaNursery from "@/assets/idea-nursery.jpg";
import ideaCrochet from "@/assets/idea-crochet.jpg";
import ideaPaintings from "@/assets/idea-paintings.jpg";
import ideaDecor from "@/assets/idea-decor.jpg";
import p1Img from "@/assets/p1.jpg";
import p2Img from "@/assets/p2.jpg";
import p3Img from "@/assets/p3.jpg";
import p4Img from "@/assets/p4.jpg";
import p5Img from "@/assets/p5.jpg";
import p6Img from "@/assets/p6.jpg";
import p7Img from "@/assets/p7.jpg";
import p8Img from "@/assets/p8.jpg";
import p9Img from "@/assets/p9.jpg";
import storyLakshmi from "@/assets/story-lakshmi.jpg";
import storyRamya from "@/assets/story-ramya.jpg";
import storyShg from "@/assets/story-shg.jpg";
import storyArjun from "@/assets/story-arjun.jpg";
import womenImg from "@/assets/women.jpg";
import youthImg from "@/assets/youth.jpg";
import schemesImg from "@/assets/schemes.jpg";
import contactImg from "@/assets/contact.jpg";

export const sectionImages = {
  hero: heroImg,
  women: womenImg,
  youth: youthImg,
  schemes: schemesImg,
  contact: contactImg,
};

export interface BusinessIdea {
  id: string;
  icon: string;
  image: string;
  title: Bi;
  tagline: Bi;
  cost: Bi;
  skill: Bi;
  earning: Bi;
  overview: Bi;
  materials: Bi[];
  steps: Bi[];
  pricing: Bi;
  marketing: Bi[];
  expected: Bi;
  challenges: Bi[];
  tips: Bi[];
}

export const businessIdeas: BusinessIdea[] = [
  {
    id: "candles",
    icon: "🕯️",
    image: ideaCandles,
    title: b("Handmade Candles", "చేతితో తయారు చేసిన కొవ్వొత్తులు"),
    tagline: b("Scented & decorative candles", "సువాసన & అలంకరణ కొవ్వొత్తులు"),
    cost: b("₹3,000 – ₹8,000", "₹3,000 – ₹8,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹10,000 – ₹30,000 / month", "₹10,000 – ₹30,000 / నెల"),
    overview: b(
      "Handmade candles are a low-cost, high-demand product perfect for festivals, gifting and home décor. You can start from your kitchen and scale into a recognizable local brand.",
      "చేతితో తయారు చేసిన కొవ్వొత్తులు తక్కువ ఖర్చుతో, ఎక్కువ గిరాకీ ఉన్న ఉత్పత్తి. పండుగలు, బహుమతులు మరియు ఇంటి అలంకరణకు అనువైనవి. మీ వంటగది నుండే ప్రారంభించి స్థానిక బ్రాండ్‌గా ఎదగవచ్చు.",
    ),
    materials: [
      b("Soy or paraffin wax", "సోయా లేదా పారాఫిన్ మైనం"),
      b("Cotton wicks", "పత్తి వత్తులు"),
      b("Fragrance oils", "సువాసన నూనెలు"),
      b("Color dyes", "రంగు డైలు"),
      b("Glass jars / moulds", "గాజు జాడీలు / మోల్డ్‌లు"),
    ],
    steps: [
      b("Melt the wax in a double boiler.", "డబుల్ బాయిలర్‌లో మైనాన్ని కరిగించండి."),
      b("Add color and fragrance oil.", "రంగు మరియు సువాసన నూనె కలపండి."),
      b("Secure the wick in the jar.", "జాడీలో వత్తిని అమర్చండి."),
      b("Pour wax and let it set for 24 hours.", "మైనాన్ని పోసి 24 గంటలు ఆరనివ్వండి."),
      b("Trim the wick and package neatly.", "వత్తిని కత్తిరించి శుభ్రంగా ప్యాక్ చేయండి."),
    ],
    pricing: b(
      "Price small candles at ₹120–₹250 and gift sets at ₹400–₹800 depending on size and fragrance.",
      "చిన్న కొవ్వొత్తులను ₹120–₹250 కు, గిఫ్ట్ సెట్‌లను పరిమాణం, సువాసనను బట్టి ₹400–₹800 కు అమ్మండి.",
    ),
    marketing: [
      b("Post styled photos on Instagram & WhatsApp Status.", "ఇన్‌స్టాగ్రామ్ & వాట్సాప్ స్టేటస్‌లో ఫోటోలు పెట్టండి."),
      b("Sell gift bundles during festival seasons.", "పండుగ సీజన్‌లలో గిఫ్ట్ బండిల్‌లు అమ్మండి."),
      b("Partner with local gift shops.", "స్థానిక గిఫ్ట్ షాపులతో భాగస్వామ్యం చేయండి."),
    ],
    expected: b(
      "A consistent seller can earn ₹10,000–₹30,000 per month, more during Diwali and wedding seasons.",
      "క్రమం తప్పని విక్రేత నెలకు ₹10,000–₹30,000 సంపాదించవచ్చు, దీపావళి, వివాహ సీజన్‌లలో మరింత ఎక్కువ.",
    ),
    challenges: [
      b("Wax may crack if cooled too fast.", "త్వరగా చల్లారితే మైనం పగులవచ్చు."),
      b("Finding consistent fragrance suppliers.", "నమ్మకమైన సువాసన సరఫరాదారులను కనుగొనడం."),
    ],
    tips: [
      b("Focus on a signature scent customers remember.", "కస్టమర్లు గుర్తుంచుకునే ప్రత్యేక సువాసనపై దృష్టి పెట్టండి."),
      b("Reuse and recycle jars to lower costs.", "ఖర్చు తగ్గించడానికి జాడీలను తిరిగి వాడండి."),
    ],
  },
  {
    id: "pickles",
    icon: "🥒",
    image: ideaPickles,
    title: b("Homemade Pickles", "ఇంట్లో తయారు చేసిన ఊరగాయలు"),
    tagline: b("Traditional flavours, sealed fresh", "సంప్రదాయ రుచులు, తాజాగా ప్యాక్"),
    cost: b("₹2,000 – ₹6,000", "₹2,000 – ₹6,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹8,000 – ₹25,000 / month", "₹8,000 – ₹25,000 / నెల"),
    overview: b(
      "Authentic homemade pickles have huge demand among families who miss traditional taste. With good hygiene and packaging, this becomes a trusted repeat-order business.",
      "సంప్రదాయ రుచిని కోరుకునే కుటుంబాల్లో ఇంటి ఊరగాయలకు భారీ గిరాకీ ఉంది. మంచి శుభ్రత, ప్యాకింగ్‌తో ఇది నమ్మకమైన పునరావృత ఆర్డర్ వ్యాపారం అవుతుంది.",
    ),
    materials: [
      b("Fresh mango / lime / vegetables", "తాజా మామిడి / నిమ్మ / కూరగాయలు"),
      b("Quality spices & oil", "నాణ్యమైన మసాలాలు & నూనె"),
      b("Sterilized glass jars", "శుభ్రం చేసిన గాజు జాడీలు"),
      b("Labels & seals", "లేబుళ్లు & సీళ్లు"),
    ],
    steps: [
      b("Clean and dry the produce completely.", "కూరగాయలను శుభ్రం చేసి పూర్తిగా ఆరనివ్వండి."),
      b("Mix with spices and salt.", "మసాలాలు, ఉప్పుతో కలపండి."),
      b("Add heated oil and rest for 2–3 days.", "వేడి చేసిన నూనె కలిపి 2–3 రోజులు నిల్వ చేయండి."),
      b("Fill into sterilized jars.", "శుభ్రం చేసిన జాడీల్లో నింపండి."),
      b("Label with date and ingredients.", "తేదీ, పదార్థాలతో లేబుల్ వేయండి."),
    ],
    pricing: b(
      "Sell 250g jars at ₹120–₹200 and 1kg jars at ₹400–₹650.",
      "250g జాడీలను ₹120–₹200 కు, 1kg జాడీలను ₹400–₹650 కు అమ్మండి.",
    ),
    marketing: [
      b("Offer free tasting samples to neighbours.", "ఇరుగుపొరుగు వారికి ఉచిత రుచి శాంపిళ్లు ఇవ్వండి."),
      b("Build a WhatsApp order group.", "వాట్సాప్ ఆర్డర్ గ్రూప్ ఏర్పాటు చేయండి."),
      b("Highlight 'no preservatives' on labels.", "లేబుళ్లపై 'ప్రిజర్వేటివ్‌లు లేవు' అని చూపండి."),
    ],
    expected: b(
      "Regular sellers earn ₹8,000–₹25,000 monthly with festival peaks.",
      "క్రమ విక్రేతలు నెలకు ₹8,000–₹25,000 సంపాదిస్తారు, పండుగల్లో ఎక్కువ.",
    ),
    challenges: [
      b("Maintaining shelf life and hygiene.", "నిల్వ సామర్థ్యం, శుభ్రత నిర్వహించడం."),
      b("Seasonal availability of raw materials.", "ముడి పదార్థాల కాలానుగుణ లభ్యత."),
    ],
    tips: [
      b("Keep consistent taste in every batch.", "ప్రతి బ్యాచ్‌లో రుచిని స్థిరంగా ఉంచండి."),
      b("Use airtight, leak-proof packaging.", "గాలి చొరని, లీక్ కాని ప్యాకింగ్ వాడండి."),
    ],
  },
  {
    id: "tailoring",
    icon: "🧵",
    image: ideaTailoring,
    title: b("Tailoring & Stitching", "కుట్టు పని"),
    tagline: b("Custom clothing & alterations", "కస్టమ్ దుస్తులు & మార్పులు"),
    cost: b("₹5,000 – ₹15,000", "₹5,000 – ₹15,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹12,000 – ₹35,000 / month", "₹12,000 – ₹35,000 / నెల"),
    overview: b(
      "Tailoring offers steady, repeat income with one machine and skill. Blouses, school uniforms, alterations and boutique stitching are always in demand.",
      "ఒక మెషీన్, నైపుణ్యంతో కుట్టు పని స్థిరమైన పునరావృత ఆదాయం ఇస్తుంది. జాకెట్లు, యూనిఫారాలు, మార్పులు, బొటిక్ కుట్లకు ఎల్లప్పుడూ గిరాకీ ఉంది.",
    ),
    materials: [
      b("Sewing machine", "కుట్టు మెషీన్"),
      b("Threads & needles", "దారాలు & సూదులు"),
      b("Measuring tape & scissors", "కొలత టేప్ & కత్తెర"),
      b("Fabric stock", "వస్త్రాల నిల్వ"),
    ],
    steps: [
      b("Learn accurate measurements.", "ఖచ్చితమైన కొలతలు నేర్చుకోండి."),
      b("Practice basic stitches and patterns.", "ప్రాథమిక కుట్లు, నమూనాలు సాధన చేయండి."),
      b("Offer blouse & alteration services first.", "ముందుగా జాకెట్, మార్పుల సేవలు ఇవ్వండి."),
      b("Expand to boutique designs.", "బొటిక్ డిజైన్‌లకు విస్తరించండి."),
    ],
    pricing: b(
      "Charge ₹150–₹400 per blouse, ₹50–₹200 for alterations, more for designer work.",
      "జాకెట్‌కు ₹150–₹400, మార్పులకు ₹50–₹200, డిజైనర్ పనికి ఎక్కువ వసూలు చేయండి.",
    ),
    marketing: [
      b("Display finished samples at home.", "పూర్తయిన నమూనాలను ఇంట్లో ప్రదర్శించండి."),
      b("Take orders via WhatsApp catalogue.", "వాట్సాప్ క్యాటలాగ్ ద్వారా ఆర్డర్లు తీసుకోండి."),
      b("Offer doorstep pickup for fabric.", "వస్త్రాలకు ఇంటి వద్ద పికప్ ఇవ్వండి."),
    ],
    expected: b(
      "₹12,000–₹35,000 monthly; higher during wedding and festival seasons.",
      "నెలకు ₹12,000–₹35,000; వివాహ, పండుగ సీజన్‌లలో ఎక్కువ.",
    ),
    challenges: [
      b("Meeting deadlines during peak season.", "రద్దీ సీజన్‌లో గడువులు పాటించడం."),
      b("Pricing custom work fairly.", "కస్టమ్ పనికి సరైన ధర నిర్ణయించడం."),
    ],
    tips: [
      b("Build a loyal repeat customer base.", "నమ్మకమైన పునరావృత కస్టమర్లను సంపాదించండి."),
      b("Keep a finishing-quality standard.", "ఫినిషింగ్ నాణ్యతను కాపాడుకోండి."),
    ],
  },
  {
    id: "jewelry",
    icon: "💍",
    image: ideaJewelry,
    title: b("Jewelry Making", "ఆభరణాల తయారీ"),
    tagline: b("Handcrafted & terracotta jewelry", "చేతి & టెర్రకోట ఆభరణాలు"),
    cost: b("₹2,500 – ₹7,000", "₹2,500 – ₹7,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹9,000 – ₹28,000 / month", "₹9,000 – ₹28,000 / నెల"),
    overview: b(
      "Handmade jewelry — terracotta, thread, beads — is trendy and affordable. Great margins and very popular with younger buyers.",
      "చేతి ఆభరణాలు — టెర్రకోట, దారం, పూసలు — ట్రెండీ, చౌకగా ఉంటాయి. మంచి లాభాలు, యువ కొనుగోలుదారుల్లో ప్రాచుర్యం.",
    ),
    materials: [
      b("Beads, threads, clay", "పూసలు, దారాలు, మట్టి"),
      b("Hooks & findings", "హుక్‌లు & ఫైండింగ్‌లు"),
      b("Paints & sealant", "పెయింట్‌లు & సీలెంట్"),
    ],
    steps: [
      b("Choose a style: terracotta, beadwork, threadwork.", "శైలి ఎంచుకోండి: టెర్రకోట, పూస పని, దారం పని."),
      b("Shape, paint and seal the pieces.", "ఆకారం, పెయింట్, సీల్ చేయండి."),
      b("Assemble earrings & necklaces.", "చెవి దుద్దులు, హారాలు తయారు చేయండి."),
      b("Photograph and list each design.", "ప్రతి డిజైన్ ఫోటో తీసి జాబితా చేయండి."),
    ],
    pricing: b(
      "Earrings ₹80–₹250, necklace sets ₹300–₹900.",
      "చెవి దుద్దులు ₹80–₹250, హారాల సెట్‌లు ₹300–₹900.",
    ),
    marketing: [
      b("Sell at local exhibitions & melas.", "స్థానిక ప్రదర్శనలు & మేళాల్లో అమ్మండి."),
      b("Use reels to show the making process.", "తయారీ ప్రక్రియను రీల్స్‌లో చూపండి."),
    ],
    expected: b("₹9,000–₹28,000 monthly with good designs.", "మంచి డిజైన్‌లతో నెలకు ₹9,000–₹28,000."),
    challenges: [
      b("Standing out in a crowded market.", "రద్దీ మార్కెట్‌లో ప్రత్యేకంగా నిలవడం."),
      b("Fragile items need careful packing.", "పెళుసు వస్తువులకు జాగ్రత్త ప్యాకింగ్."),
    ],
    tips: [
      b("Follow seasonal colour trends.", "కాలానుగుణ రంగు ట్రెండ్‌లను అనుసరించండి."),
      b("Offer customization for occasions.", "సందర్భాలకు కస్టమైజేషన్ ఇవ్వండి."),
    ],
  },
  {
    id: "gifts",
    icon: "🎁",
    image: ideaGifts,
    title: b("Customized Gifts", "కస్టమైజ్డ్ బహుమతులు"),
    tagline: b("Personalized hampers & frames", "వ్యక్తిగత హాంపర్‌లు & ఫ్రేమ్‌లు"),
    cost: b("₹2,000 – ₹6,000", "₹2,000 – ₹6,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹8,000 – ₹26,000 / month", "₹8,000 – ₹26,000 / నెల"),
    overview: b(
      "Personalized gifts are a booming market for birthdays, weddings and corporate events. Creativity matters more than capital.",
      "పుట్టినరోజులు, వివాహాలు, కార్పొరేట్ ఈవెంట్‌లకు వ్యక్తిగత బహుమతులు పెరుగుతున్న మార్కెట్. పెట్టుబడి కంటే సృజనాత్మకత ముఖ్యం.",
    ),
    materials: [
      b("Frames, mugs, boxes", "ఫ్రేమ్‌లు, మగ్‌లు, బాక్స్‌లు"),
      b("Printing / craft supplies", "ప్రింటింగ్ / క్రాఫ్ట్ సామాగ్రి"),
      b("Decorative wrapping", "అలంకరణ ర్యాపింగ్"),
    ],
    steps: [
      b("Collect customer photos & messages.", "కస్టమర్ ఫోటోలు, సందేశాలు సేకరించండి."),
      b("Design and assemble the gift.", "బహుమతిని డిజైన్ చేసి తయారు చేయండి."),
      b("Wrap attractively and deliver.", "ఆకర్షణీయంగా ప్యాక్ చేసి అందించండి."),
    ],
    pricing: b("Hampers ₹300–₹1,500 based on contents.", "హాంపర్‌లు కంటెంట్ బట్టి ₹300–₹1,500."),
    marketing: [
      b("Showcase event-themed packages.", "ఈవెంట్ థీమ్ ప్యాకేజీలను చూపండి."),
      b("Partner with photographers & event planners.", "ఫోటోగ్రాఫర్లు, ఈవెంట్ ప్లానర్‌లతో భాగస్వామ్యం."),
    ],
    expected: b("₹8,000–₹26,000 monthly with event orders.", "ఈవెంట్ ఆర్డర్లతో నెలకు ₹8,000–₹26,000."),
    challenges: [
      b("Last-minute custom requests.", "చివరి నిమిషంలో కస్టమ్ అభ్యర్థనలు."),
      b("Sourcing varied materials.", "వివిధ పదార్థాల సేకరణ."),
    ],
    tips: [
      b("Build templates to deliver faster.", "వేగంగా అందించడానికి టెంప్లేట్‌లు తయారు చేయండి."),
      b("Upsell add-ons like cards & flowers.", "కార్డులు, పూల వంటివి అదనంగా అమ్మండి."),
    ],
  },
  {
    id: "nursery",
    icon: "🌱",
    image: ideaNursery,
    title: b("Plant Nursery", "మొక్కల నర్సరీ"),
    tagline: b("Indoor plants & saplings", "ఇండోర్ మొక్కలు & మొలకలు"),
    cost: b("₹4,000 – ₹12,000", "₹4,000 – ₹12,000"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹10,000 – ₹30,000 / month", "₹10,000 – ₹30,000 / నెల"),
    overview: b(
      "Demand for indoor and balcony plants is rising in towns and cities. A small backyard can grow into a profitable green business.",
      "పట్టణాలు, నగరాల్లో ఇండోర్, బాల్కనీ మొక్కలకు గిరాకీ పెరుగుతోంది. చిన్న పెరడు లాభదాయక గ్రీన్ వ్యాపారంగా మారవచ్చు.",
    ),
    materials: [
      b("Seeds & saplings", "విత్తనాలు & మొలకలు"),
      b("Pots & soil mix", "కుండీలు & మట్టి మిశ్రమం"),
      b("Fertilizer & tools", "ఎరువులు & పనిముట్లు"),
    ],
    steps: [
      b("Start with easy indoor plants.", "సులభమైన ఇండోర్ మొక్కలతో ప్రారంభించండి."),
      b("Propagate and maintain healthy stock.", "ఆరోగ్యకర మొక్కలను పెంచి నిర్వహించండి."),
      b("Pot attractively for resale.", "విక్రయానికి ఆకర్షణీయంగా కుండీలో పెట్టండి."),
    ],
    pricing: b("Small plants ₹50–₹200, decorative pots ₹250–₹800.", "చిన్న మొక్కలు ₹50–₹200, అలంకరణ కుండీలు ₹250–₹800."),
    marketing: [
      b("Offer plant-care guidance to buyers.", "కొనుగోలుదారులకు మొక్కల సంరక్షణ సలహాలు ఇవ్వండి."),
      b("Sell at weekend markets.", "వారాంత మార్కెట్‌లలో అమ్మండి."),
    ],
    expected: b("₹10,000–₹30,000 monthly with steady stock.", "స్థిర నిల్వతో నెలకు ₹10,000–₹30,000."),
    challenges: [
      b("Plant care and seasonal loss.", "మొక్కల సంరక్షణ, కాలానుగుణ నష్టం."),
      b("Transport without damage.", "నష్టం లేకుండా రవాణా."),
    ],
    tips: [
      b("Bundle plant + pot + care card.", "మొక్క + కుండీ + సంరక్షణ కార్డు కలిపి అమ్మండి."),
      b("Focus on low-maintenance varieties.", "తక్కువ సంరక్షణ రకాలపై దృష్టి పెట్టండి."),
    ],
  },
  {
    id: "crochet",
    icon: "🧶",
    image: ideaCrochet,
    title: b("Crochet Crafts", "క్రోషే క్రాఫ్ట్‌లు"),
    tagline: b("Handmade wearables & toys", "చేతి దుస్తులు & బొమ్మలు"),
    cost: b("₹1,500 – ₹4,000", "₹1,500 – ₹4,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹7,000 – ₹22,000 / month", "₹7,000 – ₹22,000 / నెల"),
    overview: b(
      "Crochet toys, bags and accessories command premium prices for their handmade charm. Perfect work-from-home craft.",
      "క్రోషే బొమ్మలు, బ్యాగులు, యాక్సెసరీలు చేతి అందానికి మంచి ధర పొందుతాయి. ఇంటి నుండి చేసే అద్భుత క్రాఫ్ట్.",
    ),
    materials: [
      b("Yarn in various colours", "వివిధ రంగుల ఉన్ని"),
      b("Crochet hooks", "క్రోషే హుక్‌లు"),
      b("Stuffing & accessories", "స్టఫింగ్ & యాక్సెసరీలు"),
    ],
    steps: [
      b("Master basic crochet stitches.", "ప్రాథమిక క్రోషే కుట్లు నేర్చుకోండి."),
      b("Make small items like keychains first.", "ముందుగా కీచైన్‌ల వంటి చిన్నవి తయారు చేయండి."),
      b("Progress to toys, bags and wearables.", "బొమ్మలు, బ్యాగులు, దుస్తులకు పురోగమించండి."),
    ],
    pricing: b("Keychains ₹60–₹150, toys ₹250–₹900.", "కీచైన్‌లు ₹60–₹150, బొమ్మలు ₹250–₹900."),
    marketing: [
      b("Share making videos to attract buyers.", "కొనుగోలుదారులను ఆకర్షించేందుకు తయారీ వీడియోలు పంచండి."),
      b("Offer custom colours & names.", "కస్టమ్ రంగులు, పేర్లు ఇవ్వండి."),
    ],
    expected: b("₹7,000–₹22,000 monthly with custom orders.", "కస్టమ్ ఆర్డర్లతో నెలకు ₹7,000–₹22,000."),
    challenges: [
      b("Time-intensive to make each piece.", "ప్రతి వస్తువు తయారీకి ఎక్కువ సమయం."),
      b("Pricing for the hours involved.", "పట్టే సమయానికి ధర నిర్ణయించడం."),
    ],
    tips: [
      b("Batch-make popular items.", "ప్రాచుర్యం పొందిన వస్తువులను బ్యాచ్‌గా తయారు చేయండి."),
      b("Charge fairly for handmade time.", "చేతి శ్రమకు సరైన ధర వసూలు చేయండి."),
    ],
  },
  {
    id: "paintings",
    icon: "🎨",
    image: ideaPaintings,
    title: b("Paintings & Art", "చిత్రలేఖనం & కళ"),
    tagline: b("Canvas, folk & custom art", "క్యాన్వాస్, జానపద & కస్టమ్ కళ"),
    cost: b("₹2,000 – ₹6,000", "₹2,000 – ₹6,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹8,000 – ₹40,000 / month", "₹8,000 – ₹40,000 / నెల"),
    overview: b(
      "Original art and traditional folk paintings (Kalamkari, Madhubani) sell well as décor and gifts. High value for skilled artists.",
      "మౌలిక కళ, సంప్రదాయ జానపద చిత్రాలు (కలంకారి, మధుబని) అలంకరణ, బహుమతులుగా బాగా అమ్ముడవుతాయి. నైపుణ్యం గల కళాకారులకు అధిక విలువ.",
    ),
    materials: [
      b("Canvas & paper", "క్యాన్వాస్ & కాగితం"),
      b("Acrylic / fabric paints", "అక్రిలిక్ / ఫాబ్రిక్ పెయింట్‌లు"),
      b("Brushes & easel", "బ్రష్‌లు & ఈజెల్"),
    ],
    steps: [
      b("Develop a recognizable style.", "గుర్తించదగిన శైలిని అభివృద్ధి చేయండి."),
      b("Create a portfolio of works.", "మీ రచనల పోర్ట్‌ఫోలియో తయారు చేయండి."),
      b("Offer prints and custom commissions.", "ప్రింట్‌లు, కస్టమ్ ఆర్డర్లు ఇవ్వండి."),
    ],
    pricing: b("Small art ₹500–₹2,000, large/custom ₹3,000+.", "చిన్న కళ ₹500–₹2,000, పెద్ద/కస్టమ్ ₹3,000+."),
    marketing: [
      b("Post time-lapse art videos.", "టైమ్-లాప్స్ కళ వీడియోలు పెట్టండి."),
      b("Sell prints to widen the market.", "మార్కెట్ విస్తరించడానికి ప్రింట్‌లు అమ్మండి."),
    ],
    expected: b("₹8,000–₹40,000 monthly depending on demand.", "గిరాకీ బట్టి నెలకు ₹8,000–₹40,000."),
    challenges: [
      b("Valuing your own creative work.", "మీ సృజనాత్మక పనికి విలువ నిర్ణయించడం."),
      b("Reaching the right audience.", "సరైన ప్రేక్షకులను చేరుకోవడం."),
    ],
    tips: [
      b("Sell prints alongside originals.", "మౌలిక చిత్రాలతో పాటు ప్రింట్‌లు అమ్మండి."),
      b("Build an online portfolio.", "ఆన్‌లైన్ పోర్ట్‌ఫోలియో తయారు చేయండి."),
    ],
  },
  {
    id: "decor",
    icon: "🏠",
    image: ideaDecor,
    title: b("Home Décor", "ఇంటి అలంకరణ"),
    tagline: b("Wall art, macramé & accents", "గోడ కళ, మాక్రమే & అలంకరణలు"),
    cost: b("₹3,000 – ₹9,000", "₹3,000 – ₹9,000"),
    skill: b("Intermediate", "మధ్యస్థం"),
    earning: b("₹9,000 – ₹28,000 / month", "₹9,000 – ₹28,000 / నెల"),
    overview: b(
      "Handmade décor — macramé, wall hangings, painted pots — is popular for home styling and gifting with healthy profit margins.",
      "చేతి అలంకరణ — మాక్రమే, గోడ హ్యాంగింగ్‌లు, పెయింట్ చేసిన కుండీలు — ఇంటి అలంకరణ, బహుమతులకు ప్రాచుర్యం, మంచి లాభాలు.",
    ),
    materials: [
      b("Cotton ropes, wood, paint", "పత్తి తాళ్లు, చెక్క, పెయింట్"),
      b("Adhesives & hooks", "అంటించేవి & హుక్‌లు"),
      b("Decorative elements", "అలంకరణ వస్తువులు"),
    ],
    steps: [
      b("Pick trending décor styles.", "ట్రెండింగ్ అలంకరణ శైలులు ఎంచుకోండి."),
      b("Create a small product range.", "చిన్న ఉత్పత్తి శ్రేణిని తయారు చేయండి."),
      b("Photograph in styled settings.", "అందమైన నేపథ్యంలో ఫోటోలు తీయండి."),
    ],
    pricing: b("Items ₹200–₹1,500 based on size.", "పరిమాణం బట్టి వస్తువులు ₹200–₹1,500."),
    marketing: [
      b("Show pieces in real home setups.", "నిజమైన ఇంటి సెటప్‌లలో చూపండి."),
      b("Target new-home and festival buyers.", "కొత్త ఇల్లు, పండుగ కొనుగోలుదారులను లక్ష్యంగా చేసుకోండి."),
    ],
    expected: b("₹9,000–₹28,000 monthly.", "నెలకు ₹9,000–₹28,000."),
    challenges: [
      b("Storage of bulky items.", "పెద్ద వస్తువుల నిల్వ."),
      b("Keeping designs fresh.", "డిజైన్‌లను కొత్తగా ఉంచడం."),
    ],
    tips: [
      b("Offer sets for a complete look.", "పూర్తి లుక్ కోసం సెట్‌లు ఇవ్వండి."),
      b("Follow interior trends.", "ఇంటీరియర్ ట్రెండ్‌లను అనుసరించండి."),
    ],
  },
  // ---- Under ₹100 Startup Cost ----
  {
    id: "bookmarks",
    icon: "🔖",
    image: ideaGifts,
    title: b("Handmade Bookmarks", "చేతి బుక్‌మార్క్‌లు"),
    tagline: b("Paper art for book lovers", "పుస్తక ప్రియుల కోసం కాగితపు కళ"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,000 – ₹8,000 / month", "₹2,000 – ₹8,000 / నెల"),
    overview: b(
      "Beautiful bookmarks made with decorative paper, ribbons and small charms. Perfect for students, readers and gift shops with almost zero startup cost.",
      "అలంకరణ కాగితం, రిబ్బన్లు, చిన్న అలంకరణలతో తయారు చేసిన అందమైన బుక్‌మార్క్‌లు. విద్యార్థులు, పుస్తక ప్రియులు, గిఫ్ట్ షాపుల కోసం శూన్య ప్రారంభ ఖర్చుతో అనువైనవి.",
    ),
    materials: [
      b("Decorative paper / cardstock", "అలంకరణ కాగితం / కార్డ్‌స్టాక్"),
      b("Ribbons and tassels", "రిబ్బన్లు మరియు టాసెల్స్"),
      b("Glue and scissors", "అంటుకొనేవి మరియు కత్తెర"),
      b("Stickers / small charms", "స్టిక్కర్లు / చిన్న అలంకరణలు"),
      b("Hole punch", "హోల్ పంచ్"),
    ],
    steps: [
      b("Cut paper into 15cm x 5cm bookmark strips.", "కాగితాన్ని 15cm x 5cm బుక్‌మార్క్ పట్టీలుగా కోయండి."),
      b("Draw, paint or stick designs on each strip.", "ప్రతి పట్టీపై డిజైన్లు గీయండి, పెయింట్ చేయండి లేదా అంటించండి."),
      b("Punch a hole at the top and add a ribbon.", "పైభాగంలో రంధ్రం పెట్టి రిబ్బన్ జోడించండి."),
      b("Laminate or cover with clear tape for durability.", "నిలకడ కోసం లామినేట్ చేయండి లేదా స్పష్టమైన టేపుతో కప్పండి."),
      b("Package in sets of 3 or 5 for gifting.", "బహుమతుల కోసం 3 లేదా 5 సెట్‌లుగా ప్యాక్ చేయండి."),
    ],
    pricing: b("Sell individual bookmarks at ₹15–₹50 and gift sets of 5 at ₹80–₹200.", "ప్రతి బుక్‌మార్క్‌ను ₹15–₹50 కు, 5 సెట్‌లను ₹80–₹200 కు అమ్మండి."),
    marketing: [
      b("Place a small stall near libraries and bookshops.", "గ్రంథాలయాలు, పుస్తక దుకాణాల సమీపంలో స్టాల్ ఏర్పాటు చేయండి."),
      b("Create themed sets for festivals and exams.", "పండుగలు, పరీక్షల కోసం థీమ్ సెట్‌లు తయారు చేయండి."),
      b("Sell through school and college groups.", "పాఠశాల, కాలేజీ గ్రూప్‌ల ద్వారా అమ్మండి."),
    ],
    expected: b("Steady sellers can earn ₹2,000–₹8,000 monthly by selling 100–200 pieces.", "100–200 బుక్‌మార్క్‌లను అమ్మి నెలకు ₹2,000–₹8,000 సంపాదించవచ్చు."),
    challenges: [
      b("Low individual selling price.", "తక్కువ యూనిట్ అమ్మక ధర."),
      b("Competition from cheap printed bookmarks.", "చౌక ప్రింటెడ్ బుక్‌మార్క్‌ల నుండి పోటీ."),
    ],
    tips: [
      b("Use quotes and local art to stand out.", "ప్రత్యేకంగా నిలవడానికి కోట్‌లు, స్థానిక కళను వాడండి."),
      b("Offer bulk discounts to gift shops.", "గిఫ్ట్ షాపులకు బల్క్ డిస్కౌంట్ ఇవ్వండి."),
    ],
  },
  {
    id: "friendship-bands",
    icon: "🤝",
    image: ideaJewelry,
    title: b("Friendship Bands", "ఫ్రెండ్‌షిప్ బ్యాండ్లు"),
    tagline: b("Colorful handmade bracelets for friends", "స్నేహితుల కోసం రంగురంగుల చేతి బ్రేస్‌లెట్లు"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,500 – ₹10,000 / month", "₹2,500 – ₹10,000 / నెల"),
    overview: b(
      "Friendship bands are timeless gifts among students. With colourful threads and simple knotting, you can create dozens in an afternoon.",
      "ఫ్రెండ్‌షిప్ బ్యాండ్లు విద్యార్థుల మధ్య శాశ్వతమైన బహుమతులు. రంగురంగుల దారాలతో, సరళమైన ముడులతో ఒక మధ్యాహ్నంలోనే డజన్ల కొద్దీ తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Embroidery threads (multiple colours)", "ఎంబ్రాయిడరీ దారాలు (వివిధ రంగులు)"),
      b("Small beads and charms", "చిన్న పూసలు మరియు అలంకరణలు"),
      b("Scissors", "కత్తెర"),
      b("Tape or clipboard", "టేపు లేదా క్లిప్‌బోర్డ్"),
      b("Clear nail polish to seal ends", "చివర్లను మూయడానికి నailand పాలిష్"),
    ],
    steps: [
      b("Cut 6–8 strands of thread about 30cm each.", "ఒక్కొక్కటి 30cm ఉండేట్టు 6–8 దారాలను కోయండి."),
      b("Tie a knot at one end and tape it down.", "ఒక చివర ముడి వేసి టేపుతో అంటించండి."),
      b("Braid or knot in patterns (chevron, spiral).", "నమూనాలలో (చెవ్రాన్, స్పైరల్) ముడులు వేయండి."),
      b("Add beads at intervals for decoration.", "అలంకరణ కోసం మధ్యలో పూసలు జోడించండి."),
      b("Tie adjustable sliding knots at the end.", "చివర సర్దుబాటు ముడులు వేయండి."),
    ],
    pricing: b("Sell simple bands at ₹20–₹40 and beaded designs at ₹50–₹100.", "సరళ బ్యాండ్లను ₹20–₹40 కు, పూసల డిజైన్‌లను ₹50–₹100 కు అమ్మండి."),
    marketing: [
      b("Sell heavily during Friendship Day week.", "ఫ్రెండ్‌షిప్ డే వారంలో భారీగా అమ్మండి."),
      b("Offer name-customized bands.", "పేరు కస్టమైజ్డ్ బ్యాండ్లు ఇవ్వండి."),
      b("Create WhatsApp catalogues for schools.", "పాఠశాలల కోసం వాట్సాప్ క్యాటలాగ్‌లు తయారు చేయండి."),
    ],
    expected: b("Sell 100–300 bands monthly for ₹2,500–₹10,000, especially during peak seasons.", "ఎక్కువ సీజన్‌లలో నెలకు 100–300 బ్యాండ్లను అమ్మి ₹2,500–₹10,000 సంపాదించవచ్చు."),
    challenges: [
      b("Seasonal demand spikes.", "కాలానుగుణ గిరాకీ పెరుగుదల."),
      b("Many free tutorials lower perceived value.", "ఉచిత ట్యూటోరియల్స్ వల్ల విలువ తగ్గుతుంది."),
    ],
    tips: [
      b("Create unique patterns not found online.", "ఆన్‌లైన్‌లో లేని ప్రత్యేక నమూనాలు తయారు చేయండి."),
      b("Bundle 3 bands at a discounted price.", "3 బ్యాండ్లను డిస్కౌంట్ ధరకు కలిపి అమ్మండి."),
    ],
  },
  {
    id: "paper-flowers",
    icon: "🌸",
    image: ideaNursery,
    title: b("Paper Flowers", "కాగితపు పూలు"),
    tagline: b("Everlasting blooms from simple paper", "సాధారణ కాగితం నుండి శాశ్వత పూలు"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Paper flowers are perfect for home décor, events and gifting. They never wilt and can be made in any colour using simple craft paper.",
      "కాగితపు పూలు ఇంటి అలంకరణ, ఈవెంట్‌లు, బహుమతులకు అనువైనవి. ఎప్పుడూ వాడిపోవు, సరళ క్రాఫ్ట్ పేపర్‌తో ఏ రంగులోనైనా తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Colour craft paper or tissue paper", "రంగు క్రాఫ్ట్ పేపర్ లేదా టిష్యూ పేపర్"),
      b("Floral wire or thin sticks", "పూల తీగ లేదా సన్న కర్రలు"),
      b("Glue and scissors", "అంటుకొనేవి మరియు కత్తెర"),
      b("Green floral tape", "ఆకుపచ్చ పూల టేప్"),
    ],
    steps: [
      b("Cut paper into petal shapes of different sizes.", "కాగితాన్ని వేర్వేరు పరిమాణాల పూల రేకుల ఆకారంలో కోయండి."),
      b("Curl edges gently with a thin stick.", "సన్న కర్రతో అంచులను సున్నితంగా వంచండి."),
      b("Layer and glue petals around a centre.", "కేంద్రం చుట్టూ రేకులను పొరలుగా అంటించండి."),
      b("Attach to wire stems with floral tape.", "పూల టేపుతో తీగ కాడ్లకు అమర్చండి."),
      b("Arrange in bunches or vases for sale.", "కట్టలుగా లేదా కుండీల్లో పెట్టి అమ్మండి."),
    ],
    pricing: b("Single stems ₹15–₹40, small bouquets ₹80–₹200, large arrangements ₹300–₹600.", "ఒక్కొక్క కాడు ₹15–₹40, చిన్న బొకేలు ₹80–₹200, పెద్ద అరేంజ్‌మెంట్‌లు ₹300–₹600."),
    marketing: [
      b("Display at local flower shops as permanent alternatives.", "స్థానిక పూల దుకాణాల్లో శాశ్వత ప్రత్యామ్నాయాలుగా ప్రదర్శించండి."),
      b("Create wedding and festival centrepieces.", "వివాహ, పండుగ సెంటర్‌పీస్‌లు తయారు చేయండి."),
      b("Sell DIY kits for customers to make their own.", "కస్టమర్లు తామే తయారు చేసుకోవడానికి DIY కిట్‌లు అమ్మండి."),
    ],
    expected: b("Consistent crafters earn ₹3,000–₹12,000 monthly with event orders.", "క్రమం తప్పని క్రాఫ్టర్లు ఈవెంట్ ఆర్డర్లతో నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Time-consuming to make realistic petals.", "నిజమైన రేకులు తయారు చేయడం సమయం పడుతుంది."),
      b("Storage without crushing.", "పగలకుండా నిల్వ చేయడం."),
    ],
    tips: [
      b("Use crepe paper for a more realistic texture.", "నిజమైన పనితనం కోసం క్రేప్ పేపర్ వాడండి."),
      b("Offer matching gift wrapping with flowers.", "పూలతో పాటు మ్యాచింగ్ గిఫ్ట్ ర్యాపింగ్ ఇవ్వండి."),
    ],
  },
  {
    id: "origami-decor",
    icon: "📄",
    image: ideaDecor,
    title: b("Origami Decorations", "ఒరిగామి అలంకరణలు"),
    tagline: b("Folded paper art for any space", "ఏ స్థలానికైనా మడత కాగితపు కళ"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,000 – ₹9,000 / month", "₹2,000 – ₹9,000 / నెల"),
    overview: b(
      "Origami decorations — cranes, stars, flowers and garlands — bring elegance to any room. All you need is paper, patience and folding skill.",
      "ఒరిగామి అలంకరణలు — క్రేన్లు, నక్షత్రాలు, పూలు, పూలదండలు — ఏ గదికైనా అందాన్ని తెస్తాయి. కాగితం, ఓపిక, మడత నైపుణ్యం మాత్రమే అవసరం.",
    ),
    materials: [
      b("Square origami paper (multiple colours)", "చదరపు ఒరిగామి పేపర్ (వివిధ రంగులు)"),
      b("Thread or fishing line for hanging", "వ్రేలాడదీయడానికి దారం లేదా ఫిషింగ్ లైన్"),
      b("Glue dots for assembly", "జోడించడానికి గ్లూ డాట్స్"),
      b("Beads for weighting strings", "దారానికి బరువు కోసం పూసలు"),
    ],
    steps: [
      b("Learn basic folds: valley, mountain, squash.", "ప్రాథమిక మడతలు నేర్చుకోండి: లోయ, కొండ, స్క్వాష్."),
      b("Fold chosen shapes: cranes, stars, boxes.", "ఎంచుకున్న ఆకారాలను మడవండి: క్రేన్లు, నక్షత్రాలు, పెట్టెలు."),
      b("String pieces into hanging mobiles or garlands.", "వ్రేలాడే మోబైల్స్ లేదా పూలదండలుగా దారంలో కట్టండి."),
      b("Package neatly with usage suggestions.", "ఉపయోగ సూచనలతో శుభ్రంగా ప్యాక్ చేయండి."),
    ],
    pricing: b("Small garlands ₹60–₹150, hanging mobiles ₹200–₹500, gift boxes ₹30–₹80.", "చిన్న పూలదండలు ₹60–₹150, వ్రేలాడే మోబైల్స్ ₹200–₹500, గిఫ్ట్ బాక్స్‌లు ₹30–₹80."),
    marketing: [
      b("Hang samples in your own home for photos.", "ఫోటోల కోసం మీ ఇంట్లోనే నమూనాలను వ్రేలాడదీయండి."),
      b("Target festival and wedding decorators.", "పండుగ, వివాహ అలంకరణ వారిని లక్ష్యంగా చేసుకోండి."),
      b("Teach origami workshops to upsell kits.", "ఒరిగామి వర్క్‌షాప్‌లు నిర్వహించి కిట్‌లను అదనంగా అమ్మండి."),
    ],
    expected: b("Dedicated folders can earn ₹2,000–₹9,000 monthly through direct sales and workshops.", "అంకితమైన వారు నేరుగా అమ్మకాలు, వర్క్‌షాప్‌ల ద్వారా నెలకు ₹2,000–₹9,000 సంపాదించవచ్చు."),
    challenges: [
      b("Folding neatly takes significant practice.", "శుభ్రంగా మడత వేయడానికి చాలా సాధన అవసరం."),
      b("Buyers may not value the time involved.", "కొనుగోలుదారులు పట్టే సమయాన్ని గుర్తించకపోవచ్చు."),
    ],
    tips: [
      b("Start with simpler designs to build speed.", "వేగం పెంచుకోవడానికి సరళ డిజైన్లతో ప్రారంభించండి."),
      b("Use recycled magazine paper for eco appeal.", "పర్యావరణ అనుకూలత కోసం రీసైకిల్డ్ మ్యాగజైన్ పేపర్ వాడండి."),
    ],
  },
  {
    id: "greeting-cards",
    icon: "💌",
    image: ideaGifts,
    title: b("Greeting Cards", "శుభాకాంక్షా కార్డులు"),
    tagline: b("Heartfelt cards for every occasion", "ప్రతి సందర్భానికి హృదయపూర్వక కార్డులు"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Handmade greeting cards always feel more personal than store-bought ones. With paper, stamps, stickers and a little creativity, you can build a steady card business.",
      "చేతితో తయారు చేసిన కార్డులు షాపుల్లో కొన్నవట కంటే ఎక్కువ వ్యక్తిగతంగా ఉంటాయి. కాగితం, స్టాంపులు, స్టిక్కర్లు, కొద్ది సృజనాత్మకతతో స్థిరమైన కార్డ్ వ్యాపారం నిర్మించవచ్చు.",
    ),
    materials: [
      b("Cardstock in various colours", "వివిధ రంగుల కార్డ్‌స్టాక్"),
      b("Rubber stamps and ink pads", "రబ్బర్ స్టాంపులు మరియు ఇంక్ ప్యాడ్‌లు"),
      b("Stickers, washi tape, ribbons", "స్టిక్కర్లు, వాషీ టేప్, రిబ్బన్లు"),
      b("Markers and coloured pens", "మార్కర్లు మరియు రంగు పెన్నులు"),
      b("Envelopes", "కవర్లు"),
    ],
    steps: [
      b("Fold cardstock into card shapes (A5, square).", "కార్డ్‌స్టాక్‌ను కార్డ్ ఆకారాలుగా (A5, చదరపు) మడవండి."),
      b("Stamp or draw a central design or message.", "కేంద్ర డిజైన్ లేదా సందేశాన్ని స్టాంప్ చేయండి లేదా గీయండి."),
      b("Layer decorations: paper, stickers, ribbon.", "అలంకరణలను పొరలుగా వేయండి: కాగితం, స్టిక్కర్లు, రిబ్బన్."),
      b("Write a sample message inside or leave blank.", "లోపల సాంపిల్ సందేశం రాయండి లేదా ఖాళీగా ఉంచండి."),
      b("Match with a coloured envelope and package.", "రంగు కవరుతో జతపరిచి ప్యాక్ చేయండి."),
    ],
    pricing: b("Simple cards ₹30–₹80, elaborate designs ₹100–₹250, box of 10 ₹300–₹700.", "సరళ కార్డులు ₹30–₹80, సంక్లిష్ట డిజైన్లు ₹100–₹250, 10 సెట్ బాక్స్ ₹300–₹700."),
    marketing: [
      b("Make seasonal collections: Diwali, Christmas, birthdays.", "కాలానుగుణ సేకరణలు: దీపావళి, క్రిస్మస్, పుట్టినరోజులు."),
      b("Offer custom message writing for buyers.", "కస్టమర్ల కోసం వ్యక్తిగత సందేశాలు రాయడం ఇవ్వండి."),
      b("Partner with gift shops on consignment.", "గిఫ్ట్ షాపులతో కన్‌సైన్‌మెంట్‌పై భాగస్వామ్యం చేయండి."),
    ],
    expected: b("Card makers typically earn ₹3,000–₹12,000 monthly, peaking during festive months.", "కార్డ్ తయారీదారులు సాధారణంగా నెలకు ₹3,000–₹12,000 సంపాదిస్తారు, పండుగ నెలల్లో ఎక్కువ."),
    challenges: [
      b("Keeping designs fresh and original.", "డిజైన్‌లను కొత్తగా, మౌలికంగా ఉంచడం."),
      b("High time investment per card.", "ప్రతి కార్డుకు ఎక్కువ సమయం పడుతుంది."),
    ],
    tips: [
      b("Create template designs you can reproduce.", "మళ్లీ తయారు చేయగల టెంప్లేట్ డిజైన్లు తయారు చేయండి."),
      b("Buy craft supplies in bulk to lower costs.", "ఖర్చు తగ్గించడానికి క్రాఫ్ట్ సామాగ్రిని బల్క్‌గా కొనండి."),
    ],
  },
  {
    id: "gift-tags",
    icon: "🏷️",
    image: ideaGifts,
    title: b("Gift Tags", "బహుమతి టాగ్లు"),
    tagline: b("Pretty labels for presents", "బహుమతుల కోసం అందమైన లేబుళ్లు"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,000 – ₹8,000 / month", "₹2,000 – ₹8,000 / నెల"),
    overview: b(
      "Gift tags are small but essential for every wrapped present. Handmade tags with calligraphy, stamps or mini paintings add a premium touch that buyers love.",
      "గిఫ్ట్ టాగ్లు ప్రతి ప్యాక్ చేసిన బహుమతికి చిన్నవైనా ముఖ్యమైనవి. కాలిగ్రఫీ, స్టాంపులు, మినీ పెయింటింగ్‌లతో చేసిన టాగ్లు ప్రీమియం టచ్ ఇస్తాయి.",
    ),
    materials: [
      b("Thick paper or cardstock", "మందపాటి కాగితం లేదా కార్డ్‌స్టాక్"),
      b("Hole punch and twine/ribbon", "హోల్ పంచ్ మరియు దారం/రిబ్బన్"),
      b("Rubber stamps, stickers, pens", "రబ్బర్ స్టాంపులు, స్టిక్కర్లు, పెన్నులు"),
      b("Watercolours or markers", "వాటర్‌కలర్స్ లేదా మార్కర్లు"),
    ],
    steps: [
      b("Cut paper into tag shapes (rectangle, scallop).", "కాగితాన్ని టాగ్ ఆకారాలుగా (దీర్ఘచతురస్రం, స్కాలోప్) కోయండి."),
      b("Punch a hole at the top for string.", "దారం కోసం పైభాగంలో రంధ్రం పెట్టండి."),
      b("Decorate with stamps, drawings or quotes.", "స్టాంపులు, గీతలు, కోట్‌లతో అలంకరించండి."),
      b("Add twine or ribbon through the hole.", "రంధ్రం ద్వారా దారం లేదా రిబ్బన్ జోడించండి."),
      b("Bundle in packs of 10–20 for sale.", "అమ్మకానికి 10–20 సెట్‌లుగా కట్టండి."),
    ],
    pricing: b("Pack of 10 tags ₹40–₹100, premium hand-painted sets ₹150–₹300.", "10 టాగ్ల ప్యాక్ ₹40–₹100, ప్రీమియం హ్యాండ్‌పెయింటెడ్ సెట్‌లు ₹150–₹300."),
    marketing: [
      b("Sell alongside wrapping paper at stationery shops.", "స్టేషనరీ షాపుల్లో ర్యాపింగ్ పేపర్‌తో పాటు అమ్మండి."),
      b("Create themed packs for festivals and weddings.", "పండుగలు, వివాహాల కోసం థీమ్ ప్యాక్‌లు తయారు చేయండి."),
      b("Offer bulk orders to corporate gift companies.", "కార్పొరేట్ గిఫ్ట్ కంపెనీలకు బల్క్ ఆర్డర్లు ఇవ్వండి."),
    ],
    expected: b("Steady tag makers earn ₹2,000–₹8,000 monthly, especially during gift-heavy seasons.", "క్రమం తప్పని టాగ్ తయారీదారులు బహుమతుల సీజన్‌లలో నెలకు ₹2,000–₹8,000 సంపాదిస్తారు."),
    challenges: [
      b("Very small individual profit.", "చాలా సన్నని యూనిట్ లాభం."),
      b("Buyers may make their own instead.", "కొనుగోలుదారులు స్వయంగా తయారు చేసుకోవచ్చు."),
    ],
    tips: [
      b("Bundle with matching wrapping paper or cards.", "మ్యాచింగ్ ర్యాపింగ్ పేపర్ లేదా కార్డులతో కలిపి అమ్మండి."),
      b("Use unique materials like pressed flowers.", "ఒత్తిన పూల వంటి ప్రత్యేక పదార్థాలను వాడండి."),
    ],
  },
  {
    id: "simple-keychains",
    icon: "🔑",
    image: ideaJewelry,
    title: b("Simple Keychains", "సరళ కీచైన్లు"),
    tagline: b("Useful accessories people carry daily", "ప్రజలు రోజూ వాడే ఉపయోగకరమైన యాక్సెసరీలు"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹10,000 / month", "₹3,000 – ₹10,000 / నెల"),
    overview: b(
      "Keychains are carried everywhere, making them great daily reminders of your brand. Simple beaded, tassel or macramé keychains require minimal materials and sell well.",
      "కీచైన్లు ప్రతిచోట తిరుగుతాయి, అందుకే మీ బ్రాండ్‌ను రోజూ గుర్తు చేసే అద్భుతమైనవి. సరళ పూస, టాసెల్ లేదా మాక్రమే కీచైన్లకు కనీస పదార్థాలే, బాగా అమ్ముడవుతాయి.",
    ),
    materials: [
      b("Key rings and chains", "కీ రింగులు మరియు చైన్లు"),
      b("Beads, charms, tassels", "పూసలు, అలంకరణలు, టాసెల్స్"),
      b("Cords or leather strips", "కార్డులు లేదా లెదర్ పట్టీలు"),
      b("Pliers and glue", "ప్లైయర్లు మరియు అంటుకొనేవి"),
    ],
    steps: [
      b("Choose a style: beaded, tassel, macramé or leather.", "శైలి ఎంచుకోండి: పూసలు, టాసెల్, మాక్రమే లేదా లెదర్."),
      b("Cut cord to about 10cm length.", "కార్డును సుమారు 10cm పొడవుగా కోయండి."),
      b("Thread beads or tie tassel/macramé knots.", "పూసలు దోర్లించండి లేదా టాసెల్/మాక్రమే ముడులు వేయండి."),
      b("Securely attach to key ring with pliers.", "ప్లైయర్లతో కీ రింగుకు గట్టిగా అమర్చండి."),
      b("Package in small clear bags with labels.", "లేబుళ్లతో చిన్న స్పష్టమైన సంచుల్లో ప్యాక్ చేయండి."),
    ],
    pricing: b("Simple keychains ₹30–₹80, beaded or charm designs ₹80–₹200.", "సరళ కీచైన్లు ₹30–₹80, పూసల లేదా అలంకరణ డిజైన్లు ₹80–₹200."),
    marketing: [
      b("Sell near college campuses and hostels.", "కాలేజీ క్యాంపస్‌లు, హాస్టళ్ల సమీపంలో అమ్మండి."),
      b("Create name or initial custom keychains.", "పేరు లేదా ఇనీషియల్ కస్టమ్ కీచైన్లు తయారు చేయండి."),
      b("Offer bulk pricing for return gifts at events.", "ఈవెంట్ రిటర్న్ గిఫ్ట్‌ల కోసం బల్క్ ధర ఇవ్వండి."),
    ],
    expected: b("Keychain makers typically earn ₹3,000–₹10,000 monthly with repeat bulk orders.", "కీచైన్ తయారీదారులు పునరావృత బల్క్ ఆర్డర్లతో నెలకు ₹3,000–₹10,000 సంపాదిస్తారు."),
    challenges: [
      b("Rings and hardware can break if low quality.", "తక్కువ నాణ్యత హార్డ్‌వేర్ పగిలిపోవచ్చు."),
      b("Many cheap plastic alternatives in market.", "మార్కెట్‌లో చాలా చౌక ప్లాస్టిక్ ప్రత్యామ్నాయాలు."),
    ],
    tips: [
      b("Buy sturdy metal rings in bulk online.", "నెట్‌లో బల్క్‌గా గట్టి మెటల్ రింగులు కొనండి."),
      b("Create themed sets for travel, weddings, baby showers.", "ప్రయాణం, వివాహాలు, బేబీ షవర్‌ల కోసం థీమ్ సెట్‌లు తయారు చేయండి."),
    ],
  },
  {
    id: "decorative-envelopes",
    icon: "✉️",
    image: ideaGifts,
    title: b("Decorative Envelopes", "అలంకరణ కవర్లు"),
    tagline: b("Handcrafted covers for letters & cash gifts", "పత్రాలు & నగదు బహుమతుల కోసం చేతి కవర్లు"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,500 – ₹9,000 / month", "₹2,500 – ₹9,000 / నెల"),
    overview: b(
      "Decorative envelopes are always needed for weddings, festivals and special occasions. Handmade envelopes with painted borders or paper-cut designs feel more special than plain ones.",
      "అలంకరణ కవర్లు వివాహాలు, పండుగలు, ప్రత్యేక సందర్భాలకు ఎల్లప్పుడూ అవసరం. పెయింట్ చేసిన అంచులు, కాగితం కట్ డిజైన్లతో కవర్లు సాధారణ వాటి కంటే ప్రత్యేకంగా ఉంటాయి.",
    ),
    materials: [
      b("A4 coloured paper or craft sheets", "A4 రంగు కాగితం లేదా క్రాఫ్ట్ షీట్లు"),
      b("Scissors, glue, ruler", "కత్తెర, అంటుకొనేవి, స్కేలు"),
      b("Stamps, stickers, markers", "స్టాంపులు, స్టిక్కర్లు, మార్కర్లు"),
      b("Washi tape for borders", "అంచుల కోసం వాషీ టేప్"),
    ],
    steps: [
      b("Fold A4 paper into an envelope shape.", "A4 కాగితాన్ని కవర్ ఆకారంగా మడవండి."),
      b("Cut and glue the side edges securely.", "పక్క అంచులను కోయండి, గట్టిగా అంటించండి."),
      b("Decorate the flap and front with art.", "మూత మరియు ముందు భాగాన్ని కళతో అలంకరించండి."),
      b("Add a liner paper inside for luxury feel.", "అద్భుతమైన అనుభవం కోసం లోపల లైనర్ కాగితం జోడించండి."),
      b("Package in sets of 5 or 10.", "5 లేదా 10 సెట్‌లుగా ప్యాక్ చేయండి."),
    ],
    pricing: b("Pack of 5 decorated envelopes ₹50–₹120, premium wedding envelopes ₹30–₹60 each.", "5 అలంకరణ కవర్ల ప్యాక్ ₹50–₹120, ప్రీమియం వివాహ కవర్లు ప్రతి ఒక్కటి ₹30–₹60."),
    marketing: [
      b("Target wedding seasons and festival gifting.", "వివాహ సీజన్, పండుగ బహుమతులను లక్ష్యంగా చేసుకోండి."),
      b("Sell at stationery and paper goods shops.", "స్టేషనరీ, కాగితపు సరుకుల దుకాణాల్లో అమ్మండి."),
      b("Create matching envelope + card combos.", "మ్యాచింగ్ కవర్ + కార్డ్ కాంబోలు తయారు చేయండి."),
    ],
    expected: b("Envelope makers earn ₹2,500–₹9,000 monthly with event-season peaks.", "ఈవెంట్ సీజన్‌లలో కవర్ తయారీదారులు నెలకు ₹2,500–₹9,000 సంపాదిస్తారు."),
    challenges: [
      b("People often reuse old envelopes.", "ప్రజలు పాత కవర్లను తిరిగి వాడతారు."),
      b("Digital transfers reducing letter usage.", "డిజిటల్ బదిలీలు వల్ల పత్రాల ఉపయోగం తగ్గుతోంది."),
    ],
    tips: [
      b("Create matching envelope + card sets for higher value.", "ఎక్కువ విలువ కోసం మ్యాచింగ్ కవర్ + కార్డ్ సెట్‌లు తయారు చేయండి."),
      b("Use traditional motifs for festival envelopes.", "పండుగ కవర్ల కోసం సంప్రదాయ నమూనాలను వాడండి."),
    ],
  },
  // ---- Under ₹100 Startup Cost (continued) ----
  {
    id: "photo-collages",
    icon: "🖼️",
    image: ideaDecor,
    title: b("Photo Collages", "ఫోటో కొల్లాజ్‌లు"),
    tagline: b("Memory art from personal photos", "వ్యక్తిగత ఫోటోల నుండి జ్ఞాపక కళ"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Photo collages turn memories into wall art. With printed photos, decorative paper and glue, you can create heartfelt gifts for birthdays, anniversaries and farewells.",
      "ఫోటో కొల్లాజ్‌లు జ్ఞాపకాలను గోడ కళగా మారుస్తాయి. ప్రింటెడ్ ఫోటోలు, అలంకరణ కాగితం, అంటుకొనేవి తో పుట్టినరోజులు, వార్షికోత్సవాలు, వీడ్కోళ్ల కోసం హృదయపూర్వక బహుమతులు తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Printed photographs (customer provided)", "ప్రింటెడ్ ఫోటోలు (కస్టమర్ ఇచ్చినవి)"),
      b("Cardboard base or canvas board", "కార్డ్‌బోర్డ్ బేస్ లేదా క్యాన్వాస్ బోర్డ్"),
      b("Decorative paper and stickers", "అలంకరణ కాగితం మరియు స్టిక్కర్లు"),
      b("Glue, scissors, markers", "అంటుకొనేవి, కత్తెర, మార్కర్లు"),
    ],
    steps: [
      b("Collect 10–20 photos from the customer.", "కస్టమర్ నుండి 10–20 ఫోటోలు సేకరించండి."),
      b("Plan a layout on paper before gluing.", "అంటించే ముందు కాగితంపై లేఅవుట్ ప్లాన్ చేయండి."),
      b("Arrange and stick photos with captions.", "ఫోటోలను క్యాప్షన్లతో అమర్చి అంటించండి."),
      b("Add decorative borders and stickers.", "అలంకరణ అంచులు, స్టిక్కర్లు జోడించండి."),
      b("Seal with clear glue or laminate.", "స్పష్టమైన అంటుకొనేవి లేదా లామినేట్‌తో కాపాడండి."),
    ],
    pricing: b("Small A4 collages ₹150–₹300, large framed pieces ₹400–₹900.", "చిన్న A4 కొల్లాజ్‌లు ₹150–₹300, పెద్ద ఫ్రేమ్ చేసినవి ₹400–₹900."),
    marketing: [
      b("Show sample collages on Instagram and WhatsApp.", "ఇన్‌స్టా, వాట్సాప్‌లలో సాంపిళ్ల కొల్లాజ్‌లను చూపండి."),
      b("Offer anniversary and birthday packages.", "వార్షికోత్సవ, పుట్టినరోజు ప్యాకేజీలు ఇవ్వండి."),
      b("Partner with photographers for referrals.", "రెఫర్రల్స్ కోసం ఫోటోగ్రాఫర్లతో భాగస్వామ్యం చేయండి."),
    ],
    expected: b("Active collage makers earn ₹3,000–₹12,000 monthly from custom orders.", "చురుకైన కొల్లాజ్ తయారీదారులు కస్టమ్ ఆర్డర్లతో నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Customers may be picky about photo placement.", "కస్టమర్లు ఫోటో ప్లేస్‌మెంట్ గురించి పిక్కీగా ఉండవచ్చు."),
      b("Need a good printer or photo printing partner.", "మంచి ప్రింటర్ లేదా ఫోటో ప్రింటింగ్ భాగస్వామి అవసరం."),
    ],
    tips: [
      b("Offer different shapes: heart, circle, letter.", "హృదయం, వృత్తం, అక్షరం వంటి వివిధ ఆకారాలు ఇవ్వండి."),
      b("Include a handwritten note from the customer.", "కస్టమర్ చేతి రాత సందేశాన్ని జోడించండి."),
    ],
  },
  {
    id: "quote-cards",
    icon: "💬",
    image: ideaCandles,
    title: b("Quote Cards", "కోట్ కార్డులు"),
    tagline: b("Inspiring message cards for daily motivation", "రోజువారీ ప్రేరణ కోసం స్ఫూర్తిదాయకమైన సందేశ కార్డులు"),
    cost: b("Under ₹100", "₹100 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,000 – ₹8,000 / month", "₹2,000 – ₹8,000 / నెల"),
    overview: b(
      "Small cards with motivational quotes, local proverbs or affirmations are popular for desks, mirrors and gift inserts. Minimal materials, maximum inspiration.",
      "ప్రేరణ, స్థానిక సామెతలు, ధృవీకరణలతో చిన్న కార్డులు డెస్క్‌లు, అద్దాలు, బహుమతుల్లో జోడించడానికి ప్రాచుర్యం. కనీస పదార్థాలు, గరిష్ట ప్రేరణ.",
    ),
    materials: [
      b("Thick cardstock in various colours", "వివిధ రంగుల మందపాటి కార్డ్‌స్టాక్"),
      b("Calligraphy pens or markers", "కాలిగ్రఫీ పెన్నులు లేదా మార్కర్లు"),
      b("Stickers and washi tape", "స్టిక్కర్లు మరియు వాషీ టేప్"),
      b("Small stands or clips", "చిన్న స్టాండ్లు లేదా క్లిప్‌లు"),
    ],
    steps: [
      b("Collect 20–30 inspiring quotes or local sayings.", "20–30 స్ఫూర్తిదాయక కోట్‌లు లేదా స్థానిక సామెతలు సేకరించండి."),
      b("Cut cardstock into small rectangles (10cm x 7cm).", "కార్డ్‌స్టాక్‌ను చిన్న దీర్ఘచతురస్రాలుగా (10cm x 7cm) కోయండి."),
      b("Write or stamp one quote per card neatly.", "ప్రతి కార్డుపై ఒక కోట్‌ను శుభ్రంగా రాయండి లేదా స్టాంప్ చేయండి."),
      b("Add minimal decoration: border, sticker, tape.", "కనీస అలంకరణ: అంచు, స్టిక్కర్, టేప్ జోడించండి."),
      b("Package in sets of 10 with a small stand.", "చిన్న స్టాండ్‌తో 10 సెట్‌లుగా ప్యాక్ చేయండి."),
    ],
    pricing: b("Set of 10 quote cards ₹50–₹120, framed single quotes ₹80–₹200.", "10 కోట్ కార్డుల సెట్ ₹50–₹120, ఫ్రేమ్ చేసిన ఒక్కొక్క కోట్ ₹80–₹200."),
    marketing: [
      b("Sell at tea stalls, bookshops and hostels.", "టీ స్టాల్స్, పుస్తక దుకాణాలు, హాస్టళ్లలో అమ్మండి."),
      b("Create Telugu/English bilingual sets.", "తెలుగు/ఇంగ్లీష్ బైలింగ్వాల్ సెట్‌లు తయారు చేయండి."),
      b("Offer daily quote subscription boxes.", "రోజువారీ కోట్ సబ్‌స్క్రిప్షన్ బాక్స్‌లు ఇవ్వండి."),
    ],
    expected: b("Quote card sellers earn ₹2,000–₹8,000 monthly, especially near campuses.", "కోట్ కార్డ్ విక్రేతలు క్యాంపస్‌ల సమీపంలో నెలకు ₹2,000–₹8,000 సంపాదిస్తారు."),
    challenges: [
      b("Handwriting consistency across cards.", "ప్రతి కార్డులో చేతి రాత స్థిరత్వం."),
      b("Finding fresh, non-copyrighted quotes.", "తాజా, కాపీరైట్ లేని కోట్‌లను కనుగొనడం."),
    ],
    tips: [
      b("Develop your own calligraphy style.", "మీ సొంత కాలిగ్రఫీ శైలిని అభివృద్ధి చేయండి."),
      b("Create seasonal themes: exam motivation, new year.", "కాలానుగుణ థీమ్‌లు: పరీక్ష ప్రేరణ, కొత్త సంవత్సరం."),
    ],
  },
  // ---- Under ₹200 Startup Cost ----
  {
    id: "hair-bows",
    icon: "🎀",
    image: ideaTailoring,
    title: b("Hair Bows", "హెయిర్ బోలు"),
    tagline: b("Cute hair accessories for girls", "అమ్మాయిల కోసం ముద్దైన జుట్టు యాక్సెసరీలు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,500 – ₹12,000 / month", "₹3,500 – ₹12,000 / నెల"),
    overview: b(
      "Hair bows and clips are always in demand for school girls and young women. With fabric scraps, ribbons and simple sewing, you can make dozens quickly.",
      "హెయిర్ బోలు, క్లిప్‌లు పాఠశాల అమ్మాయిలు, యువతులకు ఎల్లప్పుడూ అవసరం. వస్త్ర ముక్కలు, రిబ్బన్లు, సరళ కుట్టుతో వేగంగా డజన్ల కొద్దీ తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Fabric scraps or ribbon", "వస్త్ర ముక్కలు లేదా రిబ్బన్"),
      b("Hair clips and alligator clips", "హెయిర్ క్లిప్‌లు మరియు అలిగేటర్ క్లిప్‌లు"),
      b("Needle, thread, glue gun", "సూది, దారం, గ్లూ గన్"),
      b("Scissors and measuring tape", "కత్తెర మరియు కొలత టేప్"),
    ],
    steps: [
      b("Cut fabric or ribbon into bow-sized pieces.", "వస్త్రం లేదా రిబ్బన్‌ను బో పరిమాణంలో కోయండి."),
      b("Fold into a bow shape and pinch the centre.", "బో ఆకారంగా మడిచి కేంద్రాన్ని పించ్ చేయండి."),
      b("Secure the centre with thread or glue.", "దారం లేదా అంటుకొనేవితో కేంద్రాన్ని గట్టిగా అమర్చండి."),
      b("Attach to a hair clip or headband.", "హెయిర్ క్లిప్ లేదా హెడ్‌బ్యాండ్‌కు అమర్చండి."),
      b("Package in matching colour sets.", "మ్యాచింగ్ రంగు సెట్‌లుగా ప్యాక్ చేయండి."),
    ],
    pricing: b("Simple bows ₹25–₹60, premium fabric sets ₹100–₹250.", "సరళ బోలు ₹25–₹60, ప్రీమియం వస్త్ర సెట్‌లు ₹100–₹250."),
    marketing: [
      b("Sell outside schools and dance classes.", "పాఠశాలలు, డాన్స్ క్లాసుల బయట అమ్మండి."),
      b("Create matching mommy-and-me sets.", "తల్లి-కూతురు మ్యాచింగ్ సెట్‌లు తయారు చేయండి."),
      b("Offer bulk packs for birthday return gifts.", "పుట్టినరోజు రిటర్న్ గిఫ్ట్‌ల కోసం బల్క్ ప్యాక్‌లు ఇవ్వండి."),
    ],
    expected: b("Bow makers earn ₹3,500–₹12,000 monthly with school and event orders.", "పాఠశాల, ఈవెంట్ ఆర్డర్లతో బో తయారీదారులు నెలకు ₹3,500–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Competition from cheap imported clips.", "చౌక దేశీయ క్లిప్‌ల నుండి పోటీ."),
      b("Fabric colours may fade after washing.", "ఉతికిన తర్వాత వస్త్ర రంగులు మసిపోవచ్చు."),
    ],
    tips: [
      b("Use high-quality fabric that holds shape.", "ఆకారం నిలుపుకునే నాణ్యమైన వస్త్రం వాడండి."),
      b("Create festival-themed bows (Diwali, Christmas).", "పండుగ థీమ్ బోలు తయారు చేయండి (దీపావళి, క్రిస్మస్)."),
    ],
  },
  {
    id: "scrunchies",
    icon: "🪢",
    image: ideaTailoring,
    title: b("Scrunchies", "స్క్రంచీలు"),
    tagline: b("Trendy hair ties in every colour", "ప్రతి రంగులో ట్రెండీ జుట్టు బ్యాండ్లు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹4,000 – ₹15,000 / month", "₹4,000 – ₹15,000 / నెల"),
    overview: b(
      "Scrunchies are back in fashion and easy to sew. With fabric, elastic and basic stitching, you can create a colourful product line from home.",
      "స్క్రంచీలు మళ్లీ ఫ్యాషన్‌లోకి వచ్చాయి, కుట్టడం సులభం. వస్త్రం, ఇలాస్టిక్, ప్రాథమిక కుట్లతో ఇంటి నుండే రంగురంగుల ఉత్పత్తి శ్రేణిని తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Cotton or satin fabric scraps", "పత్తి లేదా సాటిన్ వస్త్ర ముక్కలు"),
      b("Elastic bands (hair elastic width)", "ఇలాస్టిక్ బ్యాండ్లు (హెయిర్ ఇలాస్టిక్ పొడవు)"),
      b("Needle, thread, safety pin", "సూది, దారం, సేఫ్టీ పిన్"),
      b("Scissors", "కత్తెర"),
    ],
    steps: [
      b("Cut fabric strips about 8cm wide and 45cm long.", "వస్త్రాన్ని సుమారు 8cm వెడల్పు, 45cm పొడవు పట్టీలుగా కోయండి."),
      b("Fold and sew along the long edge, right sides together.", "సరైన వైపులు కలిపి పొడవు అంచులో కుడివేయండి."),
      b("Turn the tube right-side out.", "ట్యూబ్‌ను సరైన వైపుకు తిప్పండి."),
      b("Thread elastic through with a safety pin.", "సేఫ్టీ పిన్‌తో ఇలాస్టిక్‌ను లోపలికి దోర్లించండి."),
      b("Sew ends together and close the fabric gap.", "చివర్లను కుడివేసి వస్త్రం ఖాళీని మూయండి."),
    ],
    pricing: b("Single scrunchies ₹30–₹80, velvet or satin sets ₹120–₹300.", "ఒక్కొక్క స్క్రంచీ ₹30–₹80, వెల్వెట్ లేదా సాటిన్ సెట్‌లు ₹120–₹300."),
    marketing: [
      b("Post flat-lay photos with matching outfits.", "మ్యాచింగ్ దుస్తులతో కలిపి ఫ్లాట్-లే ఫోటోలు పోస్ట్ చేయండి."),
      b("Offer subscription: 3 new scrunchies every month.", "సబ్‌స్క్రిప్షన్: ప్రతి నెల 3 కొత్త స్క్రంచీలు ఇవ్వండి."),
      b("Bundle with hair bows for higher sales.", "హెయిర్ బోలతో కలిపి అమ్మకాలు పెంచుకోండి."),
    ],
    expected: b("Scrunchie sellers earn ₹4,000–₹15,000 monthly with repeat customers.", "పునరావృత కస్టమర్లతో స్క్రంచీ విక్రేతలు నెలకు ₹4,000–₹15,000 సంపాదిస్తారు."),
    challenges: [
      b("Elastic quality varies — test before bulk buying.", "ఇలాస్టిక్ నాణ్యత మారుతుంది — బల్క్ కొనే ముందు పరీక్షించండి."),
      b("Sewing speed limits daily output.", "కుట్టు వేగం రోజువారీ ఉత్పత్తిని పరిమితం చేస్తుంది."),
    ],
    tips: [
      b("Buy fabric remnants from tailoring shops cheaply.", "కుట్టు షాపుల నుండి చౌకగా వస్త్ర ముక్కలు కొనండి."),
      b("Release new colours every season.", "ప్రతి సీజన్‌లో కొత్త రంగులను విడుదల చేయండి."),
    ],
  },
  {
    id: "beaded-bracelets",
    icon: "📿",
    image: ideaJewelry,
    title: b("Beaded Bracelets", "పూసల బ్రేస్‌లెట్లు"),
    tagline: b("Colourful wristwear for all ages", "అన్ని వయసుల వారికి రంగురంగుల చేతి దుడ్డులు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Beaded bracelets are popular across all age groups. With a variety of beads, elastic cord and simple stringing techniques, you can create endless designs.",
      "పూసల బ్రేస్‌లెట్లు అన్ని వయసుల వారిలో ప్రాచుర్యం. వివిధ పూసలు, ఇలాస్టిక్ కార్డ్, సరళ దోర్లింపు పద్ధతులతో అనంతమైన డిజైన్లు తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Glass, acrylic or wooden beads", "గాజు, అక్రిలిక్ లేదా చెక్క పూసలు"),
      b("Elastic cord or jewellery wire", "ఇలాస్టిక్ కార్డ్ లేదా ఆభరణాల తీగ"),
      b("Crimp beads and clasps", "క్రింప్ పూసలు మరియు క్లాస్పులు"),
      b("Beading needle and scissors", "పూసల సూది మరియు కత్తెర"),
    ],
    steps: [
      b("Choose a bead colour theme and pattern.", "పూస రంగు థీమ్, నమూనాను ఎంచుకోండి."),
      b("Cut elastic cord to wrist size plus 5cm.", "చేతి పరిమాణానికి 5cm కలిపి ఇలాస్టిక్ కార్డ్ కోయండి."),
      b("String beads in the chosen pattern.", "ఎంచుకున్న నమూనాలో పూసలను దోర్లించండి."),
      b("Tie securely with multiple knots and add glue.", "అనేక ముడులు వేసి గట్టిగా కట్టి అంటుకొనేవి జోడించండి."),
      b("Trim excess cord and package.", "అదనపు కార్డ్‌ను కత్తిరించి ప్యాక్ చేయండి."),
    ],
    pricing: b("Simple stretch bracelets ₹40–₹100, charm bracelets ₹120–₹350.", "సరళ స్ట్రెచ్ బ్రేస్‌లెట్లు ₹40–₹100, చార్మ్ బ్రేస్‌లెట్లు ₹120–₹350."),
    marketing: [
      b("Sell at local markets, fairs and college fests.", "స్థానిక మార్కెట్లు, మేళాలు, కాలేజీ పండుగల్లో అమ్మండి."),
      b("Create zodiac, birthstone and name bracelets.", "రాశి, జన్మరాయి, పేరు బ్రేస్‌లెట్లు తయారు చేయండి."),
      b("Offer friendship bracelet + beaded bracelet combos.", "ఫ్రెండ్‌షిప్ బ్రేస్‌లెట్ + పూసల బ్రేస్‌లెట్ కాంబోలు ఇవ్వండి."),
    ],
    expected: b("Beaded bracelet makers earn ₹3,000–₹12,000 monthly with custom orders.", "కస్టమ్ ఆర్డర్లతో పూసల బ్రేస్‌లెట్ తయారీదారులు నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Elastic can snap if overstretched.", "ఎక్కువ లాగితే ఇలాస్టిక్ పగిలిపోవచ్చు."),
      b("Sourcing consistent bead quality.", "స్థిరమైన పూస నాణ్యతను సరఫరా చేయడం."),
    ],
    tips: [
      b("Buy beads in bulk online for better margins.", "మంచి లాభాల కోసం ఆన్‌లైన్‌లో పూసలను బల్క్‌గా కొనండి."),
      b("Create themed collections: festival, pastel, neon.", "థీమ్ సేకరణలు తయారు చేయండి: పండుగ, పాస్టెల్, నియాన్."),
    ],
  },
  {
    id: "beaded-rings",
    icon: "💍",
    image: ideaJewelry,
    title: b("Beaded Rings", "పూసల ఉంగరాలు"),
    tagline: b("Tiny finger accessories with big charm", "పెద్ద ఆకర్షణ కలిగిన చిన్న వేలి యాక్సెసరీలు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,500 – ₹10,000 / month", "₹2,500 – ₹10,000 / నెల"),
    overview: b(
      "Beaded rings are trendy, lightweight and very affordable to make. With seed beads, wire and pliers, you can create delicate finger accessories for everyday wear.",
      "పూసల ఉంగరాలు ట్రెండీ, తేలికైనవి, తయారు చేయడానికి చాలా చౌక. సీడ్ పూసలు, తీగ, ప్లైయర్లతో రోజువారీ ధరణకు సున్నితమైన వేలి ఆభరణాలు తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Seed beads or small glass beads", "సీడ్ పూసలు లేదా చిన్న గాజు పూసలు"),
      b("Jewellery wire (thin, flexible)", "ఆభరణాల తీగ (సన్న, మృదువైన)"),
      b("Ring mandrel or cylindrical object", "రింగ్ మ్యాండ్రెల్ లేదా సిలిండ్రికల్ వస్తువు"),
      b("Wire cutters and pliers", "వైర్ కట్టర్లు మరియు ప్లైయర్లు"),
    ],
    steps: [
      b("Measure and cut a 10cm piece of wire.", "10cm తీగ ముక్కను కొలిచి కోయండి."),
      b("Thread 15–20 seed beads onto the wire.", "15–20 సీడ్ పూసలను తీగపై దోర్లించండి."),
      b("Wrap the beaded wire around a ring mandrel.", "పూసల తీగను రింగ్ మ్యాండ్రెల్ చుట్టూ చుట్టండి."),
      b("Twist the wire ends to close the ring securely.", "రింగ్‌ను గట్టిగా మూయడానికి తీగ చివర్లను ముడువండి."),
      b("Trim excess wire and tuck in sharp ends.", "అదనపు తీగను కత్తిరించి పదునైన చివర్లను లోపలికి మడవండి."),
    ],
    pricing: b("Single beaded rings ₹25–₹70, stackable sets of 3 ₹80–₹200.", "ఒక్కొక్క పూసల ఉంగరం ₹25–₹70, 3 స్టాకబుల్ సెట్ ₹80–₹200."),
    marketing: [
      b("Display on fingers or ring stands for photos.", "ఫోటోల కోసం వేళ్లపై లేదా రింగ్ స్టాండ్‌లపై ప్రదర్శించండి."),
      b("Create matching ring + bracelet + earring sets.", "మ్యాచింగ్ ఉంగరం + బ్రేస్‌లెట్ + చెవి దుద్ది సెట్‌లు తయారు చేయండి."),
      b("Offer adjustable sizes to fit any finger.", "ఏ వేలికైనా సరిపోయే సర్దుబాటు పరిమాణాలు ఇవ్వండి."),
    ],
    expected: b("Ring makers can earn ₹2,500–₹10,000 monthly through markets and online.", "మార్కెట్లు, ఆన్‌లైన్ ద్వారా ఉంగరం తయారీదారులు నెలకు ₹2,500–₹10,000 సంపాదించవచ్చు."),
    challenges: [
      b("Sizing can be tricky without a mandrel.", "మ్యాండ్రెల్ లేకుండా పరిమాణం సరిగ్గా కావడం కష్టం."),
      b("Wire can irritate sensitive skin.", "తీగ సున్నితమైన చర్మాన్ని ప్రేరేపించవచ్చు."),
    ],
    tips: [
      b("Use hypoallergenic wire or coat with clear nail polish.", "అలర్జీ లేని తీగ వాడండి లేదా క్లియర్ nail polish తో కోట్ చేయండి."),
      b("Create birth month colour collections.", "జన్మ నెల రంగు సేకరణలు తయారు చేయండి."),
    ],
  },
  {
    id: "phone-charms",
    icon: "📱",
    image: ideaJewelry,
    title: b("Phone Charms", "ఫోన్ చార్మ్‌లు"),
    tagline: b("Decorative dangles for mobile phones", "మొబైల్ ఫోన్ల కోసం అలంకరణ వ్రేలాడుదీయండి"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Phone charms and straps are trending accessories for young people. With beads, tassels and small trinkets, you can craft eye-catching charms that sell quickly.",
      "ఫోన్ చార్మ్‌లు, స్ట్రాప్‌లు యువతలో ట్రెండింగ్ యాక్సెసరీలు. పూసలు, టాసెల్స్, చిన్న అలంకరణలతో కళ్ళు పడే చార్మ్‌లు తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Phone strap cords or lobster clasps", "ఫోన్ స్ట్రాప్ కార్డులు లేదా లాబ్స్టర్ క్లాస్పులు"),
      b("Beads, charms, tassels, pom-poms", "పూసలు, చార్మ్‌లు, టాసెల్స్, పాం-పాంలు"),
      b("Jump rings and pliers", "జంప్ రింగులు మరియు ప్లైయర్లు"),
      b("Small charms (hearts, stars, letters)", "చిన్న అలంకరణలు (గుండెలు, నక్షత్రాలు, అక్షరాలు)"),
    ],
    steps: [
      b("Choose a charm theme: celestial, floral, names.", "చార్మ్ థీమ్ ఎంచుకోండి: ఆకాశ, పూల, పేర్లు."),
      b("Cut cord to about 12cm and attach a clasp.", "సుమారు 12cm కార్డ్ కోయండి, క్లాస్ప్ అమర్చండి."),
      b("String beads and charms in chosen pattern.", "ఎంచుకున్న నమూనాలో పూసలు, చార్మ్‌లను దోర్లించండి."),
      b("Secure ends with knots and glue.", "ముడులు, అంటుకొనేవితో చివర్లను గట్టిగా అమర్చండి."),
      b("Package on small cards with usage photos.", "ఉపయోగ ఫోటోలతో చిన్న కార్డులపై ప్యాక్ చేయండి."),
    ],
    pricing: b("Simple charms ₹50–₹120, elaborate designer charms ₹150–₹400.", "సరళ చార్మ్‌లు ₹50–₹120, సంక్లిష్ట డిజైనర్ చార్మ్‌లు ₹150–₹400."),
    marketing: [
      b("Post trendy reels showing charms on phones.", "ఫోన్లపై చార్మ్‌లను చూపిస్తూ ట్రెండీ రీల్స్ పోస్ట్ చేయండి."),
      b("Sell at mobile accessory shops on consignment.", "మొబైల్ యాక్సెసరీ షాపుల్లో కన్‌సైన్‌మెంట్‌పై అమ్మండి."),
      b("Create limited edition seasonal charms.", "పరిమిత కాలానుగుణ చార్మ్‌లు తయారు చేయండి."),
    ],
    expected: b("Phone charm sellers earn ₹3,000–₹12,000 monthly with social media marketing.", "సోషల్ మీడియా మార్కెటింగ్‌తో ఫోన్ చార్మ్ విక్రేతలు నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Trends change quickly in phone accessories.", "మొబైల్ యాక్సెసరీలలో ట్రెండ్లు త్వరగా మారుతాయి."),
      b("Durability issues with cord and clasps.", "కార్డ్, క్లాస్పుల నిలకడ సమస్యలు."),
    ],
    tips: [
      b("Use strong nylon cord instead of cheap thread.", "చౌక దారానికి బదులు గట్టి నైలాన్ కార్డ్ వాడండి."),
      b("Watch TikTok/Instagram for trending styles.", "ట్రెండింగ్ శైలుల కోసం టిక్‌టాక్/ఇన్‌స్టా చూడండి."),
    ],
  },
  {
    id: "handmade-earrings",
    icon: "💎",
    image: ideaJewelry,
    title: b("Handmade Earrings", "చేతి చెవి దుద్దులు"),
    tagline: b("Lightweight danglers and studs", "తేలికైన వ్రేలాడుదీయండి, స్టడ్స్"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹4,000 – ₹15,000 / month", "₹4,000 – ₹15,000 / నెల"),
    overview: b(
      "Earrings are the most popular handmade jewelry item. With basic earring hooks, beads and simple wirework, you can create dozens of pairs in an afternoon.",
      "చెవి దుద్దులు అత్యంత ప్రాచుర్యం పొందిన చేతి ఆభరణాలు. ప్రాథమిక హుక్‌లు, పూసలు, సరళ వైర్‌వర్క్‌తో ఒక మధ్యాహ్నంలోనే డజన్ల కొద్దీ జతలు తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Earring hooks (hypoallergenic)", "చెవి దుద్ది హుక్‌లు (అలర్జీ లేనివి)"),
      b("Beads, sequins, tiny charms", "పూసలు, సీక్విన్స్, చిన్న అలంకరణలు"),
      b("Jewellery wire and jump rings", "ఆభరణాల తీగ మరియు జంప్ రింగులు"),
      b("Pliers and wire cutters", "ప్లైయర్లు మరియు వైర్ కట్టర్లు"),
    ],
    steps: [
      b("Select bead colours and earring style (dangle/stud).", "పూస రంగులు, చెవి దుద్ది శైలిని ఎంచుకోండి (వ్రేలాడే/స్టడ్)."),
      b("Cut wire and shape the earring frame if needed.", "తీగను కోయండి, అవసరమైతే ఫ్రేమ్‌ను ఆకారం ఇవ్వండి."),
      b("Attach beads and charms with jump rings.", "జంప్ రింగులతో పూసలు, చార్మ్‌లను అమర్చండి."),
      b("Connect to earring hooks securely.", "హుక్‌లకు గట్టిగా కనెక్ట్ చేయండి."),
      b("Pair up, package on earring cards.", "జతలుగా కలిపి ఇయర్రింగ్ కార్డులపై ప్యాక్ చేయండి."),
    ],
    pricing: b("Simple studs ₹40–₹100, danglers ₹80–₹250, statement pieces ₹300–₹600.", "సరళ స్టడ్స్ ₹40–₹100, వ్రేలాడేవి ₹80–₹250, స్టేట్‌మెంట్ పీసెస్ ₹300–₹600."),
    marketing: [
      b("Model the earrings in photos and reels.", "ఫోటోలు, రీల్స్‌లో చెవి దుద్దులను మోడల్ చేయండి."),
      b("Offer buy-2-get-1-free promotions.", "2 కొంటే 1 ఉచిత ఆఫర్లు ఇవ్వండి."),
      b("Sell at college fests and local exhibitions.", "కాలేజీ పండుగలు, స్థానిక ప్రదర్శనల్లో అమ్మండి."),
    ],
    expected: b("Dedicated earring makers earn ₹4,000–₹15,000 monthly with new designs weekly.", "ప్రతి వారం కొత్త డిజైన్లతో చెవి దుద్ది తయారీదారులు నెలకు ₹4,000–₹15,000 సంపాదిస్తారు."),
    challenges: [
      b("Some people have metal allergies.", "కొందరికి మెటల్ అలర్జీలు ఉంటాయి."),
      b("Hooks can bend or break if too thin.", "చాలా సన్నగా ఉంటే హుక్‌లు వంగిపోవచ్చు, పగిలిపోవచ్చు."),
    ],
    tips: [
      b("Always use hypoallergenic hooks (stainless/surgical).", "ఎల్లప్పుడూ అలర్జీ లేని హుక్‌లు (స్టెయిన్‌లెస్/సర్జికల్) వాడండి."),
      b("Create lightweight designs comfortable for all-day wear.", "రోజంతా ధరించడానికి సౌకర్యవంతమైన తేలిక డిజైన్లు తయారు చేయండి."),
    ],
  },
  {
    id: "decorative-jars",
    icon: "🫙",
    image: ideaDecor,
    title: b("Decorative Jars", "అలంకరణ జాడీలు"),
    tagline: b("Pretty storage and décor containers", "అందమైన నిల్వ మరియు అలంకరణ పాత్రలు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Glass jars decorated with paint, twine, fabric and labels make beautiful storage containers, gift packaging or home décor. Old jam and pickle jars can be upcycled.",
      "పెయింట్, తీగ, వస్త్రం, లేబుళ్లతో అలంకరించిన గాజు జాడీలు అందమైన నిల్వ పాత్రలు, బహుమతి ప్యాకేజింగ్, ఇంటి అలంకరణగా ఉంటాయి. పాత జామ్, ఊరగాయ జాడీలను తిరిగి ఉపయోగించవచ్చు.",
    ),
    materials: [
      b("Clean glass jars (recycled or new)", "శుభ్రమైన గాజు జాడీలు (రీసైకిల్డ్ లేదా కొత్తవి)"),
      b("Acrylic paint, brushes, sealant", "అక్రిలిక్ పెయింట్, బ్రష్‌లు, సీలెంట్"),
      b("Twine, fabric scraps, ribbons", "తీగ, వస్త్ర ముక్కలు, రిబ్బన్లు"),
      b("Labels and markers", "లేబుళ్లు మరియు మార్కర్లు"),
    ],
    steps: [
      b("Clean and dry jars thoroughly.", "జాడీలను పూర్తిగా శుభ్రం చేసి ఆరనివ్వండి."),
      b("Paint base colours and let dry completely.", "బేస్ రంగులు పెయింట్ చేసి పూర్తిగా ఆరనివ్వండి."),
      b("Add decorative patterns, labels or quotes.", "అలంకరణ నమూనాలు, లేబుళ్లు, కోట్‌లు జోడించండి."),
      b("Wrap necks with twine, fabric or ribbon.", "మెడల చుట్టూ తీగ, వస్త్రం లేదా రిబ్బన్ చుట్టండి."),
      b("Seal paint with clear coat for durability.", "నిలకడ కోసం స్పష్టమైన కోట్‌తో పెయింట్ సీల్ చేయండి."),
    ],
    pricing: b("Small decorated jars ₹60–₹150, large storage jars ₹200–₹500, gift sets ₹300–₹800.", "చిన్న అలంకరణ జాడీలు ₹60–₹150, పెద్ద నిల్వ జాడీలు ₹200–₹500, గిఫ్ట్ సెట్‌లు ₹300–₹800."),
    marketing: [
      b("Show them as kitchen, bathroom and desk organisers.", "వంటగది, బాత్రూమ్, డెస్క్ ఏర్పాటుకు చూపించండి."),
      b("Sell filled with homemade treats for premium pricing.", "ఇంటి తయారీ స్వీట్స్‌తో నింపి ప్రీమియం ధరకు అమ్మండి."),
      b("Offer custom name labels for wedding favours.", "వివాహ బహుమతుల కోసం పేరు లేబుళ్లు ఇవ్వండి."),
    ],
    expected: b("Jar decorators earn ₹3,000–₹12,000 monthly, especially during wedding season.", "వివాహ సీజన్‌లలో జాడీ అలంకరణ వారు నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Finding clean, matching jars consistently.", "శుభ్రమైన, సరిపోయే జాడీలను స్థిరంగా కనుగొనడం."),
      b("Paint chipping if not sealed well.", "సరిగ్గా సీల్ చేయకపోతే పెయింట్ పగిలిపోతుంది."),
    ],
    tips: [
      b("Collect jars from neighbours and restaurants for free.", "ఇరుగుపొరుగు వారు, రెస్టారెంట్ల నుండి ఉచితంగా జాడీలు సేకరించండి."),
      b("Create matching jar sets for kitchen or bathroom.", "వంటగది లేదా బాత్రూమ్ కోసం మ్యాచింగ్ జాడీ సెట్‌లు తయారు చేయండి."),
    ],
  },
  {
    id: "pencil-holders",
    icon: "✏️",
    image: ideaDecor,
    title: b("Pencil Holders from Recycled Materials", "రీసైకిల్డ్ పదార్థాల పెన్సిల్ హోల్డర్లు"),
    tagline: b("Eco-friendly desk organisers", "పర్యావరణ అనుకూల డెస్క్ ఏర్పాటు పాత్రలు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,500 – ₹10,000 / month", "₹2,500 – ₹10,000 / నెల"),
    overview: b(
      "Recycled tin cans, plastic bottles and cardboard tubes become beautiful pencil holders with paint, fabric and creativity. A perfect eco-conscious product for students and offices.",
      "రీసైకిల్డ్ టిన్ క్యాన్లు, ప్లాస్టిక్ బాటిళ్లు, కార్డ్‌బోర్డ్ ట్యూబ్‌లు పెయింట్, వస్త్రం, సృజనాత్మకతతో అందమైన పెన్సిల్ హోల్డర్లుగా మారతాయి. విద్యార్థులు, ఆఫీసుల కోసం అద్భుతమైన పర్యావరణ అనుకూల ఉత్పత్తి.",
    ),
    materials: [
      b("Clean tin cans, bottles or toilet-paper rolls", "శుభ్రమైన టిన్ క్యాన్లు, బాటిళ్లు లేదా టాయిలెట్ పేపర్ రోల్స్"),
      b("Acrylic paint and brushes", "అక్రిలిక్ పెయింట్ మరియు బ్రష్‌లు"),
      b("Fabric scraps, glue, scissors", "వస్త్ర ముక్కలు, అంటుకొనేవి, కత్తెర"),
      b("Decorative tape or stickers", "అలంకరణ టేప్ లేదా స్టిక్కర్లు"),
    ],
    steps: [
      b("Collect and clean recycled containers thoroughly.", "రీసైకిల్డ్ కంటైనర్లను సేకరించి పూర్తిగా శుభ్రం చేయండి."),
      b("Cut containers to uniform height if needed.", "అవసరమైతే కంటైనర్లను ఏకీభవించిన ఎత్తుకు కోయండి."),
      b("Paint base colours and let dry.", "బేస్ రంగులు పెయింట్ చేసి ఆరనివ్వండి."),
      b("Decorate with fabric, tape, stickers or drawings.", "వస్త్రం, టేప్, స్టిక్కర్లు, గీతలతో అలంకరించండి."),
      b("Seal with clear varnish for durability.", "నిలకడ కోసం స్పష్టమైన వార్నిష్‌తో సీల్ చేయండి."),
    ],
    pricing: b("Single holders ₹40–₹100, desk organiser sets ₹150–₹400.", "ఒక్కొక్క హోల్డర్ ₹40–₹100, డెస్క్ ఏర్పాటు సెట్‌లు ₹150–₹400."),
    marketing: [
      b("Sell at school stationery fairs and eco-events.", "పాఠశాల స్టేషనరీ మేళాలు, పర్యావరణ ఈవెంట్‌లలో అమ్మండి."),
      b("Target offices looking for green gifting options.", "పచ్చదనం బహుమతులను వెతుకుతున్న ఆఫీసులను లక్ష్యంగా చేసుకోండి."),
      b("Create themed sets: floral, geometric, cartoon.", "థీమ్ సెట్‌లు తయారు చేయండి: పూల, జ్యామితీయ, కార్టూన్."),
    ],
    expected: b("Eco-crafters earn ₹2,500–₹10,000 monthly with school and corporate orders.", "పాఠశాల, కార్పొరేట్ ఆర్డర్లతో పర్యావరణ క్రాఫ్టర్లు నెలకు ₹2,500–₹10,000 సంపాదిస్తారు."),
    challenges: [
      b("Some containers have sharp edges.", "కొన్ని కంటైనర్లకు పదునైన అంచులు ఉంటాయి."),
      b("Buyers may see them as 'trash crafts'.", "కొనుగోలుదారులు వాటిని 'చెత్త క్రాఫ్ట్‌లు'గా చూడవచ్చు."),
    ],
    tips: [
      b("Sand all edges smooth for safety.", "సురక్షితత కోసం అన్ని అంచులను సాగదీయండి."),
      b("Highlight the eco-friendly story in marketing.", "మార్కెటింగ్‌లో పర్యావరణ అనుకూల కథను హైలైట్ చేయండి."),
    ],
  },
  {
    id: "customized-notebooks",
    icon: "📓",
    image: ideaGifts,
    title: b("Customized Notebooks", "కస్టమైజ్డ్ నోట్‌బుక్‌లు"),
    tagline: b("Personal journals and study books", "వ్యక్తిగత జర్నల్స్ మరియు అభ్యాస పుస్తకాలు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹4,000 – ₹15,000 / month", "₹4,000 – ₹15,000 / నెల"),
    overview: b(
      "Plain notebooks become special when customised with names, art, quotes or fabric covers. Students love personalized study books and journals for gifting.",
      "పేర్లు, కళ, కోట్‌లు, వస్త్ర కవర్లతో అలంకరించినప్పుడు సాధారణ నోట్‌బుక్‌లు ప్రత్యేకంగా మారతాయి. విద్యార్థులు వ్యక్తిగత అభ్యాస పుస్తకాలు, జర్నల్స్‌ను బహుమతులుగా ఇష్టపడతారు.",
    ),
    materials: [
      b("Plain spiral or bound notebooks", "సాధారణ స్పైరల్ లేదా బౌండ్ నోట్‌బుక్‌లు"),
      b("Fabric, paper or washi tape for covers", "కవర్ల కోసం వస్త్రం, కాగితం లేదా వాషీ టేప్"),
      b("Markers, stamps, stickers", "మార్కర్లు, స్టాంపులు, స్టిక్కర్లు"),
      b("Clear contact paper or laminate", "స్పష్టమైన కాంటాక్ట్ పేపర్ లేదా లామినేట్"),
    ],
    steps: [
      b("Choose good-quality plain notebooks.", "నాణ్యమైన సాధారణ నోట్‌బుక్‌లను ఎంచుకోండి."),
      b("Create a fabric or paper cover design.", "వస్త్రం లేదా కాగితం కవర్ డిజైన్ తయారు చేయండి."),
      b("Add name, quote or art to the cover.", "కవర్‌పై పేరు, కోట్ లేదా కళను జోడించండి."),
      b("Seal the cover with contact paper or laminate.", "కాంటాక్ట్ పేపర్ లేదా లామినేట్‌తో కవర్‌ను కాపాడండి."),
      b("Wrap with ribbon and add a gift tag.", "రిబ్బన్‌తో చుట్టి గిఫ్ట్ టాగ్ జోడించండి."),
    ],
    pricing: b("Basic customised notebooks ₹80–₹200, premium fabric cover journals ₹250–₹500.", "బేసిక్ కస్టమైజ్డ్ నోట్‌బుక్‌లు ₹80–₹200, ప్రీమియం వస్త్ర కవర్ జర్నల్స్ ₹250–₹500."),
    marketing: [
      b("Sell at the start of the academic year.", "అకడమిక్ సంవత్సరం ప్రారంభంలో అమ్మండి."),
      b("Offer back-to-school bundles with pencils and pens.", "పెన్సిల్స్, పెన్నులతో బ్యాక్-టు-స్కూల్ బండిల్స్ ఇవ్వండి."),
      b("Create wedding guest book versions.", "వివాహ గెస్ట్ బుక్ వెర్షన్లు తయారు చేయండి."),
    ],
    expected: b("Notebook customisers earn ₹4,000–₹15,000 monthly during school and wedding seasons.", "పాఠశాల, వివాహ సీజన్‌లలో నోట్‌బుక్ కస్టమైజర్లు నెలకు ₹4,000–₹15,000 సంపాదిస్తారు."),
    challenges: [
      b("Sourcing quality plain notebooks at low cost.", "తక్కువ ధరకు నాణ్యమైన సాధారణ నోట్‌బుక్‌లను సరఫరా చేయడం."),
      b("Covers can peel if not sealed properly.", "సరిగ్గా సీల్ చేయకపోతే కవర్లు పగిలిపోతాయి."),
    ],
    tips: [
      b("Buy notebooks in bulk from wholesale markets.", "హోల్‌సేల్ మార్కెట్ల నుండి నోట్‌బుక్‌లను బల్క్‌గా కొనండి."),
      b("Create sample designs to attract bulk school orders.", "బల్క్ పాఠశాల ఆర్డర్లను ఆకర్షించడానికి సాంపిళ్ డిజైన్లు తయారు చేయండి."),
    ],
  },
  {
    id: "mini-photo-frames",
    icon: "🖼️",
    image: ideaDecor,
    title: b("Mini Photo Frames", "మినీ ఫోటో ఫ్రేమ్‌లు"),
    tagline: b("Tiny frames for big memories", "పెద్ద జ్ఞాపకాల కోసం చిన్న ఫ్రేమ్‌లు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,500 – ₹12,000 / month", "₹3,500 – ₹12,000 / నెల"),
    overview: b(
      "Small photo frames made from cardboard, popsicle sticks or recycled materials are adorable gifts for desks, cars and fridges. Easy to make and highly customisable.",
      "కార్డ్‌బోర్డ్, పాప్‌సికిల్ స్టిక్స్, రీసైకిల్డ్ పదార్థాలతో తయారు చేసిన చిన్న ఫోటో ఫ్రేమ్‌లు డెస్క్‌లు, కార్లు, ఫ్రిడ్జీల కోసం ముద్దైన బహుమతులు. తయారు చేయడం సులభం, ఎక్కువగా కస్టమైజ్ చేయవచ్చు.",
    ),
    materials: [
      b("Cardboard or popsicle sticks", "కార్డ్‌బోర్డ్ లేదా పాప్‌సికిల్ స్టిక్స్"),
      b("Glue, scissors, ruler", "అంటుకొనేవి, కత్తెర, స్కేలు"),
      b("Paint, markers, decorative paper", "పెయింట్, మార్కర్లు, అలంకరణ కాగితం"),
      b("Small magnets or stands", "చిన్న మాగ్నెట్లు లేదా స్టాండ్లు"),
    ],
    steps: [
      b("Cut cardboard or arrange sticks into a frame shape.", "కార్డ్‌బోర్డ్‌ను కోయండి లేదా స్టిక్స్‌ను ఫ్రేమ్ ఆకారంలో అమర్చండి."),
      b("Glue edges and let dry completely.", "అంచులను అంటించి పూర్తిగా ఆరనివ్వండి."),
      b("Paint or cover with decorative paper.", "పెయింట్ చేయండి లేదా అలంకరణ కాగితంతో కప్పండి."),
      b("Add a stand at the back or attach a magnet.", "వెనుక స్టాండ్ జోడించండి లేదా మాగ్నెట్ అంటించండి."),
      b("Wrap in cellophane with a ribbon for gifting.", "రిబ్బన్‌తో సెలోఫేన్‌లో చుట్టి బహుమతిగా ఇవ్వండి."),
    ],
    pricing: b("Single mini frames ₹50–₹120, customised sets of 3 ₹180–₹400.", "ఒక్కొక్క మినీ ఫ్రేమ్ ₹50–₹120, కస్టమైజ్డ్ 3 సెట్‌లు ₹180–₹400."),
    marketing: [
      b("Sell as fridge magnet frames for family photos.", "కుటుంబ ఫోటోల కోసం ఫ్రిడ్జి మాగ్నెట్ ఫ్రేమ్‌లుగా అమ్మండి."),
      b("Create car dashboard photo frames.", "కార్ డాష్‌బోర్డ్ ఫోటో ఫ్రేమ్‌లు తయారు చేయండి."),
      b("Offer bulk corporate gifting with company logos.", "కంపెనీ లోగోలతో బల్క్ కార్పొరేట్ బహుమతులు ఇవ్వండి."),
    ],
    expected: b("Frame makers earn ₹3,500–₹12,000 monthly, especially during festive gifting seasons.", "పండుగ బహుమతుల సీజన్‌లలో ఫ్రేమ్ తయారీదారులు నెలకు ₹3,500–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Cardboard frames can bend if not thick enough.", "సరిగ్గా మందంగా లేకపోతే కార్డ్‌బోర్డ్ ఫ్రేమ్‌లు వంగిపోతాయి."),
      b("Paint may smudge before drying.", "ఆరే ముందు పెయింట్ పోవచ్చు."),
    ],
    tips: [
      b("Use double-layer cardboard for sturdiness.", "గట్టితనం కోసం డబుల్-లేయర్ కార్డ్‌బోర్డ్ వాడండి."),
      b("Create themed frames for baby showers and birthdays.", "బేబీ షవర్, పుట్టినరోజుల కోసం థీమ్ ఫ్రేమ్‌లు తయారు చేయండి."),
    ],
  },
  // ---- Creative Products ----
  {
    id: "name-posters",
    icon: "📝",
    image: ideaPaintings,
    title: b("Name Posters", "పేరు పోస్టర్లు"),
    tagline: b("Personalised wall art with names", "పేర్లతో వ్యక్తిగత గోడ కళ"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Name posters are customised wall art where a person's name is created using illustrations, doodles or themed drawings. Popular for kids' rooms and gifting.",
      "పేరు పోస్టర్లు వ్యక్తిగత గోడ కళ, ఇక్కడ వ్యక్తి పేరును చిత్రాలు, డూడుల్స్, థీమ్ గీతలతో తయారు చేస్తారు. పిల్లల గదులు, బహుమతులకు ప్రాచుర్యం.",
    ),
    materials: [
      b("A3 or A4 thick paper", "A3 లేదా A4 మందపాటి కాగితం"),
      b("Pencil, eraser, fineliner pens", "పెన్సిల్, రబ్బరు, ఫైన్‌లైనర్ పెన్నులు"),
      b("Coloured pencils or watercolours", "రంగు పెన్సిల్స్ లేదా వాటర్‌కలర్స్"),
      b("Markers for outlining", "అవుట్‌లైనింగ్ కోసం మార్కర్లు"),
    ],
    steps: [
      b("Write the name lightly in pencil as a guide.", "మార్గదర్శకంగా పెన్సిల్‌తో పేరును తేలిగా రాయండి."),
      b("Replace each letter with a themed doodle or drawing.", "ప్రతి అక్షరాన్ని థీమ్ డూడుల్ లేదా గీతతో మార్చండి."),
      b("Add background elements: stars, flowers, patterns.", "నేపథ్య అంశాలు జోడించండి: నక్షత్రాలు, పూలు, నమూనాలు."),
      b("Outline and colour all elements neatly.", "అన్ని అంశాలను శుభ్రంగా అవుట్‌లైన్ చేసి రంగు వేయండి."),
      b("Mount on coloured cardstock and package.", "రంగు కార్డ్‌స్టాక్‌పై అమర్చి ప్యాక్ చేయండి."),
    ],
    pricing: b("Simple name posters ₹100–₹250, elaborate themed versions ₹300–₹600.", "సరళ పేరు పోస్టర్లు ₹100–₹250, సంక్లిష్ట థీమ్ వెర్షన్లు ₹300–₹600."),
    marketing: [
      b("Show samples for baby names and birthday gifts.", "బేబీ పేర్లు, పుట్టినరోజు బహుమతుల కోసం సాంపిళ్లు చూపండి."),
      b("Post time-lapse creation videos.", "తయారీ టైమ్-లాప్స్ వీడియోలు పోస్ట్ చేయండి."),
      b("Offer digital + physical poster bundles.", "డిజిటల్ + భౌతిక పోస్టర్ బండిల్స్ ఇవ్వండి."),
    ],
    expected: b("Name poster artists earn ₹3,000–₹12,000 monthly with steady social media presence.", "స్థిరమైన సోషల్ మీడియా ఉన్నతితో పేరు పోస్టర్ కళాకారులు నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Each poster is time-intensive and unique.", "ప్రతి పోస్టర్‌కు ఎక్కువ సమయం, ప్రత్యేకమైనది."),
      b("Customers may want many revisions.", "కస్టమర్లు చాలా మార్పులు కోరవచ్చు."),
    ],
    tips: [
      b("Create template themes (space, floral, sports) to speed up work.", "పని వేగవంతం కోసం టెంప్లేట్ థీమ్‌లు (అంతరిక్షం, పూలు, క్రీడలు) తయారు చేయండి."),
      b("Charge extra for framed or laminated versions.", "ఫ్రేమ్ చేసిన లేదా లామినేట్ వెర్షన్లకు అదనంగా వసూలు చేయండి."),
    ],
  },
  {
    id: "calligraphy-art",
    icon: "✒️",
    image: ideaPaintings,
    title: b("Calligraphy Art", "కాలిగ్రఫీ కళ"),
    tagline: b("Beautiful lettering for walls and gifts", "గోడలు, బహుమతుల కోసం అందమైన అక్షర కళ"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Calligraphy turns simple words into visual art. With practice, you can create wall quotes, greeting cards, certificates and personalised gifts that people treasure.",
      "కాలిగ్రఫీ సాధారణ పదాలను దృశ్య కళగా మారుస్తుంది. సాధనతో గోడ కోట్‌లు, శుభాకాంక్షా కార్డులు, ధృవీకరణ పత్రాలు, వ్యక్తిగత బహుమతులు తయారు చేయవచ్చు.",
    ),
    materials: [
      b("Calligraphy pens or brush pens", "కాలిగ్రఫీ పెన్నులు లేదా బ్రష్ పెన్నులు"),
      b("Smooth thick paper or cardstock", "మృదువైన మందపాటి కాగితం లేదా కార్డ్‌స్టాక్"),
      b("Pencil and eraser for guidelines", "మార్గదర్శకాల కోసం పెన్సిల్, రబ్బరు"),
      b("Optional: watercolours for backgrounds", "ఐచ్ఛికం: నేపథ్యాల కోసం వాటర్‌కలర్స్"),
    ],
    steps: [
      b("Practice basic strokes and letter forms daily.", "ప్రతిరోజూ ప్రాథమిక స్ట్రోక్స్, అక్షర రూపాలు సాధన చేయండి."),
      b("Write the quote lightly in pencil first.", "ముందు పెన్సిల్‌తో కోట్‌ను తేలిగా రాయండి."),
      b("Trace over with calligraphy pen carefully.", "జాగ్రత్తగా కాలిగ్రఫీ పెన్నుతో ట్రేస్ చేయండి."),
      b("Add decorative flourishes and borders.", "అలంకరణ ఫ్లోరిషెస్, అంచులు జోడించండి."),
      b("Erase pencil marks and sign your work.", "పెన్సిల్ గుర్తులను తుడిచి మీ పనిపై సంతకం చేయండి."),
    ],
    pricing: b("Single quote cards ₹40–₹100, framed wall quotes ₹200–₹500, custom certificates ₹150–₹350.", "ఒక్కొక్క కోట్ కార్డ్ ₹40–₹100, ఫ్రేమ్ చేసిన గోడ కోట్ ₹200–₹500, కస్టమ్ ధృవీకరణ పత్రాలు ₹150–₹350."),
    marketing: [
      b("Post daily lettering practice on Instagram.", "ఇన్‌స్టాగ్రామ్‌లో రోజువారీ అక్షర సాధన పోస్ట్ చేయండి."),
      b("Offer wedding invitation addressing services.", "వివాహ ఆహ్వానాల అడ్రసింగ్ సేవలు ఇవ్వండి."),
      b("Sell at craft fairs and bookshops.", "క్రాఫ్ట్ మేళాలు, పుస్తక దుకాణాల్లో అమ్మండి."),
    ],
    expected: b("Calligraphy artists earn ₹3,000–₹12,000 monthly with cards, frames and event work.", "కార్డులు, ఫ్రేమ్‌లు, ఈవెంట్ పనితో కాలిగ్రఫీ కళాకారులు నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Consistent lettering takes months of practice.", "స్థిరమైన అక్షరాలకు నెలల సాధన అవసరం."),
      b("Smudges can ruin finished pieces.", "పొడవడం పూర్తయిన పీసెస్‌ను నాశనం చేయవచ్చు."),
    ],
    tips: [
      b("Start with fake calligraphy (normal pen) to build confidence.", "ఆత్మవిశ్వాసం పెంచుకోవడానికి ఫేక్ కాలిగ్రఫీ (సాధారణ పెన్) తో ప్రారంభించండి."),
      b("Use masking tape to keep lines straight.", "సరళ గీతల కోసం మాస్కింగ్ టేప్ వాడండి."),
    ],
  },
  {
    id: "customized-certificates",
    icon: "🏆",
    image: ideaGifts,
    title: b("Customized Certificates", "కస్టమైజ్డ్ సర్టిఫికేట్లు"),
    tagline: b("Handmade awards for any achievement", "ఏ విజయానికైనా చేతి తయారీ బహుమతులు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹2,500 – ₹10,000 / month", "₹2,500 – ₹10,000 / నెల"),
    overview: b(
      "Personalised certificates of appreciation, achievement and love make heartfelt gifts for teachers, parents, friends and colleagues. With calligraphy and decoration, simple paper becomes a treasured keepsake.",
      "కృతజ్ఞత, విజయం, ప్రేమ కోసం వ్యక్తిగత సర్టిఫికేట్లు ఉపాధ్యాయులు, తల్లిదండ్రులు, స్నేహితులు, సహోద్యోగుల కోసం హృదయపూర్వక బహుమతులు. కాలిగ్రఫీ, అలంకరణతో సాధారణ కాగితం శాశ్వత జ్ఞాపకంగా మారుతుంది.",
    ),
    materials: [
      b("A4 cardstock in cream or white", "A4 క్రీం లేదా తెలుపు కార్డ్‌స్టాక్"),
      b("Calligraphy pens and markers", "కాలిగ్రఫీ పెన్నులు మరియు మార్కర్లు"),
      b("Washi tape, stickers, stamps", "వాషీ టేప్, స్టిక్కర్లు, స్టాంపులు"),
      b("Ribbon for seals", "సీళ్ల కోసం రిబ్బన్"),
    ],
    steps: [
      b("Choose a certificate theme: achievement, love, humour.", "సర్టిఫికేట్ థీమ్ ఎంచుకోండి: విజయం, ప్రేమ, హాస్యం."),
      b("Write the title and recipient name in calligraphy.", "కాలిగ్రఫీతో శీర్షిక, స్వీకర్త పేరు రాయండి."),
      b("Add the reason and date neatly.", "కారణం, తేదీని శుభ్రంగా జోడించండి."),
      b("Decorate borders with tape, stamps or drawings.", "టేప్, స్టాంపులు, గీతలతో అంచులను అలంకరించండి."),
      b("Add a ribbon seal and sign at the bottom.", "రిబ్బన్ సీల్ జోడించి కింద సంతకం చేయండి."),
    ],
    pricing: b("Single customised certificates ₹60–₹150, framed versions ₹200–₹400.", "ఒక్కొక్క కస్టమ్ సర్టిఫికేట్ ₹60–₹150, ఫ్రేమ్ వెర్షన్లు ₹200–₹400."),
    marketing: [
      b("Sell as funny awards for friends and office parties.", "స్నేహితులు, ఆఫీసు పార్టీల కోసం హాస్యభరితమైన బహుమతులుగా అమ్మండి."),
      b("Create teacher appreciation certificates.", "ఉపాధ్యాయ కృతజ్ఞతా సర్టిఫికేట్లు తయారు చేయండి."),
      b("Offer bulk orders for school prize days.", "పాఠశాల బహుమతి రోజుల కోసం బల్క్ ఆర్డర్లు ఇవ్వండి."),
    ],
    expected: b("Certificate makers earn ₹2,500–₹10,000 monthly with event and school orders.", "ఈవెంట్, పాఠశాల ఆర్డర్లతో సర్టిఫికేట్ తయారీదారులు నెలకు ₹2,500–₹10,000 సంపాదిస్తారు."),
    challenges: [
      b("Spelling errors are costly — proofread carefully.", "అశుద్ధాలు ఖరీదైనవి — జాగ్రత్తగా పరిశీలించండి."),
      b("Customers may request very specific wording.", "కస్టమర్లు చాలా నిర్దిష్ట పదాలను కోరవచ్చు."),
    ],
    tips: [
      b("Create reusable templates for common awards.", "సాధారణ బహుమతుల కోసం మళ్లీ ఉపయోగించే టెంప్లేట్‌లు తయారు చేయండి."),
      b("Always keep spare cardstock for corrections.", "సరళీకరణల కోసం ఎప్పుడూ అదనపు కార్డ్‌స్టాక్ ఉంచుకోండి."),
    ],
  },
  {
    id: "hand-painted-stones",
    icon: "🪨",
    image: ideaNursery,
    title: b("Hand-Painted Stones", "చేతి పెయింట్ చేసిన రాళ్లు"),
    tagline: b("Nature art for gardens and desks", "తోటలు, డెస్క్‌ల కోసం ప్రకృతి కళ"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Smooth river stones painted with mandalas, animals, quotes or patterns make lovely paperweights, garden décor and gifts. Completely free raw material if you collect locally.",
      "మండలాలు, జంతువులు, కోట్‌లు, నమూనాలతో పెయింట్ చేసిన మృదువైన నది రాళ్లు అందమైన పేపర్‌వెయిట్స్, తోట అలంకరణ, బహుమతులుగా ఉంటాయి. స్థానికంగా సేకరిస్తే ముడి పదార్థం పూర్తిగా ఉచితం.",
    ),
    materials: [
      b("Smooth, flat stones (river or beach)", "మృదువైన, చదరపు రాళ్లు (నది లేదా సముద్ర తీరం)"),
      b("Acrylic paint and fine brushes", "అక్రిలిక్ పెయింట్ మరియు సన్న బ్రష్‌లు"),
      b("Clear varnish or sealant", "స్పష్టమైన వార్నిష్ లేదా సీలెంట్"),
      b("Pencil for sketching designs", "డిజైన్ గీతల కోసం పెన్సిల్"),
    ],
    steps: [
      b("Wash and dry stones thoroughly.", "రాళ్లను పూర్తిగా కడిగి ఆరనివ్వండి."),
      b("Sketch your design lightly in pencil.", "పెన్సిల్‌తో డిజైన్‌ను తేలిగా గీయండి."),
      b("Paint base colours and let dry.", "బేస్ రంగులు పెయింట్ చేసి ఆరనివ్వండి."),
      b("Add details: dots, lines, patterns.", "వివరాలు జోడించండి: బిందువులు, గీతలు, నమూనాలు."),
      b("Seal with clear varnish for outdoor use.", "బయట ఉపయోగం కోసం స్పష్టమైన వార్నిష్‌తో సీల్ చేయండి."),
    ],
    pricing: b("Small painted stones ₹40–₹100, large garden stones ₹150–₹400, sets ₹200–₹600.", "చిన్న పెయింట్ రాళ్లు ₹40–₹100, పెద్ద తోట రాళ్లు ₹150–₹400, సెట్‌లు ₹200–₹600."),
    marketing: [
      b("Sell at plant nurseries and garden shops.", "మొక్కల నర్సరీలు, తోట షాపుల్లో అమ్మండి."),
      b("Create pet portrait stones from customer photos.", "కస్టమర్ ఫోటోల నుండి పెట్ పోర్ట్రేయిట్ రాళ్లు తయారు చేయండి."),
      b("Offer motivational quote stones for desks.", "డెస్క్‌ల కోసం ప్రేరణ కోట్ రాళ్లు ఇవ్వండి."),
    ],
    expected: b("Stone painters earn ₹3,000–₹12,000 monthly with garden and custom orders.", "తోట, కస్టమ్ ఆర్డర్లతో రాయి పెయింటర్లు నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Finding smooth, paintable stones locally.", "స్థానికంగా పెయింట్ చేయగల మృదువైన రాళ్లను కనుగొనడం."),
      b("Paint can chip if stones are dropped.", "రాళ్లు పడితే పెయింట్ పగిలిపోవచ్చు."),
    ],
    tips: [
      b("Use outdoor-grade varnish for garden stones.", "తోట రాళ్ల కోసం ఔట్‌డోర్-గ్రేడ్ వార్నిష్ వాడండి."),
      b("Collect stones after monsoon when rivers are full.", "వర్షాకాలం తర్వాత నదులు నిండి ఉన్నప్పుడు రాళ్లను సేకరించండి."),
    ],
  },
  {
    id: "mandala-artwork",
    icon: "🔮",
    image: ideaPaintings,
    title: b("Mandala Artwork", "మండలా కళ"),
    tagline: b("Meditative circular patterns", "ధ్యానభరితమైన వృత్తాకార నమూనాలు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹4,000 – ₹15,000 / month", "₹4,000 – ₹15,000 / నెల"),
    overview: b(
      "Mandala art is both therapeutic to create and beautiful to display. Circular patterns drawn on paper, stones or wood sell well as wall art, coasters and mindful gifts.",
      "మండలా కళ తయారీకి చికిత్సాత్మకం, ప్రదర్శనకు అందమైనది. కాగితం, రాళ్లు, చెక్కపై గీసిన వృత్తాకార నమూనాలు గోడ కళ, కోస్టర్లు, ధ్యాన బహుమతులుగా బాగా అమ్ముడవుతాయి.",
    ),
    materials: [
      b("Round paper or pre-cut wooden circles", "వృత్తాకార కాగితం లేదా ముందుగా కట్ చేసిన చెక్క వృత్తాలు"),
      b("Fineliner pens or gel pens", "ఫైన్‌లైనర్ పెన్నులు లేదా జెల్ పెన్నులు"),
      b("Coloured pencils or markers", "రంగు పెన్సిల్స్ లేదా మార్కర్లు"),
      b("Compass and protractor for guidelines", "మార్గదర్శకాల కోసం కంపాస్, ప్రొట్రాక్టర్"),
    ],
    steps: [
      b("Draw light concentric circles as guides.", "మార్గదర్శకాలుగా తేలికైన సమకేంద్ర వృత్తాలు గీయండి."),
      b("Divide circles into equal segments with lines.", "గీతలతో వృత్తాలను సమాన ఖండాలుగా విభజించండి."),
      b("Fill each section with repeating patterns.", "ప్రతి భాగాన్ని పునరావృత నమూనాలతో నింపండి."),
      b("Add colour gradually, layer by layer.", "పొరలుగా నెమ్మదిగా రంగు జోడించండి."),
      b("Erase guidelines and seal with fixative.", "మార్గదర్శకాలను తుడిచి ఫిక్సేటివ్‌తో సీల్ చేయండి."),
    ],
    pricing: b("Small mandala cards ₹80–₹200, A4 wall art ₹250–₹600, wooden coaster sets ₹300–₹800.", "చిన్న మండలా కార్డులు ₹80–₹200, A4 గోడ కళ ₹250–₹600, చెక్క కోస్టర్ సెట్‌లు ₹300–₹800."),
    marketing: [
      b("Promote the mindfulness and stress-relief angle.", "మైండ్‌ఫుల్‌నెస్, ఒత్తిడి నివారణ కోణాన్ని ప్రమోట్ చేయండి."),
      b("Sell colouring templates as DIY kits.", "DIY కిట్‌లుగా కలరింగ్ టెంప్లేట్‌లను అమ్మండి."),
      b("Create matching coaster sets for homes.", "ఇళ్ల కోసం మ్యాచింగ్ కోస్టర్ సెట్‌లు తయారు చేయండి."),
    ],
    expected: b("Mandala artists earn ₹4,000–₹15,000 monthly through originals, prints and workshops.", "మౌలిక చిత్రాలు, ప్రింట్‌లు, వర్క్‌షాప్‌ల ద్వారా మండలా కళాకారులు నెలకు ₹4,000–₹15,000 సంపాదిస్తారు."),
    challenges: [
      b("Symmetry requires patience and focus.", "సమమిత కోసం ఓపిక, దృష్టి అవసరం."),
      b("Small mistakes are hard to fix.", "చిన్న తప్పులను సరిదిద్దడం కష్టం."),
    ],
    tips: [
      b("Start with quarter-mandala designs for practice.", "సాధన కోసం క్వార్టర్-మండలా డిజైన్లతో ప్రారంభించండి."),
      b("Use a rotating mat for easier symmetry.", "సులభమైన సమమిత కోసం తిరిగే మ్యాట్ వాడండి."),
    ],
  },
  {
    id: "personalized-gift-boxes",
    icon: "🎁",
    image: ideaGifts,
    title: b("Personalized Gift Boxes", "వ్యక్తిగత బహుమతి పెట్టెలు"),
    tagline: b("Curated surprise boxes for any occasion", "ఏ సందర్భానికైనా క్యూరేట్ చేసిన ఆశ్చర్య పెట్టెలు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹5,000 – ₹20,000 / month", "₹5,000 – ₹20,000 / నెల"),
    overview: b(
      "Gift boxes curated with personalised items — cards, snacks, small crafts — are highly popular for birthdays, anniversaries and festivals. You assemble the box; the thoughtfulness sells it.",
      "కార్డులు, స్నాక్స్, చిన్న క్రాఫ్ట్‌లతో క్యూరేట్ చేసిన బహుమతి పెట్టెలు పుట్టినరోజులు, వార్షికోత్సవాలు, పండుగలకు అత్యంత ప్రాచుర్యం. మీరు పెట్టెను సిద్ధం చేస్తారు; మీ ఆలోచన వాటిని అమ్ముతుంది.",
    ),
    materials: [
      b("Cardboard boxes or kraft boxes", "కార్డ్‌బోర్డ్ పెట్టెలు లేదా క్రాఫ్ట్ పెట్టెలు"),
      b("Tissue paper and shredded filler", "టిష్యూ పేపర్ మరియు నిండిన ఫిల్లర్"),
      b("Small items: cards, chocolates, crafts", "చిన్న వస్తువులు: కార్డులు, చాక్లెట్లు, క్రాఫ్ట్‌లు"),
      b("Ribbons, stickers, gift tags", "రిబ్బన్లు, స్టిక్కర్లు, గిఫ్ట్ టాగ్లు"),
    ],
    steps: [
      b("Choose a box size based on the occasion.", "సందర్భాన్ని బట్టి పెట్టె పరిమాణాన్ని ఎంచుకోండి."),
      b("Line the box with tissue and filler paper.", "టిష్యూ, ఫిల్లర్ పేపర్‌తో పెట్టెను అస్తరం వేయండి."),
      b("Arrange 4–6 small items neatly inside.", "4–6 చిన్న వస్తువులను శుభ్రంగా లోపల అమర్చండి."),
      b("Add a handwritten note or card on top.", "పైన చేతి రాత సందేశం లేదా కార్డ్ జోడించండి."),
      b("Close with ribbon and a personalised gift tag.", "రిబ్బన్, వ్యక్తిగత గిఫ్ట్ టాగ్‌తో మూసివేయండి."),
    ],
    pricing: b("Small curated boxes ₹200–₹500, premium celebration boxes ₹500–₹1,200.", "చిన్న క్యూరేట్ పెట్టెలు ₹200–₹500, ప్రీమియం వేడుక పెట్టెలు ₹500–₹1,200."),
    marketing: [
      b("Create themed boxes: self-care, birthday, anniversary.", "థీమ్ పెట్టెలు తయారు చేయండి: సెల్ఫ్-కేర్, పుట్టినరోజు, వార్షికోత్సవం."),
      b("Post unboxing videos on Instagram reels.", "ఇన్‌స్టా రీల్స్‌లో అన్‌బాక్సింగ్ వీడియోలు పోస్ట్ చేయండి."),
      b("Partner with local bakers for sweet add-ons.", "స్వీట్ అదనాల కోసం స్థానిక బేకర్లతో భాగస్వామ్యం చేయండి."),
    ],
    expected: b("Gift box curators earn ₹5,000–₹20,000 monthly with event and corporate orders.", "ఈవెంట్, కార్పొరేట్ ఆర్డర్లతో గిఫ్ట్ బాక్స్ క్యూరేటర్లు నెలకు ₹5,000–₹20,000 సంపాదిస్తారు."),
    challenges: [
      b("Sourcing quality small items at low cost.", "తక్కువ ధరకు నాణ్యమైన చిన్న వస్తువులను సరఫరా చేయడం."),
      b("Boxes can look empty if not filled well.", "సరిగ్గా నింపకపోతే పెట్టెలు ఖాళీగా కనిపిస్తాయి."),
    ],
    tips: [
      b("Buy filler and tissue in bulk to reduce cost.", "ఖర్చు తగ్గించడానికి ఫిల్లర్, టిష్యూను బల్క్‌గా కొనండి."),
      b("Add a personal touch with handwritten notes.", "చేతి రాత సందేశాలతో వ్యక్తిగత టచ్ జోడించండి."),
    ],
  },
  {
    id: "memory-scrapbooks",
    icon: "📖",
    image: ideaGifts,
    title: b("Memory Scrapbooks", "మెమరీ స్క్రాప్‌బుక్‌లు"),
    tagline: b("Handcrafted albums for treasured moments", "అమూల్యమైన క్షణాల కోసం చేతి తయారీ ఆల్బమ్‌లు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹4,000 – ₹15,000 / month", "₹4,000 – ₹15,000 / నెల"),
    overview: b(
      "Scrapbooks preserve memories through photos, journaling, stickers and embellishments. A handmade scrapbook makes an incredibly meaningful gift for birthdays, weddings and farewells.",
      "స్క్రాప్‌బుక్‌లు ఫోటోలు, జర్నలింగ్, స్టిక్కర్లు, అలంకరణల ద్వారా జ్ఞాపకాలను కాపాడతాయి. చేతితో తయారు చేసిన స్క్రాప్‌బుక్ పుట్టినరోజులు, వివాహాలు, వీడ్కోళ్ల కోసం అర్థవంతమైన బహుమతి.",
    ),
    materials: [
      b("Blank scrapbook or bound journal", "ఖాళీ స్క్రాప్‌బుక్ లేదా బౌండ్ జర్నల్"),
      b("Printed photos, decorative paper", "ప్రింటెడ్ ఫోటోలు, అలంకరణ కాగితం"),
      b("Stickers, washi tape, stamps", "స్టిక్కర్లు, వాషీ టేప్, స్టాంపులు"),
      b("Scissors, glue, markers, ribbons", "కత్తెర, అంటుకొనేవి, మార్కర్లు, రిబ్బన్లు"),
    ],
    steps: [
      b("Discuss the theme and memories with the customer.", "థీమ్, జ్ఞాపకాల గురించి కస్టమర్‌తో చర్చించండి."),
      b("Arrange photos and memorabilia on each page.", "ప్రతి పేజీపై ఫోటోలు, జ్ఞాపక వస్తువులను అమర్చండి."),
      b("Add captions, quotes and small stories.", "క్యాప్షన్లు, కోట్‌లు, చిన్న కథలు జోడించండి."),
      b("Decorate with stickers, tape and drawings.", "స్టిక్కర్లు, టేప్, గీతలతో అలంకరించండి."),
      b("Add pockets or envelopes for extra keepsakes.", "అదనపు జ్ఞాపకాల కోసం జేబులు, కవర్లు జోడించండి."),
    ],
    pricing: b("Small 20-page scrapbooks ₹300–₹700, large premium albums ₹800–₹2,000.", "చిన్న 20-పేజీ స్క్రాప్‌బుక్‌లు ₹300–₹700, పెద్ద ప్రీమియం ఆల్బమ్‌లు ₹800–₹2,000."),
    marketing: [
      b("Show before-and-after pages on social media.", "సోషల్ మీడియాలో ముందు-తర్వాత పేజీలు చూపండి."),
      b("Offer wedding and baby memory books.", "వివాహ, బేబీ మెమరీ బుక్‌లు ఇవ్వండి."),
      b("Create graduation and farewell scrapbook packages.", "గ్రాడ్యుయేషన్, వీడ్కోళ్ల స్క్రాప్‌బుక్ ప్యాకేజీలు తయారు చేయండి."),
    ],
    expected: b("Scrapbook makers earn ₹4,000–₹15,000 monthly with custom memory orders.", "కస్టమ్ మెమరీ ఆర్డర్లతో స్క్రాప్‌బుక్ తయారీదారులు నెలకు ₹4,000–₹15,000 సంపాదిస్తారు."),
    challenges: [
      b("Very time-consuming — price your hours fairly.", "చాలా సమయం పడుతుంది — మీ గంటలకు న్యాయమైన ధర పెట్టండి."),
      b("Customers may be emotionally attached to photos.", "కస్టమర్లు ఫోటోలకు భావనాత్మకంగా అంటుకోవచ్చు."),
    ],
    tips: [
      b("Create a standard layout template to save time.", "సమయం ఆదా చేయడానికి స్టాండర్డ్ లేఅవుట్ టెంప్లేట్ తయారు చేయండి."),
      b("Always make digital backups of customer photos.", "కస్టమర్ ఫోటోల డిజిటల్ బ్యాకప్‌లను ఎప్పుడూ తయారు చేయండి."),
    ],
  },
  {
    id: "vision-boards",
    icon: "🌟",
    image: ideaDecor,
    title: b("Vision Boards", "విజన్ బోర్డులు"),
    tagline: b("Inspiring goal boards for dreams", "స్వప్నాల కోసం ప్రేరణ లక్ష్య బోర్డులు"),
    cost: b("Under ₹200", "₹200 లోపు"),
    skill: b("Beginner", "ప్రారంభకుడు"),
    earning: b("₹3,000 – ₹12,000 / month", "₹3,000 – ₹12,000 / నెల"),
    overview: b(
      "Vision boards help people visualise their goals. By creating curated collage boards with quotes, images and affirmations, you provide a powerful motivational product for homes and offices.",
      "విజన్ బోర్డులు లక్ష్యాలను దృశ్యమానం చేయడంలో సహాయపడతాయి. కోట్‌లు, చిత్రాలు, ధృవీకరణలతో క్యూరేట్ చేసిన కొల్లాజ్ బోర్డులను తయారు చేయడం ద్వారా ఇళ్లు, ఆఫీసుల కోసం శక్తివంతమైన ప్రేరణ ఉత్పత్తిని అందిస్తారు.",
    ),
    materials: [
      b("Cardboard or cork board base", "కార్డ్‌బోర్డ్ లేదా కార్క్ బోర్డ్ బేస్"),
      b("Magazine cutouts, printed quotes", "మ్యాగజైన్ కట్‌అవుట్స్, ప్రింటెడ్ కోట్‌లు"),
      b("Stickers, washi tape, markers", "స్టిక్కర్లు, వాషీ టేప్, మార్కర్లు"),
      b("Glue, scissors, ribbons", "అంటుకొనేవి, కత్తెర, రిబ్బన్లు"),
    ],
    steps: [
      b("Discuss the customer's goals and dreams.", "కస్టమర్ లక్ష్యాలు, స్వప్నాల గురించి చర్చించండి."),
      b("Collect images and quotes matching their vision.", "వారి దృష్టికి సరిపోయే చిత్రాలు, కోట్‌లను సేకరించండి."),
      b("Arrange elements on the board before gluing.", "అంటించే ముందు బోర్డుపై అంశాలను అమర్చండి."),
      b("Glue and add decorative tape borders.", "అంటించి అలంకరణ టేప్ అంచులు జోడించండి."),
      b("Add a title like 'My 2025 Goals' and sign.", "'నా 2025 లక్ష్యాలు' వంటి శీర్షిక జోడించి సంతకం చేయండి."),
    ],
    pricing: b("Small A4 vision boards ₹150–₹350, large framed boards ₹400–₹900.", "చిన్న A4 విజన్ బోర్డులు ₹150–₹350, పెద్ద ఫ్రేమ్ బోర్డులు ₹400–₹900."),
    marketing: [
      b("Target New Year and birthday goal-setting customers.", "కొత్త సంవత్సరం, పుట్టినరోజు లక్ష్య నిర్ణయ కస్టమర్లను లక్ష్యంగా చేసుకోండి."),
      b("Offer vision board workshops for groups.", "సమూహాల కోసం విజన్ బోర్డ్ వర్క్‌షాప్‌లు ఇవ్వండి."),
      b("Partner with life coaches and mentors.", "లైఫ్ కోచ్‌లు, మెంటర్లతో భాగస్వామ్యం చేయండి."),
    ],
    expected: b("Vision board creators earn ₹3,000–₹12,000 monthly, especially in January and during festive seasons.", "విజన్ బోర్డ్ సృష్టికర్తలు జనవరి, పండుగ సీజన్‌లలో నెలకు ₹3,000–₹12,000 సంపాదిస్తారు."),
    challenges: [
      b("Finding copyright-free images for boards.", "బోర్డుల కోసం కాపీరైట్ లేని చిత్రాలను కనుగొనడం."),
      b("Customers may have vague goals.", "కస్టమర్ల లక్ష్యాలు అస్పష్టంగా ఉండవచ్చు."),
    ],
    tips: [
      b("Create template goal categories: health, career, travel.", "టెంప్లేట్ లక్ష్య వర్గాలు తయారు చేయండి: ఆరోగ్యం, వృత్తి, ప్రయాణం."),
      b("Offer follow-up boards for quarterly reviews.", "త్రైమాసిక సమీక్షల కోసం ఫాలో-అప్ బోర్డులు ఇవ్వండి."),
    ],
  },
];

// Marketplace products
export interface Product {
  id: string;
  name: Bi;
  seller: Bi;
  price: string;
  category: Bi;
  categoryKey: string;
  emoji: string;
  image: string;
  desc: Bi;
}

export const productCategories = [
  { key: "crafts", label: b("Crafts", "క్రాఫ్ట్‌లు") },
  { key: "foods", label: b("Homemade Foods", "ఇంటి ఆహారాలు") },
  { key: "jewelry", label: b("Jewelry", "ఆభరణాలు") },
  { key: "clothing", label: b("Clothing", "దుస్తులు") },
  { key: "paintings", label: b("Paintings", "చిత్రాలు") },
  { key: "decor", label: b("Home Decor", "ఇంటి అలంకరణ") },
  { key: "gifts", label: b("Gifts", "బహుమతులు") },
];

export const products: Product[] = [
  {
    id: "p1",
    name: b("Lavender Soy Candle Set", "లావెండర్ సోయా కొవ్వొత్తి సెట్"),
    seller: b("Lakshmi Crafts", "లక్ష్మి క్రాఫ్ట్స్"),
    price: "₹450",
    category: b("Crafts", "క్రాఫ్ట్‌లు"),
    categoryKey: "crafts",
    emoji: "🕯️",
    image: p1Img,
    desc: b("Set of 3 hand-poured soy candles with calming lavender fragrance.", "ప్రశాంతమైన లావెండర్ సువాసనతో చేతితో పోసిన 3 సోయా కొవ్వొత్తుల సెట్."),
  },
  {
    id: "p2",
    name: b("Homemade Mango Pickle 500g", "ఇంటి మామిడి ఊరగాయ 500g"),
    seller: b("Padma's Kitchen", "పద్మ వంటిల్లు"),
    price: "₹220",
    category: b("Homemade Foods", "ఇంటి ఆహారాలు"),
    categoryKey: "foods",
    emoji: "🥭",
    image: p2Img,
    desc: b("Traditional spicy mango pickle, no preservatives, family recipe.", "సంప్రదాయ కారం మామిడి ఊరగాయ, ప్రిజర్వేటివ్‌లు లేవు, కుటుంబ వంటకం."),
  },
  {
    id: "p3",
    name: b("Terracotta Earrings", "టెర్రకోట చెవి దుద్దులు"),
    seller: b("Sravani Designs", "శ్రావణి డిజైన్స్"),
    price: "₹180",
    category: b("Jewelry", "ఆభరణాలు"),
    categoryKey: "jewelry",
    emoji: "💍",
    image: p3Img,
    desc: b("Handpainted terracotta earrings, lightweight and elegant.", "చేతితో పెయింట్ చేసిన టెర్రకోట చెవి దుద్దులు, తేలికైనవి, అందమైనవి."),
  },
  {
    id: "p4",
    name: b("Hand-stitched Cotton Blouse", "చేతి కుట్టు పత్తి జాకెట్"),
    seller: b("Anjali Tailors", "అంజలి టైలర్స్"),
    price: "₹350",
    category: b("Clothing", "దుస్తులు"),
    categoryKey: "clothing",
    emoji: "👚",
    image: p4Img,
    desc: b("Custom-fit cotton blouse, made to your measurements.", "మీ కొలతలకు తగ్గట్టు కస్టమ్ ఫిట్ పత్తి జాకెట్."),
  },
  {
    id: "p5",
    name: b("Madhubani Wall Painting", "మధుబని గోడ చిత్రం"),
    seller: b("Ravi Art Studio", "రవి ఆర్ట్ స్టూడియో"),
    price: "₹1,200",
    category: b("Paintings", "చిత్రాలు"),
    categoryKey: "paintings",
    emoji: "🎨",
    image: p5Img,
    desc: b("Authentic hand-painted Madhubani folk art on canvas.", "క్యాన్వాస్‌పై చేతితో గీసిన అసలైన మధుబని జానపద కళ."),
  },
  {
    id: "p6",
    name: b("Macramé Wall Hanging", "మాక్రమే గోడ హ్యాంగింగ్"),
    seller: b("Knot & Co", "నాట్ & కో"),
    price: "₹600",
    category: b("Home Decor", "ఇంటి అలంకరణ"),
    categoryKey: "decor",
    emoji: "🪢",
    image: p6Img,
    desc: b("Boho macramé wall hanging, perfect for living rooms.", "లివింగ్ రూమ్‌లకు అనువైన బోహో మాక్రమే గోడ హ్యాంగింగ్."),
  },
  {
    id: "p7",
    name: b("Personalized Photo Frame", "వ్యక్తిగత ఫోటో ఫ్రేమ్"),
    seller: b("Gift Nook", "గిఫ్ట్ నుక్"),
    price: "₹320",
    category: b("Gifts", "బహుమతులు"),
    categoryKey: "gifts",
    emoji: "🖼️",
    image: p7Img,
    desc: b("Custom engraved wooden photo frame for special memories.", "ప్రత్యేక జ్ఞాపకాల కోసం చెక్కిన చెక్క ఫోటో ఫ్రేమ్."),
  },
  {
    id: "p8",
    name: b("Crochet Baby Booties", "క్రోషే బేబీ బూటీలు"),
    seller: b("Cozy Threads", "కోజీ థ్రెడ్స్"),
    price: "₹250",
    category: b("Crafts", "క్రాఫ్ట్‌లు"),
    categoryKey: "crafts",
    emoji: "🧶",
    image: p8Img,
    desc: b("Soft handmade crochet booties for newborns, gift-ready.", "నవజాత శిశువులకు మృదువైన చేతి క్రోషే బూటీలు, బహుమతికి సిద్ధం."),
  },
  {
    id: "p9",
    name: b("Assorted Laddu Box", "మిశ్రమ లడ్డూ బాక్స్"),
    seller: b("Sweet Home", "స్వీట్ హోమ్"),
    price: "₹400",
    category: b("Homemade Foods", "ఇంటి ఆహారాలు"),
    categoryKey: "foods",
    emoji: "🍡",
    image: p9Img,
    desc: b("Festive box of fresh homemade laddus, pure ghee.", "స్వచ్ఛమైన నెయ్యితో తాజా ఇంటి లడ్డూల పండుగ బాక్స్."),
  },
];

// Success stories
export interface Story {
  id: string;
  name: Bi;
  role: Bi;
  emoji: string;
  image: string;
  story: Bi;
  testimonial: Bi;
  growth: Bi;
}

export const stories: Story[] = [
  {
    id: "s1",
    name: b("Lakshmi", "లక్ష్మి"),
    role: b("Homemaker, Guntur", "గృహిణి, గుంటూరు"),
    emoji: "👩",
    image: storyLakshmi,
    story: b(
      "Lakshmi started making handmade candles from her kitchen. Today she supplies three gift shops and earns a steady second income.",
      "లక్ష్మి తన వంటగది నుండి కొవ్వొత్తులు తయారు చేయడం ప్రారంభించింది. నేడు ఆమె మూడు గిఫ్ట్ షాపులకు సరఫరా చేస్తూ స్థిరమైన అదనపు ఆదాయం పొందుతోంది.",
    ),
    testimonial: b(
      "This platform gave me confidence to turn my hobby into a real business.",
      "ఈ వేదిక నా అభిరుచిని నిజమైన వ్యాపారంగా మార్చుకునే ధైర్యం ఇచ్చింది.",
    ),
    growth: b("₹0 → ₹25,000/month in 8 months", "8 నెలల్లో ₹0 → ₹25,000/నెల"),
  },
  {
    id: "s2",
    name: b("Ramya", "రమ్య"),
    role: b("Student, Vijayawada", "విద్యార్థి, విజయవాడ"),
    emoji: "👩‍🎓",
    image: storyRamya,
    story: b(
      "Ramya funds her college fees by selling handmade jewelry online while studying. Her terracotta designs are loved by young buyers.",
      "రమ్య చదువుతూనే ఆన్‌లైన్‌లో చేతి ఆభరణాలు అమ్మి తన కాలేజీ ఫీజులు చెల్లించుకుంటోంది. ఆమె టెర్రకోట డిజైన్‌లను యువత ఇష్టపడుతున్నారు.",
    ),
    testimonial: b(
      "I learned pricing and marketing here — now I run my own small brand.",
      "ధర, మార్కెటింగ్ ఇక్కడ నేర్చుకున్నాను — ఇప్పుడు నా సొంత బ్రాండ్ నడుపుతున్నాను.",
    ),
    growth: b("100+ orders in first year", "మొదటి సంవత్సరంలో 100+ ఆర్డర్లు"),
  },
  {
    id: "s3",
    name: b("Sunitha SHG", "సునీత స్వయం సహాయక సంఘం"),
    role: b("Self-Help Group, Khammam", "స్వయం సహాయక సంఘం, ఖమ్మం"),
    emoji: "👭",
    image: storyShg,
    story: b(
      "A group of 12 women started a shared pickle and snacks unit. They now supply local stores and support each other's families.",
      "12 మంది మహిళల బృందం ఉమ్మడి ఊరగాయలు, స్నాక్స్ యూనిట్ ప్రారంభించారు. వారు ఇప్పుడు స్థానిక దుకాణాలకు సరఫరా చేస్తూ ఒకరికొకరు మద్దతుగా ఉన్నారు.",
    ),
    testimonial: b(
      "Together we built something none of us could alone.",
      "ఒక్కొక్కరిగా చేయలేనిది అందరం కలిసి సాధించాం.",
    ),
    growth: b("12 families, ₹1.5L+ monthly turnover", "12 కుటుంబాలు, ₹1.5L+ నెలవారీ టర్నోవర్"),
  },
  {
    id: "s4",
    name: b("Arjun", "అర్జున్"),
    role: b("Young Creator, Warangal", "యువ సృష్టికర్త, వరంగల్"),
    emoji: "👨‍🎨",
    image: storyArjun,
    story: b(
      "Arjun turned his painting passion into a freelance art business, selling prints and taking custom commissions across India.",
      "అర్జున్ తన చిత్రలేఖన అభిరుచిని ఫ్రీలాన్స్ ఆర్ట్ వ్యాపారంగా మార్చి, దేశవ్యాప్తంగా ప్రింట్‌లు, కస్టమ్ ఆర్డర్లు తీసుకుంటున్నాడు.",
    ),
    testimonial: b(
      "The startup guides helped me price my art with confidence.",
      "స్టార్టప్ గైడ్‌లు నా కళకు ధైర్యంగా ధర పెట్టడంలో సహాయపడ్డాయి.",
    ),
    growth: b("Pan-India custom orders", "దేశవ్యాప్త కస్టమ్ ఆర్డర్లు"),
  },
];

// Government schemes
export interface Scheme {
  id: string;
  name: Bi;
  eligibility: Bi;
  benefits: Bi;
  application: Bi;
}

export const schemes: Scheme[] = [
  {
    id: "g1",
    name: b("Women Entrepreneurship Support", "మహిళా వ్యవస్థాపకత మద్దతు"),
    eligibility: b("Women aged 18+ starting or running a micro-enterprise.", "మైక్రో-ఎంటర్‌ప్రైజ్ ప్రారంభించే లేదా నడిపే 18+ వయసు మహిళలు."),
    benefits: b("Low-interest loans, subsidies and business training.", "తక్కువ వడ్డీ రుణాలు, సబ్సిడీలు మరియు వ్యాపార శిక్షణ."),
    application: b("Apply through your local bank or district industries centre.", "మీ స్థానిక బ్యాంక్ లేదా జిల్లా పరిశ్రమల కేంద్రం ద్వారా దరఖాస్తు చేయండి."),
  },
  {
    id: "g2",
    name: b("Self Help Group (SHG) Programs", "స్వయం సహాయక సంఘం (SHG) కార్యక్రమాలు"),
    eligibility: b("Registered SHGs with active members.", "క్రియాశీల సభ్యులతో నమోదైన SHGలు."),
    benefits: b("Group loans, revolving funds and capacity building.", "గ్రూప్ రుణాలు, రివాల్వింగ్ నిధులు మరియు సామర్థ్య నిర్మాణం."),
    application: b("Register your SHG via the village/ward secretariat.", "గ్రామ/వార్డు సచివాలయం ద్వారా మీ SHGని నమోదు చేయండి."),
  },
  {
    id: "g3",
    name: b("Skill Development Schemes", "నైపుణ్యాభివృద్ధి పథకాలు"),
    eligibility: b("Youth and adults seeking vocational training.", "వృత్తి శిక్షణ కోరే యువత మరియు పెద్దలు."),
    benefits: b("Free certified training and placement assistance.", "ఉచిత ధృవీకృత శిక్షణ మరియు ఉద్యోగ సహాయం."),
    application: b("Enroll at a recognized skill training centre.", "గుర్తింపు పొందిన నైపుణ్య శిక్షణ కేంద్రంలో చేరండి."),
  },
  {
    id: "g4",
    name: b("Startup Assistance Programs", "స్టార్టప్ సహాయ కార్యక్రమాలు"),
    eligibility: b("New small businesses and first-time entrepreneurs.", "కొత్త చిన్న వ్యాపారాలు మరియు తొలిసారి వ్యవస్థాపకులు."),
    benefits: b("Seed funding, mentorship and market linkage.", "సీడ్ ఫండింగ్, మెంటర్‌షిప్ మరియు మార్కెట్ అనుసంధానం."),
    application: b("Submit a simple business proposal online or at the MSME office.", "ఆన్‌లైన్‌లో లేదా MSME కార్యాలయంలో సరళమైన వ్యాపార ప్రతిపాదన సమర్పించండి."),
  },
  {
    id: "g5",
    name: b("Mudra Micro-Loan Scheme", "ముద్ర మైక్రో-రుణ పథకం"),
    eligibility: b("Small non-corporate businesses needing up to ₹10 lakh.", "₹10 లక్షల వరకు అవసరమైన చిన్న వ్యాపారాలు."),
    benefits: b("Collateral-free loans in three categories.", "మూడు వర్గాల్లో పూచీకత్తు లేని రుణాలు."),
    application: b("Apply at any bank with basic business documents.", "ప్రాథమిక వ్యాపార పత్రాలతో ఏ బ్యాంక్‌లోనైనా దరఖాస్తు చేయండి."),
  },
  {
    id: "g6",
    name: b("Handicrafts Artisan Support", "హస్తకళ కళాకారుల మద్దతు"),
    eligibility: b("Registered artisans and craft producers.", "నమోదైన కళాకారులు మరియు క్రాఫ్ట్ ఉత్పత్తిదారులు."),
    benefits: b("Artisan cards, exhibitions and material subsidies.", "కళాకారుల కార్డులు, ప్రదర్శనలు మరియు పదార్థ సబ్సిడీలు."),
    application: b("Register with the handicrafts development office.", "హస్తకళల అభివృద్ధి కార్యాలయంలో నమోదు చేసుకోండి."),
  },
];

// Challenges & Solutions
export const challenges: { icon: string; text: Bi }[] = [
  { icon: "🚪", text: b("Lack of opportunities", "అవకాశాల కొరత") },
  { icon: "👥", text: b("Limited customer access", "పరిమిత కస్టమర్ చేరువ") },
  { icon: "💭", text: b("Lack of confidence", "ఆత్మవిశ్వాస లోపం") },
  { icon: "🧭", text: b("Lack of business guidance", "వ్యాపార మార్గదర్శనం లేకపోవడం") },
  { icon: "🗣️", text: b("Language barriers", "భాషా అడ్డంకులు") },
];

export const solutions: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "💡", title: b("Business Ideas", "వ్యాపార ఆలోచనలు"), text: b("Curated, proven home-based ideas to start with.", "ప్రారంభించడానికి నిరూపితమైన గృహ ఆధారిత ఆలోచనలు.") },
  { icon: "📚", title: b("Startup Guides", "స్టార్టప్ గైడ్‌లు"), text: b("Step-by-step guides from idea to first sale.", "ఆలోచన నుండి తొలి అమ్మకం వరకు దశల వారీ మార్గదర్శి.") },
  { icon: "🛒", title: b("Marketplace", "మార్కెట్‌ప్లేస్"), text: b("A place to showcase and sell your products.", "మీ ఉత్పత్తులను ప్రదర్శించి అమ్మే వేదిక.") },
  { icon: "🤝", title: b("Mentorship", "మెంటర్‌షిప్"), text: b("Connect with mentors who guide your journey.", "మీ ప్రయాణాన్ని నడిపించే మెంటర్‌లతో కనెక్ట్ అవ్వండి.") },
  { icon: "🏛️", title: b("Government Schemes", "ప్రభుత్వ పథకాలు"), text: b("Find funding and support programs you qualify for.", "మీకు అర్హత ఉన్న నిధులు, మద్దతు కార్యక్రమాలను కనుగొనండి.") },
  { icon: "❤️", title: b("Community Support", "సమాజ మద్దతు"), text: b("Grow with a supportive community around you.", "మీ చుట్టూ ఉన్న మద్దతు సమాజంతో ఎదగండి.") },
];

// Skill learning
export const skills: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "📢", title: b("Marketing Basics", "మార్కెటింగ్ ప్రాథమికాంశాలు"), text: b("Reach customers and tell your story.", "కస్టమర్లను చేరుకోండి, మీ కథ చెప్పండి.") },
  { icon: "📸", title: b("Product Photography", "ఉత్పత్తి ఫోటోగ్రఫీ"), text: b("Take clear photos that sell.", "అమ్మకాలు పెంచే స్పష్టమైన ఫోటోలు తీయండి.") },
  { icon: "🎯", title: b("Branding", "బ్రాండింగ్"), text: b("Build a memorable identity.", "గుర్తుండిపోయే గుర్తింపు తయారు చేయండి.") },
  { icon: "📱", title: b("Social Media Marketing", "సోషల్ మీడియా మార్కెటింగ్"), text: b("Grow on Instagram, WhatsApp & Facebook.", "ఇన్‌స్టా, వాట్సాప్, ఫేస్‌బుక్‌లో ఎదగండి.") },
  { icon: "💰", title: b("Pricing Products", "ఉత్పత్తుల ధర నిర్ణయం"), text: b("Price fairly and profitably.", "న్యాయంగా, లాభదాయకంగా ధర పెట్టండి.") },
  { icon: "📦", title: b("Packaging", "ప్యాకేజింగ్"), text: b("Package safely and attractively.", "సురక్షితంగా, ఆకర్షణీయంగా ప్యాక్ చేయండి.") },
  { icon: "🧾", title: b("Financial Literacy", "ఆర్థిక అవగాహన"), text: b("Track income, costs and savings.", "ఆదాయం, ఖర్చులు, పొదుపు ట్రాక్ చేయండి.") },
];

export const womenPoints: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "💼", title: b("Business Opportunities", "వ్యాపార అవకాశాలు"), text: b("Flexible home-based ideas that fit around family life.", "కుటుంబ జీవితానికి సరిపోయే సౌకర్యవంతమైన గృహ ఆధారిత ఆలోచనలు.") },
  { icon: "🌟", title: b("Success Stories", "విజయ గాథలు"), text: b("Be inspired by women who built thriving enterprises.", "విజయవంతమైన వ్యాపారాలు నిర్మించిన మహిళల నుండి ప్రేరణ పొందండి.") },
  { icon: "📘", title: b("Skill Resources", "నైపుణ్య వనరులు"), text: b("Free learning to build confidence and capability.", "ఆత్మవిశ్వాసం, సామర్థ్యం పెంచే ఉచిత అభ్యాసం.") },
  { icon: "💪", title: b("Financial Independence", "ఆర్థిక స్వాతంత్ర్యం"), text: b("Earn, save and gain control of your finances.", "సంపాదించండి, పొదుపు చేయండి, మీ ఆర్థిక నియంత్రణ పొందండి.") },
];

export const youthPoints: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "🚀", title: b("Student Startup Ideas", "విద్యార్థి స్టార్టప్ ఆలోచనలు"), text: b("Low-cost businesses you can run alongside studies.", "చదువుతో పాటు నడపగల తక్కువ ఖర్చు వ్యాపారాలు.") },
  { icon: "💻", title: b("Freelancing Opportunities", "ఫ్రీలాన్సింగ్ అవకాశాలు"), text: b("Earn online with design, writing and more.", "డిజైన్, రైటింగ్ వంటి వాటితో ఆన్‌లైన్‌లో సంపాదించండి.") },
  { icon: "🎨", title: b("Creative Businesses", "సృజనాత్మక వ్యాపారాలు"), text: b("Turn art, crafts and content into income.", "కళ, క్రాఫ్ట్, కంటెంట్‌ను ఆదాయంగా మార్చండి.") },
  { icon: "🔬", title: b("Innovation Resources", "ఆవిష్కరణ వనరులు"), text: b("Tools and guidance to launch new ideas.", "కొత్త ఆలోచనలను ప్రారంభించడానికి సాధనాలు, మార్గదర్శనం.") },
];

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: b("Is this platform free to use?", "ఈ వేదిక ఉపయోగించడం ఉచితమా?"),
    a: b("Yes. Community Makers' Market is a community service platform and free for makers and buyers.", "అవును. కమ్యూనిటీ మేకర్స్ మార్కెట్ ఒక సమాజ సేవా వేదిక, సృష్టికర్తలు, కొనుగోలుదారులకు ఉచితం."),
  },
  {
    q: b("Do you handle payments?", "మీరు చెల్లింపులు నిర్వహిస్తారా?"),
    a: b("No. Buyers contact sellers directly to arrange purchases. We do not process any payments.", "లేదు. కొనుగోలుదారులు విక్రేతలను నేరుగా సంప్రదిస్తారు. మేము చెల్లింపులు ప్రాసెస్ చేయము."),
  },
  {
    q: b("Who can join as a seller?", "విక్రేతగా ఎవరు చేరవచ్చు?"),
    a: b("Homemakers, students, artists, self-help groups and any local creator are welcome.", "గృహిణులు, విద్యార్థులు, కళాకారులు, స్వయం సహాయక సంఘాలు, ఏ స్థానిక సృష్టికర్త అయినా స్వాగతం."),
  },
  {
    q: b("Can NGOs and SHGs use this?", "NGOలు, SHGలు దీన్ని ఉపయోగించవచ్చా?"),
    a: b("Absolutely. The platform is designed for NGOs, SHGs, secretariats and community programs.", "ఖచ్చితంగా. ఈ వేదిక NGOలు, SHGలు, సచివాలయాలు, సమాజ కార్యక్రమాల కోసం రూపొందించబడింది."),
  },
];

export const impactStats: { value: number; suffix: string; key: "statIdeas" | "statCreators" | "statProducts" | "statStories" }[] = [
  { value: 500, suffix: "+", key: "statIdeas" },
  { value: 200, suffix: "+", key: "statCreators" },
  { value: 1000, suffix: "+", key: "statProducts" },
  { value: 50, suffix: "+", key: "statStories" },
];

// Community workflow journey
export const workflowSteps: { icon: string; title: Bi; text: Bi }[] = [
  { icon: "💡", title: b("Learn an Idea", "ఆలోచన నేర్చుకోండి"), text: b("Discover a home-based business idea that fits your skills.", "మీ నైపుణ్యాలకు సరిపోయే గృహ ఆధారిత వ్యాపార ఆలోచనను కనుగొనండి.") },
  { icon: "🛠️", title: b("Create Products", "ఉత్పత్తులు తయారు చేయండి"), text: b("Make your handmade products using your craft and creativity.", "మీ నైపుణ్యం, సృజనాత్మకతతో చేతి ఉత్పత్తులను తయారు చేయండి.") },
  { icon: "📝", title: b("Register as Seller", "విక్రేతగా నమోదు చేసుకోండి"), text: b("Create your free seller profile in minutes.", "నిమిషాల్లో మీ ఉచిత విక్రేత ప్రొఫైల్ సృష్టించుకోండి.") },
  { icon: "📤", title: b("Upload Products", "ఉత్పత్తులను అప్‌లోడ్ చేయండి"), text: b("Add photos, prices and details for your products.", "మీ ఉత్పత్తులకు ఫోటోలు, ధరలు, వివరాలు జోడించండి.") },
  { icon: "🛒", title: b("Appear in Marketplace", "మార్కెట్‌ప్లేస్‌లో కనిపించండి"), text: b("Your products go live for the whole community to see.", "మీ ఉత్పత్తులు మొత్తం సమాజం చూసేలా ప్రత్యక్షమవుతాయి.") },
  { icon: "💬", title: b("Buyers Contact You", "కొనుగోలుదారులు సంప్రదిస్తారు"), text: b("Interested buyers reach out to you directly — no middlemen.", "ఆసక్తి గల కొనుగోలుదారులు మిమ్మల్ని నేరుగా సంప్రదిస్తారు — మధ్యవర్తులు లేరు.") },
  { icon: "📈", title: b("Earn & Grow", "సంపాదించి ఎదగండి"), text: b("Receive inquiries and turn your skill into steady income.", "విచారణలు అందుకొని మీ నైపుణ్యాన్ని స్థిరమైన ఆదాయంగా మార్చుకోండి.") },
];
