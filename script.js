const letters = document.querySelectorAll(".letter");
const display = document.getElementById("projectDisplay");
const wall = document.querySelector(".wall");

// UPSIDE DOWN TOGGLE
const upsideToggle = document.getElementById("upsideToggle");

// MODAL ELEMENTS
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalRole = document.getElementById("modalRole");
const modalTools = document.getElementById("modalTools");
const modalProof = document.getElementById("modalProof");

document.body.addEventListener("click", () => {
  if (soundHum.paused) {
    soundHum.play();
  }
}, { once: true });

// SOUND ELEMENTS
const soundClick = document.getElementById("soundClick");
const soundHum = document.getElementById("soundHum");
const soundPortal = document.getElementById("soundPortal");

// Set volumes (important so it's not annoying)
soundClick.volume = 0.4;
soundHum.volume = 0.15;
soundPortal.volume = 0.4;

// Start ambient hum
//soundHum.play().catch(() => {
  // Autoplay might be blocked until user interacts
//});


// PROJECT DATA
const projects = {
  A: {
    title: "A — Analytics & Insight Synthesis",
    description: "I turn qualitative and secondary data into sharp, usable business insights.",
    role: "Research, analysis, synthesis",
    tools: "Interviews, desk research, Excel, PPT",
    proof: "Workforce Attrition Study, Talent Pulse Surveys"
  },
  B: {
    title: "B — Brand & Thought Leadership",
    description: "I build authority platforms using insight-led reports and narrative-driven content.",
    role: "Strategy, content, launches",
    tools: "PowerPoint, content strategy, PR coordination",
    proof: "Gen Z Workforce Report, The Z Factor series"
  },
  C: {
    title: "C — Content Strategy & Storytelling",
    description: "I design long-form and short-form content systems that translate complex ideas into clear narratives.",
    role: "Content strategy, writing, planning",
    tools: "Notion, SEO tools, PPT",
    proof: "Blogs, reports, whitepapers, campaign narratives"
  },
  D: {
    title: "D — Demand Generation",
    description: "I use content and campaigns to drive real business outcomes, not just views.",
    role: "Campaign strategy & execution",
    tools: "Landing pages, distribution planning, CRM",
    proof: "10k+ views, 5k+ downloads, 52% conversion rate"
  },
  E: {
    title: "E — Events & Experiences",
    description: "I plan and execute thought leadership events that drive brand authority and engagement.",
    role: "Planning, content, execution",
    tools: "Runbooks, decks, stakeholder coordination",
    proof: "800+ attendees, 100+ media mentions, LinkedIn Lives & CXO sessions"
  },
  F: {
    title: "F — Funnel Strategy",
    description: "I design content and campaigns mapped to top and mid funnel stages.",
    role: "Funnel planning & content strategy",
    tools: "Content maps, GTM plans",
    proof: "Top & mid funnel content systems at Randstad"
  },
  G: {
    title: "G — GTM Strategy",
    description: "I help take reports and ideas to market through structured launches and campaigns.",
    role: "Launch strategy & execution",
    tools: "Campaign planning, content systems",
    proof: "Gen Z Report, Talent Pulse launches"
  },
  H: {
    title: "H — Human Insight",
    description: "I use qualitative methods to understand people, not just numbers.",
    role: "Interviews, synthesis",
    tools: "FGDs, IDIs, thematic analysis",
    proof: "Blissclub research, workforce studies"
  },
  I: {
    title: "I — Insight-Led Selling",
    description: "I create sales enablement assets that help business teams sell with insight, not slides.",
    role: "Content & insight creation",
    tools: "PPT, one-pagers, briefs",
    proof: "Industry briefs, sales collaterals"
  },
  J: {
    title: "J — Journeys (Buyer & Customer)",
    description: "I think in terms of buyer journeys, not isolated campaigns.",
    role: "Journey mapping",
    tools: "Content mapping frameworks",
    proof: "B2B content journeys across funnel stages"
  },
  K: {
    title: "K — Knowledge Products",
    description: "I turn research and thinking into scalable knowledge assets.",
    role: "Packaging & storytelling",
    tools: "Reports, whitepapers, one-pagers",
    proof: "Multiple reports & sales assets"
  },
  L: {
    title: "L — Localisation Strategy",
    description: "I adapt global narratives and reports to local market context.",
    role: "Local strategy & execution",
    tools: "Content adaptation, market understanding",
    proof: "Global Randstad reports → India market"
  },
  M: {
    title: "M — Multi-Channel Distribution",
    description: "I ensure good content actually reaches the right people.",
    role: "Distribution strategy",
    tools: "Email, social, SEO, PR",
    proof: "Multi-channel launches across campaigns"
  },
  N: {
    title: "N — Narratives & Positioning",
    description: "I craft strong narratives around complex business and people topics.",
    role: "Narrative strategy",
    tools: "Story frameworks, content systems",
    proof: "Future of Work, Gen Z, workforce stories"
  },
  O: {
    title: "O — Organic Growth (SEO)",
    description: "I build content systems that drive inbound and search visibility.",
    role: "SEO content strategy",
    tools: "Keyword research, content planning",
    proof: "SEO-aligned content driving organic traffic"
  },
  P: {
    title: "P — Program & Stakeholder Management",
    description: "I ship complex things by aligning many teams.",
    role: "Coordination & delivery",
    tools: "Project plans, stakeholder management",
    proof: "PR, design, business, agency collaboration"
  },
  Q: {
    title: "Q — Qualitative Research",
    description: "I conduct and synthesize deep qualitative research.",
    role: "Research & synthesis",
    tools: "FGDs, IDIs, coding, frameworks",
    proof: "Blissclub + Randstad qualitative studies"
  },
  R: {
    title: "R — Research Strategy",
    description: "I design studies and insight programs, not just execute tasks.",
    role: "Study design & strategy",
    tools: "Research frameworks, survey design",
    proof: "Pulse surveys, workforce studies"
  },
  S: {
    title: "S — Surveys & Trend Tracking",
    description: "I run recurring insight systems to track change over time.",
    role: "Program owner",
    tools: "Survey design, analysis",
    proof: "Talent Pulse vertical"
  },
  T: {
    title: "T — Thought Leadership Platforms",
    description: "I help build long-term authority, not just one-off campaigns.",
    role: "Platform building",
    tools: "Events, reports, PR",
    proof: "Events, Gen Z platform, media presence"
  },
  U: {
    title: "U — User & Buyer Understanding",
    description: "I anchor marketing in real human and business needs.",
    role: "Insight & strategy",
    tools: "Research, interviews",
    proof: "Workforce + client insight programs"
  },
  V: {
    title: "V — Visibility & Share of Voice",
    description: "I care about whether our work actually shows up in the market.",
    role: "Distribution & PR alignment",
    tools: "PR, media tracking",
    proof: "71% increase in share of voice"
  },
  W: {
    title: "W — Workforce Intelligence",
    description: "My core domain: understanding how work, workers, and workplaces are changing.",
    role: "Research & thought leadership",
    tools: "Studies, reports, narratives",
    proof: "Everything from Attrition → Gen Z → Talent Pulse"
  },
  X: {
    title: "X — X-Functional Collaboration",
    description: "I work across functions to ship meaningful work.",
    role: "Connector & driver",
    tools: "Stakeholder alignment",
    proof: "PR, design, sales, business teams"
  },
  Y: {
    title: "Y — Yield from Content (ROI)",
    description: "I care about business impact, not vanity metrics.",
    role: "Performance & strategy",
    tools: "Dashboards, analysis",
    proof: "Leads, conversions, pipeline contribution"
  },
  Z: {
    title: "Z — Z-Gen (Gen Z Research)",
    description: "My signature work on the Gen Z workforce in India.",
    role: "Research, strategy, launch",
    tools: "Study design, content, GTM",
    proof: "Randstad India Gen Z Workforce Report & The Z Factor"
  }
};


// HOVER BEHAVIOUR
letters.forEach(letter => {
  const key = letter.innerText.trim();

  letter.addEventListener("mouseenter", () => {
    soundClick.currentTime = 0;
    soundClick.play();

    display.textContent = letter.dataset.project;
    wall.classList.add("has-active");
    letter.classList.add("active");
    
  });

  letter.addEventListener("mouseleave", () => {
    display.textContent = "Hover over a letter...";
    wall.classList.remove("has-active");
    letters.forEach(l => l.classList.remove("active"));
  });

  // CLICK = OPEN MODAL
  letter.addEventListener("click", () => {
    if (!projects[key]) return;

    const project = projects[key];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalRole.textContent = project.role;
    modalTools.textContent = project.tools;
    modalProof.textContent = project.proof;

    soundPortal.currentTime = 0;
    soundPortal.play();


    modalOverlay.classList.add("open");
  });
});

// CLOSE MODAL
closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("open");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("open");
  }
});

upsideToggle.addEventListener("click", () => {
  document.body.classList.toggle("upside-down");

  if (document.body.classList.contains("upside-down")) {
    upsideToggle.textContent = "Return to the Right Side Up";
  } else {
    upsideToggle.textContent = "Enter the Upside Down";
  }
});
