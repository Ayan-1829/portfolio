/* ================================================================
   DATA_COURSES.JS
   All university courses with topics, links, and videos.

   Each topic: { name, links: [{label,url}] | null, video: {title,url} | null }
   Each course: { code, title, credits, semester, emoji, description,
                  topics[], links[], videos[] }
================================================================ */

const DATA_COURSES = [
  {
    university: "Green University of Bangladesh",
    logo:       "images/GUB_leaf_Logo.png",
    courses: [
      {
        code:        "CSE 201",
        title:       "Object Oriented Programming",
        credits:     "3",
        semester:    "Summer 2026",
        emoji:       "",
        description: "Principles of Object Oriented Programming",
        topics: [
          { name: "Introduction to OOP",        links: [ { label: "Introduction to OOP", url: null }, { label: "OOP vs SPL", url: null } ], video: null },
          { name: "Basics of Java Programming", links: [ { label: "Data Types, Variables, Operators", url: null }, { label: "Branching Statements: If-else, Switch", url: null }, { label: "Iterative Statements: Loops, Jumping Statements", url: null } ], video: null },
          { name: "Arrays",                     links: [ { label: "Arrays Definition", url: null }, { label: "Multi-dimensional Arrays", url: null }, { label: "Sorting", url: null }, { label: "Searching", url: null } ], video: null },
          { name: "Classes and Objects",        links: [ { label: "Introduction to Classes and Objects", url: null }, { label: "Encapsulation", url: null }, { label: "Constructors", url: null }, { label: "this keyword", url: null }, { label: "Garbage Collection", url: null } ], video: null },
          { name: "Methods",                    links: [ { label: "Method Definition", url: null }, { label: "Method Overloading", url: null }, { label: "Object as Parameter, returning object", url: null }, { label: "Recursion", url: null }, { label: "Access Control", url: null }, { label: "Understanding static and final", url: null }, { label: "Nested Classes", url: null } ], video: null },
          { name: "Inheritance",                links: [ { label: "Introduction to Inheritance", url: null }, { label: "super keyword", url: null }, { label: "Types of Inheritance", url: null }, { label: "Method Overriding", url: null }, { label: "Abstract classes", url: null }, { label: "Use of final in class and methods", url: null }, { label: "Using library classes", url: null } ], video: null },
          { name: "Packages and Interfaces",    links: [ { label: "Packages in Java", url: null }, { label: "Access Protection", url: null }, { label: "Interfaces in Java", url: null }, { label: "Interfaces vs Classes", url: null } ], video: null },
          { name: "Exception Handling",         links: [ { label: "Introducing Exception Handling", url: null }, { label: "Exception Types; Exception Catching", url: null }, { label: "try...catch, throw, throws, finally", url: null }, { label: "Creating own Exception", url: null } ], video: null },
          { name: "Multi-threading",            links: [ { label: "Introducing Multithreaded Programming", url: null }, { label: "Creating Thread", url: null }, { label: "Synchronization", url: null }, { label: "Interthread Communication", url: null } ], video: null },
          { name: "String Handling",            links: [ { label: "Introducing String Class", url: null }, { label: "String Operations", url: null }, { label: "Big Number Manipulation using String", url: null } ], video: null },
          { name: "GUI and Advanced Topics",    links: [ { label: "Introducing Java Spring", url: null }, { label: "Graphical Drawing", url: null }, { label: "Animation", url: null }, { label: "Introducing JavaFX and its Components", url: null }, { label: "Simple Software Interface Design", url: null }, { label: "Database Connection", url: null } ], video: null },
        ],
        links:  [ { label: "Course Outline - Summer 2026", url: "https://drive.google.com/file/d/1KQO-ChPm_ZPxqnhmandsWfRGaRJBbfod/view" }, { label: "Books", url: "https://drive.google.com/drive/folders/1pCcBRRuWhqbu3IAvQFy1BOD69BbVFZAG?usp=sharing" }, { label: "MidTerm Slides", url: "https://drive.google.com/drive/folders/1Nupjv_C5t6PZTSov-UzfTBWA3rXYQu0n?usp=sharing" }, { label: "Final Slides", url: "https://drive.google.com/drive/folders/11ZvLvwr2BYfCth2PzyX1K9Jl8TNE82U-?usp=sharing" } ],
        videos: [],
      },


      {
        code:        "CSE 202",
        title:       "Object Oriented Programming Lab",
        credits:     "1.5",
        semester:    "Fall 2025, Summer 2026",
        emoji:       "",
        description: "Implementing the principles of Object Oriented Programming in Java.",
        topics: [
          { name: "Basics of Java Programming",  links: [ { label: "Java Basics",       url: "https://www.w3schools.com/java/java_intro.asp" } ],          video: null },
          { name: "Class & Object",              links: [ { label: "Classes & Objects",  url: "https://www.w3schools.com/java/java_classes.asp" } ],       video: null },
          { name: "Constructors",                links: [ { label: "Java Constructors",  url: "https://www.w3schools.com/java/java_constructors.asp" } ],  video: { title: "Java Constructors",          url: "https://www.youtube.com/embed/oSiN1J_G01Q" } },
          { name: "Inheritance",                 links: [ { label: "Inheritance Guide",  url: "https://www.w3schools.com/java/java_inheritance.asp" } ],   video: null },
          { name: "Polymorphism",                links: [ { label: "Polymorphism",       url: "https://www.w3schools.com/java/java_polymorphism.asp" } ],  video: null },
          { name: "Encapsulation",               links: [ { label: "Encapsulation",      url: "https://www.w3schools.com/java/java_encapsulation.asp" } ], video: null },
          { name: "Abstraction",                 links: [ { label: "Abstraction",        url: "https://www.w3schools.com/java/java_abstract.asp" } ],      video: null },
          { name: "Exception Handling",          links: [ { label: "Exceptions",         url: "https://www.w3schools.com/java/java_try_catch.asp" } ],     video: { title: "Exception Handling in Java",  url: "https://www.youtube.com/embed/W-N2ltgU-X4" } },
          { name: "Multi-threading",             links: [ { label: "Threads in Java",   url: "https://www.geeksforgeeks.org/multithreading-in-java/" } ],  video: null },
        ],
        links: [
          { label: "Course Outline - Summer 2026",  url: "https://drive.google.com/file/d/1urJtlmMnFgPfsD5dHDVRPpB8rkitEbWY/view" },
          { label: "New Lab Manual",                url: "https://drive.google.com/file/d/1rwwv-rID2AzQ8CLcfxTRXvQg5zmXf0XH/view" },
          { label: "Course Outline - Fall 2025",    url: "https://drive.google.com/file/d/17hyx-0tYiNjUA9CBUKBAj4AfPeBVfO_s/view?usp=sharing" },
          { label: "Old Lab Manuals",               url: "https://drive.google.com/drive/folders/1FcJcvayjum_jESf3uM6s5aY5O_oQ_ArA?usp=sharing" },
        ],
        videos: [
          { title: "OOP in Java — Part 1", url: "https://www.youtube.com/embed/l7icgsjrnPE" },
          { title: "OOP in Java — Part 2", url: "https://www.youtube.com/embed/-1GnCaK28a0" },
          { title: "OOP in Java — Part 3", url: "https://www.youtube.com/embed/APrKXoJrffo" },
          { title: "OOP in Java — Part 4", url: "https://www.youtube.com/embed/B72dgrsv5Q4" },
          { title: "OOP in Java — Part 5", url: "https://www.youtube.com/embed/5CpU2HMeMPk" },
          { title: "OOP in Java — Part 6", url: "https://www.youtube.com/embed/GdQL1qQTMRE" },
        ],
      },

      {
        code:        "CSE 204",
        title:       "Digital Logic Design Lab",
        credits:     "1",
        semester:    "Fall 2025",
        emoji:       "",
        description: "Implementing the principles of Digital Logic Gates using ICs.",
        topics: [
          { name: "Verification of Basic Logic Gates",                                                                        links: [ { label: "Logic Gates Guide",        url: "https://www.geeksforgeeks.org/logic-gates/" } ],                                                                       video: { title: "Basic Logic Gates",        url: "https://www.youtube.com/embed/INEtYZqtjTo" } },
          { name: "Implementing All Individual Gates with Universal Gates",                                                    links: null,                                                                                                                                                             video: null },
          { name: "Design a Circuit for the Given Canonical Form, Draw the Circuit Diagram and Verify the De-Morgan's Laws",  links: null,                                                                                                                                                             video: null },
          { name: "Design a Combinational Logic Circuit for 4x1 MUX and Verify the Truth Table.",                             links: [ { label: "Multiplexers Explained",   url: "https://www.geeksforgeeks.org/multiplexers-in-digital-logic/" } ],                                                   video: null },
          { name: "Design a Combinational Logic Circuit for 1x4 De-MUX and Verify the Truth Table.",                          links: null,                                                                                                                                                             video: null },
          { name: "Construct Half Adder and Full Adder using Half Adder and Verify the Truth Table.",                         links: [ { label: "Half & Full Adder",        url: "https://www.geeksforgeeks.org/half-adder-in-digital-logic/" } ],                                                     video: { title: "Half Adder & Full Adder",  url: "https://www.youtube.com/embed/mZ9VWA4cTbE" } },
          { name: "Verification of truth tables of the basic Flip-Flops with synchronous and asynchronous modes.",            links: [ { label: "Flip-Flops Guide",         url: "https://www.geeksforgeeks.org/flip-flop-types-their-conversion-and-applications/" } ],                              video: { title: "Flip-Flops Explained",     url: "https://www.youtube.com/embed/F1OC5e7Tn_o" } },
        ],
        links: [
          { label: "Course Outline - Summer 2026",    url: "https://drive.google.com/file/d/1He14X841leQDyoJ9pDyeKNZJUliqJFxh/view" },
          { label: "New Lab Manual",                  url: "https://drive.google.com/file/d/14_g-oYgYxR03BjFk_IjLQ2JvluaTu-oC/view" },
          { label: "Course Outline - Fall 2025",      url: "https://drive.google.com/file/d/17hyx-0tYiNjUA9CBUKBAj4AfPeBVfO_s/view?usp=sharing" },
          { label: "Old Lab Manuals",                 url: "https://drive.google.com/drive/folders/1b4tcoBlbepTmAcZRNuLce4RHVOhgrFWt?usp=sharing" },
        ],
        videos: [],
      },

      {
        code:        "CSE 312/308",
        title:       "Data Communication Lab",
        credits:     "1",
        semester:    "Spring 2026",
        emoji:       "",
        description: "Implementations of Data Communication concepts including modulation, encoding, and error detection.",
        topics: [
          { name: "Implementing character Stuffing and De-stuffing",                             links: [ { label: "Character Stuffing",      url: "https://www.geeksforgeeks.org/framing-in-data-link-layer/" } ],                                                video: null },
          { name: "Implementing Bit Stuffing and De-stuffing",                                   links: [ { label: "Bit Stuffing Explained",  url: "https://www.geeksforgeeks.org/bit-stuffing-in-computer-network/" } ],                                          video: null },
          { name: "IPv4 implementation of Decimal to Binary and vice versa",                     links: [ { label: "IPv4 Addressing",         url: "https://www.geeksforgeeks.org/introduction-of-classful-ip-addressing/" } ],                                    video: { title: "IPv4 Addressing",         url: "https://www.youtube.com/embed/ddM9AcreVqY" } },
          { name: "Implementing Cyclic Redundancy Check and Parity Checker.",                    links: [ { label: "CRC Explained",           url: "https://www.geeksforgeeks.org/modulo-2-binary-division/" } ],                                                   video: { title: "CRC Error Detection",     url: "https://www.youtube.com/embed/izG7qT0EpBw" } },
          { name: "Implementing of Error Detection & Correction Mechanism using Hamming Code.",  links: [ { label: "Hamming Code",            url: "https://www.geeksforgeeks.org/hamming-code-in-computer-network/" } ],                                           video: { title: "Hamming Code",            url: "https://www.youtube.com/embed/373FUw-2U2k" } },
          { name: "Implementing Encoding and Decoding Scheme Using NRZ-I",                       links: null,                                                                                                                                                        video: null },
          { name: "Implementing Encoding and Decoding Scheme Using Manchester",                  links: [ { label: "Manchester Encoding",     url: "https://www.geeksforgeeks.org/manchester-encoding-in-computer-network/" } ],                                    video: null },
          { name: "Implementing encoding and decoding scheme using AMI and Pseudo ternary",      links: null,                                                                                                                                                        video: null },
          { name: "Study of network topologies using packet tracer software.",                   links: [ { label: "Network Topologies",      url: "https://www.geeksforgeeks.org/types-of-network-topology/" } ],                                                  video: { title: "Network Topologies",      url: "https://www.youtube.com/embed/zbqrNg4C98U" } },
          { name: "Study of LAN transmission media's, topologies, interconnection devices",      links: [ { label: "LAN Transmission Media",  url: "https://www.geeksforgeeks.org/transmission-media-in-computer-networks/" } ],                                    video: null },
          { name: "Implementation of analog to digital conversion and pulse coded transmission.", links: null,                                                                                                                                                       video: null },
        ],
        links: [
          { label: "Course Outline - Spring 2026", url: "https://drive.google.com/file/d/1eOmsADCYw2wTDClaK2LYWw6f1eMbFQSc/view?usp=sharing" },
          { label: "Lab Manuals",    url: "https://drive.google.com/drive/folders/1PrdV0QCES58caP1IynnWnIZzWxogQA4C?usp=sharing" },
        ],
        videos: [],
      },

      {
        code:        "CSE 315",
        title:       "Artificial Intelligence",
        credits:     "3",
        semester:    "Spring 2026",
        emoji:       "",
        description: "Concepts of Artificial Intelligence including search, reasoning, and learning.",
        topics: [
          { name: "Introduction to Artificial Intelligence", links: [ { label: "What is AI?",         url: "https://www.ibm.com/topics/artificial-intelligence" } ],                                                                                                                                 video: { title: "AI Intro",             url: "https://www.youtube.com/embed/ad79nYk2keg" } },
          { name: "Uninformed Search",                       links: [ { label: "Breadth First Search", url: "https://www.geeksforgeeks.org/dsa/breadth-first-search-or-bfs-for-a-graph/" }, { label: "Depth First Search", url: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/" }, { label: "Uniform Cost Search", url: "https://www.geeksforgeeks.org/artificial-intelligence/uniform-cost-search-ucs-in-ai/" } ], video: null },
          { name: "Informed Search",                         links: [ { label: "A* Algorithm",         url: "https://www.geeksforgeeks.org/a-search-algorithm/" } ],                                                                                                                                 video: { title: "A* Search",            url: "https://www.youtube.com/embed/ySN5Wnu88nE" } },
          { name: "Constraint Satisfaction Problems",        links: [ { label: "CSP Overview",         url: "https://www.geeksforgeeks.org/constraint-satisfaction-problems-csp-in-artificial-intelligence/" } ],                                                                                    video: { title: "CSP in AI",            url: "https://www.youtube.com/embed/hJ9WOiueJes" } },
          { name: "Local Search",                            links: [ { label: "Hill Climbing",         url: "https://www.geeksforgeeks.org/introduction-hill-climbing-artificial-intelligence/" } ],                                                                                                 video: null },
          { name: "Adversarial Search",                      links: [ { label: "Minimax Algorithm",    url: "https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/" } ],                                                                                                video: { title: "Minimax & Alpha-Beta", url: "https://www.youtube.com/embed/l-hh51ncgDI" } },
          { name: "Uncertainty",                             links: null,                                                                                                                                                                                                                             video: null },
          { name: "Fuzzy Logic",                             links: [ { label: "Fuzzy Logic Intro",    url: "https://www.geeksforgeeks.org/fuzzy-logic-introduction/" } ],                                                                                                                           video: { title: "Fuzzy Logic",          url: "https://www.youtube.com/embed/rln_kZbYaWc" } },
          { name: "Reinforcement Learning",                  links: [ { label: "RL Basics",             url: "https://www.geeksforgeeks.org/what-is-reinforcement-learning/" } ],                                                                                                                    video: null },
          { name: "AI Ethics",                               links: [ { label: "AI Ethics Guide",      url: "https://www.ibm.com/topics/ai-ethics" } ],                                                                                                                                              video: { title: "AI Ethics",            url: "https://www.youtube.com/embed/aGwYtUzMQUk" } },
        ],
        links: [
          { label: "Course Outline - Spring 2026",  url: "https://drive.google.com/file/d/1m_4dJtTWARgSodnn2pk9fNUW5dStDtH8/view" },
          { label: "Slides for Midterm",            url: "https://drive.google.com/drive/folders/17nrVGLj_TsVnq6p2XV8BtkTr1vQDA9n4?usp=sharing" },
          { label: "Slides for Final",              url: "https://drive.google.com/drive/folders/1FZI5dn_twwHTi0-f2gl7grNCywEOqRRZ?usp=sharing" },
          { label: "Books",                         url: "https://drive.google.com/drive/folders/1ej1or8FloninLZAy8xqBlwnu3HcyiEAt?usp=sharing" },
        ],
        videos: [],
      },

      {
        code:        "CSE 435",
        title:       "Data Mining",
        credits:     "3",
        semester:    "Fall 2025",
        emoji:       "",
        description: "Concepts of Data Mining including data preprocessing, association rule mining, and clustering.",
        topics: [
          { name: "Introduction to Data Mining", links: [ { label: "What is Data Mining?",         url: "https://www.geeksforgeeks.org/data-mining/" } ],                                          video: null },
          { name: "Data Preprocessing",          links: null,                                                                                                                                       video: { title: "Data Preprocessing",      url: "https://www.youtube.com/embed/0xVqLJe9_CY" } },
          { name: "Pattern Mining",              links: [ { label: "Frequent Pattern Mining",       url: "https://www.geeksforgeeks.org/frequent-pattern-mining-and-association-rules/" } ],        video: { title: "Pattern Mining",           url: "https://www.youtube.com/embed/T_UTAXBNarQ" } },
          { name: "Association Rule Mining",     links: [ { label: "Apriori Algorithm",             url: "https://www.geeksforgeeks.org/apriori-algorithm/" } ],                                    video: null },
          { name: "Classification",              links: null,                                                                                                                                       video: null },
          { name: "Clustering",                  links: [ { label: "Clustering Methods",            url: "https://www.geeksforgeeks.org/clustering-in-machine-learning/" } ],                       video: { title: "Clustering Algorithms",    url: "https://www.youtube.com/embed/4b5d3muPQmA" } },
          { name: "Evaluation",                  links: [ { label: "Model Evaluation Metrics",      url: "https://www.geeksforgeeks.org/metrics-for-machine-learning-model/" } ],                   video: { title: "Model Evaluation",         url: "https://www.youtube.com/embed/85dtiMz9tSo" } },
          { name: "Outlier Detection",           links: [ { label: "Outlier Detection Techniques",  url: "https://www.geeksforgeeks.org/machine-learning-outlier/" } ],                             video: null },
        ],
        links: [
          { label: "Course Outline - Fall 2025", url: "https://drive.google.com/file/d/1hVAvncaP2Hf9gTtlyumkSd7F5K8U4Yo-/view?usp=sharing" },
          { label: "Books",          url: "https://drive.google.com/drive/folders/1Ocmx4NAbWwBCMV8XLjHKO_gSaWT701xx?usp=sharing" },
          { label: "Slides",         url: "https://drive.google.com/drive/folders/1ZDFc-U0XUNfaCMNdiIZn4extTj9iG9wl?usp=sharing" },
        ],
        videos: [],
      },

      {
        code:        "CSE 436",
        title:       "Data Mining Lab",
        credits:     "1",
        semester:    "Fall 2025",
        emoji:       "",
        description: "Implementation of Data Mining concepts including data preprocessing, association rule mining, and clustering.",
        topics: [
          { name: "Data Preprocessing Techniques",                                                          links: null,                                                                                                                       video: { title: "Data Preprocessing in Python",  url: "https://www.youtube.com/embed/0xVqLJe9_CY" } },
          { name: "Feature Engineering & Data Preprocessing for Data Mining",                               links: [ { label: "Feature Engineering Guide",  url: "https://www.geeksforgeeks.org/what-is-feature-engineering/" } ],          video: { title: "Feature Engineering",           url: "https://www.youtube.com/embed/6WDFfaYtN6s" } },
          { name: "Statistical Analysis and Data Visualization using Python",                               links: [ { label: "Matplotlib & Seaborn",        url: "https://www.geeksforgeeks.org/data-visualization-using-matplotlib/" } ],  video: { title: "Data Visualization Python",     url: "https://www.youtube.com/embed/a9UrKTVEeZA" } },
          { name: "Implementation of PCA for Dimensionality Reduction and t-SNE",                           links: [ { label: "PCA Explained",               url: "https://www.geeksforgeeks.org/principal-component-analysis-with-python/" } ], video: { title: "PCA & t-SNE",                url: "https://www.youtube.com/embed/FgakZw6K1QQ" } },
          { name: "Implementation of Apriori algorithm for frequent itemset mining",                        links: [ { label: "Apriori Algorithm",           url: "https://www.geeksforgeeks.org/apriori-algorithm/" } ],                    video: null },
          { name: "Implementation of FP-Growth algorithm for frequent itemset mining",                      links: null,                                                                                                                       video: null },
          { name: "Classification:- Decision Trees and SVMs Implementation using Python and scikit-learn",  links: [ { label: "scikit-learn Classifiers",    url: "https://scikit-learn.org/stable/supervised_learning.html" } ],            video: { title: "Decision Trees & SVMs",         url: "https://www.youtube.com/embed/7VeUPuFGJHk" } },
          { name: "Implementation of DBSCAN Clustering Algorithm",                                          links: [ { label: "DBSCAN Guide",                url: "https://www.geeksforgeeks.org/dbscan-clustering-in-ml-density-based-clustering/" } ], video: { title: "DBSCAN Clustering", url: "https://www.youtube.com/embed/C3r7tGRe2eI" } },
          { name: "Ensemble Learning",                                                                      links: null,                                                                                                                       video: { title: "Ensemble Learning",             url: "https://www.youtube.com/embed/Un9zObFjBH0" } },
        ],
        links: [
          { label: "Course Outline - Fall 2025", url: "https://drive.google.com/file/d/19AIaLKwOnf9Lr2TCakLTc2tGhstRMyVK/view?usp=sharing" },
          { label: "Lab Manuals",    url: "https://drive.google.com/drive/folders/1BDwIALLkuRs4TPLbOR2Tr4x6MPh_ek2q?usp=sharing" },
        ],
        videos: [],
      },

      {
        code:        "CSE 458",
        title:       "Industrial Training",
        credits:     "2",
        semester:    "Fall 2025",
        emoji:       "",
        description: "Industrial training at various IT companies to gain practical experience and industry exposure.",
        topics: [],
        links: [
          { label: "Logbook",                url: "https://drive.google.com/drive/folders/1uE7n_MZVWHWp0nNHkXQlqUQok5LtyotI?usp=sharing" },
          { label: "Presentation Template",  url: "https://drive.google.com/drive/folders/1_3SLOCHuiklrRHJJC0J0MPooI9Z9T-On?usp=sharing" },
          { label: "Report",                 url: "https://drive.google.com/drive/folders/1Lc12zT_TO5-v7pufOVn4Vs1DYT4RpKTK?usp=sharing" },
          { label: "Rubrics",                url: "https://drive.google.com/drive/folders/1gMwSyZu8QsPFgxfiRYoUk03LsrXfoYDG?usp=sharing" },
        ],
        videos: [],
      },

    ],
  },

  {
    university: "Varendra University",
    logo:       "images/VU_square_Logo.png",
    courses: [

      {
        code:        "CSE 421",
        title:       "Computer Graphics",
        credits:     "3",
        semester:    "Fall 2025",
        emoji:       "",
        description: "Basics of Computer Graphics including rendering, transformations, and modeling.",
        topics: [
          { name: "Introduction to Computer Graphics",                                                                                links: [ { label: "Computer Graphics Overview",    url: "https://www.geeksforgeeks.org/computer-graphics-2/" } ],                                                                                       video: null },
          { name: "RGB color model, CMYK color model, Direct color coding",                                                           links: null,                                                                                                                                                                                          video: { title: "RGB & CMYK Color Models",  url: "https://www.youtube.com/embed/gnUYoQ1pwes" } },
          { name: "Line Drawing Algorithms - Bresenham's Algorithm, Midpoint Algorithm, DDA",                                         links: [ { label: "Bresenham's Line Algorithm", url: "https://www.geeksforgeeks.org/bresenhams-line-generation-algorithm/" }, { label: "Midpoint Line Algorithm", url: "https://www.geeksforgeeks.org/dsa/mid-point-line-generation-algorithm/" }, { label: "DDA Line Algorithm", url: "https://www.geeksforgeeks.org/computer-graphics/dda-line-generation-algorithm-computer-graphics/" } ], video: { title: "Line Drawing Algorithms", url: "https://www.youtube.com/embed/RGB-wlatStc" } },
          { name: "Circle Drawing, Direct algorithm, Eight way Symmetry and Mid-point Circle Drawing",                                links: [ { label: "Midpoint Circle Algorithm", url: "https://www.geeksforgeeks.org/mid-point-circle-drawing-algorithm/" }, { label: "Bresenham's circle drawing algorithm", url: "https://www.geeksforgeeks.org/c/bresenhams-circle-drawing-algorithm/" } ], video: null },
          { name: "Transformation(2D & 3D), Translation, Scaling, Reflection, Shearing",                                             links: [ { label: "2D Transformations",         url: "https://www.geeksforgeeks.org/2d-transformation-in-computer-graphics-set-1-scaling-of-objects/" } ],                                        video: null },
          { name: "Polygon Representation, Types of Polygon, Parity Requirements",                                                   links: [ { label: "Polygon in CG",             url: "https://www.geeksforgeeks.org/polygon-clipping-sutherland-hodgman-algorithm/" } ],                                                            video: null },
          { name: "Polygon Filling, Scanline Algorithm, Seed Fill, Boundary Fill",                                                   links: [ { label: "Polygon Filling Methods",   url: "https://www.geeksforgeeks.org/flood-fill-algorithm/" } ],                                                                                       video: null },
          { name: "Viewing Pipeline, Viewing Transformation, Window to Viewport Mapping, Workstation Transformation",                links: [ { label: "Viewing Transformation",    url: "https://www.geeksforgeeks.org/window-to-viewport-transformation-in-computer-graphics-with-implementation/" } ],                              video: null },
          { name: "Clipping, Point Clipping, Line Clipping with Cohen-Sutherland Algorithm, Polygon Clipping",                       links: [ { label: "Cohen-Sutherland Clipping", url: "https://www.geeksforgeeks.org/line-clipping-set-1-cohen-sutherland-algorithm/" } ],                                                          video: null },
        ],
        links:  [],
        videos: [],
      },

      {
        code:        "CSE 422",
        title:       "Computer Graphics Lab",
        credits:     "1.5",
        semester:    "Fall 2025",
        emoji:       "",
        description: "Implementation of Computer Graphics including rendering, transformations, and modeling.",
        topics: [
          { name: "Introduction to OpenGL, Drawing Pixel",    links: null, video: null },
          { name: "Line Drawing Algorithms Implementation",   links: null, video: null },
          { name: "Circle Drawing Algorithms Implementation", links: null, video: null },
          { name: "Transformation of 2D objects",             links: null, video: null },
          { name: "Keyboard Function Practice",               links: null, video: null },
          { name: "Clipping Objects",                         links: null, video: null },
          { name: "3D Shapes Drawing with clipping",          links: null, video: null },
        ],
        links:  [],
        videos: [],
      },

    ],
  },
];
