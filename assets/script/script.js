const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('sho');
        } 
        else {
            entry.target.classList.remove('sho');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hid'); 
hiddenElements.forEach((el) => observer.observe(el));