gsap.registerPlugin(ScrollTrigger);

function navAnimation() {
    let nav = document.querySelector('nav')
    let sprt = document.querySelector('.sprt')
    nav.addEventListener('mouseenter', () => {
        let tl = gsap.timeline()
        tl.to((sprt), {
            height: 'auto',
            duration: .3
        })

        tl.from((".nav-elem ul"), {
            x: "-150%",
            stagger: 0.1,
            duration: .6,
            ease: "power3.inOut"
        })
    })


    nav.addEventListener('mouseleave', () => {
        let tl = gsap.timeline()
        tl.to((sprt), {
            height: '0vh',
            duration: .2
        })
    })
}
navAnimation()
let hoverArticles = document.querySelectorAll(".hover-img");
let circlePlay = document.querySelector('.circlePlay')
let watchLive = document.querySelector('.watchLive');
let video = document.querySelector('#img video');



function hoverImages() {
    hoverArticles.forEach(function(el) {
        let img = el.querySelector("h4 + img"); // h4 ke baad wali image

        el.addEventListener("mouseenter", () => {
            gsap.to(img, {
                opacity: 1,
                scale: 1,
                duration: .2
            })
        });

        el.addEventListener("mouseleave", () => {
            gsap.to(img, {
                scale: 0,
                opacity: 0,
                duration: .2
            })
        });

        el.addEventListener('mousemove', function(dets) {
            let rect = el.getBoundingClientRect(); // ✅ element ka rect liya
            gsap.to(img, {
                x: dets.x - rect.x - 300, // mouse position relative to element
                y: dets.y - rect.y - 60 // relative y bhi nikalna hoga
            })
        });
    });
}

hoverImages()


function page3() {
    circlePlay.addEventListener('mouseenter', () => {
        console.log('enter');

        gsap.to(watchLive, {
            y: 0,
            duration: .3,
            opacity: 1

        })

    })
    circlePlay.addEventListener('mouseleave', () => {
        console.log();

        gsap.to(watchLive, {
            y: 120,
            duration: .3,
            opacity: 0
        })
    });
};

page3()

function horizontalScrollText(sectionId) {
    let text = document.querySelector(`${sectionId} h5`);
    if (!text) return;
    gsap.to(text, {
        x: "-100%",
        ease: "none",
        scrollTrigger: {
            trigger: sectionId,
            start: "top top",
            end: () => "+=" + (text.scrollWidth - window.innerWidth),
            scrub: true,
            pin: true
        }
    });
}

horizontalScrollText("#page4");
// Animate footer sections on load;////////////////////////////////////////////////////////////////////////////;
function footer() {
    gsap.from(".footer-container > div", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    });

    // Animate footer links on hover
    document.querySelectorAll(".footer-links a, .footer-contact a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { x: 5, duration: 0.3, ease: "power2.out" });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { x: 0, duration: 0.3, ease: "power2.inOut" });
        });
    });

    // Animate social icons on hover
    document.querySelectorAll(".social-icons .icon").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "back.out(1.7)" });
        });
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.inOut" });
        });
    });
}
footer()


////////////////////////////////// Meraj Mall Faisalabad ka WhatsApp number
document.getElementById("contact_number").addEventListener("click", function() {
    var phone = "03037791998"; // #CHANGE_PHONE_IF_NEEDED
    var message = "Hello! I want to contact you."; // optional pre-filled message

    // Detect if mobile device
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    var url;
    if (isMobile) {
        // Mobile app link
        url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    } else {
        // Desktop / Web link
        url = "https://web.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(message);
    }

    // Open WhatsApp in new tab/window
    window.open(url, "_blank");
});

////////////////////////////////// Blink

document.querySelectorAll('.highlight').forEach(function(el) {
    el.addEventListener('click', function() {
        const target = document.querySelector('.footer-contact');
        if (target) {
            // Remove if already there (to retrigger)
            target.classList.remove('blink');

            // Trigger reflow to restart animation
            void target.offsetWidth;

            // Add class
            target.classList.add('blink');

            // Remove class after 0.3s
            setTimeout(() => {
                target.classList.remove('blink');
            }, 300); // 300ms = 0.3s
        }
    });
});