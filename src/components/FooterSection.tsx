import { useEffect } from "react"
import { gsap } from "gsap"
import SplitType from "split-type"
function FooterSection() {
    useEffect(() => {
        const mainText = new SplitType(".footer-text", {
            types: "words",
        })
        // mainText.words?.forEach((word) => {
            gsap.fromTo(mainText.words, {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".footer-text",
                    start: "top 80%",
                    scrub: false,
                },
                stagger: 0.1,
                delay: 0.2,
                duration: 1,
                ease: "power4.out",
            })
        // })
    })
    return (
        <section className="h-screen grid  items-center bg-[#285ede] pb-4 mt-10">
            <h2 className="text-7xl text-white footer-text w-[600px] ml-[200px]">
                Build your ideal story today.

            </h2>
        </section>
    )
}

export default FooterSection