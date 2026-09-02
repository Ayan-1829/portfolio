/* ================================================================
   DATA_PROJECTS.JS
   Academic projects.

   Each project:
     title, tech[], date, bullets[]
     links:  [ { label, url } ]  — any number, fully custom labels
     videos: [ { title, url } ]  — embedded YouTube videos
     info:   [ "extra info..." ] — additional information lines
================================================================ */

const DATA_PROJECTS = [
  {
    title:   "Gate Forge",
    icon:    "GateForge_icon.png",
    tech:    ["HTML", "CSS", "JavaScript", "Claude AI"],
    date:    "August 2026",
    bullets: [
      "Design and simulate digital logic circuits using basic logic gates.",
      "Practice with interactive tutorials and logic problems for hands-on learning.",
      "Built for education, helping users understand digital logic design concepts.",
    ],
    links:  [ { label: "Try Gate Forge", url: "https://logic-bench.netlify.app" } ],
    videos: [ { title: "Introduction to Gate Forge", url: "https://www.youtube.com/embed/KIAhm2HdJIc" } ],
    info:   [],
  },
  {
    title:   "Daily Life",
    icon:    "DailyLife_icon.png",
    tech:    ["HTML", "CSS", "JavaScript", "Firebase", "Claude AI"],
    date:    "May 2026",
    bullets: [
      "Responsive web application for task, finance, and goal management.",
      "Visualizes task progress and financial data through interactive charts.",
      "Tracks daily habits, including good and bad habits.",
    ],
    links:  [ { label: "Try for free", url: "https://daily-life-management.web.app" } ],
    videos: null,
    info:   [],
  },
  {
    title:   "CPU Design",
    tech:    ["Digital Logic Gates"],
    date:    "Apr 2024",
    bullets: [
      "5-bit CPU designed to perform fundamental operations such as addition, right rotation, and jump instructions.",
      "Built from scratch using basic logic gates, demonstrating core principles of computer architecture.",
    ],
    links:  [ { label: "GitHub", url: "https://github.com/Ayan-1829/CSE-3203-Computer-Architecture-and-Design" } ],
    videos: [ { title: "5-bit CPU", url: "https://www.youtube.com/embed/lLsZSOnPr-U" } ],
    info:   [],
  },
  {
    title:   "Shutdown Scheduler",
    tech:    ["Python", "Tkinter"],
    date:    "Oct 2022",
    bullets: [
      "Allows users to schedule shutdown, restart, sign out, hibernate, and screen-off actions at a specific time or after a set duration.",
      "Monitors system activity and automatically shuts down the PC if it remains idle for a predefined period.",
    ],
    links:  [
      { label: "GitHub",   url: "https://github.com/Ayan-1829/Shutdown-Scheduler" },
      { label: "Download", url: "https://github.com/Ayan-1829/Shutdown-Scheduler/releases/download/v0.1.0/Shutdown.Scheduler.v0.1.0.setup.file.exe" },
    ],
    videos: [],
    info:   [],
  },
  {
    title:   "Personal Painting Website",
    tech:    ["Python", "Django", "HTML", "CSS"],
    date:    "Feb 2025",
    bullets: [
      "A website to showcase portraits, acrylic paintings, and sketches with a fully responsive design.",
      "Public visitors can browse the gallery; only the admin can add, edit, or delete paintings and specify mediums.",
    ],
    links:  [ { label: "GitHub", url: "https://github.com/Ayan-1829/Django-Personal-Painting-Website" } ],
    videos: [],
    info:   [],
  },
  // {
  //   title:   "FPGA-based Deflate Data Compression",
  //   tech:    ["Verilog", "FPGA", "Vivado"],
  //   date:    "Jun 2024 – Jun 2025",
  //   bullets: [
  //     "Undergraduate thesis: hardware implementation of the Deflate data compression algorithm on an FPGA.",
  //     "Explored VLSI design principles and resource-constrained computing for efficient data compression.",
  //   ],
  //   links:  [ { label: "GitHub", url: "https://github.com/ayan-1829" } ],
  //   videos: [],
  //   info:   [],
  // },
];
