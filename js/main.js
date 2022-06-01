'use strict';

{
    const targets = document.querySelectorAll('.showUp');
  
    function setBgColor() {
        let hue = Math.floor(Math.random() * 360 + 1);
        let satur = 30;
        let lightness1 = 95;
        let lightness2 = 90;
        let lightness3 = 85;
        let hsla1 = `hsla(${hue}, ${satur}%, ${lightness1}%, 1)`;
        let hsla2 = `hsla(${hue}, ${satur}%, ${lightness2}%, 1)`;
        let hsla3 = `hsla(${hue}, ${satur}%, ${lightness3}%, 1)`;
        
        document.querySelector('#section1').style.background = hsla1;
        document.querySelector('#section2').style.background = hsla2;
        document.querySelector('#section3').style.background = hsla3;
    }

    function callback(entries, obs) {

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            let element = entry.target;
            element.classList.remove('showUp');
            // obs.unobserve(element);
            setBgColor();
        });
    }

    const options = {
        rootMargin: '0px 0px -100px',
        // rootMargin: '0px',
        threshold: 0
    }

    const obs = new IntersectionObserver(callback, options);

    targets.forEach(target => {
        obs.observe(target);
    });

}