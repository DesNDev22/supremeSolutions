let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    const transformValue = -index * 100 + '%';
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translateX(${transformValue})`;
    });
}

function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
    showTestimonial(testimonialIndex);
}

// Auto scroll every 5 seconds
setInterval(nextTestimonial, 5000);
