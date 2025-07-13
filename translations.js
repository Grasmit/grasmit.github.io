// Translation data for English and German
const translations = {
    en: {
        // Navigation
        github: "Github",
        linkedin: "Linkedin", 
        xing: "Xing",
        email: "Email",
        
        // Hero Section
        heroGreeting: "Hi, I'm Grasmit 👋️",
        heroDescription: "I am a confident, motivated, and focused young graduate with a passion for software engineering and data solutions. With quality experience spanning full-stack development, data engineering, and cloud technologies, I've successfully contributed to projects at leading companies like Bosch, GroupM, and Newboxes. From automating cross-department data transfers with ML integration to optimizing enterprise applications and developing microservices architectures, I bring a proven track record of delivering impactful solutions. Having completed my Master's in Applied Computer Science from a German public university with specialized coursework in cloud computing, big data, and distributed applications, I am eager to take on new responsibilities and am actively seeking opportunities to unlock my full potential in a dynamic technology environment.",
        downloadResume: "Download Resume",
        career: "Career",
        skills: "Skills",
        contact: "Contact",
        
        // Skills Section
        skillsTitle: "Skills",
        
        // Career Section
        careerJourney: "Career Journey",
        
        // Job Titles and Companies
        studentSoftwareEngineer: "Student Software Engineer",
        dataServiceIntern: "Data as a Service Intern",
        fullStackDataEngineer: "Full-Stack/Data Engineer",
        movedToGermany: "Moved to Germany for Master's",
        
        // Job Descriptions
        newboxesDesc: "Optimized data-heavy Symfony MVC application for engine test data management, enhancing performance through Doctrine ORM refinements and critical bug resolution. Developed Vue.js/Symfony features delivering reusable UI components and REST APIs.",
        boschDesc: "Automated cross-department data transfers by building Angular/Flask application with PostgreSQL, integrating ML models for AI-driven data delivery. Deployed via Docker/CI/CD on internal cloud infrastructure enabling scalable updates.",
        groupmDesc: "Developed Angular/React micro-frontends and ASP.NET microservices for WPP-wide platform, integrating Azure AI to reduce user effort by 40%. Improved test coverage and reduced bugs via Jasmine/xUnit tests in CI-driven environment.",
        mastersDesc: "Started pursuing Master's in Applied Computer Science at Hochschule Fulda, focusing on cloud computing, data engineering, and software optimization.",
        glizernDesc: "As a Full-Stack/Data Engineer, developed end-to-end solutions including frontend interfaces, backend services, and database engineering. Automated data workflows via Python/Bash scripts to extract, transform, and deliver customized CSV/Excel reports.",
        
        // Contact Section
        getInTouch: "Get in Touch",
        contactMe: "Contact Me",
        
        // Settings Panel
        language: "Language",
        theme: "Theme",
        darkMode: "Dark Mode",
        
        // Footer
        footerText: "Built with passion for clean code and innovative solutions."
    },
    
    de: {
        // Navigation
        github: "Github",
        linkedin: "Linkedin",
        xing: "Xing", 
        email: "E-Mail",
        
        // Hero Section
        heroGreeting: "Hallo, ich bin Grasmit 👋️",
        heroDescription: "Ich bin ein selbstbewusster, motivierter und fokussierter junger Absolvent mit einer Leidenschaft für Software-Engineering und Datenlösungen. Mit qualitativ hochwertiger Erfahrung in Full-Stack-Entwicklung, Data Engineering und Cloud-Technologien habe ich erfolgreich zu Projekten bei führenden Unternehmen wie Bosch, GroupM und Newboxes beigetragen. Von der Automatisierung abteilungsübergreifender Datenübertragungen mit ML-Integration bis hin zur Optimierung von Unternehmensanwendungen und der Entwicklung von Microservices-Architekturen bringe ich eine bewährte Erfolgsbilanz bei der Bereitstellung wirkungsvoller Lösungen mit. Nach Abschluss meines Masters in Angewandter Informatik an einer deutschen öffentlichen Universität mit spezialisierten Kursen in Cloud Computing, Big Data und verteilten Anwendungen bin ich bereit, neue Verantwortungen zu übernehmen und suche aktiv nach Möglichkeiten, mein volles Potenzial in einem dynamischen Technologieumfeld zu entfalten.",
        downloadResume: "Lebenslauf herunterladen",
        career: "Karriere",
        skills: "Fähigkeiten",
        contact: "Kontakt",
        
        // Skills Section
        skillsTitle: "Fähigkeiten",
        
        // Career Section
        careerJourney: "Karriereweg",
        
        // Job Titles and Companies
        studentSoftwareEngineer: "Studentischer Software-Ingenieur",
        dataServiceIntern: "Data as a Service Praktikant",
        fullStackDataEngineer: "Full-Stack/Data Engineer",
        movedToGermany: "Umzug nach Deutschland für Master",
        
        // Job Descriptions
        newboxesDesc: "Optimierte datenintensive Symfony MVC-Anwendung für das Management von Motortestdaten, verbesserte Leistung durch Doctrine ORM-Verfeinerungen und kritische Fehlerbehebung. Entwickelte Vue.js/Symfony-Features mit wiederverwendbaren UI-Komponenten und REST-APIs.",
        boschDesc: "Automatisierte abteilungsübergreifende Datenübertragungen durch Entwicklung einer Angular/Flask-Anwendung mit PostgreSQL, Integration von ML-Modellen für KI-gesteuerte Datenbereitstellung. Bereitstellung über Docker/CI/CD auf interner Cloud-Infrastruktur für skalierbare Updates.",
        groupmDesc: "Entwickelte Angular/React Micro-Frontends und ASP.NET Microservices für WPP-weite Plattform, integrierte Azure AI zur Reduzierung des Benutzeraufwands um 40%. Verbesserte Testabdeckung und reduzierte Bugs durch Jasmine/xUnit-Tests in CI-gesteuerte Umgebung.",
        mastersDesc: "Begann das Studium des Masters in Angewandter Informatik an der Hochschule Fulda mit Fokus auf Cloud Computing, Data Engineering und Software-Optimierung.",
        glizernDesc: "Als Full-Stack/Data Engineer entwickelte End-to-End-Lösungen einschließlich Frontend-Interfaces, Backend-Services und Datenbank-Engineering. Automatisierte Daten-Workflows über Python/Bash-Skripte zur Extraktion, Transformation und Bereitstellung angepasster CSV/Excel-Berichte.",
        
        // Contact Section
        getInTouch: "Kontakt aufnehmen",
        contactMe: "Kontaktiere mich",
        
        // Settings Panel
        language: "Sprache",
        theme: "Design",
        darkMode: "Dunkler Modus",
        
        // Footer
        footerText: "Gebaut mit Leidenschaft für sauberen Code und innovative Lösungen."
    }
};

