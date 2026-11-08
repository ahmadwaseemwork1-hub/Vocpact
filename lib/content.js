// Voxpact site copy. Single source of truth.
// Anything wrapped like {p: "one business day"} is a PLACEHOLDER the operator
// must confirm before launch. See PLACEHOLDERS.md.

export const brand = {
  name: "Voxpact",
  tagline: "We run the phones. You close the deals.",
  positioning:
    "Voxpact is an outsourced sales, support, and data team for US businesses, built on real call-center infrastructure and daily reporting, so you can see the work instead of just paying for it.",
  email: "ahmad.waseem.work1@gmail.com",
  whatsapp: "+92 312 7008948",
  hours: "Monday–Friday, 9am–6pm EST",
  location: "Lahore, Pakistan · serving US clients",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Reviews", href: "/reviews" },
];

export const proofPoints = [
  {
    title: "Real infrastructure",
    body: "Auto and manual dialers, live call recording, CRM discipline.",
  },
  {
    title: "Daily transparency",
    body: "KPI reports every morning, recordings on demand.",
  },
  {
    title: "US-hours coverage",
    body: "Trained agents working your time zone, not ours.",
  },
  {
    title: "Full-funnel",
    body: "We build the lead lists and work them.",
  },
];

export const trustStrip = [
  "Trusted by US insurance agents, sales teams & founders",
  "Live transfers for Allstate, State Farm, Geico & Progressive agents",
  "US business-hours coverage",
  "Calls recorded, results reported daily",
];

export const homeServices = [
  {
    title: "Sales & Appointment Setting",
    body: "Trained SDRs who learn your offer and book qualified, show-ready meetings straight onto your calendar.",
  },
  {
    title: "Live Insurance Transfers",
    body: "Pre-qualified home and auto prospects, screened to your filters and transferred live. Built for agents writing Allstate, State Farm, Geico, and Progressive.",
  },
  {
    title: "Cold Calling & Outbound",
    body: "Scripted, objection-handled campaigns run on auto and manual dialers, with recordings and daily numbers.",
  },
  {
    title: "Live Chat & Customer Support",
    body: "Fast, on-brand responses that convert website visitors and keep existing customers loyal.",
  },
  {
    title: "Lead Generation & Data",
    body: "LinkedIn prospecting, verified email lists, business lists, and directory scraping. Clean data your team can actually use.",
  },
  {
    title: "Trucking Dispatch",
    body: "Dedicated dispatch support for US carriers and owner-operators: load booking, paperwork, and coordination.",
  },
];

export const whyVoxpact = [
  {
    title: "You see everything, every day.",
    body: "Every campaign comes with a daily KPI report covering dials, connects, appointments, and transfers, plus call recordings on request. No black box. No “trust us.”",
  },
  {
    title: "Real infrastructure, included.",
    body: "Auto dialer, manual dialer, and call recording come standard at no extra cost. Most freelancers can’t offer this. We built it in.",
  },
  {
    title: "We work your hours.",
    body: "Our teams run on US business hours, so your prospects and customers are talking to someone right when they expect to.",
  },
  {
    title: "Trained, not temporary.",
    body: "Our agents are hired, onboarded, and scripted on your offer. They’re coached from recordings, held to KPIs, and managed by people who’ve run these floors.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Discovery call",
    body: "We learn your offer, your audience, and what a “good lead” actually means to you.",
  },
  {
    step: "02",
    title: "Setup",
    body: "We build the script, objection handlers, targeting, and reporting, then load your CRM or calendar.",
  },
  {
    step: "03",
    title: "Launch",
    body: "Agents go live. You get your first daily report the next morning.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "We tune scripts and targeting off real recordings and numbers, every week.",
  },
];

// NOTE: sample figures. Replace with numbers you can defend before launch.
export const homeStats = [
  { value: 68000, suffix: "+", label: "calls handled per month" },
  { value: 31, suffix: "%", label: "average connect-to-appointment rate" },
  { value: 4200, suffix: "+", label: "live transfers delivered / month" },
  { value: 2, suffix: "-hr", label: "average support response time" },
];

