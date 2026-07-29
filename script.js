// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme === 'light') {
        newTheme = 'dark';
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    document.documentElement.setAttribute('data-theme', newTheme);
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// AI Profile Summary Generator Simulation
function generateAISummary() {
    const summaryText = document.getElementById('ai-summary-text');
    
    summaryText.innerText = "Analyzing candidate details...";
    
    setTimeout(() => {
        summaryText.innerHTML = `
            <strong>🤖 AI Candidate Evaluation:</strong><br>
            Prince Kumar is a high-potential 3rd-year B.Tech candidate from M.J.P.R.U Bareilly. 
            He demonstrates strong core technical fundamentals combining multi-language DSA mastery (C++, Java, Python) 
            with modern Android UI expertise in Kotlin & Jetpack Compose.
        `;
    }, 1000);
}