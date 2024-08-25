// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Array of texts to display in the typewriter effect
    const texts = [
        "where we explore the evolution and pharmacology of G Protein-Coupled Receptors (GPCRs).",
        "where we investigate the lineage-specific expansion of genes.",
        "where we conduct phylogenetic studies.",
        "where we study protein domain and structure.",
        "where we learn new R scripts and explore innovative ways of visualization."
    ];

    let index = 0; // Index to track the current text
    const animatedTextElement = document.getElementById('animated-text'); // Target element for animation

    // Function to handle typing effect
    function typeWriter(text, callback) {
        let i = 0; // Start position for typing
        const speed = 50; // Speed of typing

        // Function to type the text character by character
        function typing() {
            if (i < text.length) {
                animatedTextElement.textContent += text.charAt(i); // Append character
                i++;
                setTimeout(typing, speed); // Call typing function recursively
            } else if (callback) {
                setTimeout(callback, 1000); // Wait 1 second before starting deletion
            }
        }

        typing(); // Start typing
    }

    // Function to handle deleting effect
    function deleteText(callback) {
        let i = animatedTextElement.textContent.length; // Start position for deleting
        const speed = 30; // Speed of deleting

        // Function to delete the text character by character
        function deleting() {
            if (i > 0) {
                animatedTextElement.textContent = animatedTextElement.textContent.substring(0, i - 1); // Remove character
                i--;
                setTimeout(deleting, speed); // Call deleting function recursively
            } else if (callback) {
                setTimeout(callback, 500); // Wait 0.5 seconds before typing next text
            }
        }

        deleting(); // Start deleting
    }

    // Function to cycle through texts with typing and deleting effects
    function cycleTexts() {
        typeWriter(texts[index], () => {
            deleteText(() => {
                index = (index + 1) % texts.length; // Move to the next text in the array
                cycleTexts(); // Repeat the process
            });
        });
    }

    // Add typewriter class for animation styling
    animatedTextElement.classList.add('typewriter');
    
    // Start the text cycling effect
    cycleTexts();

    // Smooth scrolling for research video when clicking text links
    const videoSection = document.querySelector('.research-video');

    if (videoSection) {
        const videoLink = document.querySelector('.scroll-to-video'); // Link that triggers the scroll
        
        if (videoLink) {
            videoLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default anchor behavior
                videoSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }
});