export const homeTestimonial = {
  quote:
    "Voxpact booked us 47 qualified meetings in our first six weeks, and I could listen to every call the next morning. It stopped feeling like outsourcing.",
  name: "M. Reyes",
  role: "Founder, B2B SaaS (Austin, TX)",
};

// ---------------------------------------------------------------------------
// SERVICES PAGE
// ---------------------------------------------------------------------------

export const servicesIntro = {
  heading: "One partner for the work you’d otherwise hire five teams to do",
  body: "Voxpact is a full-service outsourcing partner. We source your leads, work your phones, support your customers, run your back office, and hand you the data behind all of it. Below is the full catalog, grouped the way you’d actually buy it. Start with one service; most clients expand once they see the numbers.",
};

export const serviceGroups = [
  {
    id: "lead-generation",
    number: "01",
    name: "Lead Generation & Telemarketing",
    tag: "Our core",
    blurb:
      "This is where Voxpact was built. A full inbound and outbound call operation with trained agents, real dialers, live recording, and daily reporting, pointed at one outcome: more qualified conversations for your business.",
    items: [
      ["BPO & Call Center Services", "Complete inbound and outbound call center operations run as an extension of your team, staffed and managed by people who’ve run these floors."],
      ["Outbound Call Center", "Proactive outreach campaigns: cold calling, follow-up, and win-back, worked consistently instead of in bursts."],
      ["Inbound Call Center", "Trained agents answering, qualifying, and routing every call so nothing goes to voicemail and no lead goes cold."],
      ["Sales Outsourcing (SDRs / Sales Agents)", "Experienced outbound reps who learn your offer and turn conversations into revenue. Your sales floor, without the in-house cost."],
      ["Appointment Setting", "Qualified, show-ready meetings booked straight onto your calendar, with objection handling and reminder follow-ups to protect show rates."],
      ["Cold Calling & Telemarketing", "Full-campaign calling built from scratch: script, objection handlers, and trained callers on auto and manual dialers."],
      ["B2B Lead Generation", "Targeted decision-maker outreach that fills the top of your funnel with prospects who fit your ideal customer profile."],
      ["Live Insurance Transfers", "Our specialty desk: pre-qualified home and auto prospects, screened to your filters (state, coverage, age) and transferred live while ready to talk, for agents writing Allstate, State Farm, Geico, and Progressive. (We supply leads to independent agents; we are not affiliated with or endorsed by these carriers.)"],
      ["Trucking Dispatch", "Dedicated dispatch for US carriers and owner-operators: load booking, rate support, paperwork, and driver coordination."],
    ],
  },
  {
    id: "customer-service",
    number: "02",
    name: "Customer Service & Tech Support",
    blurb:
      "Support that protects the revenue you’ve already won. Fast, on-brand, and reliable across every channel your customers use.",
    items: [
      ["Customer Support Outsourcing", "Professional email, chat, and phone support across US business hours, with full ticket and call records for QA."],
      ["Live Chat Support", "Instant, on-brand replies that catch website visitors at the moment of intent, qualifying, booking, or routing them before they bounce."],
      ["Email & Ticket Support", "Organized, timely responses that keep your queue clear and your customers informed."],
      ["Tier-1 Tech Support / Help Desk", "Front-line troubleshooting and issue triage, with clean escalation paths to your team."],
    ],
  },
  {
    id: "marketing",
    number: "03",
    name: "Marketing, PR & Brand Strategy",
    blurb:
      "Positioning and outreach that make the sales conversations easier before they even start.",
    items: [
      ["Brand & Messaging Strategy", "Clear positioning, value propositions, and messaging your whole team can use consistently."],
      ["Social Media Management", "Content planning, scheduling, and community engagement that keeps your brand active and credible."],
      ["Email Marketing Campaigns", "Sequences and broadcasts built to nurture leads and drive replies, not just opens."],
      ["PR & Outreach", "Targeted outreach to publications, partners, and platforms to build visibility and authority."],
    ],
  },
  {
    id: "market-research",
    number: "04",
    name: "Market Research & Product Reviews",
    blurb:
      "The data behind smart decisions: who your market is, what competitors do, and how your product is received.",
    items: [
      ["Market & Competitor Research", "Structured analysis of your market, competitors, and opportunities, delivered as something you can act on."],
      ["Survey & Data Collection", "Designed and executed research to gather the specific inputs your decisions need."],
      ["Product Review Management", "Monitoring, gathering, and organizing product reviews to protect and strengthen your reputation."],
    ],
  },
  {
    id: "data-entry",
    number: "05",
    name: "Data Entry & Transcription Services",
    blurb:
      "Clean, structured, verified data. The raw material every campaign and decision depends on.",
    items: [
      ["Data Entry", "Accurate, organized entry and management across your platforms and systems."],
      ["Data Extraction from Google Search", "Structured business information and market data pulled straight from search results."],
      ["Email Extraction & Verification", "Accurate business emails gathered and validated for high deliverability and low bounce rates."],
      ["Business List & Email List Building", "Custom, verified business and email lists built to your target industry, location, and criteria."],
      ["Business Directory Scraping", "Structured business data pulled from trusted directories, organized for immediate use."],
      ["Product Listings & Mapping", "Accurate creation, organization, and management of product listings across multiple platforms."],
      ["Transcription", "Clean, accurate transcription of calls, meetings, and recordings."],
    ],
  },
  {
    id: "content",
    number: "06",
    name: "Content Writing",
    blurb: "Words that sell and support the rest of the funnel.",
    items: [
      ["Website & Landing Page Copy", "Clear, persuasive copy that turns visitors into enquiries."],
      ["Blog & SEO Articles", "Search-friendly content that builds authority and traffic over time."],
      ["Sales Scripts & Email Sequences", "The exact language your agents and campaigns use to convert."],
      ["Product Descriptions", "Consistent, conversion-focused descriptions at any scale."],
    ],
  },
  {
    id: "project-management",
    number: "07",
    name: "Project Management",
    blurb:
      "Someone accountable for keeping the work moving and the details from slipping.",
    items: [
      ["Dedicated Project Coordination", "A point person who plans, tracks, and drives your projects to deadline."],
      ["CRM & Pipeline Management", "Your CRM kept clean, current, and actually usable, with data logged, stages updated, and nothing lost."],
      ["Process & Workflow Setup", "Documented, repeatable workflows so your operation runs the same way every time."],
    ],
  },
  {
    id: "virtual-assistance",
    number: "08",
    name: "Virtual Assistance",
    blurb: "Reliable day-to-day support that gives you your time back.",
    items: [
      ["General Virtual Assistants", "Trained VAs for the recurring admin, research, and coordination that eats your week."],
      ["Inbox & Calendar Management", "Your email triaged and your schedule protected, so you focus on the work only you can do."],
      ["Administrative Support", "Documentation, scheduling, follow-ups, and the small tasks that quietly add up."],
    ],
  },
];

