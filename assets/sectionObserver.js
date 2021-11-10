const nav = document.querySelector(".navbar");
const sectionone = document.querySelector(".section1");
const brandlogo = document.querySelector(".logo");
const sectiononeOptions = {
    rootMargin: "0px 0px 0px 0px"
};




const sectiononeObserver = new IntersectionObserver(function (entries, sectiononeOptions) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.style.opacity=1;
            nav.style.index = 2;
        } else {
            nav.style.opacity=0;
            nav.style.index=-1;
            
        }
    });
},
    sectiononeOptions);
sectiononeObserver.observe(sectionone);