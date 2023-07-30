import { useLayoutEffect, useRef } from "react"
import PhoneBlock from "../assets/hero-phone.png"
import { pageData } from "../composables/pageData"
import { gsap } from "gsap"
function HeroPhone() {
    const phoneBlock = useRef<HTMLDivElement>(null)
    // const ctx = gsap.context((self) => {
    //     const boxes = self.selector('.box');
    //     boxes.forEach((box) => {
    //       gsap.to(box, {
    //         x: 150,
    //         scrollTrigger: {
    //           trigger: box,
    //           start: 'bottom bottom',
    //           end: 'top 20%',
    //           scrub: true,
    //         },
    //       });
    //     });
    //   }, main); // <- Scope!
    //   return () => ctx.revert();
    // useLayoutEffect(() => {
        
        // const tl = gsap.from(phoneBlock.current, {
        //     y: -100,
        //     delay: 1,
        //     scrollTrigger: {
        //         trigger: phoneBlock.current,
        //         start: "top top",
        //         end: "+=1000",
        //         scrub: 1,
        //         pin: true,
        //         markers: true,
        //     }
        // })
        // const tl = gsap.fromTo(phoneBlock.current, {
        //     y: 300,
        //     opacity: 0
        // }, {
        //     y: 0,
        //     opacity: 1,
        //     duration: 2,
        //     ease: "power3.out"
        // })
        // const mainTimeline = gsap.timeline()
        // // mainTimeline.add(tl)
        // setTimeout(() => {
        //     mainTimeline.to(phoneBlock.current, {
        //         y: 0,
        //         scrollTrigger: {
        //             trigger: phoneBlock.current,
        //             start: "top top",
        //             end: "+=1000",
        //             scrub: true,
        //             pin: true,
        //             // markers: true,
        //         },
        //         // scale: 1.2,
        //         // duration: 1,
        //         // ease: "power3.out"
        //     })
        // }, 1000)

        // mainTimeline.add(intro())
        // setTimeout(() => {
        //     mainTimeline.add(stopTrigger())
        // }
        // , 1000)
    //     let tl  = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: phoneBlock.current,
    //             start: "top top",
    //             end: "+=1000",
    //             scrub: true,
    //             pin: true,
    //             markers: true,
    //             onToggle: self => {
    //                 console.log(self.isActive, {self})
    //             },
    //             // onUpdate: self => {
    //             //     console.log(self.progress, {self})
    //             //     if (self.progress > 0.7) {
                        
    //             //     }

    //             // }
    //         },
    //         scale: 1.2,
    //     })
    // }, [phoneBlock])
    window.addEventListener("load", () => {
        const tl  = gsap.timeline({
            scrollTrigger: {
                trigger: phoneBlock.current,
                start: "-1% top",
                end: "+=1000",
                scrub: true,
                pin: true,
                markers: false,
                toggleActions: "play none none reverse",
            }
        })
        tl.to(phoneBlock.current, {
            scale: 1.2,
            duration: 1,
            ease: "power3.out"
        }, "+=0.2")
        tl.to("body",{
            backgroundColor: "black",
            duration: 1,
            // ease: "power4.out"
        }, "-=0.5")
    })
    return (
        <div className="hero-phone-block absolute w-[365px] h-[650px] left-[50%] translate-x-[-40%] scale-[1.4] top-0" ref={phoneBlock}>
            <div className="hero-phone-con relative bg-no-repeat bg-center w-full h-full overflow-hidden" style={{ backgroundImage: `url(${PhoneBlock})`, backgroundSize: '100%' }}>
                <video
                    className="collage-element video-element absolute top-[5%] left-[9%] w-[64%] flex justify-center h-auto object-cover overflow-hidden"
                    playsInline
                    loop
                    autoPlay
                    muted
                >
                    <source src={pageData.hero.collage.middle.url} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default HeroPhone