export const voiceIncludes = [
  ["Auto Dialer", "Higher call volume and connect rates, at no extra cost."],
  ["Manual Dialer", "Personalized outreach for high-value calls."],
  ["Call Recording Access", "Full transparency for QA, coaching, and dispute protection."],
  ["Daily Customized KPI Reports", "Your metrics, in your inbox every morning."],
];

// ---------------------------------------------------------------------------
// ABOUT PAGE
// ---------------------------------------------------------------------------

export const aboutStory = [
  "Voxpact started with a simple frustration: US businesses were paying for outsourced calling and getting almost no visibility in return. No recordings. No real numbers. No sense of whether the money was working.",
  "So we built the opposite. A team run out of Lahore, working US hours, with the infrastructure of a proper call center: dialers, recording, and reporting. And one rule we don’t break: the client can see everything. Every dial, every connect, every booked meeting, every recording.",
  "Today Voxpact runs outbound sales, live insurance transfers, customer support, and lead generation for businesses across the US. We’re big enough to staff a real campaign and small enough that the founders still know every account by name.",
];

export const aboutValues = [
  {
    title: "Transparency by default.",
    body: "If we did the work, you can see the work.",
  },
  {
    title: "Trained, not rented.",
    body: "Our people are hired, coached, and held to standards, not swapped in and out.",
  },
  {
    title: "Outcomes over activity.",
    body: "Dials don’t pay your bills. Booked meetings and closed deals do. We optimize for the second thing.",
  },
];

