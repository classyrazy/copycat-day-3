import { useEffect } from "react"
import HeroCollage from "./HeroCollage"
import HeroPhone from "./HeroPhone"
import { gsap } from "gsap"

function Hero() {
    useEffect(() => {
        gsap.to(".hero-text-section", {
            height: "100%",
            duration: 1,
            ease: "power4.out"
        })
        const tl = gsap.timeline({
            delay: 0.1
        })
        tl.fromTo(".hero-text", {
            opacity: 0,
            y: 300
        }, {
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power3.out"
        })

        })
        return (
            <div className="w-full hero-container">
                <div className="hero-text-section mt-[200px] mb-[350px] grid justify-center items-center h-0 overflow-hidden">
                    <h1 className="hero-text text-5xl font-poppins mx-auto text-center font-medium "><span>Stories meet their</span> <br /> <span>Widest Audience ever</span></h1>
                </div>
                <div className="collage-con relative h-[764px]">
                    <HeroCollage />
                    <HeroPhone />
                </div>

            </div>
        )
    }

export default Hero