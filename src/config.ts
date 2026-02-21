export const SITE_CONFIG = {
    navigation: [
        {
            name: "ABOUT",
            items: ["Biography", "Core Values", "Gallery"]
        },
        {
            name: "EXPERIENCES",
            items: ["Research", "Mathnasium", "Cybersecurity"]
        },
        {
            name: "PROJECTS",
            items: ["Arbitrage Engine", "Options Pricing", "Soccer AI"]
        },
        {
            name: "MUSINGS",
            items: ["Blog", "Latest Posts", "Twitter/X"]
        },
        {
            name: "RESUME",
            items: ["Python", "PyTorch", "Linux", "Docker"]
        }
    ],
    bio: {
        name: "TANISH INAMDAR",
        headline: "Engineering Intelligent Systems for the Physical and Digital Worlds",
        image: "https://tanman.duckdns.org/api/assets/c2a8d86e-80e5-4da4-b38d-5c1c6888cfed/thumbnail?key=zkbfl-zmQI6rsNFrJsoEdqzVuJuH0h15TWWYETV3mssRAOWAFLLN5FcZ4vNdZrvCdrY&size=preview&c=HQgODwKJaId%2FiHd7h1h4V3eJWDv5l4MP",
        summary: [
            "Hey there, I am Tanish Inamdar studying at UIUC. I am currently a software development intern at yourcollegecontact and also an undergraduate researcher working on computer vision in agricultural technology.",
            "I love making products more useable and seemless, as technology should enhance not hinder life. When I am not coding catch me trying to finish my watchlist and trying to learn new skills, unsuccessfuly on both. Feel free to reach out to me by phone or email."
        ],
    },
    masthead: {
        title: "The Tanish Times",
        motto: "ALL THE TEXT THAT'S FIT TO COUT<<",
        edition: "Personal Edition",
        location: "Urbana, IL",
        date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        price: "FREE OF CHARGE"
    },
    systemStatus: [
        { label: "immich-server", status: "up" },
        { label: "currently working on", status: "food delivery arbitrage engine" },
        { label: "research on", status: "vision models" }
    ],
    leadStory: {
        title: "Research: Architecting Aerial Monitoring Systems at UIUC",
        subtitle: "Advanced DINOv3 and YOLOv8 pipelines for high-accuracy edge deployment",
        author: "BY THE EDITORIAL BOARD",
        content: [
            "At the University of Illinois Urbana-Champaign, research into recursive aerial monitoring has reached new heights. The proposed architecture integrates DINOv3 foundational models for robust object representation with YOLOv8 for high-speed edge inference.",
            "The project focuses on creating 'resilient vision'—systems that can maintain tracking and identification across volatile environments with limited computational overhead. This research bridges the gap between massive transformer models and the practical constraints of UAV hardware."
        ],
        image: "https://tanman.duckdns.org/api/assets/dd6f778c-7d3d-4c10-bfc6-fa81ff50188f/thumbnail?key=ChSVEFkdngSfQrasuWtB1SdocCEvl14UQ_LZ-F88H8nz57Kx__MBXtUZEJHLJIvHjdg&size=preview&c=3ygGDYJ2hvWGh3iFeXiHd2eAjij4"
    },
    experience: [
        {
            title: "Mathnasium Lead: Automating Student Plans with Python",
            content: "Spearheaded the automation of curriculum generation, reducing administrative overhead by 60%. Utilized Python to parse student data and map progress against state standards in real-time."
        },
        {
            title: "Cybersecurity: Real-time Risk Dashboards & CTF Victory",
            content: "Developed real-time monitoring tools for threat detection and led team to victory in regional Capture The Flag competitions. Expert in vulnerability assessment and network hardening."
        }
    ],
    projects: [
        {
            title: "Delivery Arbitrage: Reverse Engineering APIs",
            content: "In-depth reverse engineering of Uber Eats and DoorDash internal APIs to identify fee discrepancies. Built a real-time comparison engine for maximizing delivery efficiency."
        },
        // {
        //     title: "Options Pricing: 90% Accuracy in SPX Volatility",
        //     content: "Implemented a GARCH-based volatility estimator to price SPX options. Achieved 90% historical accuracy in predicting volatility surfaces during high-stress market periods."
        // }
    ],
    classifieds: [
        "PYTHON: Advanced automation & scripting",
        "PYTORCH: Foundational DL architecture",
        "DOCKER: Containerized orchestration",
        "LINUX: Expert system administration",
        "REACT: High-fidelity skeuomorphic UI"
    ],
    widgets: {
        weather: {
            city: "URBANA, IL",
            temp: "34°F",
            feelsLike: "28°F",
            humidity: "62%",
            condition: "CLEAR"
        }
    },
    dossier: {
        skills: [
            { category: "LANGUAGES", items: ["Python", "C++", "C", "SQL", "JavaScript", "TypeScript"] },
            { category: "AI & COMPUTING", items: ["PyTorch", "TensorFlow", "OpenCV", "CUDA", "YOLOv8", "DINO"] },
            { category: "INFRASTRUCTURE", items: ["Docker", "Kubernetes", "AWS", "Ubuntu Linux (Server/Desktop)", "Nginx"] },
            { category: "DEVELOPMENT", items: ["React", "Vite", "TailwindCSS", "Node.js", "PostgreSQL", "Redis"] }
        ],
        contact: {
            email: "tanishdinamdar@gmail.com",
            github: "github.com/tanish-inamdar",
            linkedin: "linkedin.com/in/tanish-inamdar",
            location: "Urbana-Champaign, IL",
            number: "(623) 280-6927"
        }
    }
};