// Current language and theme state
let currentLanguage = 'en';
let currentTheme = 'light';

// Function to get translation
function getTranslation(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Function to toggle settings panel
function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    const toggle = document.querySelector('.settings-toggle');
    
    panel.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Close panel when clicking outside
    if (panel.classList.contains('active')) {
        setTimeout(() => {
            document.addEventListener('click', closeSettingsOnOutsideClick);
        }, 100);
    } else {
        document.removeEventListener('click', closeSettingsOnOutsideClick);
    }
}

// Function to close settings panel when clicking outside
function closeSettingsOnOutsideClick(event) {
    const panel = document.getElementById('settingsPanel');
    const toggle = document.querySelector('.settings-toggle');
    const settingsContainer = document.querySelector('.floating-settings');
    
    if (!settingsContainer.contains(event.target)) {
        panel.classList.remove('active');
        toggle.classList.remove('active');
        document.removeEventListener('click', closeSettingsOnOutsideClick);
    }
}

// Function to toggle theme
function toggleTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.checked = !themeSwitch.checked;
    switchTheme();
}

// Function to switch theme
function switchTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    if (themeSwitch.checked) {
        currentTheme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'theme-icon fa-solid fa-sun';
        themeText.textContent = getTranslation('darkMode');
    } else {
        currentTheme = 'light';
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'theme-icon fa-solid fa-moon';
        themeText.textContent = getTranslation('darkMode');
    }
    
    localStorage.setItem('preferredTheme', currentTheme);
}

// Function to initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('preferredTheme');
    const themeSwitch = document.getElementById('themeSwitch');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    // Set initial theme
    currentTheme = savedTheme || 'light';
    
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'theme-icon fa-solid fa-sun';
    } else {
        themeSwitch.checked = false;
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'theme-icon fa-solid fa-moon';
    }
    
    themeText.textContent = getTranslation('darkMode');
    
    // Add event listener to theme switch
    themeSwitch.addEventListener('change', switchTheme);
}