export const leadership = [
  {
    name: "Turab Shah",
    role: "Founder & Owner",
    group: "founders",
    photo: "/team/turab-shah.jpg",
    body: "Turab co-founded Voxpact and sets the company’s overall direction, standards, and client commitments.",
    note: "A decade running call-center floors before founding the company.",
  },
  {
    name: "Khawaja Muhammad Musa",
    role: "Founder & Owner",
    group: "founders",
    // photo: "/team/khawaja-muhammad-musa.jpg", // add the file to public/team/ and uncomment
    body: "Musa co-founded Voxpact and drives the company’s growth, partnerships, and long-term strategy.",
    note: "Owns client relationships end to end. Most accounts still start with a call from him.",
  },
  {
    name: "Ahmad Waseem",
    role: "Chief Sales Officer & Partner",
    group: "partners",
    photo: "/team/ahmad-waseem.jpg",
    body: "Ahmad leads Voxpact’s entire sales function: campaign strategy, scripting, and the outbound teams that turn conversations into booked revenue for clients. He owns the results your pipeline sees.",
  },
  {
    name: "Sheir Muhammed",
    role: "Chief Operations Officer & Partner",
    group: "partners",
    photo: "/team/sheir-muhammed.jpg",
    body: "Sheir runs day-to-day operations: staffing, scheduling, quality, and delivery. He makes sure every campaign is resourced, monitored, and running to standard, shift after shift.",
  },
  {
    name: "Wali Sheikh",
    role: "Chief Data Officer & Partner",
    group: "partners",
    photo: "/team/wali-sheikh.jpg",
    body: "Wali owns everything data: lead sourcing, list building, extraction, verification, and the reporting infrastructure that gives clients their daily numbers. Clean data in, clear results out.",
  },
];

// ---------------------------------------------------------------------------
// QUALITY PAGE
// ---------------------------------------------------------------------------

export const qualityIntro = {
  heading: "Quality you can hear, and numbers you can check",
  body: "Most agencies ask you to take quality on faith. We’d rather you verify it. Quality at Voxpact isn’t a promise on a homepage. It’s a set of systems that produce evidence, every single day.",
};

export const qualityItems = [
  {
    title: "Every call recorded.",
    body: "Calls are recorded and available to you on request, for quality assurance, coaching, and your own peace of mind. Nothing happens on the phones that you can’t review.",
  },
  {
    title: "Daily KPI reporting.",
    body: "You receive a customized daily report covering the metrics that matter to your business: dials, connects, appointments, transfers, and response times. You never wait until month-end to find out how it’s going.",
  },
  {
    title: "Structured agent training.",
    body: "Agents are onboarded on your specific offer, script, and objection handlers before they ever dial a live prospect, then coached continuously from real recordings.",
  },
  {
    title: "Live monitoring & QA.",
    body: "Team leads monitor calls and chats in real time, score against a quality rubric, and correct fast. Problems get caught the same day, not weeks later.",
  },
  {
    title: "Lead qualification standards.",
    body: "For transfers and appointments, prospects are screened against your filters before they reach you. You only spend time on leads that actually fit.",
  },
  {
    title: "Data accuracy checks.",
    body: "Every list and email database is verified before delivery: validated addresses, deduplicated records, and the criteria you defined.",
  },
];

