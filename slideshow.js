// Simple Slideshow Implementation
console.log('Slideshow script loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing slideshow...');
    
    // Get all slideshow elements
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    
    console.log('Elements found:', {
        slides: slides.length,
        dots: dots.length,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn
    });
    
    // Function to show a specific slide
    function showSlide(n) {
        console.log('Showing slide:', n);
        
        // Hide all slides
        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.display = 'flex';
                slide.classList.add('active');
            } else {
                slide.style.display = 'none';
                slide.classList.remove('active');
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            if (index === n) {
                dot.classList.add('active');
                dot.style.background = 'rgba(255,255,255,0.9)';
            } else {
                dot.classList.remove('active');
                dot.style.background = 'rgba(255,255,255,0.5)';
            }
        });
    }
    
    // Function to go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Function to go to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Function to go to specific slide
    function goToSlide(n) {
        currentSlide = n;
        showSlide(currentSlide);
    }
    
    // Initialize slideshow
    if (slides.length > 0) {
        console.log('Initializing slideshow...');
        
        // Show first slide
        showSlide(0);
        
        // Add event listeners to buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                console.log('Prev button clicked');
                prevSlide();
            });
            console.log('Added prev button listener');
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                console.log('Next button clicked');
                nextSlide();
            });
            console.log('Added next button listener');
        }
        
        // Add event listeners to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                console.log('Dot clicked:', index);
                goToSlide(index);
            });
        });
        
        // Auto advance every 4 seconds
        setInterval(function() {
            console.log('Auto advancing slide');
            nextSlide();
        }, 4000);
        
        console.log('Slideshow initialized successfully!');
        
        // Test the slideshow
        setTimeout(function() {
            console.log('Testing slideshow...');
            nextSlide();
        }, 2000);
        
    } else {
        console.log('No slides found!');
    }
});

// Also try to initialize on window load as backup
window.addEventListener('load', function() {
    console.log('Window loaded, checking slideshow...');
    const slides = document.querySelectorAll('.slide');
    console.log('Slides found on window load:', slides.length);
}); 