// Function to switch language
function switchLanguage(lang) {
    if (translations[lang]) {
        // Add transition class
        document.body.classList.add('language-switching');
        
        currentLanguage = lang;
        updatePageContent();
        localStorage.setItem('preferredLanguage', lang);
        
        // Update language switcher button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('language-switching');
        }, 200);
    }
}

// Function to update all page content
function updatePageContent() {
    // Update navigation
    updateElementText('[data-translate="github"] span', 'github');
    updateElementText('[data-translate="linkedin"] span', 'linkedin');
    updateElementText('[data-translate="xing"] span', 'xing');
    updateElementText('[data-translate="email"] span', 'email');
    
    // Update hero section
    updateElementText('[data-translate="heroGreeting"]', 'heroGreeting');
    updateElementText('[data-translate="heroDescription"]', 'heroDescription');
    updateElementText('[data-translate="downloadResume"] span', 'downloadResume');
    updateElementText('[data-translate="career"] span', 'career');
    updateElementText('[data-translate="skills"] span', 'skills');
    updateElementText('[data-translate="contact"] span', 'contact');
    
    // Update resume download link
    const resumeLink = document.querySelector('[data-translate="downloadResume"]');
    if (resumeLink) {
        const resumeFile = currentLanguage === 'de' ? 'resumes/Grasmit_Lebenslauf.pdf' : 'resumes/Grasmit_Resume.pdf';
        const downloadName = currentLanguage === 'de' ? 'Grasmit_Katharotiya_Lebenslauf.pdf' : 'Grasmit_Katharotiya_Resume.pdf';
        resumeLink.href = resumeFile;
        resumeLink.download = downloadName;
        
        // Add click handler to check if file exists
        resumeLink.onclick = function(e) {
            // Check if file exists by trying to fetch it
            fetch(resumeFile, { method: 'HEAD' })
                .then(response => {
                    if (!response.ok) {
                        e.preventDefault();
                        alert(`Resume file not found. Please ensure ${resumeFile} exists.`);
                    }
                })
                .catch(() => {
                    e.preventDefault();
                    alert(`Resume file not found. Please ensure ${resumeFile} exists.`);
                });
        };
    }
    
    // Update career section
    updateElementText('[data-translate="careerJourney"]', 'careerJourney');
    
    // Update skills section
    updateElementText('[data-translate="skillsTitle"]', 'skillsTitle');
    
    // Update job titles and descriptions
    updateElementText('[data-translate="studentSoftwareEngineer"]', 'studentSoftwareEngineer');
    updateElementText('[data-translate="dataServiceIntern"]', 'dataServiceIntern');
    updateElementText('[data-translate="fullStackDataEngineer"]', 'fullStackDataEngineer');
    updateElementText('[data-translate="movedToGermany"]', 'movedToGermany');
    
    updateElementText('[data-translate="newboxesDesc"]', 'newboxesDesc');
    updateElementText('[data-translate="boschDesc"]', 'boschDesc');
    updateElementText('[data-translate="groupmDesc"]', 'groupmDesc');
    updateElementText('[data-translate="mastersDesc"]', 'mastersDesc');
    updateElementText('[data-translate="glizernDesc"]', 'glizernDesc');
    
    // Update contact section
    updateElementText('[data-translate="getInTouch"]', 'getInTouch');
    updateElementText('[data-translate="contactMe"]', 'contactMe');
    
    // Update settings panel
    updateElementText('[data-translate="language"]', 'language');
    updateElementText('[data-translate="theme"]', 'theme');
    updateElementText('[data-translate="darkMode"]', 'darkMode');
    
    // Update footer
    updateElementText('[data-translate="footerText"]', 'footerText');
}

// Helper function to update element text
function updateElementText(selector, translationKey) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = getTranslation(translationKey);
    }
}

// Initialize language and theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initializeTheme();
    
    // Check for saved language preference or detect browser language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.slice(0, 2);
    
    // Set initial language
    const initialLanguage = savedLanguage || (browserLanguage === 'de' ? 'de' : 'en');
    
    currentLanguage = initialLanguage;
    updatePageContent();
    
    // Set active state for language button
    const activeBtn = document.querySelector(`[data-lang="${initialLanguage}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
});