// NOTE: sample targets. Confirm against your actual SLAs before launch.
export const qualityStandard = [
  { label: "Target first-response time", value: "Under 30 seconds on live chat" },
  { label: "Appointment show-rate target", value: "70%+" },
  { label: "Data deliverability target", value: "95%+ verified" },
  { label: "Reporting cadence", value: "Daily, before 9am your time zone" },
];

// ---------------------------------------------------------------------------
// REVIEWS PAGE
// ---------------------------------------------------------------------------

export const reviewPlaceurb =
  "Straight from the businesses whose pipelines we run.";

// NOTE: sample reviews. Replace with real client quotes or Upwork feedback before launch.
export const reviewPlaceholders = [
  {
    quote:
      "The transfers actually pick up. We're closing 1 in 4 of what Voxpact sends, and every lead already fits my state and coverage filters.",
    name: "D. Whitfield",
    role: "Allstate agent, Ohio",
    service: "Live Insurance Transfers",
  },
  {
    quote:
      "Went from 3 discovery calls a week to 11. Their SDRs learned our offer faster than the last in-house hire we made.",
    name: "S. Nguyen",
    role: "Head of Sales, logistics SaaS",
    service: "Sales & Appointment Setting",
  },
  {
    quote:
      "6,000 dials in the first month with recordings for all of it. The daily report lands at 8:45am like clockwork.",
    name: "R. Okafor",
    role: "Founder, commercial cleaning",
    service: "Cold Calling & Outbound",
  },
  {
    quote:
      "Clean, verified lists, under 2% bounce on the first send. That never happened with the scrapers we used before.",
    name: "J. Alvarez",
    role: "Demand gen manager",
    service: "Lead Generation & Data",
  },
  {
    quote:
      "Chat responses under 20 seconds, on-brand, and they book the demo right in the widget. Our site finally converts after hours.",
    name: "K. Bauer",
    role: "eCommerce owner",
    service: "Live Chat & Customer Support",
  },
  {
    quote:
      "My drivers stay loaded and I stopped doing paperwork at midnight. Rate negotiation alone paid for the desk.",
    name: "T. Morrow",
    role: "Owner-operator, 4 trucks",
    service: "Trucking Dispatch",
  },
];

// NOTE: sample figures. Publish only with real data.
export const reviewResults = [
  { value: 63, suffix: "%", label: "of clients expand to a second service" },
  { value: 5100, suffix: "+", label: "booked meetings delivered to date" },
  { value: "4.9", suffix: "★", label: "average across Upwork & Google" },
];

// ---------------------------------------------------------------------------
// BOOK PAGE
// ---------------------------------------------------------------------------

export const bookExpect = [
  "A straight conversation, not a sales ambush.",
  "We’ll ask about your offer, audience, and current pipeline.",
  "You’ll leave with a clear recommendation, even if that’s “here’s what to fix first.”",
];

export const bookHelpOptions = [
  "Sales & Appointment Setting",
  "Live Insurance Transfers",
  "Cold Calling",
  "Live Chat & Support",
  "Lead Generation & Data",
  "Trucking Dispatch",
  "Not sure yet",
];

export const bookSizeOptions = [
  "Just exploring",
  "1–2 agents",
  "A small team",
  "A full campaign",
];

// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------

export const footerServices = [
  "Lead Generation & Telemarketing",
  "Customer Service & Tech Support",
  "Marketing & Brand",
  "Market Research",
  "Data & Transcription",
  "Content Writing",
  "Project Management",
  "Virtual Assistance",
];

export const footerCompany = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Reviews", href: "/reviews" },
  { label: "Book a Call", href: "/book" },
];

export const footerLegal =
  "Voxpact provides qualified leads and support services to independent businesses and agents. Carrier names referenced (Allstate, State Farm, Geico, Progressive) are trademarks of their respective owners; Voxpact is not affiliated with or endorsed by them.";
